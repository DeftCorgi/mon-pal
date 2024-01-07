const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monster_habitat', {
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
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'location_text',
        key: 'id'
      }
    },
    start_area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    move_area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rest_area: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monster_habitat',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_monster_habitat_1",
        unique: true,
        fields: [
          { name: "monster_id" },
          { name: "location_id" },
        ]
      },
      {
        name: "ix_monster_habitat_monster_id",
        fields: [
          { name: "monster_id" },
        ]
      },
      {
        name: "ix_monster_habitat_location_id",
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
