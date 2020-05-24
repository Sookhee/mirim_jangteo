'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    member_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_img: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    product_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};