const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recipe_item', {
    recipe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'id'
      },
      unique: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recipe_item',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_recipe_item_1",
        unique: true,
        fields: [
          { name: "recipe_id" },
          { name: "item_id" },
        ]
      },
    ]
  });
};
