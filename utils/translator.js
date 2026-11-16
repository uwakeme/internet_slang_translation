var dataModule = require('./data.js')

// ---------- 词典构建（模块加载时一次完成） ----------
// 黑话→人话的句中替换优先使用词条的 brief 短释义（见 data/briefs 约定），
// 无 brief 的词条回退到 meaning，替换时取第一义。
function buildDictionaries() {
  var words = dataModule.getAllWords()
  var jargonToHuman = {}
  var humanToJargon = {}

  words.forEach(function(item) {
    jargonToHuman[item.word] = item.brief || item.meaning
    if (!humanToJargon[item.meaning]) humanToJargon[item.meaning] = item.word
  })

  return { jargonToHuman: jargonToHuman, humanToJargon: humanToJargon }
}

var dict = buildDictionaries()

// 正则特殊字符转义（词条含 ×、.、+ 等符号）
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// 英文词条大小写不敏感：命中文本先查原表，查不到再查小写表
function buildLowerLookup(table) {
  var lower = {}
  Object.keys(table).forEach(function(key) {
    var lk = key.toLowerCase()
    if (!(lk in lower)) lower[lk] = table[key]
  })
  return lower
}

function countMatches(text, pattern) {
  var hits = text.match(pattern)
  return hits ? hits.length : 0
}

// 黑话→人话：词条按长度降序合并为单个正则，单趟替换。
// 单趟保证替换出的"人话"不会被后续词条再次命中（连锁替换）。
var jargonTerms = Object.keys(dict.jargonToHuman).sort(function(a, b) {
  return b.length - a.length
})
var jargonPattern = new RegExp(jargonTerms.map(escapeRegExp).join('|'), 'gi')
var jargonLower = buildLowerLookup(dict.jargonToHuman)

// 人话→黑话：只做整段短语替换（保守策略），不按关键词拆句。
// 短语来源：词库中的人工表达（如「完整流程」→「全链路」）+ 少量高频动宾短语。
var humanPhrases = {
  '多沟通交流': '深度对齐',
  '需要帮助': '需要赋能',
  '完整的流程': '业务闭环',
  '具体方法': '抓手',
  '统一认识': '对齐认知',
  '协调资源': '拉通资源',
  '总结经验': '沉淀经验',
  '提供方案': '输出方案',
  '专注重点': '聚焦核心',
  '概括问题': '抽象问题',
  '提高效率': '降本增效',
  '提升效率': '降本增效',
  '降低成本': '降本增效',
  '减少成本': '降本增效'
}
Object.keys(dict.humanToJargon).forEach(function(phrase) {
  if (phrase.length >= 2 && !humanPhrases[phrase]) humanPhrases[phrase] = dict.humanToJargon[phrase]
})
var humanTerms = Object.keys(humanPhrases).sort(function(a, b) {
  return b.length - a.length
})
var humanPattern = new RegExp(humanTerms.map(escapeRegExp).join('|'), 'gi')
var humanLower = buildLowerLookup(humanPhrases)

// 句中替换时释义取第一义（如「帮助、支持」→「帮助」），避免顿号破坏句子
function firstSense(meaning) {
  var head = String(meaning).split(/[、，,；;]/)[0].trim()
  return head || meaning
}

function replaceAll(text, pattern, table, lowerTable, useFirstSense) {
  var matched = 0
  var result = text.replace(pattern, function(hit) {
    matched++
    var mapped = table[hit] !== undefined ? table[hit] : lowerTable[hit.toLowerCase()]
    return useFirstSense ? firstSense(mapped) : mapped
  })
  return { text: result, matched: matched }
}

// 翻译方向：'auto' | 'jargon'（转黑话） | 'human'（转人话）
// 返回 { text: 结果文本, matched: 替换次数, direction: 'toHuman' | 'toJargon' }
function analyzeAndTranslate(text, targetType) {
  var trimmed = (text || '').trim()
  var fallbackDirection = targetType === 'jargon' ? 'toJargon' : 'toHuman'

  if (!trimmed) {
    return { text: trimmed, matched: 0, direction: fallbackDirection }
  }

  var direction
  if (targetType === 'jargon') {
    direction = 'toJargon'
  } else if (targetType === 'human') {
    direction = 'toHuman'
  } else {
    // 自动方向：句中已含黑话 → 转人话，否则尝试转黑话
    direction = countMatches(trimmed, jargonPattern) > 0 ? 'toHuman' : 'toJargon'
  }

  if (direction === 'toHuman') {
    var toHuman = replaceAll(trimmed, jargonPattern, dict.jargonToHuman, jargonLower, true)
    return { text: toHuman.text, matched: toHuman.matched, direction: direction }
  }

  var toJargon = replaceAll(trimmed, humanPattern, humanPhrases, humanLower, false)
  return { text: toJargon.text, matched: toJargon.matched, direction: direction }
}

function translateText(text) {
  return analyzeAndTranslate(text, 'auto')
}

function translateToJargon(text) {
  return analyzeAndTranslate(text, 'jargon')
}

function translateToHuman(text) {
  return analyzeAndTranslate(text, 'human')
}

// 检测文本类型：'jargon' | 'human' | 'unknown'
function detectTextType(text) {
  var jargonCount = countMatches(text || '', jargonPattern)
  var humanCount = countMatches(text || '', humanPattern)

  if (jargonCount > humanCount) return 'jargon'
  if (humanCount > jargonCount) return 'human'
  return 'unknown'
}

module.exports = {
  translateToHuman: translateToHuman,
  translateToJargon: translateToJargon,
  translateText: translateText,
  detectTextType: detectTextType
}
