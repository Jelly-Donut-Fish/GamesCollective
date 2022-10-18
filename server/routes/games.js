const router = require('express').Router();
const controllerGames = require('../controllers/games');

// GAMES & COLLECTIONS
router.get('/', controllerGames.getAll);

router.get(':game_id', controllerGames.getOne);

module.exports = router;
