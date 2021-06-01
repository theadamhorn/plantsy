const router = require('express').Router();
const { Trellis_Posts, Trellis_Comments, Users } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts from global list
router.get('/', withAuth, async (req, res) => {
    // find all posts
    try {
        const postsData = await Trellis_Posts.findAll({

            include: [
                {
                    model: Trellis_Comments
                },
                {
                    model: Users,
                    attributes: { exclude: ['password'] },
                }],
            order: [
                [
                    'created_at', 'DESC'
                ]
            ]
        });
        console.log(postsData);
        return res.status(200).json(postsData);
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }

});

// get one post from global posts list
router.get('/:id', async (req, res) => {
    // find a single post by its `id`
    try {
        const postsData = await Trellis_Posts.findByPk(req.params.id,);


        if (!postsData) {
            res.status(404).json({ message: 'No post found.' });
            return;
        }
        res.status(200).json(postsData);
    } catch (err) {
        res.status(500).json(err);
    }
});



// update given post in global posts list
router.put('/:id', withAuth, (req, res) => {
    Trellis_Posts.update(
        {
            title: req.body.title,
            body: req.body.body,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedPost) => {
            res.json(updatedPost);
        })
        .catch((err) => res.json(err));
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
    console.log('Route getting hit');
    try {
        const newPost = await Trellis_Posts.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        });
        console.log(newPost);
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a post from the global list
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postsData = await Trellis_Posts.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postsData) {
            res.status(404).json({ message: 'No post found.' });
            return;
        }

        res.status(200).json(postsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
