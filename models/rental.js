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
      Rental.belongsTo(models.User)
      Rental.belongsTo(models.Dress)
    }
  }
  Rental.init({
    UserId: {
      type : DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
    DressId: {
      type : DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};