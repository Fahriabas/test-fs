'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {foreignKey: "CategoryId"})
      Category.belongsToMany(models.User, {
        through: models.Product,
        foreignKey: "CategoryId",
        otherKey: "AuthorId"
      })
    }
  }
  Category.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};