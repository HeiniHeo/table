var DataTypes = require("sequelize").DataTypes;
var _skill = require("./skill");
var _skill_item = require("./skill_item");
var _supercalifragilisticexpialidocious = require("./supercalifragilisticexpialidocious");
var _test = require("./test");

function initModels(sequelize) {
  var skill = _skill(sequelize, DataTypes);
  var skill_item = _skill_item(sequelize, DataTypes);
  var supercalifragilisticexpialidocious = _supercalifragilisticexpialidocious(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);

  skill.removeAttribute('id');

  skill.belongsTo(skill_item, { as: "item", foreignKey: "item_id"});
  skill_item.hasMany(skill, { as: "skills", foreignKey: "item_id"});

  return {
    skill,
    skill_item,
    supercalifragilisticexpialidocious,
    test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
