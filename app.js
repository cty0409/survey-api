const Koa = require('koa2')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const app = new Koa();
const router = require('./router/router')()
//使用路由中间件
app.use(cors())  //跨域
app.use(bodyParser())  // 解析post参数
// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (ctx.method == 'OPTIONS') {
//     ctx.body = 200;
//   } else {
//     await next();
//   }
// })
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

//连接数据库

// const userSchema = new mongoose.Schema({//创建骨架
//   id: Number,
//   name: String,
// })
// const userModel = mongoose.model('users', userSchema) //创建模型
// userModel.find({}, (error, result) => {
//   if (error) throw error;
//   console.log('啦啦啦啦啦啦啦啦', result)
// })

// const users = new userModel([
//   { id: 1, name: '小明', age: 14, sex: '男' },
//   { id: 2, name: '小红', age: 12, sex: '女' },
//   { id: 3, name: '小花', age: 16, sex: '女' },
//   { id: 4, name: '小白', age: 11, sex: '男' }
// ])
// userModel.insertMany(users, (err, result) => {
//   if (err) {
//     console.log('数据添加失败');
//     throw err;
//   } else {
//     console.log('数据添加成功:', result);
//   }
// })

// var users = new Array()
// for (i = 0; i < 5; i++) {
//   let user = new userModel({
//     id: i,
//     name: "小米" + i,
//   })
//   users.push(user);
// }
// userModel.insertMany(users, function (err, res) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// });




// userModel.remove((err, result) => {
//   if (err) {
//     console.log('删除数据成功');
//     throw err;
//   }
//   console.log("删除");
// })

// userModel.find({ id: 3 }, (err, doc) => {
//   if (err) {
//     console.log('出错了', err)
//   } else {
//     console.log('数据', doc)
//   }
// })
