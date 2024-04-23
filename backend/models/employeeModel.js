const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  eid: Number,
  firstName: String,
  lastName: String,
  jobTitle: String,
  department: String,
  email: String,
  salary: Number,
  yrsOfService: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee