const Promise = require("bluebird");
const jwt = require("jsonwebtoken");
const moment = require('moment')
const verify = Promise.promisify(jwt.verify);
async function check(ctx, next) {
  let url = ctx.request.url;
  if (url == "/login") await next();
  else {
    let token = ctx.request.headers["token"];
    // 解码
    if (token === 'null') {
      ctx.response.status = 401
      ctx.response.body = {
        message: 'token已失效'
      }
      return
    }
    let result = await verify(token, 'Agwenbi')
    let { time, timeout } = result.payload;
    let date = moment(new Date()).unix()
    if (date - time <= timeout) {
      // 未过期
      await next();
    } else {
      //过期
      ctx.body = {
        status: 401,
        message: 'token已失效'
      };
    }
  }
}

module.exports = check
