const Employee = require('../models/employeeModel')


//Create/Post

const createNewEmployee = async (req, res) =>{
  try {
  const { 
    eid,
    firstName,
    lastName,
    jobTitle,
    department,
    email,
    salary,
    yrsOfService} = req.body
    const employee = await Employee.create({
      eid,
      firstName,
      lastName,
      jobTitle,
      department,
      email,
      salary,
      yrsOfService});
      res.json({employee})
    } catch(error){
      res.status(500).json({message: error.message})
    }
};

//Read/Get all

const getallEmployeeInfo = async (req, res) =>{
  try {
  const employee = await Employee.find();
  res.json({employee})
  } catch {
    res.status(500).json({message: error.message})
  }
};

//Read/Get one

const getEmployeeInfo = async (req, res) =>{
  try {
  const employeeId = req.params.id;
  const employee = await Employee.findById(employeeId);
  res.json({employee})
  } catch {
    res.status(500).json({message: error.message})
  }
};

//Update/Put

const updateEmployeeInfo =  async (req, res) =>{
  try {
  const employeeId = req.params.id;
  const { 
    eid,
    firstName,
    lastName,
    jobTitle,
    department,
    email,
    salary,
    yrsOfService} = req.body
  await Employee.findByIdAndUpdate(employeeId, { 
    eid,
    firstName,
    lastName,
    jobTitle,
    department,
    email,
    salary,
    yrsOfService});
  const employee = await Employee.findById(employeeId)
  res.json({employee})
  } catch {
    res.status(500).json({message: error.message})
  }
};

//Delete

const deleteEmployeeInfo = async (req, res) =>{
  try {
  const employeeId = req.params.id;
  const ename = req.body.firstName;
  const employee = await Employee.findByIdAndDelete(employeeId);
  res.json({message: 'Employee Record Has Been Deleted'})
  } catch {
    res.status(500).json({message: error.message})
  
  }
};


module.exports= {
  createNewEmployee, 
  getallEmployeeInfo, 
  getEmployeeInfo, 
  updateEmployeeInfo,
  deleteEmployeeInfo
}