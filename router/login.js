const Router = require('koa-router')
const UserController = require('./controller/usercontroller')
module.exports = () => {
  let login = new Router()
  login.post('/login', UserController.login)
  login.post('/register', UserController.createUser)
  return login
}