const express = require("express");
const router = express.Router();
const cameraController = require("./../controllers/cameraController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(cameraController.getAllCameras)
  .post(cameraController.createCamera);

router
  .route("/:id")
  .get(cameraController.getCamera)
  .patch(cameraController.updateCamera)
  .delete(cameraController.deleteCamera);

module.exports = router;
