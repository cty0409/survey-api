
const mongoose = require('mongoose')
const Router = require('koa-router')
const Schema = new mongoose.Schema({//无法创建骨架，不知道如何取
  _id: String,

})
const cityModel = mongoose.model('city', Schema) //创建模型
module.exports = () => {
  let city = new Router()
  // city.get('/city', async (ctx) => {
  //   const data = await cityModel.find()
  //   db.getCollection('city').find({})
  //   console.log('data=====>', data)
  // })

  return city
}