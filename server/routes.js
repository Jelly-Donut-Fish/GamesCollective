const router = require('express').Router();
const gameUsersController = require('./controllers/games_users')
// controller func imports
const FUNC = (req, res) => {
  console.log('replace with a real function');
  console.log(req.url, ' query params: ', req.query, 'params: ', req.params, 'body: ', req.body);
  res.sendStatus(200);
};
// req.query = query params
// req.params = path params
// req.body = req body

// GAMES & COLLECTIONS
router.get('/games', FUNC);

router.get('/games/:game_id', FUNC);

router.get('/games_users/:user_id', gameUsersController);

router.post('/games_users/:user_id', gameUsersController);

router.put('/games_users/status', FUNC);

router.put('/games_users/ratings', FUNC);

router.delete('/games_users', FUNC);

// COMMENTS
router.post('/comments', FUNC);

router.get('/comments/:game_id', FUNC);

router.put('/comments/:comment_id/report', FUNC);

// USERS
router.post('/users', FUNC);

router.get('/users', FUNC);

router.put('/users', FUNC);

// CATEGORIES
router.get('/categories', FUNC);

// GENRES
router.get('/genres', FUNC);

// PLATFORMS
router.get('/platforms', FUNC);

// LIBRARIES
router.get('/libraries', FUNC);

module.exports = router;
