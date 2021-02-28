const controllers = require('./controllers');

const router = (app) => {
  app.get('/', controllers.mainPage);
  app.get('/survey', controllers.surveyPage);
  app.get('/complete', controllers.completePage);
  app.post('/writeToUs', controllers.sendComments);
  app.post('/submitSurvey', controllers.sendReview);
};

module.exports = router;