const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charm_text', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'charm',
        key: 'id'
      },
      unique: true
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
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'charm_text',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_charm_text_1",
        unique: true,
        fields: [
          { name: "id" },
          { name: "lang_id" },
        ]
      },
    ]
  });
};
