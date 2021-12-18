const express = require("express");
const router = express.Router();
const stateController = require("./../controllers/stateController");

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is:${val}`);
  next();
});
router
  .route("/")
  .get(stateController.getAllStates)
  .post(stateController.createState);

router
  .route("/:id")
  .get(stateController.getState)
  .patch(stateController.updateState)
  .delete(stateController.deleteState);

module.exports = router;
