'use strict';
const bcrypt = require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Dress)
      User.hasOne(models.Profile)
      User.hasMany(models.Rental)

    }
    
  }
  User.init({
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: "username is required"},
        notNull: {msg: "username is required"}
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: "email is required"},
        notNull: {msg: "email is required"},
        isEmail: {
          msg: "email format is incorrect"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: "password is required"},
        notNull: {msg: "password is required"},
        len : {
          args:[4],
          msg:`Password must be minimum 4 characters`
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
User.beforeCreate(model =>{
  model.password = bcrypt.hashSync(model.password, 12)
})
  return User;
};