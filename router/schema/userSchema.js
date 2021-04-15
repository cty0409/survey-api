
const mongoose = require('mongoose')
const Schema = new mongoose.Schema({//创建骨架
  account: String,
  password: String,
})
const userModel = mongoose.model('users', Schema) //创建模型

module.exports = userModel

