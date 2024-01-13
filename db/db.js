import { Sequelize, DataTypes } from "sequelize";
import sequelizeConfig from "./sequelize.config";

// Import models
import createLanguageModel from "./models/language";
import createMonsterModel from "./models/monster";
import createMonsterTextModel from "./models/monster_text";
import createMonsterHitzone from "./models/monster_hitzone";
import createMonsterHitzoneText from "./models/monster_hitzone_text";
import createMonsterReward from "./models/monster_reward";
import createMonsterRewardConditionText from "./models/monster_reward_condition_text";
import createItem from "./models/item";
import createItemText from "./models/item_text";

// Initialize models
const Language = createLanguageModel(sequelizeConfig, DataTypes);

const Monster = createMonsterModel(sequelizeConfig, DataTypes);
const MonsterText = createMonsterTextModel(sequelizeConfig, DataTypes);
const MonsterHitzone = createMonsterHitzone(sequelizeConfig, DataTypes);
const MonsterHitzoneText = createMonsterHitzoneText(sequelizeConfig, DataTypes);
const MonsterReward = createMonsterReward(sequelizeConfig, DataTypes);
const MonsterRewardConditionText = createMonsterRewardConditionText(
  sequelizeConfig,
  DataTypes
);
const Item = createItem(sequelizeConfig, DataTypes);
const ItemText = createItemText(sequelizeConfig, DataTypes);

// Initialize associations
Monster.hasMany(MonsterText);
MonsterText.belongsTo(Monster);

Monster.hasMany(MonsterHitzone);
MonsterHitzone.belongsTo(Monster);

Monster.hasMany(MonsterReward);
MonsterReward.belongsTo(Monster);

MonsterHitzone.hasMany(MonsterHitzoneText);
MonsterHitzoneText.belongsTo(MonsterHitzone);

MonsterReward.hasMany(MonsterRewardConditionText, {
  foreignKey: "condition_id",
  sourceKey: "condition_id",
});
MonsterReward.belongsTo(Item);
MonsterRewardConditionText.belongsTo(MonsterReward, {
  foreignKey: "condition_id",
  targetKey: "condition_id",
});

Item.hasMany(ItemText);
ItemText.belongsTo(Item, { foreignKey: "item_id" });

export {
  Language,
  Monster,
  MonsterText,
  MonsterHitzone,
  MonsterHitzoneText,
  MonsterReward,
  MonsterRewardConditionText,
  Item,
  ItemText,
};
