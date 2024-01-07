const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "monster_text",
    {
      monster_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "monster",
          key: "id",
        },
      },
      lang_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "language",
          key: "id",
        },
        unique: false,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ecology: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      alt_state_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: "monster_text",
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_monster_text_1",
          unique: true,
          fields: [{ name: "monster_id" }, { name: "lang_id" }],
        },
      ],
    }
  );
};
