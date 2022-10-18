const router = require('express').Router();
const controllerGamesUsers = require('../controllers/games_users');

router.route('/:user_id')
  .get(controllerGamesUsers.get)
  .post(controllerGamesUsers.post);

router.put('/status', controllerGamesUsers.putStatus);

router.put('/ratings', controllerGamesUsers.putRatings);

router.delete('/', controllerGamesUsers.deleteGame);

module.exports = router;
