const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_reward', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    monster_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'monster',
        key: 'id'
      }
    },
    condition_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'monster_reward_condition_text',
        key: 'id'
      }
    },
    rank: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'id'
      }
    },
    stack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_reward',
    timestamps: false,
    indexes: [
      {
        name: "ix_monster_reward_monster_id",
        fields: [
          { name: "monster_id" },
        ]
      },
      {
        name: "ix_monster_reward_item_id",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
