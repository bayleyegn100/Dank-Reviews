const router = require('express').Router();
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');
// user or users? the route file name is user-routes. If so review or reviews?
router.use('/users', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
