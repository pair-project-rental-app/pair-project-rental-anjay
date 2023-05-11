'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Rental.hasMany(models.User)
      Rental.hasMany(models.Dress)
    }
  }
  Rental.init({
    UserId: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    },
    DressId: DataTypes.INTEGER,
    references: {
      model: 'Dresses',
      key: 'id'
    }
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};