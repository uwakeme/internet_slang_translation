// 引入数据文件
const categories = require('../data/categories.js')
const allWords = require('../data/words.js')

// 工具函数
function getCategories() {
  return categories.map(cat => ({
    ...cat,
    count: allWords.filter(word => word.categoryId === cat.id).length
  }))
}

function getCategoriesByType(type) {
  return getCategories().filter(cat => cat.type === type)
}

function getWordsByCategory(categoryId) {
  return allWords.filter(word => word.categoryId === categoryId)
}

function getAllWords() {
  return allWords
}

// 搜索功能
function searchWords(keyword) {
  if (!keyword || keyword.trim() === '') return []
  
  const searchTerm = keyword.toLowerCase().trim()
  
  return allWords.filter(word => {
    return word.word.toLowerCase().includes(searchTerm) ||
           word.meaning.toLowerCase().includes(searchTerm) ||
           word.example.toLowerCase().includes(searchTerm) ||
           word.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  })
}

function searchByTag(tag) {
  return allWords.filter(word => 
    word.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  )
}

function getPopularTags() {
  const tagCount = {}
  allWords.forEach(word => {
    word.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
  })
  
  return Object.entries(tagCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 20)
    .map(([tag]) => tag)
}

function getRelatedWords(wordId, limit = 5) {
  const currentWord = allWords.find(w => w.id === wordId)
  if (!currentWord) return []
  
  return allWords
    .filter(word => 
      word.id !== wordId && 
      (word.categoryId === currentWord.categoryId ||
       word.tags.some(tag => currentWord.tags.includes(tag)))
    )
    .slice(0, limit)
}

module.exports = {
  getCategories,
  getCategoriesByType,
  getJargonCategories: () => getCategoriesByType('jargon'),
  getProfessionalCategories: () => getCategoriesByType('professional'),
  getWordsByCategory,
  getAllWords,
  searchWords,
  searchByTag,
  getPopularTags,
  getRelatedWords
}
