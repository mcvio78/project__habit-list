const controller = require('../controllers/habit.controller');
const { authJwt } = require('../middlewares');

module.exports = app => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.post('/api/habit/create', authJwt.verifyToken, controller.createDailyHabit);

  app.get('/api/habit/daily', authJwt.verifyToken, controller.getDailyHabits);
};
