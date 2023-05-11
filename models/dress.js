'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dress.hasMany(models.Rental)
    }
    static getPrice(priceNow){
      console.log(priceNow);
      // if(priceNow){
      //     // option.where.order =  [price, "ASC"]
      //     return Dress.findAll({
      //       order: [[this.price, priceNow ]]
      //     });
      // }
      let order = [["price", "DESC"]];
      if (priceNow === "DESC"|| !priceNow) {
        console.log("test masuk desc");
        return Dress.findAll({
          order: order
        });
      }else if(priceNow === "ASC"|| !priceNow){
        order = [["price", "ASC"]];
        console.log("test masuk asc");
        return Dress.findAll({
          order: order
        });
      }
    }
  }
  Dress.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    price: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dress',
  });
  return Dress;
};