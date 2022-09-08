var DataTypes = require("sequelize").DataTypes;
var _company = require("./company");
var _driver = require("./driver");
var _vehicle = require("./vehicle");

function initModels(sequelize) {
  var company = _company(sequelize, DataTypes);
  var driver = _driver(sequelize, DataTypes);
  var vehicle = _vehicle(sequelize, DataTypes);

  driver.belongsTo(company, { as: "company", foreignKey: "company_id" });
  company.hasMany(driver, { as: "drivers", foreignKey: "company_id" });
  vehicle.belongsTo(driver, { as: "driver", foreignKey: "driver_id" });
  driver.hasMany(vehicle, { as: "vehicles", foreignKey: "driver_id" });

  return {
    company,
    driver,
    vehicle,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
