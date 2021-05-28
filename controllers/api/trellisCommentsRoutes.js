const router = require('express').Router();
const { Trellis_Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// get one post from global posts list
router.get('/', withAuth, async (req, res) => {
    // find a single post by its `id`
    try {
        const commentsData = await Trellis_Comments.findByPk(req.params.id,);
        // if (!commentsData) {
        //     res.status(404).json({ message: 'No comments found.' });
        //     return;
        // }
        res.status(200).json(commentsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a comment to single post
router.post('/:id', withAuth, async (req, res) => {
    try {
        const newComment = await Trellis_Comments.create({
            comment: req.body.comment,
            post_id: req.params.id,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update given post in global posts list
router.put('/:id', withAuth, (req, res) => {
    Trellis_Comments.update(
        {
            comment: req.body.comment,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedComment) => {
            res.json(updatedComment);
        })
        .catch((err) => res.json(err));
});



// Delete a post from the global list
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentsData = await Trellis_Comments.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        // if (!commentsData) {
        //     res.status(404).json({ message: 'No comment found.' });
        //     return;
        // }

        res.status(200).json(commentsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
