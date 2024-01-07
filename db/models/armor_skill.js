const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armor_skill', {
    armor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'armor',
        key: 'id'
      },
      unique: true
    },
    skilltree_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skilltree',
        key: 'id'
      },
      unique: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'armor_skill',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_armor_skill_1",
        unique: true,
        fields: [
          { name: "armor_id" },
          { name: "skilltree_id" },
        ]
      },
    ]
  });
};
