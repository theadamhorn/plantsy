const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FileTest extends Model {}

FileTest.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
            }
      },
    file: {

      }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'FileTest',
    })

module.exports = FileTest;