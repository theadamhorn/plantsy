const router = require('express').Router();
const { Owned_Plants, Users } = require('../../models');
const withAuth = require('../../utils/auth');

// create plant in user's owned plants list
router.post('/owned-plants', withAuth, async (req, res) => {
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

// Get all plants from user's owned plants list
router.get('/owned-plants', async (req, res) => {
    // find all plants
    try {
        const ownedPlantsData = await Owned_Plants.findAll();
        res.status(200).json(ownedPlantsData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// get one plant from user's owned plants list
router.get('/owned-plants/:id', async (req, res) => {
    try {
        const ownedPlantsData = await Owned_Plants.findByPk(req.params.id, {
            include: [{ model: Users }]
        });
        if (!ownedPlantsData) {
            res.status(404).json({ message: 'No plant found.' });
            return;
        }
        res.status(200).json(ownedPlantsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update given plant in user's owned plants list
router.put('/owned-plants/:id', withAuth, (req, res) => {
    Owned_Plants.update(
        {
            genus: req.body.genus,
            species: req.body.species,
            variety: req.body.variety,
            common_name: req.body.common_name,
            watering: req.body.watering,
            temperature: req.body.temperature,
            humidity: req.body.humidity,
            light: req.body.light,
            description: req.body.description,
            care: req.body.care,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedOwnedPlants) => {
            res.json(updatedOwnedPlants);
        })
        .catch((err) => res.json(err));
});

// delete given plant from user's owned plants list
router.delete('/owned-plants/:id', withAuth, async (req, res) => {
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
