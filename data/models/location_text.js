const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location_text', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lang_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      },
      unique: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location_text',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_location_text_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "lang_id" },
        ]
      },
    ]
  });
};
