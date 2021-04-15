
const mongoose = require('mongoose')
const Schema = new mongoose.Schema({//创建骨架
  surveId: String,
  answer: Object
})
const answerModel = mongoose.model('answers', Schema) //创建模型
module.exports = answerModel