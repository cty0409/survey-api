
const answerModel = require('../schema/answerSchema')
class AnswerController {
  async postAnswer(ctx) {
    const urllist = ctx.request.url.split('/')
    const id = urllist[urllist.length - 1]
    const data = {
      surveId: id,
      answer: { ...ctx.request.body }
    }
    await new answerModel(data).save()
    const result = {
      code: 200,
      data: {}
    }
    ctx.body = result
  }

  async answerList(ctx) {
    const urllist = ctx.request.url.split('/')
    const id = urllist[urllist.length - 1]
    const data = await answerModel.find({ surveId: id })
    const total = await answerModel.count({})
    const result = {
      code: 200,
      data,
      total
    }
    ctx.body = result
    console.log('data====>', data)

  }
}
module.exports = new AnswerController()