const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantsRoutes = require('./plantsRoutes');
const ownedPlantsRoutes = require('./ownedPlantsRoutes');

router.use('/users', userRoutes);
router.use('/plants', plantsRoutes);
router.use('/ownedPlants', ownedPlantsRoutes);

module.exports = router;
