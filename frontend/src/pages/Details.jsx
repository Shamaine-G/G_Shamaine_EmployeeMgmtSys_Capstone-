import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';



const Details = () => {
  const [employee, setEmployee] = useState([]);
  const {id} = useParams()


  useEffect(() => {
    fetchEmployeeDetails();
  }, []);


  const fetchEmployeeDetails = async () => {
    //Fetch employees
    const res = await axios.get("https://g-shamaine-employeemgmtsys-capstone.onrender.com/employee/" + id);
    //set to state
    setEmployee(res.data.employee);
  };


return (
<div  className='container mt-3 '>
  <div className="card bg-light" >
    <div className="card-body">
       <div className=" p-4 container bg-secondary text-center text-white ">
      <h2 className="card-title">{employee.firstName} {employee.lastName}</h2>
      </div> 
      <p className="card-text"> Employee Id: {employee.eid}</p>
      <p className="card-text"> Job Title: {employee.jobTitle}</p>
      <p className="card-text"> Department: {employee.department}</p>
      <p className="card-text"> Email: {employee.email}</p>
      <p className="card-text"> Salary: {employee.salary}</p>
      <p className="card-text"> Years of Service: {employee.yrsOfService}</p>
      <Link className="card-link" to='/ViewAll'>Back</Link>
      <Link className="card-link" to={`/Edit/${employee._id}`}>Edit</Link>

    </div>
  </div>
</div>
  )

}

export default Details