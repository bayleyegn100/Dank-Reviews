const router = require('express').Router();
const { Image } = require('../../models');
const withAuth = require('../../utils/auth');

//post route to save image to DB
router.post('/', withAuth, async (req, res) => {
    try {
        const newImage = await Image.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newImage);
    } catch (err) {
        res.status(500).json(err)
    }
});

//delete route to remove image from DB based on its ID. We may not use this on the site yet, but I felt like we should include it for now just in case. -Mike
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const delImage = await Image.destroy({
        where: {  
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!delImage) {
        res.status(404).json({ message: 'No image found with this id!' });
        return;
      }
  
      res.status(200).json(delImage);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;