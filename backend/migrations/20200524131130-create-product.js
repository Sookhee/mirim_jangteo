'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_img: {
        type: Sequelize.BLOB,
        allowNull: false
      },
      product_count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};