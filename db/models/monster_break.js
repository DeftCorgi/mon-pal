const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_break', {
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
    flinch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wound: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sever: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extract: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_break',
    timestamps: false,
    indexes: [
      {
        name: "ix_monster_break_monster_id",
        fields: [
          { name: "monster_id" },
        ]
      },
    ]
  });
};
