const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_break_text', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'monster_break',
        key: 'id'
      },
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
    part_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_break_text',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_monster_break_text_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "lang_id" },
        ]
      },
    ]
  });
};
