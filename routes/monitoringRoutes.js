const express = require("express");
const router = express.Router();
const monitoringController = require("./../controllers/monitoringController");

// router.param("id", monitoringController.checkID);

router
  .route("/")
  .get(monitoringController.getAllMonitorings)
  .post(monitoringController.checkBody, monitoringController.createMonitoring);

router
  .route("/:id")
  .get(monitoringController.getMonitoringById)
  .patch(monitoringController.updateMonitoring)
  .delete(monitoringController.deleteMonitoring);

module.exports = router;
