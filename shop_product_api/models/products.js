'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    shop_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    stock: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};