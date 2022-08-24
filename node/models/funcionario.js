const Sequelize = require('sequelize');
const database = require('../db');
 
const Funcionario = database.define('funcionario', {
    idFuncionario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeFuncionario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senhaFuncionario: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
 
module.exports = Funcionario;