const dotenv = require('dotenv')
const mongoose = require("mongoose");
const employeeInfo = require("./data/EmployeeSeeder");
const connectToDb = require("./config/connectToDb");
const Employee = require("./models/employeeModel");


dotenv.config()
connectToDb()

const importData = async () => {
  try {
    await Employee.insertMany();
    const createdEmployeeInfo = await Employee.insertMany(employeeInfo)
    console.log('Data Imported')
    process.exit()

  } catch (error) {
    console.error(`Error: ${error}`)
    process.exit(1)
  }
}


const destroyData = async () => {
  try {
    await Employee.deleteMany()
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`Error:${error}`)
    
  }
}

if (process.argv[2] === '-d') {
  destroyData()
}else {
  importData()
}
