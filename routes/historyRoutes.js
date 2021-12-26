const express = require("express");
const router = express.Router();
const historicController = require("../controllers/historyController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(historicController.getAllHistories)
  .post(historicController.createHistory);

router
  .route("/:id")
  .get(historicController.getHistory)
  .patch(historicController.updateHistory)
  .delete(historicController.deleteHistory);

module.exports = router;
