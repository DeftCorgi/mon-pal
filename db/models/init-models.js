var DataTypes = require("sequelize").DataTypes;
var _armor = require("./armor");
var _armor_skill = require("./armor_skill");
var _armor_text = require("./armor_text");
var _armorset = require("./armorset");
var _armorset_bonus_skill = require("./armorset_bonus_skill");
var _armorset_bonus_text = require("./armorset_bonus_text");
var _armorset_text = require("./armorset_text");
var _charm = require("./charm");
var _charm_skill = require("./charm_skill");
var _charm_text = require("./charm_text");
var _decoration = require("./decoration");
var _decoration_text = require("./decoration_text");
var _item = require("./item");
var _item_combination = require("./item_combination");
var _item_text = require("./item_text");
var _kinsect = require("./kinsect");
var _kinsect_text = require("./kinsect_text");
var _language = require("./language");
var _location_camp_text = require("./location_camp_text");
var _location_item = require("./location_item");
var _location_text = require("./location_text");
var _monster = require("./monster");
var _monster_break = require("./monster_break");
var _monster_break_text = require("./monster_break_text");
var _monster_habitat = require("./monster_habitat");
var _monster_hitzone = require("./monster_hitzone");
var _monster_hitzone_text = require("./monster_hitzone_text");
var _monster_reward = require("./monster_reward");
var _monster_reward_condition_text = require("./monster_reward_condition_text");
var _monster_text = require("./monster_text");
var _quest = require("./quest");
var _quest_monster = require("./quest_monster");
var _quest_reward = require("./quest_reward");
var _quest_text = require("./quest_text");
var _recipe_item = require("./recipe_item");
var _skill = require("./skill");
var _skilltree = require("./skilltree");
var _skilltree_text = require("./skilltree_text");
var _tool = require("./tool");
var _tool_text = require("./tool_text");
var _weapon = require("./weapon");
var _weapon_ammo = require("./weapon_ammo");
var _weapon_melody = require("./weapon_melody");
var _weapon_melody_notes = require("./weapon_melody_notes");
var _weapon_melody_text = require("./weapon_melody_text");
var _weapon_skill = require("./weapon_skill");
var _weapon_text = require("./weapon_text");

function initModels(sequelize) {
  var armor = _armor(sequelize, DataTypes);
  var armor_skill = _armor_skill(sequelize, DataTypes);
  var armor_text = _armor_text(sequelize, DataTypes);
  var armorset = _armorset(sequelize, DataTypes);
  var armorset_bonus_skill = _armorset_bonus_skill(sequelize, DataTypes);
  var armorset_bonus_text = _armorset_bonus_text(sequelize, DataTypes);
  var armorset_text = _armorset_text(sequelize, DataTypes);
  var charm = _charm(sequelize, DataTypes);
  var charm_skill = _charm_skill(sequelize, DataTypes);
  var charm_text = _charm_text(sequelize, DataTypes);
  var decoration = _decoration(sequelize, DataTypes);
  var decoration_text = _decoration_text(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var item_combination = _item_combination(sequelize, DataTypes);
  var item_text = _item_text(sequelize, DataTypes);
  var kinsect = _kinsect(sequelize, DataTypes);
  var kinsect_text = _kinsect_text(sequelize, DataTypes);
  var language = _language(sequelize, DataTypes);
  var location_camp_text = _location_camp_text(sequelize, DataTypes);
  var location_item = _location_item(sequelize, DataTypes);
  var location_text = _location_text(sequelize, DataTypes);
  var monster = _monster(sequelize, DataTypes);
  var monster_break = _monster_break(sequelize, DataTypes);
  var monster_break_text = _monster_break_text(sequelize, DataTypes);
  var monster_habitat = _monster_habitat(sequelize, DataTypes);
  var monster_hitzone = _monster_hitzone(sequelize, DataTypes);
  var monster_hitzone_text = _monster_hitzone_text(sequelize, DataTypes);
  var monster_reward = _monster_reward(sequelize, DataTypes);
  var monster_reward_condition_text = _monster_reward_condition_text(sequelize, DataTypes);
  var monster_text = _monster_text(sequelize, DataTypes);
  var quest = _quest(sequelize, DataTypes);
  var quest_monster = _quest_monster(sequelize, DataTypes);
  var quest_reward = _quest_reward(sequelize, DataTypes);
  var quest_text = _quest_text(sequelize, DataTypes);
  var recipe_item = _recipe_item(sequelize, DataTypes);
  var skill = _skill(sequelize, DataTypes);
  var skilltree = _skilltree(sequelize, DataTypes);
  var skilltree_text = _skilltree_text(sequelize, DataTypes);
  var tool = _tool(sequelize, DataTypes);
  var tool_text = _tool_text(sequelize, DataTypes);
  var weapon = _weapon(sequelize, DataTypes);
  var weapon_ammo = _weapon_ammo(sequelize, DataTypes);
  var weapon_melody = _weapon_melody(sequelize, DataTypes);
  var weapon_melody_notes = _weapon_melody_notes(sequelize, DataTypes);
  var weapon_melody_text = _weapon_melody_text(sequelize, DataTypes);
  var weapon_skill = _weapon_skill(sequelize, DataTypes);
  var weapon_text = _weapon_text(sequelize, DataTypes);

  armor_skill.belongsTo(armor, { as: "armor", foreignKey: "armor_id"});
  armor.hasMany(armor_skill, { as: "armor_skills", foreignKey: "armor_id"});
  armor_text.belongsTo(armor, { as: "id_armor", foreignKey: "id"});
  armor.hasMany(armor_text, { as: "armor_texts", foreignKey: "id"});
  armor.belongsTo(armorset, { as: "armorset", foreignKey: "armorset_id"});
  armorset.hasMany(armor, { as: "armors", foreignKey: "armorset_id"});
  armorset_text.belongsTo(armorset, { as: "id_armorset", foreignKey: "id"});
  armorset.hasMany(armorset_text, { as: "armorset_texts", foreignKey: "id"});
  charm.belongsTo(charm, { as: "previou", foreignKey: "previous_id"});
  charm.hasMany(charm, { as: "charms", foreignKey: "previous_id"});
  charm_skill.belongsTo(charm, { as: "charm", foreignKey: "charm_id"});
  charm.hasMany(charm_skill, { as: "charm_skills", foreignKey: "charm_id"});
  charm_text.belongsTo(charm, { as: "id_charm", foreignKey: "id"});
  charm.hasMany(charm_text, { as: "charm_texts", foreignKey: "id"});
  decoration_text.belongsTo(decoration, { as: "id_decoration", foreignKey: "id"});
  decoration.hasMany(decoration_text, { as: "decoration_texts", foreignKey: "id"});
  item_combination.belongsTo(item, { as: "second", foreignKey: "second_id"});
  item.hasMany(item_combination, { as: "item_combinations", foreignKey: "second_id"});
  item_combination.belongsTo(item, { as: "first", foreignKey: "first_id"});
  item.hasMany(item_combination, { as: "first_item_combinations", foreignKey: "first_id"});
  item_combination.belongsTo(item, { as: "result", foreignKey: "result_id"});
  item.hasMany(item_combination, { as: "result_item_combinations", foreignKey: "result_id"});
  item_text.belongsTo(item, { as: "id_item", foreignKey: "id"});
  item.hasMany(item_text, { as: "item_texts", foreignKey: "id"});
  location_item.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(location_item, { as: "location_items", foreignKey: "item_id"});
  monster_reward.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(monster_reward, { as: "monster_rewards", foreignKey: "item_id"});
  quest_reward.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(quest_reward, { as: "quest_rewards", foreignKey: "item_id"});
  recipe_item.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(recipe_item, { as: "recipe_items", foreignKey: "item_id"});
  kinsect.belongsTo(kinsect, { as: "previous_kinsect", foreignKey: "previous_kinsect_id"});
  kinsect.hasMany(kinsect, { as: "kinsects", foreignKey: "previous_kinsect_id"});
  kinsect_text.belongsTo(kinsect, { as: "id_kinsect", foreignKey: "id"});
  kinsect.hasMany(kinsect_text, { as: "kinsect_texts", foreignKey: "id"});
  armor_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(armor_text, { as: "armor_texts", foreignKey: "lang_id"});
  armorset_bonus_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(armorset_bonus_text, { as: "armorset_bonus_texts", foreignKey: "lang_id"});
  armorset_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(armorset_text, { as: "armorset_texts", foreignKey: "lang_id"});
  charm_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(charm_text, { as: "charm_texts", foreignKey: "lang_id"});
  decoration_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(decoration_text, { as: "decoration_texts", foreignKey: "lang_id"});
  item_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(item_text, { as: "item_texts", foreignKey: "lang_id"});
  kinsect_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(kinsect_text, { as: "kinsect_texts", foreignKey: "lang_id"});
  location_camp_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(location_camp_text, { as: "location_camp_texts", foreignKey: "lang_id"});
  location_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(location_text, { as: "location_texts", foreignKey: "lang_id"});
  monster_break_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(monster_break_text, { as: "monster_break_texts", foreignKey: "lang_id"});
  monster_hitzone_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(monster_hitzone_text, { as: "monster_hitzone_texts", foreignKey: "lang_id"});
  monster_reward_condition_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(monster_reward_condition_text, { as: "monster_reward_condition_texts", foreignKey: "lang_id"});
  monster_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(monster_text, { as: "monster_texts", foreignKey: "lang_id"});
  quest_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(quest_text, { as: "quest_texts", foreignKey: "lang_id"});
  skill.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(skill, { as: "skills", foreignKey: "lang_id"});
  skilltree_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(skilltree_text, { as: "skilltree_texts", foreignKey: "lang_id"});
  tool_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(tool_text, { as: "tool_texts", foreignKey: "lang_id"});
  weapon_melody_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(weapon_melody_text, { as: "weapon_melody_texts", foreignKey: "lang_id"});
  weapon_text.belongsTo(language, { as: "lang", foreignKey: "lang_id"});
  language.hasMany(weapon_text, { as: "weapon_texts", foreignKey: "lang_id"});
  location_camp_text.belongsTo(location_text, { as: "location", foreignKey: "location_id"});
  location_text.hasMany(location_camp_text, { as: "location_camp_texts", foreignKey: "location_id"});
  location_item.belongsTo(location_text, { as: "location", foreignKey: "location_id"});
  location_text.hasMany(location_item, { as: "location_items", foreignKey: "location_id"});
  monster_habitat.belongsTo(location_text, { as: "location", foreignKey: "location_id"});
  location_text.hasMany(monster_habitat, { as: "monster_habitats", foreignKey: "location_id"});
  quest.belongsTo(location_text, { as: "location", foreignKey: "location_id"});
  location_text.hasMany(quest, { as: "quests", foreignKey: "location_id"});
  armorset.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(armorset, { as: "armorsets", foreignKey: "monster_id"});
  monster_break.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(monster_break, { as: "monster_breaks", foreignKey: "monster_id"});
  monster_habitat.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(monster_habitat, { as: "monster_habitats", foreignKey: "monster_id"});
  monster_hitzone.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(monster_hitzone, { as: "monster_hitzones", foreignKey: "monster_id"});
  monster_reward.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(monster_reward, { as: "monster_rewards", foreignKey: "monster_id"});
  monster_text.belongsTo(monster, { as: "id_monster", foreignKey: "id"});
  monster.hasMany(monster_text, { as: "monster_texts", foreignKey: "id"});
  quest_monster.belongsTo(monster, { as: "monster", foreignKey: "monster_id"});
  monster.hasMany(quest_monster, { as: "quest_monsters", foreignKey: "monster_id"});
  monster_break_text.belongsTo(monster_break, { as: "id_monster_break", foreignKey: "id"});
  monster_break.hasMany(monster_break_text, { as: "monster_break_texts", foreignKey: "id"});
  monster_hitzone_text.belongsTo(monster_hitzone, { as: "id_monster_hitzone", foreignKey: "id"});
  monster_hitzone.hasMany(monster_hitzone_text, { as: "monster_hitzone_texts", foreignKey: "id"});
  monster_reward.belongsTo(monster_reward_condition_text, { as: "condition", foreignKey: "condition_id"});
  monster_reward_condition_text.hasMany(monster_reward, { as: "monster_rewards", foreignKey: "condition_id"});
  quest_monster.belongsTo(quest, { as: "quest", foreignKey: "quest_id"});
  quest.hasMany(quest_monster, { as: "quest_monsters", foreignKey: "quest_id"});
  quest_reward.belongsTo(quest, { as: "quest", foreignKey: "quest_id"});
  quest.hasMany(quest_reward, { as: "quest_rewards", foreignKey: "quest_id"});
  quest_text.belongsTo(quest, { as: "id_quest", foreignKey: "id"});
  quest.hasMany(quest_text, { as: "quest_texts", foreignKey: "id"});
  armor.belongsTo(recipe_item, { as: "recipe", foreignKey: "recipe_id"});
  recipe_item.hasMany(armor, { as: "armors", foreignKey: "recipe_id"});
  charm.belongsTo(recipe_item, { as: "recipe", foreignKey: "recipe_id"});
  recipe_item.hasMany(charm, { as: "charms", foreignKey: "recipe_id"});
  kinsect.belongsTo(recipe_item, { as: "recipe", foreignKey: "recipe_id"});
  recipe_item.hasMany(kinsect, { as: "kinsects", foreignKey: "recipe_id"});
  weapon.belongsTo(recipe_item, { as: "upgrade_recipe", foreignKey: "upgrade_recipe_id"});
  recipe_item.hasMany(weapon, { as: "weapons", foreignKey: "upgrade_recipe_id"});
  weapon.belongsTo(recipe_item, { as: "create_recipe", foreignKey: "create_recipe_id"});
  recipe_item.hasMany(weapon, { as: "create_recipe_weapons", foreignKey: "create_recipe_id"});
  armor_skill.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(armor_skill, { as: "armor_skills", foreignKey: "skilltree_id"});
  armorset_bonus_skill.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(armorset_bonus_skill, { as: "armorset_bonus_skills", foreignKey: "skilltree_id"});
  charm_skill.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(charm_skill, { as: "charm_skills", foreignKey: "skilltree_id"});
  decoration.belongsTo(skilltree, { as: "skilltree2", foreignKey: "skilltree2_id"});
  skilltree.hasMany(decoration, { as: "decorations", foreignKey: "skilltree2_id"});
  decoration.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(decoration, { as: "skilltree_decorations", foreignKey: "skilltree_id"});
  skill.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(skill, { as: "skills", foreignKey: "skilltree_id"});
  skilltree.belongsTo(skilltree, { as: "unlock", foreignKey: "unlocks_id"});
  skilltree.hasMany(skilltree, { as: "skilltrees", foreignKey: "unlocks_id"});
  skilltree_text.belongsTo(skilltree, { as: "id_skilltree", foreignKey: "id"});
  skilltree.hasMany(skilltree_text, { as: "skilltree_texts", foreignKey: "id"});
  weapon_skill.belongsTo(skilltree, { as: "skilltree", foreignKey: "skilltree_id"});
  skilltree.hasMany(weapon_skill, { as: "weapon_skills", foreignKey: "skilltree_id"});
  tool_text.belongsTo(tool, { as: "id_tool", foreignKey: "id"});
  tool.hasMany(tool_text, { as: "tool_texts", foreignKey: "id"});
  weapon.belongsTo(weapon, { as: "previous_weapon", foreignKey: "previous_weapon_id"});
  weapon.hasMany(weapon, { as: "weapons", foreignKey: "previous_weapon_id"});
  weapon_skill.belongsTo(weapon, { as: "weapon", foreignKey: "weapon_id"});
  weapon.hasMany(weapon_skill, { as: "weapon_skills", foreignKey: "weapon_id"});
  weapon_text.belongsTo(weapon, { as: "id_weapon", foreignKey: "id"});
  weapon.hasMany(weapon_text, { as: "weapon_texts", foreignKey: "id"});
  weapon.belongsTo(weapon_ammo, { as: "ammo", foreignKey: "ammo_id"});
  weapon_ammo.hasMany(weapon, { as: "weapons", foreignKey: "ammo_id"});
  weapon_melody_notes.belongsTo(weapon_melody, { as: "id_weapon_melody", foreignKey: "id"});
  weapon_melody.hasMany(weapon_melody_notes, { as: "weapon_melody_notes", foreignKey: "id"});
  weapon_melody_text.belongsTo(weapon_melody, { as: "id_weapon_melody", foreignKey: "id"});
  weapon_melody.hasMany(weapon_melody_text, { as: "weapon_melody_texts", foreignKey: "id"});

  return {
    armor,
    armor_skill,
    armor_text,
    armorset,
    armorset_bonus_skill,
    armorset_bonus_text,
    armorset_text,
    charm,
    charm_skill,
    charm_text,
    decoration,
    decoration_text,
    item,
    item_combination,
    item_text,
    kinsect,
    kinsect_text,
    language,
    location_camp_text,
    location_item,
    location_text,
    monster,
    monster_break,
    monster_break_text,
    monster_habitat,
    monster_hitzone,
    monster_hitzone_text,
    monster_reward,
    monster_reward_condition_text,
    monster_text,
    quest,
    quest_monster,
    quest_reward,
    quest_text,
    recipe_item,
    skill,
    skilltree,
    skilltree_text,
    tool,
    tool_text,
    weapon,
    weapon_ammo,
    weapon_melody,
    weapon_melody_notes,
    weapon_melody_text,
    weapon_skill,
    weapon_text,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
