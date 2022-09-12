const Sequelize = require('sequelize');
const database = require('../db');
const Doador = require('./doador')
 
const Bolsa = database.define('bolsa', {
    idBolsa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idDoador: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Doador.belongsTo(Bolsa, {
    constraint: true,
    foreignKey: 'idDoador'
});
 
module.exports = Bolsa;