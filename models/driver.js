const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('driver', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "email"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    avatar_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "active | inactive"
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'driver',
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
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
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
        name: "first_name_idx",
        using: "BTREE",
        fields: [
          { name: "first_name" },
        ]
      },
      {
        name: "creation_date_idx",
        using: "BTREE",
        fields: [
          { name: "creation_date" },
        ]
      },
      {
        name: "company_key",
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
    ]
  });
};
