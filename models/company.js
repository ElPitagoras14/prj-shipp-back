const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "name_unique"
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "active",
      comment: "active | inactive"
    },
    plan_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "prepaid",
      comment: "prepaid | postpaid"
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'company',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "name_idx",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "city_idx",
        using: "BTREE",
        fields: [
          { name: "city" },
        ]
      },
      {
        name: "creation_date_idx",
        using: "BTREE",
        fields: [
          { name: "creation_date" },
        ]
      },
    ]
  });
};
