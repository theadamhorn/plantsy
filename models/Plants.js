const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plants extends Model {}

Plants.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      plant_name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Plants',
    }
);
module.exports = Plants;
