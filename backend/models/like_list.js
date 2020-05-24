'use strict';
module.exports = (sequelize, DataTypes) => {
  const like_list = sequelize.define('like_list', {
    member_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    liked_at: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  like_list.associate = function(models) {
    // associations can be defined here
  };
  return like_list;
};