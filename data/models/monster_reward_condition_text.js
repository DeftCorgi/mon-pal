const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_reward_condition_text', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    lang_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      },
      unique: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_reward_condition_text',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_monster_reward_condition_text_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "lang_id" },
        ]
      },
    ]
  });
};
