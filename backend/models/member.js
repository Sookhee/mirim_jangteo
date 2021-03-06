'use strict';
module.exports = (sequelize, DataTypes) => {
  const member = sequelize.define('member', {
    member_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sell_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {});
  member.associate = function(models) {
    // associations can be defined here
  };
  return member;
};