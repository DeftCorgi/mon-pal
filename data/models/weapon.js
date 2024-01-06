const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon', {
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
    weapon_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rarity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    previous_weapon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'weapon',
        key: 'id'
      }
    },
    create_recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe_item',
        key: 'recipe_id'
      }
    },
    upgrade_recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe_item',
        key: 'recipe_id'
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attack_true: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    affinity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defense: {
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
    element1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    element1_attack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    element2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    element2_attack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    element_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    elderseal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sharpness: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sharpness_maxed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    craftable: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    final: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    kinsect_bonus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phial_power: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shelling: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shelling_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coating_close: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coating_power: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coating_paralysis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coating_poison: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coating_sleep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coating_blast: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ammo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'weapon_ammo',
        key: 'id'
      }
    },
    armorset_bonus_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'weapon',
    timestamps: false
  });
};
