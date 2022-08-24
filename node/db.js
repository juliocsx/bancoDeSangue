const Sequelize = require('sequelize');
const sequelize = new Sequelize('bancoSangue', 'postgres', 'jfcsql', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
})
 
module.exports = sequelize;