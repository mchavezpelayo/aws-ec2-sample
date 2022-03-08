const  {User,UserSchema}  = require('./user.model.last');
// const {  DataTypes } = require('sequelize');

function setupModels(sequelize) {

  User.init(UserSchema, User.config(sequelize));
  // User(sequelize);
}

module.exports = setupModels;
