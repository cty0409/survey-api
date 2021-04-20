const Koa = require('koa2')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const check = require('./utils/check')
const app = new Koa();
const router = require('./router/router')()
//使用路由中间件
app.use(cors())  //跨域
app.use(bodyParser())  // 解析post参数
app.use(check)
app.use(router.routes()).use(router.allowedMethods())
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection
db.on('open', function (err) {
  if (err) {
    console.log('数据库连接失败');
    throw err;
  }
  console.log('数据库连接成功')
})

app.listen(3000)
