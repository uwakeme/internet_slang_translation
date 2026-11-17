// 主页生成器：从 data/words.js 提取真实词库，注入 docs/index.html
//
// 用法：
//   node scripts/build-homepage.js
//
// 原理：
//   1) 读取 data/words.js 与 data/categories.js（小程序运行时用的同一份数据）
//   2) 把全部文本抽成字符串池，词条只存下标，得到无损紧凑编码
//   3) 写入 docs/index.html 的 PAYLOAD 载荷（可重复运行，结果一致）
//
// 词库更新后重新跑一次即可，主页数据即与小程序保持一致。
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const words = require('../data/words.js')
const categories = require('../data/categories.js')
const dataModule = require('../utils/data.js')

// 与 utils/translator.js 里的 humanPhrases 手工短语表保持一致
const hard = {
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

// 字符串池：所有文本只存一份，词条用下标引用
const pool = []
const poolIndex = new Map()
function sid(str) {
  if (poolIndex.has(str)) return poolIndex.get(str)
  const i = pool.length
  pool.push(str)
  poolIndex.set(str, i)
  return i
}

const countMap = {}
words.forEach(w => { countMap[w.categoryId] = (countMap[w.categoryId] || 0) + 1 })

// forward: wordIdx~displayIdx~categoryId~exampleIdx~tagIdx,tagIdx...
const forward = words.map(w => {
  const tags = (w.tags || []).map(sid)
  return [
    sid(w.word),
    sid(w.brief || w.meaning),
    w.categoryId,
    w.example ? sid(w.example) : -1,
    tags
  ].join('~')
})

// reverse: meaningIdx~wordIdx（释义 → 词条，用于「人话 → 黑话」）
const seenMeaning = new Set()
const reverse = []
words.forEach(w => {
  if (!seenMeaning.has(w.meaning)) {
    seenMeaning.add(w.meaning)
    reverse.push(sid(w.meaning) + '~' + sid(w.word))
  }
})

// 分类元数据：图标类型与文件名取自 data/categories.js
const cats = categories.map(c => {
  let iconRef = c.icon
  if (c.iconType === 'image') {
    iconRef = path.basename(c.icon).replace(/\.png$/, '.svg')
  }
  return [c.id, c.name, c.desc, c.type, countMap[c.id] || 0, c.iconType, iconRef]
})

const payload = {
  cats: cats,
  fwd: forward.join('^'),
  rev: reverse.join('^'),
  pool: pool.join('|'),
  hard: hard,
  hot: dataModule.getPopularTags().slice(0, 12)
}
const payloadJson = JSON.stringify(payload)

const htmlPath = path.join(__dirname, '..', 'docs', 'index.html')
let html = fs.readFileSync(htmlPath, 'utf8')

// 载荷写在 PAYLOAD 标记之间；首次生成时标记为空对象，之后替换旧载荷
const marker = /var PAYLOAD = (\{[\s\S]*?\});/
if (!marker.test(html)) {
  console.error('未找到 PAYLOAD 标记，请检查 docs/index.html')
  process.exit(1)
}
html = html.replace(marker, 'var PAYLOAD = ' + payloadJson + ';')
fs.writeFileSync(htmlPath, html, 'utf8')

// 把分类图标拷进 docs/assets/categories/
const outDir = path.join(__dirname, '..', 'docs', 'assets', 'categories')
fs.mkdirSync(outDir, { recursive: true })
let copied = 0
categories.forEach(c => {
  if (c.iconType !== 'image') return
  const src = path.join(__dirname, '..', 'images', 'categories', path.basename(c.icon).replace(/\.png$/, '.svg'))
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outDir, path.basename(src)))
    copied++
  }
})

console.log('词库载荷注入完成')
console.log('  词条 ' + words.length + ' 条，分类 ' + categories.length + ' 个')
console.log('  载荷 ' + (Buffer.byteLength(payloadJson, 'utf8') / 1024).toFixed(1) + ' KB')
console.log('  页面 ' + (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1) + ' KB')
console.log('  分类图标 ' + copied + ' 个已拷贝到 docs/assets/categories/')
