const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weapon_ammo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deviation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    special_ammo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    normal1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    normal1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    normal2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    normal2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    normal3_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal3_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    normal3_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    normal3_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pierce1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pierce1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pierce2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pierce2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pierce3_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce3_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pierce3_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pierce3_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    spread1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    spread1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    spread2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    spread2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    spread3_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread3_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    spread3_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spread3_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sticky1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sticky1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sticky2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sticky2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sticky3_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky3_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sticky3_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sticky3_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cluster1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cluster1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cluster2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cluster2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cluster3_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster3_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cluster3_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cluster3_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recover1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recover1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    recover1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recover1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recover2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recover2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    recover2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recover2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    poison1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poison1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    poison1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poison1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    poison2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poison2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    poison2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poison2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paralysis1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paralysis1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    paralysis1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paralysis1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paralysis2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paralysis2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    paralysis2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paralysis2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sleep1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sleep1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sleep1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sleep1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sleep2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sleep2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sleep2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sleep2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exhaust1_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exhaust1_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    exhaust1_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exhaust1_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exhaust2_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exhaust2_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    exhaust2_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exhaust2_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flaming_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flaming_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    flaming_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    flaming_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    water_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    water_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    water_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    water_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    freeze_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    freeze_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    freeze_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    freeze_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thunder_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thunder_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    thunder_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thunder_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dragon_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dragon_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dragon_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dragon_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    slicing_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slicing_rapid: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    slicing_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slicing_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wyvern_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wyvern_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    demon_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    demon_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    demon_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    armor_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    armor_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    armor_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tranq_clip: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tranq_recoil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tranq_reload: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'weapon_ammo',
    timestamps: false
  });
};
