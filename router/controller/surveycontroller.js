const mongoose = require('mongoose')
const surveyModel = require('../schema/surveySchema')
const ObjectId = require('mongoose').Types.ObjectId
class SurveyController {
  /**
    创建问卷
   */
  async createSurvey(ctx) {
    await new surveyModel(ctx.request.body).save()
    const result = {
      code: 200,
      data: {}
    }
    ctx.body = result
  }
  /**
    获取问卷列表
   */
  async getSurveyList(ctx) {
    const query = ctx.query
    const inputExp = new RegExp(query.input)
    try {
      const list = await surveyModel.find({ 'title': inputExp }).skip((query.page - 1) * query.pageSize).limit(parseInt(query.pageSize) || 10)
      const total = await surveyModel.count({})
      const result = {
        code: 200,
        list,
        total
      }
      ctx.body = result
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500
      ctx.response.body = {
        message: err.message
      }
    }

  }
  /**
    获取指定id问卷列表
   */

  async getSurvey(ctx) {
    const id = new ObjectId(ctx.query.id)
    const data = await surveyModel.find({ _id: id })
    const result = {
      code: 200,
      data,
    }
    ctx.body = result
  }

  /**
    修改指定id的问卷
  */
  async updateSurvey(ctx) {
    await surveyModel.findByIdAndUpdate(ctx.query.id, ctx.request.body)
    const result = {
      code: 200,
      data
    }
    ctx.body = result
  }

  /**
    删除指定id的问卷
  */
  async delSurvey(ctx) {
    await surveyModel.deleteOne({ '_id': ctx.query.id }, (err, doc) => {
      if (err) {
        return ctx.body = {
          code: 500,
          messgae: '删除失败'
        }
      } else {
        return ctx.body = {
          code: 200,
          data: {}
        }
      }
    })
  }





}
module.exports = new SurveyController()