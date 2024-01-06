const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('armorset_bonus_skill', {
    setbonus_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    required: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'armorset_bonus_skill',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_armorset_bonus_skill_1",
        unique: true,
        fields: [
          { name: "setbonus_id" },
          { name: "skilltree_id" },
        ]
      },
    ]
  });
};
