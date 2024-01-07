const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quest_reward', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quest_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'quest',
        key: 'id'
      }
    },
    group: {
      type: DataTypes.STRING(1),
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
    tableName: 'quest_reward',
    timestamps: false,
    indexes: [
      {
        name: "ix_quest_reward_quest_id",
        fields: [
          { name: "quest_id" },
        ]
      },
      {
        name: "ix_quest_reward_item_id",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
