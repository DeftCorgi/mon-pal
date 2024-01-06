const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charm_skill', {
    charm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'charm',
        key: 'id'
      },
      unique: true
    },
    skilltree_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skilltree',
        key: 'id'
      },
      unique: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'charm_skill',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_charm_skill_1",
        unique: true,
        fields: [
          { name: "charm_id" },
          { name: "skilltree_id" },
        ]
      },
    ]
  });
};
