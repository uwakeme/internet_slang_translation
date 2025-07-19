var dataModule = require('./data.js')

// 构建翻译词典
function buildDictionary() {
  var words = dataModule.getAllWords()
  var jargonToHuman = {}
  var humanToJargon = {}

  words.forEach(function(item) {
    jargonToHuman[item.word] = item.meaning
    humanToJargon[item.meaning] = item.word
  })

  return { jargonToHuman: jargonToHuman, humanToJargon: humanToJargon }
}

var dictionary = buildDictionary()
var jargonToHuman = dictionary.jargonToHuman
var humanToJargon = dictionary.humanToJargon

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

// 合并词典
Object.assign(jargonToHuman, extraJargon)
Object.keys(extraJargon).forEach(function(key) {
  humanToJargon[extraJargon[key]] = key
})

// 语义分析和智能翻译函数
function analyzeAndTranslate(text, targetType = 'auto') {
  // 1. 预处理文本
  const cleanText = text.trim().replace(/[，。！？；：""''（）【】]/g, ' ')
  
  // 2. 语义关键词映射
  const semanticMap = {
    // 效率相关
    '效率': ['降本增效', '精细化运营', '敏捷开发'],
    '提高': ['赋能', '增长飞轮'],
    '改进': ['优化', '迭代', '重构'],
    '管理': ['精细化运营', '扁平化', '中台'],
    
    // 业务相关
    '合作': ['深度合作', '战略伙伴', '共赢'],
    '流程': ['闭环', '全链路', '链路'],
    '方法': ['抓手', '方法论'],
    '沟通': ['对齐', '拉通', '同步'],
    
    // 技术相关
    '技术': ['数字化转型', '平台化', '中台'],
    '系统': ['生态化', '一站式', 'SaaS'],
    '用户': ['C端', 'DAU', 'MAU', 'LTV'],
    '企业': ['B端', '降本增效'],
    
    // 产品相关
    '产品': ['MVP', 'PMF', '用户画像'],
    '增长': ['增长飞轮', 'GMV', 'ROI'],
    '运营': ['私域流量', '转化率', '精细化运营']
  }
  
  // 3. 智能匹配和翻译
  function smartTranslate(inputText, isToJargon = false) {
    let result = inputText
    
    if (isToJargon) {
      // 人话转黑话：基于语义分析
      Object.keys(semanticMap).forEach(keyword => {
        if (inputText.includes(keyword)) {
          const jargonOptions = semanticMap[keyword]
          // 选择最合适的黑话（这里简化为选第一个）
          const selectedJargon = jargonOptions[0]
          
          // 构建替换规则
          const patterns = [
            `${keyword}`,
            `提高${keyword}`,
            `改善${keyword}`,
            `优化${keyword}`,
            `加强${keyword}`
          ]
          
          patterns.forEach(pattern => {
            if (result.includes(pattern)) {
              result = result.replace(new RegExp(pattern, 'g'), selectedJargon)
            }
          })
        }
      })
      
      // 常见短语替换
      const phraseMap = {
        '多沟通交流': '深度对齐',
        '需要帮助': '需要赋能',
        '完整的流程': '业务闭环',
        '具体方法': '抓手',
        '统一认识': '对齐认知',
        '协调资源': '拉通资源',
        '总结经验': '沉淀经验',
        '提供方案': '输出方案',
        '专注重点': '聚焦核心',
        '概括问题': '抽象问题'
      }
      
      Object.keys(phraseMap).forEach(phrase => {
        result = result.replace(new RegExp(phrase, 'g'), phraseMap[phrase])
      })
    } else {
      // 黑话转人话：使用现有词典 + 模糊匹配
      const sortedJargon = Object.keys(jargonToHuman).sort((a, b) => b.length - a.length)
      
      sortedJargon.forEach(jargon => {
        const regex = new RegExp(jargon, 'g')
        result = result.replace(regex, jargonToHuman[jargon])
      })
      
      // 模糊匹配：处理包含黑话的句子
      Object.keys(jargonToHuman).forEach(jargon => {
        const patterns = [
          `需要${jargon}`,
          `进行${jargon}`,
          `实现${jargon}`,
          `完成${jargon}`
        ]
        
        patterns.forEach(pattern => {
          if (result.includes(pattern)) {
            const humanVersion = jargonToHuman[jargon]
            result = result.replace(
              new RegExp(pattern, 'g'), 
              pattern.replace(jargon, humanVersion)
            )
          }
        })
      })
    }
    
    return result
  }
  
  // 4. 智能判断翻译方向
  if (targetType === 'auto') {
    const jargonCount = Object.keys(jargonToHuman).filter(jargon => 
      text.includes(jargon)
    ).length
    
    const humanKeywordCount = Object.keys(semanticMap).filter(keyword => 
      text.includes(keyword)
    ).length
    
    // 如果包含黑话，翻译为人话
    if (jargonCount > 0) {
      return smartTranslate(text, false)
    }
    // 如果包含人话关键词，翻译为黑话
    else if (humanKeywordCount > 0) {
      return smartTranslate(text, true)
    }
    // 默认尝试转为黑话
    else {
      return smartTranslate(text, true)
    }
  } else if (targetType === 'jargon') {
    return smartTranslate(text, true)
  } else {
    return smartTranslate(text, false)
  }
}

// 更新现有的翻译函数
function translateText(text) {
  return analyzeAndTranslate(text, 'auto')
}

function translateToJargon(text) {
  return analyzeAndTranslate(text, 'jargon')
}

function translateToHuman(text) {
  return analyzeAndTranslate(text, 'human')
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
