const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon_melody_notes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'weapon_melody',
        key: 'id'
      },
      unique: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true
    }
  }, {
    sequelize,
    tableName: 'weapon_melody_notes',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_weapon_melody_notes_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "notes" },
        ]
      },
    ]
  });
};
