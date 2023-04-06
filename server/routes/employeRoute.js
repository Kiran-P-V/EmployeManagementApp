const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeController");

router.route("/register").post(employeeController.postRegister);
router.route("/login").post(employeeController.postLogin);
router
  .route("/previousEmployment")
  .post(employeeController.postPreviousEmployement);

module.exports = router;
