const router = require('express').Router();
const { Plants, Owned_Plants, Users } = require('../models'); // <== verify these variables are correct
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all plants and JOIN with user data
    const plantData = await Plants.findAll({
      include: [
        {
          model: Users,
          attributes: ['username'], // <== do we need any other attributes?
        },
        {
          model: Owned_Plants,
          attributes: ['username'], // <== Not entirely sure if this is correct
        }
      ],
    });

    // Serialize data so the template can read it
    const plants = plantData.map((plants) => plants.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      plants,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plants/:id', async (req, res) => { // <== not sure if '/plants' is the correct route yet
  try {
    const plantData = await Plants.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['username'],
        },
      ],
    });

    const plants = plantData.get({ plain: true });

    res.render('plants', {
      ...plants,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Plants }], // <== do we need to include Owned_Plants model?
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
