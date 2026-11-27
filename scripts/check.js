// 冒烟测试：node scripts/check.js
// 覆盖数据完整性、数据层 API、翻译引擎行为（含回归用例）、页面核心逻辑模拟。
// 数据类校验一次性列出全部问题（旧版 assert 首败即停，只能逐条暴露脏数据）。
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
    console.error(`      ${String(err.message).split('\n').join('\n      ')}`)
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
  const seen = new Map()
  const dups = []
  words.forEach(w => {
    if (seen.has(w.id)) dups.push(`id ${w.id}（${seen.get(w.id)} 与 ${w.word}）`)
    else seen.set(w.id, w.word)
  })
  assert.deepStrictEqual(dups, [], dups.join('\n'))
})

test('词条名无重复（忽略大小写）', () => {
  const seen = new Map()
  const dups = []
  words.forEach(w => {
    const key = w.word.trim().toLowerCase()
    if (seen.has(key)) dups.push(`${w.word}（id ${seen.get(key)} 与 id ${w.id}）`)
    else seen.set(key, w.id)
  })
  assert.deepStrictEqual(dups, [], dups.join('\n'))
})

test('每条词条的 categoryId 均有效', () => {
  const catIds = new Set(categories.map(c => c.id))
  const bad = words.filter(w => !catIds.has(w.categoryId)).map(w => `${w.word}: ${w.categoryId}`)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('分类 id 与 type 字段有效', () => {
  const bad = categories
    .filter(c => typeof c.id !== 'number' || !['jargon', 'professional'].includes(c.type))
    .map(c => `${c.name}: id ${c.id} type ${c.type}`)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('必填字段非空且类型正确', () => {
  const bad = []
  words.forEach(w => {
    if (!(typeof w.word === 'string' && w.word.trim())) bad.push(`word 为空: id ${w.id}`)
    if (!(typeof w.meaning === 'string' && w.meaning.trim())) bad.push(`meaning 为空: ${w.word}`)
    if (typeof w.example !== 'string') bad.push(`example 缺失: ${w.word}`)
    if (!Array.isArray(w.tags)) bad.push(`tags 非数组: ${w.word}`)
  })
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('单条词目标签不重复', () => {
  const bad = words.filter(w => new Set(w.tags).size !== w.tags.length).map(w => w.word)
  assert.deepStrictEqual(bad, [], bad.join('、'))
})

test('词条文本无半角逗号/分号残留', () => {
  const bad = words
    .filter(w => /[;,]/.test(w.meaning + w.example))
    .map(w => w.word)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('词条文本无繁体字残留', () => {
  // 与 scripts/fix-data-20261012.js 的 TRAD_MAP 保持一致
  const tradChars = '們個來對時說話會學國動員處務東點無開關門問間電書車長馬鳥齊龍豐廣應體驗視覺讓證據變邊還這種樣買賣難雲頁項順須領題顏願風飛飯專亂為後裡歷緻潔過選錢鐘驚讚'
  const bad = words.filter(w => {
    const all = w.word + w.meaning + w.example
    return [...tradChars].some(tc => all.includes(tc))
  }).map(w => w.word)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('brief 短释义合法（宽度≤15、非空、不与词条相同）', () => {
  // 英文/数字按半个字宽计，避免含拉丁字母的 brief 被误判超长
  const width = s => [...s].reduce((sum, ch) => sum + (/[A-Za-z0-9 ]/.test(ch) ? 0.5 : 1), 0)
  const bad = []
  words.forEach(w => {
    if (w.brief === undefined) return
    if (typeof w.brief !== 'string' || !w.brief.trim()) bad.push(`brief 为空: ${w.word}`)
    else if (width(w.brief) > 15) bad.push(`brief 超宽: ${w.word}（${w.brief}）`)
    else if (w.brief === w.word) bad.push(`brief 与词条相同: ${w.word}`)
  })
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('第一义超过15字的词条均已配 brief', () => {
  const first = s => String(s).split(/[、，,；;]/)[0].trim()
  const bad = words
    .filter(w => !w.brief && first(w.meaning).length > 15)
    .map(w => `${w.word}: ${first(w.meaning)}`)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('首义为元信息的词条均已配 brief', () => {
  // 释义以「2026年…热词」「2025年度十大网络流行语」等元信息开头时，首义长度未必超 15 字，
  // 上面的规则抓不到，但句中替换会把「2026年小红书十大热词之一」整句塞进译文
  const first = s => String(s).split(/[、，,；;]/)[0].trim()
  const meta = /^(20\d\d年|网络流行语|网络热词|当下流行)/
  const bad = words
    .filter(w => !w.brief && meta.test(first(w.meaning)))
    .map(w => `${w.word}: ${first(w.meaning)}`)
  assert.deepStrictEqual(bad, [], bad.join('\n'))
})

test('原 translator 硬编码词典已全部并入词库', () => {
  const extra = ['降本增效', '数字化转型', '精细化运营', '全链路', '一站式', '生态化', '平台化', '中台', '去中心化', '扁平化', '敏捷开发', '精益创业', '增长飞轮', '商业闭环', '护城河', '天花板', '风口', '赛道', '独角兽', 'KOL', 'ROI', 'GMV', 'DAU', 'MAU', 'LTV', 'MVP', 'PMF', 'B端', 'C端', 'SaaS', 'PaaS', 'IaaS']
  const wordSet = new Set(words.map(w => w.word))
  const missing = extra.filter(k => !wordSet.has(k))
  assert.deepStrictEqual(missing, [], `缺少: ${missing.join('、')}`)
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
  assert.strictEqual(dataModule.searchWords('').length, 0)
})

test('getPopularTags / getRelatedWords 正常返回', () => {
  assert.ok(dataModule.getPopularTags().length > 0)
  assert.ok(dataModule.getRelatedWords(words[0].id).length >= 0)
})

test('getTodayHotWords 按日期轮换且同日稳定', () => {
  const day1 = dataModule.getTodayHotWords(new Date(2026, 9, 12))
  const day1Again = dataModule.getTodayHotWords(new Date(2026, 9, 12))
  const day2 = dataModule.getTodayHotWords(new Date(2026, 9, 13))
  assert.strictEqual(day1.length, 8, '热词数量应为 8')
  assert.deepStrictEqual(day1.map(w => w.id), day1Again.map(w => w.id), '同一天结果应稳定')
  assert.ok(day1.every(w => w.categoryId === 15), '热词应来自网络热词分类')
  assert.notDeepStrictEqual(day1.map(w => w.id), day2.map(w => w.id), '不同日期应轮换')
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

test('黑话→人话：优先使用 brief 短释义', () => {
  const r = translator.translateToHuman('这个推理模型很强')
  assert.ok(r.text.includes('会多步推理的AI模型'), `应使用 brief: ${r.text}`)
  assert.ok(!r.text.includes('通过多步拆解'), `不应插入长释义: ${r.text}`)
})

test('英文词条大小写不敏感', () => {
  const r1 = translator.translateToHuman('用rag检索资料')
  assert.ok(r1.matched >= 1, `小写未命中: ${r1.text}`)
  const r2 = translator.translateToHuman('Vibe Coding 写代码')
  assert.ok(r2.matched >= 1, `混合大小写未命中: ${r2.text}`)
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
  global.__navUrls = []
  global.Page = function(config) { global.__pageConfig = config }
  global.wx = {
    getStorageSync: key => (storage[key] === undefined ? '' : storage[key]),
    setStorageSync: (key, val) => { storage[key] = val },
    removeStorageSync: key => { delete storage[key] },
    showToast: () => {},
    showModal: () => {},
    vibrateShort: () => {},
    setClipboardData: () => {},
    setNavigationBarTitle: () => {},
    navigateTo: opts => { global.__navUrls.push(opts.url) }
  }
}

function loadPage(relPath) {
  delete require.cache[require.resolve(relPath)]
  require(relPath)
  const cfg = global.__pageConfig
  const page = { data: JSON.parse(JSON.stringify(cfg.data)), setData(d) { Object.assign(this.data, d) } }
  Object.keys(cfg).forEach(key => { if (key !== 'data') page[key] = cfg[key] })
  return page
}

section('页面逻辑模拟：translate')

test('同步翻译并写入历史（无人工延迟）', () => {
  installStubs({})
  const page = loadPage('../pages/translate/translate.js')
  page.setData({ inputText: '我们要对齐一下颗粒度，形成闭环' })
  page.translate()

  assert.ok(page.data.result.includes('统一认识'), `翻译结果异常: ${page.data.result}`)
  assert.strictEqual(page.data.translating, false)
  assert.strictEqual(page.data.history.length, 1, '历史未写入')
  assert.ok(/^\d{2}:\d{2}$/.test(page.data.history[0].time), `时间格式异常: ${page.data.history[0].time}`)
})

test('无法翻译时 noMatch 置位且历史仍记录', () => {
  installStubs({})
  const page = loadPage('../pages/translate/translate.js')
  page.setData({ inputText: '今天天气不错，我去吃饭了', mode: 'toJargon' })
  page.translate()

  assert.strictEqual(page.data.noMatch, true)
  assert.strictEqual(page.data.result, '今天天气不错，我去吃饭了')
})

test('同一输入重复翻译不堆积历史', () => {
  installStubs({})
  const page = loadPage('../pages/translate/translate.js')
  page.setData({ inputText: '我们要对齐一下颗粒度，形成闭环' })
  page.translate()
  page.translate()
  assert.strictEqual(page.data.history.length, 1, `历史应为 1 条，实际 ${page.data.history.length}`)
})

test('translate 页提供分享钩子', () => {
  installStubs({})
  const page = loadPage('../pages/translate/translate.js')
  const share = page.onShareAppMessage()
  assert.ok(typeof share.title === 'string' && share.title.length > 0)
  assert.ok(share.path.startsWith('/pages/'))
})

section('页面逻辑模拟：wordDetail')

test('按 id 加载词条详情（含相关词条）', () => {
  installStubs({})
  const target = words.find(w => w.word === '赋能')
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: String(target.id) })

  assert.strictEqual(page.data.wordInfo.word, '赋能')
  assert.strictEqual(page.data.categoryName, '会议用语')
  assert.ok(page.data.scenarios.length > 0)
  assert.ok(Array.isArray(page.data.relatedWords), '相关词条缺失')
})

test('不存在的词条安全返回', () => {
  installStubs({})
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: '999999' })
  assert.strictEqual(page.data.wordInfo, null)
})

test('无人工场景的词条不再生成兜底场景', () => {
  installStubs({})
  const target = words.find(w => !['赋能', '闭环', '颗粒度', '沉淀', '对齐'].includes(w.word))
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: String(target.id) })
  assert.strictEqual(page.data.hasCustomScenario, false)
  assert.deepStrictEqual(page.data.scenarios, [])
})

test('收藏开关持久化到本地存储', () => {
  installStubs({})
  const target = words.find(w => w.word === '赋能')
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: String(target.id) })
  assert.strictEqual(page.data.isFavorite, false)

  page.toggleFavorite()
  assert.strictEqual(page.data.isFavorite, true)
  assert.deepStrictEqual(global.wx.getStorageSync('favorite_words'), [target.id])

  page.toggleFavorite()
  assert.strictEqual(page.data.isFavorite, false)
  assert.deepStrictEqual(global.wx.getStorageSync('favorite_words'), [])
})

test('wordDetail 分享携带词条 id', () => {
  installStubs({})
  const target = words.find(w => w.word === '赋能')
  const page = loadPage('../pages/wordDetail/wordDetail.js')
  page.onLoad({ id: String(target.id) })
  const share = page.onShareAppMessage()
  assert.ok(share.title.includes('赋能'))
  assert.ok(share.path.includes('id=' + target.id))
})

section('页面逻辑模拟：search')

test('输入过程中的防抖搜索不写历史', () => {
  installStubs({})
  const page = loadPage('../pages/search/search.js')
  page.onInput({ detail: { value: '赋' } })
  // 防抖定时器尚未触发，历史不应被中间态关键词污染
  assert.deepStrictEqual(page.data.searchHistory, [])
  if (page._searchTimer) clearTimeout(page._searchTimer)
})

test('确认搜索立即执行、写历史并高亮关键词', () => {
  installStubs({})
  const page = loadPage('../pages/search/search.js')
  page.setData({ searchKeyword: '赋能' })
  page.onSearch()

  assert.ok(page.data.searchResults.length >= 1, '搜索结果为空')
  assert.deepStrictEqual(page.data.searchHistory, ['赋能'])
  assert.ok(page.data.searchResults[0].wordSegs.some(s => s.highlight), '关键词未高亮')
})

test('同一关键词重复搜索历史去重', () => {
  installStubs({})
  const page = loadPage('../pages/search/search.js')
  page.setData({ searchKeyword: '赋能' })
  page.onSearch()
  page.onSearch()
  assert.deepStrictEqual(page.data.searchHistory, ['赋能'])
})

section('页面逻辑模拟：index / category / wordList')

test('首页今日热词来自网络热词分类且提供分享', () => {
  installStubs({})
  const page = loadPage('../pages/index/index.js')
  page.onLoad()

  assert.ok(page.data.hotWords.length > 0, '热词为空')
  const byId = new Map(words.map(w => [w.id, w]))
  assert.ok(page.data.hotWords.every(h => byId.get(h.id).categoryId === 15), '热词应来自网络热词分类')

  const share = page.onShareAppMessage()
  assert.ok(share.title.length > 0 && share.path.startsWith('/pages/'))
})

test('分类页跳转 URL 只传 categoryId，收藏夹入口可用', () => {
  installStubs({})
  const page = loadPage('../pages/category/category.js')
  page.onLoad()

  page.goToWordList({ currentTarget: { dataset: { id: 1 } } })
  assert.strictEqual(global.__navUrls[global.__navUrls.length - 1], '/pages/wordList/wordList?categoryId=1')

  page.goToFavorites()
  assert.strictEqual(global.__navUrls[global.__navUrls.length - 1], '/pages/wordList/wordList?favorites=1')
})

test('wordList 按分类加载并自解析分类名', () => {
  installStubs({})
  const page = loadPage('../pages/wordList/wordList.js')
  page.onLoad({ categoryId: '1' })
  assert.strictEqual(page.data.categoryName, '会议用语')
  assert.ok(page.data.words.length > 0)
})

test('wordList 收藏夹模式读取本地收藏（最近在前）', () => {
  installStubs({ favorite_words: [words[0].id, words[1].id] })
  const page = loadPage('../pages/wordList/wordList.js')
  page.onLoad({ favorites: '1' })
  assert.strictEqual(page.data.isFavorites, true)
  assert.strictEqual(page.data.words.length, 2)
  assert.strictEqual(page.data.words[0].id, words[1].id, '最近收藏应在前')
})

// ---------- 汇总 ----------
console.log(`\n结果: ${passed} 通过, ${failed} 失败`)
if (failed > 0) {
  console.log('提交前必须让本脚本全绿：node scripts/check.js')
}
process.exit(failed > 0 ? 1 : 0)
