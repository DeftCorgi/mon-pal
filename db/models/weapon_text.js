const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "weapon_text",
    {
      weapon_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "weapon",
          key: "id",
        },
        unique: true,
      },
      lang_id: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
          model: "language",
          key: "id",
        },
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "weapon_text",
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_weapon_text_1",
          unique: true,
          fields: [{ name: "id" }, { name: "lang_id" }],
        },
      ],
    }
  );
};
