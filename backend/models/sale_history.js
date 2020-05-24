'use strict';
module.exports = (sequelize, DataTypes) => {
  const sale_history = sequelize.define('sale_history', {
    member_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  sale_history.associate = function(models) {
    // associations can be defined here
  };
  return sale_history;
};