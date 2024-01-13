const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "item",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      subcategory: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      rarity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      buy_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sell_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      carry_limit: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      icon_name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icon_color: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: "item",
      timestamps: false,
    }
  );
};
