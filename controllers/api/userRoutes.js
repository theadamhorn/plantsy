const router = require('express').Router();
const { Users } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {

    try {
        // Find the logged in user based on the session ID
        const userData = await Users.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData)
    } catch (err) {
        console.log(`hit an error of doom!!!! ~~~~~~~ wooohooo!`);
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    console.log(`You've reached here-------~~~~~~~!`)
    try {
        const userData = await Users.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    };

});

router.post('/', async (req, res) => {
    console.log(`hit login route!!!! ~~~~~~~ wooohooo!`)
    console.log(req.body)
    // console.log(req.body.password)
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });

        console.log(userData)

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect login information, please try again' });
            console.log("Wrong Information");
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect login information, please try again' });
            console.log("Wrong Information");
            return;
        }


        req.session.save(() => {
            req.session.user_id = userData.id;
            // req.session.username = 
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
            console.log("**************** \n Login Success \n ***************")
        });



    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
