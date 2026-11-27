const fs = require('fs')
const path = require('path')
const allWords = require('../data/words.js')

const outputPath = path.join(__dirname, '../data/words.js')
const tempPath = outputPath + '.tmp'
const write = process.argv.includes('--write')
const categoryOverride = { '监管科技': 9 }

function normalizePunctuation(text) {
  return text.replace(/,/g, '，').trim()
}

function dedupKey(word) {
  return word.trim().toLowerCase().replace(/涼/g, '凉')
}

function richness(word) {
  return word.tags.length * 1000 + word.meaning.length
}

const cleaned = allWords.map(word => ({
  ...word,
  meaning: normalizePunctuation(word.meaning),
  example: normalizePunctuation(word.example),
  tags: [...new Set(word.tags)]
}))

const byKey = new Map()
for (const word of cleaned) {
  const key = dedupKey(word.word)
  const previous = byKey.get(key)
  if (!previous || richness(word) > richness(previous)) byKey.set(key, word)
}
const deduped = [...byKey.values()]
for (const word of deduped) {
  if (categoryOverride[word.word] !== undefined) word.categoryId = categoryOverride[word.word]
}
deduped.sort((a, b) => a.id - b.id)

const content = '// 词汇数据\nconst allWords = '
  + JSON.stringify(deduped, null, 2)
  + '\nmodule.exports = allWords\n'
const removed = allWords.length - deduped.length
console.log(`词条总数: ${allWords.length} → ${deduped.length}（去除重复 ${removed} 条）`)
console.log(write && content !== fs.readFileSync(outputPath, 'utf8') ? '正在写入数据文件' : '仅检查，未修改文件（使用 --write 写入）')

if (write && content !== fs.readFileSync(outputPath, 'utf8')) {
  try {
    fs.writeFileSync(tempPath, content, 'utf8')
    fs.renameSync(tempPath, outputPath)
  } catch (error) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath)
    throw error
  }
}
