'use strict';

const initModels = require('./init-models')

const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

let models = initModels(sequelize);
console.log(models)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.skill = models.skill;
db.skill_item = models.skill_item;
db.test = models.test;
db.supercalifragilisticexpialidocious = models.supercalifragilisticexpialidocious;

module.exports = db;