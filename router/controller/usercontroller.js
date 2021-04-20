
const userModel = require('../schema/userSchema')
const jwt = require("jsonwebtoken");


class UserController {
  async createUser(ctx) {
    const phone = ctx.request.body.phone
    const user = await userModel.find({ phone: { $eq: phone } })
    if (user) {
      ctx.body = {
        code: 200,
        message: '该手机号已注册'
      }
    } else {
      await new userModel(ctx.request.body).save()
      const result = {
        code: 200,
        data: {}
      }
      ctx.body = result
    }
  }

  async login(ctx) {
    const phone = ctx.request.body.phone
    const password = ctx.request.body.password
    const data = await userModel.find({ phone: { $eq: phone } })
    if (data.length == 0) {
      ctx.body = {
        code: 200,
        message: '该账号不存在，请先注册'
      }
    } else if (data.length > 0 && (data[0].phone != phone || data[0].password != password)) {
      ctx.body = {
        code: 200,
        message: '账号或密码错误'
      }
    } else {
      let _id = data[0]._id.toString()
      let payload = { id: _id, time: new Date().getTime(), timeout: 1000 * 60 * 60 * 2 }
      const token = jwt.sign({
        payload
      }, 'Agwenbi', {
        expiresIn: (60 * 60 * 24) * 7//7天有效期
      })
      const result = {
        code: 200,
        data,
        token
      }
      ctx.body = result
    }
  }

  async getUser(ctx) {

  }
}
module.exports = new UserController()