'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {foreignKey: "AuthorId"})
      Product.belongsTo(models.Category, {foreignKey: "CategoryId", onDelete: "CASCADE"})
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    length: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    AuthorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};