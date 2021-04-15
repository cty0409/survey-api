const Router = require('koa-router')
const SurveyController = require('./controller/surveycontroller')

module.exports = () => {
  let survery = new Router()
  survery.post('/submitsurvey', SurveyController.createSurvey)
  survery.get('/surveylist', SurveyController.getSurveyList)
  survery.get('/deletesurvey', SurveyController.delSurvey)
  survery.get('/survey', SurveyController.getSurvey)
  return survery
}