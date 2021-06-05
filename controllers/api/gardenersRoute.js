const router = require('express').Router();
const { Owned_Plants, Users } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
      const gardenerData = await Users.findAll({
        attributes: { exclude: ['password'] },
        include: [{ model: Owned_Plants }]
      });
      const gardeners = gardenerData.map(plant => plant.get({ plain: true }));
  
      res.status(200).json(gardeners);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;