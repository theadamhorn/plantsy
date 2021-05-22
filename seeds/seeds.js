const sequelize = require('../config/connection');
const { Owned_Plants } = require('../models');
const { Plants } = require('../models');
const { Users } = require('../models');

const PlantsData = require('./PlantsData.json');
const UsersData = require('./UsersData.json');
const OwnedPlantsData = require('./OwnedPlantsData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await Plants.bulkCreate(PlantsData);

        await Users.bulkCreate(UsersData, {
            individualHooks: true,
            returning: true,
        });

        await Owned_Plants.bulkCreate(OwnedPlantsData);


    } catch (error) {
        console.log(error);
    }
    process.exit(0);
}

seedAll();