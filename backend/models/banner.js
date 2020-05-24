'use strict';
module.exports = (sequelize, DataTypes) => {
  const banner = sequelize.define('banner', {
    banner_img: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {});
  banner.associate = function(models) {
    // associations can be defined here
  };
  return banner;
};