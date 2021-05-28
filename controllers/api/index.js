const router = require('express').Router();
const userRoutes = require('./userRoutes');
const plantsRoutes = require('./plantsRoutes');
const ownedPlantsRoutes = require('./ownedPlantsRoute');
const trellisPostsRoutes = require('./trellisPostRoutes');
const trellisCommentsRoutes = require('./trellisCommentsRoutes');

router.use('/users', userRoutes);
router.use('/plants', plantsRoutes);
router.use('/owned-plants', ownedPlantsRoutes);
router.use('/trellis', trellisPostsRoutes);
router.use('/comments', trellisCommentsRoutes); // << I don't know if we need this route since the comments will pass through the /trellis route

module.exports = router;
