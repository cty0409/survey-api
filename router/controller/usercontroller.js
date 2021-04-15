
const userModel = require('../schema/userSchema')
class UserController {
  async createUser(ctx) {
    await new userModel(ctx.request.body).save()
    const result = {
      code: 200,
      data: {}
    }
    ctx.body = result
  }
}
module.exports = new UserController()