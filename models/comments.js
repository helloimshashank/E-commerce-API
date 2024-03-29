'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comments.init({
    item_id: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    customer_name: DataTypes.STRING,
    comment_id: DataTypes.STRING,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};