// 冒烟测试：node scripts/check.js
// 覆盖数据完整性、数据层 API、翻译引擎行为（含回归用例）、页面核心逻辑模拟
/* eslint-disable no-console */
const assert = require('assert')

let passed = 0
let failed = 0

function test(name, fn) {
  try {
    fn()
    passed++
    console.log(`  ✓ ${name}`)
  } catch (err) {
    failed++
    console.error(`  ✗ ${name}`)
    console.error(`      ${err.message}`)
  }
}

function section(title) {
  console.log(`\n[${title}]`)
}

// ---------- 数据完整性 ----------
const categories = require('../data/categories.js')
const words = require('../data/words.js')
const dataModule = require('../utils/data.js')

section('数据完整性')

test('词条 id 无重复', () => {
  const ids = new Set()
  words.forEach(w => {
    assert.ok(!ids.has(w.id), `重复 id: ${w.id} (${w.word})`)
    ids.add(w.id)
  })
})

test('词条名无重复（忽略大小写与个别繁简差异）', () => {
  const keys = new Set()
  words.forEach(w => {
    const key = w.word.trim().toLowerCase().replace(/涼/g, '凉')
    assert.ok(!keys.has(key), `重复词条: ${w.word}`)
    keys.add(key)
  })
})

test('每条词条的 categoryId 均有效', () => {
  const catIds = new Set(categories.map(c => c.id))
  words.forEach(w => {
    assert.ok(catIds.has(w.categoryId), `无效分类 ${w.categoryId}: ${w.word}`)
  })
})

test('必填字段非空且类型正确', () => {
  words.forEach(w => {
    assert.ok(typeof w.word === 'string' && w.word.trim(), `word 为空: id ${w.id}`)
    assert.ok(typeof w.meaning === 'string' && w.meaning.trim(), `meaning 为空: ${w.word}`)
    assert.ok(typeof w.example === 'string', `example 缺失: ${w.word}`)
    assert.ok(Array.isArray(w.tags), `tags 非数组: ${w.word}`)
  })
})

test('词条文本无半角逗号残留', () => {
  words.forEach(w => {
    assert.ok(!w.meaning.includes(',') && !w.example.includes(','),
      `半角逗号: ${w.word}`)
  })
})

test('分类 id 与 type 字段有效', () => {
  categories.forEach(c => {
    assert.ok(typeof c.id === 'number', `分类 id 非数字: ${c.name}`)
    assert.ok(['jargon', 'professional'].includes(c.type), `type 无效: ${c.name}`)
  })
})

// ---------- 数据层 API ----------
section('数据层 API')

test('getCategories 返回带 count 的分类列表', () => {
  const cats = dataModule.getCategories()
  assert.strictEqual(cats.length, categories.length)
  cats.forEach(c => assert.strictEqual(typeof c.count, 'number', `count 缺失: ${c.name}`))
})

test('getWordsByCategory 返回该分类全部词条', () => {
  const slang = dataModule.getWordsByCategory(15)
  assert.ok(slang.length > 100, `网络热词分类词条过少: ${slang.length}`)
  const total = categories.reduce((sum, c) =>
    sum + dataModule.getWordsByCategory(c.id).length, 0)
  assert.strictEqual(total, words.length, '各分类词条数之和 ≠ 总数')
})

test('getWordById 命中与未命中', () => {
  assert.strictEqual(dataModule.getWordById(words[0].id).word, words[0].word)
  assert.strictEqual(dataModule.getWordById(999999), null)
  // 字符串 id 也可命中（页面参数以字符串传入）
  assert.strictEqual(dataModule.getWordById(String(words[0].id)).word, words[0].word)
})

test('searchWords 多维度命中', () => {
  assert.ok(dataModule.searchWords('赋能').length >= 1)
  assert.ok(dataModule.searchWords('').length === 0)
})

test('getPopularTags / getRelatedWords 正常返回', () => {
  assert.ok(dataModule.getPopularTags().length > 0)
  assert.ok(dataModule.getRelatedWords(words[0].id).length >= 0)
})

// ---------- 翻译引擎 ----------
const translator = require('../utils/translator.js')

section('翻译引擎')

test('黑话→人话：正常替换且无连锁替换', () => {
  const r = translator.translateToHuman('我们要对齐一下颗粒度，形成闭环')
  assert.ok(r.matched >= 3, `应命中至少 3 处，实际 ${r.matched}`)
  assert.ok(r.text.includes('统一认识'), `对齐未替换: ${r.text}`)
})

test('黑话→人话：释义取第一义，不往句中插入顿号', () => {
  const r = translator.translateToHuman('这个项目需要抓手，同时要赋能团队')
  assert.ok(!r.text.includes('、'), `顿号破坏句子: ${r.text}`)
})

test('人话→黑话（回归）：不再产生词语沙拉', () => {
  const r = translator.translateToJargon('我们要提高沟通效率，改进管理方法')
  assert.strictEqual(r.matched, 0, `不应替换，实际命中 ${r.matched}`)
  assert.strictEqual(r.text, '我们要提高沟通效率，改进管理方法', '原文应保持不变')
})

test('人话→黑话：整段短语可替换', () => {
  const r = translator.translateToJargon('这个方案的完整流程是什么')
  assert.strictEqual(r.matched, 1)
  assert.notStrictEqual(r.text, '这个方案的完整流程是什么')
})

test('人话→黑话：无匹配时保留原文', () => {
  const r = translator.translateToJargon('今天天气不错，我去吃饭了')
  assert.strictEqual(r.matched, 0)
  assert.strictEqual(r.text, '今天天气不错，我去吃饭了')
})

test('auto 方向：含黑话转人话，含人话短语转黑话', () => {
  const r1 = translator.translateText('我们要赋能业务')
  assert.strictEqual(r1.direction, 'toHuman')
  const r2 = translator.translateText('我们要帮助业务')
  assert.strictEqual(r2.direction, 'toJargon')
})

test('翻译具备幂等性（结果再次翻译不再变化）', () => {
  const once = translator.translateToHuman('我们要对齐一下颗粒度，形成闭环')
  const twice = translator.translateToHuman(once.text)
  assert.strictEqual(twice.text, once.text, `存在连锁替换: ${once.text} → ${twice.text}`)
})

test('正则特殊字符词条可安全匹配', () => {
  // 词条含 ×、.、+ 等符号时不应抛正则异常
  const r = translator.translateToHuman('这个产品好city不city啊')
  assert.strictEqual(typeof r.text, 'string')
})

test('detectTextType 方向检测', () => {
  assert.strictEqual(translator.detectTextType('我们要赋能业务形成闭环'), 'jargon')
  assert.strictEqual(translator.detectTextType('这个方案的完整流程是什么'), 'human')
  assert.strictEqual(translator.detectTextType('今天天气不错'), 'unknown')
})

test('空输入安全', () => {
  const r = translator.translateText('')
  assert.strictEqual(r.text, '')
  assert.strictEqual(r.matched, 0)
})

// ---------- 页面逻辑模拟 ----------
// 用最小 stub 模拟小程序运行环境，验证页面核心流程
function installStubs(storage) {
  global.Page = function(config) { global.__pageConfig = config }
  global.wx = {
    getStorageSync: key => (storage[key] === undefined ? '' : storage[key]),
    setStorageSync: (key, val) => { storage[key] = val },
    removeStorageSync: key => { delete storage[key] },
    showToast: () => {},
    showModal: () => {},
    vibrateShort: () => {},
    setNavigationBarTitle: () => {},
    navigateTo: () => {}
  }
}

section('页面逻辑模拟：translate')

test('同步翻译并写入历史（无人工延迟）', () => {
  installStubs({})
  require('../pages/translate/translate.js')
  const page = { data: global.__pageConfig.data, setData(d) { Object.assign(this.data, d) } }
  // 把页面方法挂到对象上
  Object.keys(global.__pageConfig).forEach(key => {
    if (key !== 'data') page[key] = global.__pageConfig[key]
  })
  page.setData({ inputText: '我们要对齐一下颗粒度，形成闭环' })
  page.translate()

  assert.ok(page.data.result.includes('统一认识'), `翻译结果异常: ${page.data.result}`)
  assert.strictEqual(page.data.translating, false)
  assert.strictEqual(page.data.history.length, 1, '历史未写入')
  assert.ok(/^\d{2}:\d{2}$/.test(page.data.history[0].time), `时间格式异常: ${page.data.history[0].time}`)
})

test('无法翻译时 noMatch 置位且历史仍记录', () => {
  installStubs({})
  delete require.cache[require.resolve('../pages/translate/translate.js')]
  require('../pages/translate/translate.js')
  const cfg = global.__pageConfig
  const page = { data: Object.assign({}, cfg.data), setData(d) { Object.assign(this.data, d) } }
  Object.keys(cfg).forEach(key => { if (key !== 'data') page[key] = cfg[key] })
  page.setData({ inputText: '今天天气不错，我去吃饭了', mode: 'toJargon' })
  page.translate()

  assert.strictEqual(page.data.noMatch, true)
  assert.strictEqual(page.data.result, '今天天气不错，我去吃饭了')
})

section('页面逻辑模拟：wordDetail')

test('按 id 加载词条详情', () => {
  installStubs({})
  const target = words.find(w => w.word === '赋能')
  require('../pages/wordDetail/wordDetail.js')
  const cfg = global.__pageConfig
  const page = { data: Object.assign({}, cfg.data), setData(d) { Object.assign(this.data, d) } }
  Object.keys(cfg).forEach(key => { if (key !== 'data') page[key] = cfg[key] })
  page.onLoad({ id: String(target.id) })

  assert.strictEqual(page.data.wordInfo.word, '赋能')
  assert.strictEqual(page.data.categoryName, '会议用语')
  assert.ok(page.data.scenarios.length > 0)
})

test('不存在的词条安全返回', () => {
  installStubs({})
  delete require.cache[require.resolve('../pages/wordDetail/wordDetail.js')]
  require('../pages/wordDetail/wordDetail.js')
  const cfg = global.__pageConfig
  const page = { data: Object.assign({}, cfg.data), setData(d) { Object.assign(this.data, d) } }
  Object.keys(cfg).forEach(key => { if (key !== 'data') page[key] = cfg[key] })
  page.onLoad({ id: '999999' })
  assert.strictEqual(page.data.wordInfo, null)
})

// ---------- 汇总 ----------
console.log(`\n结果: ${passed} 通过, ${failed} 失败`)
process.exit(failed > 0 ? 1 : 0)
