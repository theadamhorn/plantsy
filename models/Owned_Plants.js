const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Owned_Plants extends Model {}

Owned_Plants.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    plant_name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    care: {
        type: DataTypes.STRING,

    }
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Owned_Plants',
    }
);

module.exports = Owned_Plants;
