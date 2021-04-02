const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantsRoutes = require('./plantsRoutes');
const ownedPlantsRoutes = require('./ownedPlantsRoute');

router.use('/users', userRoutes);
router.use('/plants', plantsRoutes);
router.use('/owned-plants', ownedPlantsRoutes);

module.exports = router;
