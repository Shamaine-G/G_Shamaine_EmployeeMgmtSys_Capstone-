if (process.env.NODE_ENV != "poduction") {
  require("dotenv").config();
}

const express = require("express");
const connectToDb = require("./config/connectToDb");
const employeeController = require('./controllers/employeeController')
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cors());

//connect to Database
connectToDb();

const routes= require('./routes/employeeRoute')

//routing

app.use('/employee', require('./routes/employeeRoute'));
// app.post('/employee', employeeController.createNewEmployee);


// app.get('/employee', employeeController.getallEmployeeInfo);


// app.get('/employee/:id', employeeController.getEmployeeInfo);


// app.put('/employee/:id', employeeController.updateEmployeeInfo);


// app.delete('/employee/:id', employeeController.deleteEmployeeInfo);






//start server
app.listen(process.env.PORT, () => console.log('Server Started'));