var express = require("express");
var router = express.Router();
const sequelize = require("../models/index.js").sequelize;
const initModels = require("../models/init-models");
const models = initModels(sequelize);

router.get("/:driver", (req, res, next) => {
  const driver = req.params.driver;
  models.vehicle
    .findAll({
      include: {
        models: models.driver,
        association: "driver",
        attributes: ["first_name", "last_name", "email"]
      },
      where: { driver_id: driver },
    })
    .then((vehicles) => {
      res.status(200).send(vehicles);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/", (req, res, next) => {
  const { driver, plate, model, type, capacity } = req.body;
  models.vehicle
    .create({
      driver_id: driver,
      plate,
      model,
      type,
      capacity,
    })
    .then((response) => {
      res.status(200).send({
        message: "The vehicle has been created",
        response,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something was wrong...",
        error: err,
      });
    });
});

router.put("/", (req, res, next) => {
  const { id, driver, plate, model, type, capacity } = req.body;
  models.vehicle
    .update(
      {
        driver_id: driver,
        plate,
        model,
        type,
        capacity,
      },
      {
        where: { id },
      }
    )
    .then((response) => {
      res.status(200).send({
        message: "The vehicle has been updated",
        response,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something was wrong...",
        error: err,
      });
    });
});

router.delete("/", (req, res, next) => {
  const { id } = req.body;
  models.vehicle
    .destroy({
      where: { id },
    })
    .then((response) => {
      res.status(200).send({
        message: "The car has been deleted",
        response,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something was wrong...",
        error: err,
      });
    });
});

module.exports = router;
