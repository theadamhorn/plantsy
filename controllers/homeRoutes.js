const router = require('express').Router();
const { Plants, Owned_Plants, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {

  res.render('homepage');

});

router.get('/plants', async (req, res) => {
  try {
    const plantData = await Plants.findAll();

    const plants = plantData.map(plant => plant.get({ plain: true }));

    console.log(plants);
    res.render('plantlist', {
      plants,
      logged_in: req.session.logged_in

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plants/:id', async (req, res) => {
  try {
    const plantData = await Plants.findByPk(req.params.id);

    const plant = plantData.get({ plain: true });

    res.render('plants', {
      plant,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/users', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Owned_Plants }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('user', {
      user,
      logged_in: true
    });
  } catch (err) {
    console.log(`hit an error of doom!!!! ~~~~~~~ wooohooo!`);
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/gardeners', withAuth, async (req, res) => {
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
