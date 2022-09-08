const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'driver',
        key: 'id'
      }
    },
    plate: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "bicycle | motorcycle | car | van | truck"
    },
    capacity: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "small | medium | large"
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'vehicle',
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
        name: "type_idx",
        using: "BTREE",
        fields: [
          { name: "type" },
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
        name: "driver_key",
        using: "BTREE",
        fields: [
          { name: "driver_id" },
        ]
      },
    ]
  });
};
