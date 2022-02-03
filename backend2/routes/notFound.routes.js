const controller = require('../controllers/notFound.controller');

module.exports = app => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('*', controller.notFoundBoard);
};
