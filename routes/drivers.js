var express = require("express");
var router = express.Router();
const sequelize = require("../models/index.js").sequelize;
const initModels = require("../models/init-models");
const models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.driver
    .findAll()
    .then((drivers) => {
      res.status(200).send(drivers);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
