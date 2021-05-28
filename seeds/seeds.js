const sequelize = require('../config/connection');
const { Owned_Plants, Plants, Users, Trellis_Posts, Trellis_Comments } = require('../models');

const PlantsData = require('./PlantsData.json');
const UsersData = require('./UsersData.json');
const OwnedPlantsData = require('./OwnedPlantsData');
const TrellisPostsData = require('./TrellisPostsData');
const TrellisCommentsData = require('./TrellisCommentsData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await Plants.bulkCreate(PlantsData);

        await Users.bulkCreate(UsersData, {
            individualHooks: true,
            returning: true,
        });

        await Owned_Plants.bulkCreate(OwnedPlantsData);

        await Trellis_Posts.bulkCreate(TrellisPostsData);

        // await Trellis_Comments.bulkCreate(TrellisCommentsData);


    } catch (error) {
        console.log(error);
    }
    process.exit(0);
}

seedAll();