const { Sequelize } = require('sequelize');
const setupModels = require('./../db/models');

const sequelize = new Sequelize('sample', '', 'admin', {
  host: 'localhost',
  dialect: 'postgres', 
  pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
  },
  logging: false
});

setupModels(sequelize);
sequelize.sync();


module.exports = sequelize;
