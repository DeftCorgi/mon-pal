import { Sequelize, DataTypes } from "sequelize";
import sequelizeConfig from "./sequelize.config";

// Import models
import createLanguageModel from "./models/language";
import createMonsterModel from "./models/monster";
import createMonsterTextModel from "./models/monster_text";

// Initialize models
const Language = createLanguageModel(sequelizeConfig, DataTypes);

const Monster = createMonsterModel(sequelizeConfig, DataTypes);
const MonsterText = createMonsterTextModel(sequelizeConfig, DataTypes);

// Initialize associations
Monster.hasMany(MonsterText);
MonsterText.belongsTo(Monster);

export { Language, Monster, MonsterText };
