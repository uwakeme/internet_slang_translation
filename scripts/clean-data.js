// 一次性数据清理脚本：去重、迁移分类、统一标点
// 用法：node scripts/clean-data.js（会重写 data/words.js，建议先提交或备份）
const fs = require('fs')
const path = require('path')
const allWords = require('../data/words.js')

// 新增的「网络热词」分类 id（见 data/categories.js）
const SLANG_CATEGORY_ID = 15
// 每日新增（id >= 231）堆进「职场文化」的网络梗从这里移出，以下白名单是确属职场文化的词
const WORKPLACE_WHITELIST = new Set([
  '班味', '内卷', '躺平', '摸鱼', '割韭菜', 'PUA', '精神离职', '摸鱼搭子'
])
// 跨分类重复词条的最终归属修正（保留内容更丰富的一条后，把分类摆正）
const CATEGORY_OVERRIDE = { '监管科技': 9 }

// 旧词条用顿号列举，新词条混入半角逗号作分句，统一为全角逗号
function normalizePunctuation(text) {
  return text.replace(/,/g, '，').trim()
}

// 去重比较键：小写化 + 少量繁简归并（如「真冰涼/真冰凉」）
function dedupKey(word) {
  return word.trim().toLowerCase().replace(/涼/g, '凉')
}

// 内容丰富度：tags 多者优先，其次 meaning 更长者；平手取 id 小的
function richness(w) {
  return w.tags.length * 1000 + w.meaning.length
}

// 1. 标点统一
const cleaned = allWords.map(w => ({
  ...w,
  meaning: normalizePunctuation(w.meaning),
  example: normalizePunctuation(w.example)
}))

// 2. 去重
const byKey = new Map()
for (const w of cleaned) {
  const key = dedupKey(w.word)
  const prev = byKey.get(key)
  if (!prev) { byKey.set(key, w); continue }
  const keep = richness(w) > richness(prev) ? w : prev
  byKey.set(key, keep)
}
const deduped = [...byKey.values()]

// 3. 分类迁移
let moved = 0
for (const w of deduped) {
  if (CATEGORY_OVERRIDE[w.word] !== undefined) {
    w.categoryId = CATEGORY_OVERRIDE[w.word]
    continue
  }
  if (w.categoryId === 5 && w.id >= 231 && !WORKPLACE_WHITELIST.has(w.word)) {
    w.categoryId = SLANG_CATEGORY_ID
    moved++
  }
}

// 4. 按 id 排序写出
deduped.sort((a, b) => a.id - b.id)
const content = '// 词汇数据\nconst allWords = '
  + JSON.stringify(deduped, null, 2)
  + '\nmodule.exports = allWords\n'
fs.writeFileSync(path.join(__dirname, '../data/words.js'), content, 'utf8')

const removed = allWords.length - deduped.length
console.log(`词条总数: ${allWords.length} → ${deduped.length}（去除重复 ${removed} 条）`)
console.log(`迁入「网络热词」分类: ${moved} 条`)
const count = {}
deduped.forEach(w => { count[w.categoryId] = (count[w.categoryId] || 0) + 1 })
console.log('各分类词条数:', JSON.stringify(count))
