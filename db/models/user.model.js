const {  DataTypes,Sequelize } = require('sequelize');

const USER_TABLE = 'users';

module.exports = (sequelize)=>{
  let user = sequelize.define('User',{
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.NOW
    }
  });
  return user;
};