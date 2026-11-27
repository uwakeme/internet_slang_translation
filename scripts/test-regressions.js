const assert = require('assert')
const path = require('path')

const root = path.join(__dirname, '..')
const words = require('../data/words.js')
const translator = require('../utils/translator.js')

let passed = 0
let failed = 0
function test(name, fn) {
  try {
    fn()
    passed++
    console.log(`  ✓ ${name}`)
  } catch (error) {
    failed++
    console.error(`  ✗ ${name}`)
    console.error(`    ${error.message}`)
  }
}

function installStubs(storage, options = {}) {
  const state = { navUrls: [], tabUrls: [], toasts: [], app: { globalData: {} } }
  global.__testState = state
  global.getApp = () => state.app
  global.Page = config => { global.__pageConfig = config }
  global.wx = {
    getStorageSync: key => {
      if (options.readError) throw new Error('read failed')
      return storage[key] === undefined ? '' : storage[key]
    },
    setStorageSync: (key, value) => {
      if (options.writeError) throw new Error('write failed')
      storage[key] = value
    },
    removeStorageSync: key => {
      if (options.removeError) throw new Error('remove failed')
      delete storage[key]
    },
    showToast: toast => state.toasts.push(toast),
    showModal: modal => {
      if (modal.success) modal.success({ confirm: true, cancel: false })
    },
    vibrateShort: () => {},
    setClipboardData: () => {},
    setNavigationBarTitle: () => {},
    navigateTo: ({ url }) => {
      if (url.startsWith('/pages/translate/translate')) {
        throw new Error('cannot navigateTo a tabBar page')
      }
      state.navUrls.push(url)
    },
    switchTab: ({ url }) => state.tabUrls.push(url),
    navigateBack: () => {}
  }
  return state
}

function loadPage(relPath) {
  delete require.cache[require.resolve(relPath)]
  require(relPath)
  const config = global.__pageConfig
  const page = {
    data: JSON.parse(JSON.stringify(config.data || {})),
    setData(update) { Object.assign(this.data, update) }
  }
  Object.keys(config).forEach(key => {
    if (key !== 'data') page[key] = config[key]
  })
  return page
}

function withFakeTimers(fn) {
  const originalSetTimeout = global.setTimeout
  const originalClearTimeout = global.clearTimeout
  const timers = new Map()
  let nextId = 1
  global.setTimeout = (callback, delay) => {
    const id = nextId++
    timers.set(id, { callback, delay })
    return id
  }
  global.clearTimeout = id => timers.delete(id)
  try {
    fn(timers)
  } finally {
    global.setTimeout = originalSetTimeout
    global.clearTimeout = originalClearTimeout
  }
}

console.log('\n[回归测试]')

test('英文词条不会命中其他单词内部', () => {
  for (const input of ['dragon', 'storage', 'xrag', 'ragx']) {
    const result = translator.translateToHuman(input)
    assert.strictEqual(result.text, input)
    assert.strictEqual(result.matched, 0)
  }
})

test('中文单字黑话不会破坏普通词语', () => {
  for (const input of ['脆弱', '干脆']) {
    const result = translator.translateToHuman(input)
    assert.strictEqual(result.text, input)
    assert.strictEqual(result.matched, 0)
  }
  assert.strictEqual(translator.translateToHuman('脆').matched, 1)
})

test('auto 方向不会被无效子串命中误导', () => {
  const result = translator.translateText('dragon')
  assert.strictEqual(result.text, 'dragon')
  assert.strictEqual(result.matched, 0)
  assert.notStrictEqual(result.direction, 'toHuman')
})

test('搜索页使用 switchTab 打开翻译页并传递待翻译词', () => {
  const state = installStubs({})
  const page = loadPage('../pages/search/search.js')
  page.goToTranslate({ currentTarget: { dataset: { word: '赋能' } } })
  assert.deepStrictEqual(state.tabUrls, ['/pages/translate/translate'])
  assert.strictEqual(state.app.globalData.pendingTranslate.text, '赋能')
})

test('带词进入翻译页不会覆盖旧历史', () => {
  const oldHistory = [{ original: '旧记录', translated: '旧译文', time: '08:00', mode: 'toHuman' }]
  const storage = { translate_history: oldHistory }
  installStubs(storage)
  const page = loadPage('../pages/translate/translate.js')
  page.onLoad({ word: '赋能' })
  const saved = storage.translate_history
  assert.strictEqual(saved.length, 2)
  assert.strictEqual(saved[1].original, '旧记录')
})

test('翻译页安全处理非法 URI 参数', () => {
  installStubs({})
  const page = loadPage('../pages/translate/translate.js')
  assert.doesNotThrow(() => page.onLoad({ word: '%' }))
})

test('标签搜索会取消旧防抖搜索且不会留下加载态', () => {
  withFakeTimers(timers => {
    installStubs({})
    const page = loadPage('../pages/search/search.js')
    page.scheduleSearch('旧关键词')
    page.searchByTag({ currentTarget: { dataset: { tag: 'AI' } } })
    assert.strictEqual(page.data.searching, false)
    for (const timer of timers.values()) timer.callback()
    assert.ok(page.data.searchResults.length > 0)
    assert.ok(page.data.searchResults.every(item => item.tags.includes('AI')))
  })
})

test('清空搜索会取消旧防抖搜索', () => {
  withFakeTimers(timers => {
    installStubs({})
    const page = loadPage('../pages/search/search.js')
    page.scheduleSearch('旧关键词')
    page.clearSearch()
    assert.strictEqual(timers.size, 0)
    assert.strictEqual(page.data.searching, false)
  })
})

test('脏收藏数据不会导致详情页崩溃', () => {
  installStubs({ favorite_words: {} })
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  const target = words.find(item => item.word === '赋能')
  page.onLoad({ id: String(target.id) })
  assert.doesNotThrow(() => page.toggleFavorite())
})

test('清空历史删除失败时不提示成功', () => {
  const storage = { translate_history: [{ original: 'x', translated: 'y', time: '08:00', mode: 'toHuman' }] }
  const state = installStubs(storage, { removeError: true })
  const page = loadPage('../pages/translate/translate.js')
  page.setData({ history: storage.translate_history })
  assert.doesNotThrow(() => page.clearHistory())
  assert.ok(!state.toasts.some(toast => toast.title === '已清空'))
})

test('无效词条显示错误状态而不是永久加载', () => {
  installStubs({})
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: '999999' })
  assert.strictEqual(page.data.loading, false)
  assert.ok(page.data.error)
})

test('词库列表首次只渲染 20 条并保留加载更多状态', () => {
  installStubs({})
  const page = loadPage('../pages/wordList/wordList.js')
  page.onLoad({ categoryId: '15' })
  assert.strictEqual(page.data.words.length, 20)
  assert.strictEqual(page.data.hasMore, true)
})

test('词条标签内部不重复', () => {
  const duplicates = words.filter(item => new Set(item.tags).size !== item.tags.length)
  assert.deepStrictEqual(duplicates, [])
})

console.log(`\n结果: ${passed} 通过, ${failed} 失败`)
process.exitCode = failed > 0 ? 1 : 0
