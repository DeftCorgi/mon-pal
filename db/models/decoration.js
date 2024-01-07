const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('decoration', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rarity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    icon_color: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    skilltree_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skilltree',
        key: 'id'
      }
    },
    skilltree_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skilltree2_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'skilltree',
        key: 'id'
      }
    },
    skilltree2_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mysterious_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    glowing_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worn_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    warped_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ancient_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    carved_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    sealed_feystone_percent: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'decoration',
    timestamps: false
  });
};
