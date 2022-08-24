const Sequelize = require('sequelize');
const database = require('../db');
const Funcionario = require('./funcionario')

//TABELA DOADOR

const Doador = database.define('doadores', {
    idDoador: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeCompletoDoador: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    cpfDoador: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
    },
    sexoDoador: {
        type: Sequelize.STRING(1),
        allowNull: false
    },
    dataNascimentoDoador: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    tipoSanguineoDoador: {
        type: Sequelize.STRING(3),
        allowNull: false
    },
    pesoDoador: {
        type: Sequelize.STRING(3),
        allowNull: false
    },
    telefoneDoador: {
        type: Sequelize.STRING(14),
        allowNull: false
    },
    telefoneEmergenciaDoador: {
        type: Sequelize.STRING(14),
        allowNull: false
    }
}, {
    freezeTableName: true
})

// RELAÇÃO DOADOR - FUNCIONARIO

Doador.belongsTo(Funcionario, {
    constraint: true,
    foreignKey: 'idFuncionario'
})

module.exports = Doador;