const router = require('express').Router();
// controller func imports
const FUNC = (req, res) => {
  console.log('put in a real function');
  console.log(req.url, ' query params: ', req.query, 'params: ', req.params, 'body: ', req.body);
  res.sendStatus(200);
};

// GAMES & COLLECTIONS
router.get('/games', (req, res) => {
  FUNC(req, res);
});

router.get('/games/:game_id', (req, res) => {
  FUNC(req, res);
});

router.get('/games_users', (req, res) => {
  FUNC(req, res);
});

router.post('/games_users', (req, res) => {
  FUNC(req, res);
});

router.put('/games_users/status', (req, res) => {
  FUNC(req, res);
});

router.put('/games_users/ratings', (req, res) => {
  FUNC(req, res);
});

router.delete('/games_users', (req, res) => {
  FUNC(req, res);
});

// COMMENTS
router.post('/comments', (req, res) => {
  FUNC(req, res);
});

router.put('/comments/:comment_id/report', (req, res) => {
  FUNC(req, res);
});

// USERS
router.post('/users', (req, res) => {
  FUNC(req, res);
});

router.get('/users', (req, res) => {
  FUNC(req, res);
});

router.put('/users', (req, res) => {
  FUNC(req, res);
});

// CATEGORIES
router.get('/categories', (req, res) => {
  FUNC(req, res);
});

// GENRES
router.get('/genres', (req, res) => {
  FUNC(req, res);
});

// PLATFORMS
router.get('/platforms', (req, res) => {
  FUNC(req, res);
});

// LIBRARIES
router.get('/libraries', (req, res) => {
  FUNC(req, res);
});

module.exports = router;
