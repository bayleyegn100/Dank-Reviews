const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');
// use auth to leave review 
router.post('/', withAuth, async (req, res) => {
    try {
        const userReview = await Review.create({
            context: req.body.newReview,
            image_link: req.body.newImage,
            user_id: req.session.user_id,
        });
        res.status(200).json(userReview);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {  
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No reviewer found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;