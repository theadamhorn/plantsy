const router = require('express').Router();
const { Plants } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPlants = await Plants.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPlants);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const plantsData = await Plants.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!plantsData) {
            res.status(404).json({ message: 'No plant found.' });
            return;
        }

        res.status(200).json(plantsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
