const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tool', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tool_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration_upgraded: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recharge: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slot_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slot_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slot_3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon_color: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tool',
    timestamps: false
  });
};
