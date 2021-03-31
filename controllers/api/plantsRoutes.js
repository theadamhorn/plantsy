const router = require('express').Router();
const { Plants } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all plants from global list
router.get('/plants', async (req, res) => {
    // find all plants
    try {
        const plantsData = await Plants.findAll();
        res.status(200).json(plantsData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// get one plant from global plant list
router.get('/plants/:id', async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    try {
        const plantsData = await Plants.findByPk(req.params.id, {
            include: [{ model: Category }, { model: Tag }]
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


// update given plant in global plant list
router.put('/plants/:id', withAuth, (req, res) => {
    Plants.update(
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
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedPlants) => {
            res.json(updatedPlants);
        })
        .catch((err) => res.json(err));
});


// Create a plant to the global list
router.post('/plants', withAuth, async (req, res) => {
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

// Delete a plant from the global list
router.delete('/plants/:id', withAuth, async (req, res) => {
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
