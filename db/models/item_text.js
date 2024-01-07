const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "item_text",
    {
      item_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "item",
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
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "item_text",
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_item_text_1",
          unique: true,
          fields: [{ name: "id" }, { name: "lang_id" }],
        },
      ],
    }
  );
};
