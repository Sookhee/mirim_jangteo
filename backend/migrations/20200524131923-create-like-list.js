'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('like_lists', {
      member_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      liked_at: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('like_lists');
  }
};