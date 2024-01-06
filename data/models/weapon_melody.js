const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon_melody', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    base_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    base_extension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    m1_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    m1_extension: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    m2_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    m2_extension: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'weapon_melody',
    timestamps: false
  });
};
