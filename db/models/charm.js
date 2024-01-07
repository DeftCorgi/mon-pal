const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charm', {
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
    rarity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    previous_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'charm',
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
    }
  }, {
    sequelize,
    tableName: 'charm',
    timestamps: false
  });
};
