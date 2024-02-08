const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "quest",
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      category: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      rank: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stars_raw: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quest_type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "location_text",
          key: "id",
        },
      },
      zenny: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: "quest",
      timestamps: false,
    }
  );
};
