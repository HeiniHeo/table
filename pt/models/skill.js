const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skill_item',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'skill',
    timestamps: false,
    indexes: [
      {
        name: "skillitemid",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
