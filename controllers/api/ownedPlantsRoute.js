const router = require('express').Router();
const { Owned_Plants } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newOwnedPlants = await Owned_Plants.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newOwnedPlants);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const ownedPlantsData = await Owned_Plants.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!ownedPlantsData) {
            res.status(404).json({ message: 'No owned plant found.' });
            return;
        }

        res.status(200).json(ownedPlantsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
