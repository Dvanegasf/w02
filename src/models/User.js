const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const Car = sequelize.define('car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(100),
        allowNull: false

    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    color: {
        type: DataTypes.STRING(100),
        allowNull: false

    }
});

module.exports = Car;