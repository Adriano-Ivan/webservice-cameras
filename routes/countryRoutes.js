const express = require("express");
const router = express.Router();
const countryController = require("./../controllers/countryController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(countryController.getAllCountries)
  .post(countryController.createCountry);

router
  .route("/:id")
  .get(countryController.getCountry)
  .patch(countryController.updateCountry)
  .delete(countryController.deleteCountry);

module.exports = router;
