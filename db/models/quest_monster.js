const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quest_monster', {
    quest_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quest',
        key: 'id'
      },
      unique: true
    },
    monster_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'monster',
        key: 'id'
      },
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_objective: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quest_monster',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_quest_monster_1",
        unique: true,
        fields: [
          { name: "quest_id" },
          { name: "monster_id" },
        ]
      },
    ]
  });
};
