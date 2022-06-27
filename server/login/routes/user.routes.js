const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controllers');

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/test/all', controller.allAccess);

  app.get(
    '/api/test/user',
    [authJwt.verifyToken],
    controller.userBoard,
  );
};
