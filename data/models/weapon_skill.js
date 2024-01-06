const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon_skill', {
    weapon_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'weapon',
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
    tableName: 'weapon_skill',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_weapon_skill_1",
        unique: true,
        fields: [
          { name: "weapon_id" },
          { name: "skilltree_id" },
        ]
      },
    ]
  });
};
