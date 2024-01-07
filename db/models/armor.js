const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armor', {
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
    rank: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    armor_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    armorset_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armorset',
        key: 'id'
      }
    },
    armorset_bonus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe_item',
        key: 'recipe_id'
      }
    },
    male: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    female: {
      type: DataTypes.BOOLEAN,
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
    defense_base: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defense_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defense_augment_max: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fire: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    water: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thunder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dragon: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'armor',
    timestamps: false
  });
};
