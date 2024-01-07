const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skilltree', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    max_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon_color: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secret: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unlocks_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skilltree',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'skilltree',
    timestamps: false
  });
};
