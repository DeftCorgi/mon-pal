const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_text', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'monster',
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
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ecology: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    alt_state_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_text',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_monster_text_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "lang_id" },
        ]
      },
    ]
  });
};
