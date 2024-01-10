import { Sequelize, DataTypes } from "sequelize";
import sequelizeConfig from "./sequelize.config";

// Import models
import createLanguageModel from "./models/language";
import createMonsterModel from "./models/monster";
import createMonsterTextModel from "./models/monster_text";
import createMonsterHitzone from "./models/monster_hitzone";
import createMonsterHitzoneText from "./models/monster_hitzone_text";

// Initialize models
const Language = createLanguageModel(sequelizeConfig, DataTypes);

const Monster = createMonsterModel(sequelizeConfig, DataTypes);
const MonsterText = createMonsterTextModel(sequelizeConfig, DataTypes);
const MonsterHitzone = createMonsterHitzone(sequelizeConfig, DataTypes);
const MonsterHitzoneText = createMonsterHitzoneText(sequelizeConfig, DataTypes);

// Initialize associations
Monster.hasMany(MonsterText);
MonsterText.belongsTo(Monster);

Monster.hasMany(MonsterHitzone);
MonsterHitzone.belongsTo(Monster);

MonsterHitzone.hasMany(MonsterHitzoneText);
MonsterHitzoneText.belongsTo(MonsterHitzone);

export { Language, Monster, MonsterText, MonsterHitzone, MonsterHitzoneText };
