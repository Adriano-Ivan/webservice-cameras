const express = require("express");
const router = express.Router();
const cityController = require("./../controllers/cityController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(cityController.getAllCities)
  .post(cityController.createCity);

router
  .route("/:id")
  .get(cityController.getCity)
  .patch(cityController.updateCity)
  .delete(cityController.deleteCity);

module.exports = router;
