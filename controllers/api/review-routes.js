const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');
// use auth to leave review 
router.post('/', withAuth, async (req, res) => {
    try {
        const userReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(400).json(err);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const projectData = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;