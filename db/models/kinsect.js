const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kinsect', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rarity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    previous_kinsect_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'kinsect',
        key: 'id'
      }
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe_item',
        key: 'recipe_id'
      }
    },
    attack_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dust_effect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    power: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    heal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    final: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kinsect',
    timestamps: false
  });
};
