'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {foreignKey: "AuthorId"})
      User.belongsToMany(models.Category, {
        through: models.Product,
        foreignKey: "AuthorId",
        otherKey: "CategoryId",
        onDelete: "CASCADE"
      })
      
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        min: 5
      }
    },
    role: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    if(user.password){
      user.password = hashPassword(user.password)
    }
    if(!user.role){
      user.role = 'Admin'
    }
  })
  return User;
};