var translatorCore = require('./translator-core.js')
var dataModule = require('./data.js')

var translator = translatorCore.createTranslator({
  words: dataModule.getAllWords()
})

module.exports = {
  translateToHuman: translator.translateToHuman,
  translateToJargon: translator.translateToJargon,
  translateText: translator.translateText,
  detectTextType: translator.detectTextType
}
