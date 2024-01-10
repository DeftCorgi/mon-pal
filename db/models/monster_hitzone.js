const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "monster_hitzone",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      monster_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "monster",
          key: "id",
        },
      },
      cut: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      impact: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      shot: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fire: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      water: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      thunder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dragon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ko: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: "monster_hitzone",
      timestamps: false,
      indexes: [
        {
          name: "ix_monster_hitzone_monster_id",
          fields: [{ name: "monster_id" }],
        },
      ],
    }
  );
};
