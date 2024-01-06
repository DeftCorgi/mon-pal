const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language', {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_complete: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'language',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_language_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
