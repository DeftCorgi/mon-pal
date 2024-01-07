const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "monster",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
      size: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      icon: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pitfall_trap: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      shock_trap: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      vine_trap: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      has_weakness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      has_alt_weakness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      weakness_fire: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_water: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_ice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_thunder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_dragon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_poison: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_sleep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_paralysis: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_blast: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weakness_stun: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_fire: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_water: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_ice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_thunder: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_dragon: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_poison: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_sleep: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_paralysis: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_blast: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alt_weakness_stun: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ailment_roar: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ailment_wind: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ailment_tremor: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ailment_defensedown: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_fireblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_waterblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_thunderblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_iceblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_dragonblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_blastblight: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_regional: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_poison: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_sleep: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_paralysis: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_bleed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_stun: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_mud: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ailment_effluvia: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      tableName: "monster",
      timestamps: false,
      indexes: [
        {
          name: "sqlite_autoindex_monster_1",
          unique: true,
          fields: [{ name: "order_id" }],
        },
      ],
    }
  );
};
