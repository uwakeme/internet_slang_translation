var dataModule = require('./data.js')

// ---------- 词典构建（模块加载时一次完成） ----------

function buildDictionaries() {
  var words = dataModule.getAllWords()
  var jargonToHuman = {}
  var humanToJargon = {}

  words.forEach(function(item) {
    jargonToHuman[item.word] = item.meaning
    if (!humanToJargon[item.meaning]) humanToJargon[item.meaning] = item.word
  })

  // 扩展词典 - 添加更多常见的互联网黑话
  var extraJargon = {
    '降本增效': '减少成本提高效率',
    '数字化转型': '用技术改造业务',
    '精细化运营': '细致管理运营',
    '全链路': '完整流程',
    '一站式': '全套服务',
    '生态化': '形成完整体系',
    '平台化': '建设统一平台',
    '中台': '共享服务平台',
    '去中心化': '分散式管理',
    '扁平化': '减少管理层级',
    '敏捷开发': '快速迭代开发',
    '精益创业': '低成本试错创业',
    '增长飞轮': '持续增长模式',
    '商业闭环': '完整商业模式',
    '护城河': '竞争优势',
    '天花板': '发展上限',
    '风口': '发展机会',
    '赛道': '行业领域',
    '独角兽': '高价值创业公司',
    'KOL': '意见领袖',
    'ROI': '投资回报率',
    'GMV': '交易总额',
    'DAU': '日活跃用户',
    'MAU': '月活跃用户',
    'LTV': '用户生命周期价值',
    'MVP': '最小可行产品',
    'PMF': '产品市场匹配',
    'B端': '企业客户',
    'C端': '个人用户',
    'SaaS': '软件即服务',
    'PaaS': '平台即服务',
    'IaaS': '基础设施即服务'
  }

  Object.assign(jargonToHuman, extraJargon)
  Object.keys(extraJargon).forEach(function(key) {
    humanToJargon[extraJargon[key]] = key
  })

  return { jargonToHuman: jargonToHuman, humanToJargon: humanToJargon }
}

var dict = buildDictionaries()

// 正则特殊字符转义（词条含 ×、.、+ 等符号）
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
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
var jargonPattern = new RegExp(jargonTerms.map(escapeRegExp).join('|'), 'g')

// 人话→黑话：只做整段短语替换（保守策略），不按关键词拆句。
// 短语来源：词库中的人工表达（如「完整流程」→「闭环」）+ 少量高频动宾短语。
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
var humanPattern = new RegExp(humanTerms.map(escapeRegExp).join('|'), 'g')

// 句中替换时释义取第一义（如「帮助、支持」→「帮助」），避免顿号破坏句子
function firstSense(meaning) {
  var head = String(meaning).split(/[、，,；;]/)[0].trim()
  return head || meaning
}

function replaceAll(text, pattern, table, useFirstSense) {
  var matched = 0
  var result = text.replace(pattern, function(hit) {
    matched++
    var mapped = table[hit]
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
    var toHuman = replaceAll(trimmed, jargonPattern, dict.jargonToHuman, true)
    return { text: toHuman.text, matched: toHuman.matched, direction: direction }
  }

  var toJargon = replaceAll(trimmed, humanPattern, humanPhrases, false)
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
