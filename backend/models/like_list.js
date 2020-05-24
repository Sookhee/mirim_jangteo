'use strict';
module.exports = (sequelize, DataTypes) => {
  const like_list = sequelize.define('like_list', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  like_list.associate = function(models) {
    // associations can be defined here
  };
  return like_list;
};