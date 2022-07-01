const router = require('express').Router();
const controllerGames = require('./controllers/games');
const controllerComments = require('./controllers/comments');
const controllerGamesUsers = require('./controllers/games_users');
const controllerUsers = require('./controllers/users');
const controllerCategories = require('./controllers/categories');
const controllerGenres = require('./controllers/genres');
const controllerPlatforms = require('./controllers/platforms');
const controllerLibraries = require('./controllers/libraries');

// const FUNC = (req, res) => {
//   console.log('replace with a real function');
//   console.log(req.url, ' query params: ', req.query, 'params: ', req.params, 'body: ', req.body);
//   res.sendStatus(200);
// };
// req.query = query params
// req.params = path params
// req.body = req body

// GAMES & COLLECTIONS
router.get('/games', controllerGames.getAll);

router.get('/games/:game_id', controllerGames.getOne);

router.get('/games_users/:user_id', controllerGamesUsers.get);

router.post('/games_users/:user_id', controllerGamesUsers.post);

router.put('/games_users/status', controllerGamesUsers.putStatus);

router.put('/games_users/ratings', controllerGamesUsers.putRatings);

router.delete('/games_users', controllerGamesUsers.deleteGame);

// COMMENTS
router.post('/comments', controllerComments.post);

router.get('/comments/:game_id', controllerComments.get);

router.put('/comments/:comment_id/report', controllerComments.put);

// USERS
router.post('/users', controllerUsers.post);

router.get('/users', controllerUsers.get);

router.put('/users', controllerUsers.put);

// CATEGORIES
router.get('/categories', controllerCategories.get);

// GENRES
router.get('/genres', controllerGenres.get);

// PLATFORMS
router.get('/platforms', controllerPlatforms.get);

// LIBRARIES
router.get('/libraries', controllerLibraries.get);

module.exports = router;
