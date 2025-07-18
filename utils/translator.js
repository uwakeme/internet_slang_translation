const { getAllWords } = require('./data.js')

// 构建翻译词典
function buildDictionary() {
  const words = getAllWords()
  const jargonToHuman = {}
  const humanToJargon = {}
  
  words.forEach(item => {
    jargonToHuman[item.word] = item.meaning
    humanToJargon[item.meaning] = item.word
  })
  
  return { jargonToHuman, humanToJargon }
}

const { jargonToHuman, humanToJargon } = buildDictionary()

// 扩展词典 - 添加更多常见的互联网黑话
const extraJargon = {
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

// 合并词典
Object.assign(jargonToHuman, extraJargon)
Object.keys(extraJargon).forEach(key => {
  humanToJargon[extraJargon[key]] = key
})

function translateToHuman(text) {
  let result = text
  
  // 按词长度排序，优先匹配长词
  const sortedJargon = Object.keys(jargonToHuman).sort((a, b) => b.length - a.length)
  
  sortedJargon.forEach(jargon => {
    const regex = new RegExp(jargon, 'g')
    result = result.replace(regex, jargonToHuman[jargon])
  })
  
  return result
}

function translateToJargon(text) {
  let result = text
  
  // 按词长度排序，优先匹配长词
  const sortedHuman = Object.keys(humanToJargon).sort((a, b) => b.length - a.length)
  
  sortedHuman.forEach(human => {
    const regex = new RegExp(human, 'g')
    result = result.replace(regex, humanToJargon[human])
  })
  
  return result
}

function translateText(text) {
  // 智能判断是黑话还是人话
  const jargonCount = Object.keys(jargonToHuman).filter(jargon => 
    text.includes(jargon)
  ).length
  
  const humanCount = Object.keys(humanToJargon).filter(human => 
    text.includes(human)
  ).length
  
  // 如果包含更多黑话，则翻译为人话
  if (jargonCount >= humanCount) {
    return translateToHuman(text)
  } else {
    return translateToJargon(text)
  }
}

// 检测文本类型
function detectTextType(text) {
  const jargonCount = Object.keys(jargonToHuman).filter(jargon => 
    text.includes(jargon)
  ).length
  
  const humanCount = Object.keys(humanToJargon).filter(human => 
    text.includes(human)
  ).length
  
  if (jargonCount > humanCount) {
    return 'jargon'
  } else if (humanCount > jargonCount) {
    return 'human'
  } else {
    return 'unknown'
  }
}

module.exports = {
  translateToHuman,
  translateToJargon,
  translateText,
  detectTextType
}