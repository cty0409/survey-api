
const mongoose = require('mongoose')
const Schema = new mongoose.Schema({//创建骨架
  title: String,
  description: String,
  formSchema: Object,
  date: Object
})
const SurveyModel = mongoose.model('surveys', Schema) //创建模型
module.exports = SurveyModel