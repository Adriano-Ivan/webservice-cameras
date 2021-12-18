const express = require("express");
const router = express.Router();
const historicController = require("../controllers/historyController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(historicController.getAllHistoric)
  .post(historicController.createHistoric);

router
  .route("/:id")
  .get(historicController.getHistoric)
  .patch(historicController.updateHistoric)
  .delete(historicController.deleteHistoric);

module.exports = router;
