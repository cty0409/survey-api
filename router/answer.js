const Router = require('koa-router')
const AnswerController = require('./controller/answercontroller')
module.exports = () => {
  let answer = new Router()
  answer.post('/submitanswer/:id', AnswerController.postAnswer)
  answer.get('/surveys/answerlist/:id', AnswerController.answerList)
  return answer
}