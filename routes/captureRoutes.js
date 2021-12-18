const express = require("express");
const router = express.Router();
const captureController = require("./../controllers/captureController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(captureController.getAllCaptures)
  .post(captureController.createCapture);

router
  .route("/:id")
  .get(captureController.getCapture)
  .patch(captureController.updateCapture)
  .delete(captureController.deleteCapture);

module.exports = router;
