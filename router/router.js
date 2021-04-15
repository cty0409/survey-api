const Router = require('koa-router')
module.exports = () => {
  // 装载所有路由
  const survery = require('./survery')()
  const login = require('./login')()
  const answer = require('./answer')()
  const router = new Router()
  router.use(survery.routes()).use(survery.allowedMethods())
  router.use(login.routes()).use(login.allowedMethods())
  router.use(answer.routes()).use(answer.allowedMethods())
  return router
}