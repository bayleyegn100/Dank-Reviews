const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
// user or users? the route file name is user-routes. If so review or reviews?

// I changed this to reviews. I think that's the correct syntax for the URL. -Mike
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
