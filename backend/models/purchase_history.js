'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchase_history = sequelize.define('purchase_history', {
    member_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  purchase_history.associate = function(models) {
    // associations can be defined here
  };
  return purchase_history;
};