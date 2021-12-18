const express = require("express");
const router = express.Router();
const localizationController = require("./../controllers/localizationController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(localizationController.getAllLocalizations)
  .post(localizationController.createLocalization);

router
  .route("/:id")
  .get(localizationController.getLocalization)
  .patch(localizationController.updateLocalization)
  .delete(localizationController.deleteLocalization);

module.exports = router;
