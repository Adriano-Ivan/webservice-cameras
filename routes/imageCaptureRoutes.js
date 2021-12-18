const express = require("express");
const router = express.Router();
const imageCaptureController = require("./../controllers/imageCaptureController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(imageCaptureController.getAllImageCaptures)
  .post(imageCaptureController.createImageCapture);

router
  .route("/:id")
  .get(imageCaptureController.getImageCapture)
  .patch(imageCaptureController.updateImageCapture)
  .delete(imageCaptureController.deleteImageCapture);

module.exports = router;
