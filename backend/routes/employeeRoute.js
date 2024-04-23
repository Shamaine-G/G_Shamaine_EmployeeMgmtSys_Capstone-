const express = require("express");
const Employee = require("../models/employeeModel");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router
  .route("/")
  .post(employeeController.createNewEmployee)
  .get(employeeController.getallEmployeeInfo);

router
  .route("/:id")
  // router.get('/employee/:id', employeeController.getEmployeeInfo);
  .get(employeeController.getEmployeeInfo)
  .put(employeeController.updateEmployeeInfo)
  .delete(employeeController.deleteEmployeeInfo);

module.exports = router;
