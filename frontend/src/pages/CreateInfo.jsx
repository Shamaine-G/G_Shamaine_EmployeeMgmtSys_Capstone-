import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Home from './ViewAll'



const CreateInfo = () => {
const [eid, setEid] =useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [jobTitle, setJobTitle] = useState('')
const [department, setDepartment] = useState('')
const[email, setEmail] =useState('')
const [salary, setSalary] = useState('')
const [yrsOfService, setYrsOfService] = useState('')
const navigate = useNavigate();


const newEmployee =  () => {
  const data = {
    eid,
    firstName,
    lastName,
    jobTitle,
    department,
    email,
    salary,
    yrsOfService}
    axios.post('http://localhost:3000/employee', data)
    alert('New Employee Record Created')
    navigate('/ViewAll')
}; 


  return (
    <div>
       <div className=" p-4 container bg-secondary text-center text-white ">
  
      <h2>Create New Employee File</h2>
</div> 
      <form>
        <div>
        <label className='form-label'>Eid</label>
        <input type='number' className="form-control" placeholder='Enter Employee ID'
        value={eid}
        onChange={(e) => setEid(e.target.value)}
        />
        </div>
       
        <div className="mb-3">
        <label className='form-label'>First Name</label>
        <input type="text" className="form-control" placeholder='Enter Employee First Name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
 
        <div className="mb-3">
        <label className='form-label'>Last Name</label>
        <input type="text" className="form-control" placeholder='Enter Employee Last Name'  
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        
        <div className="mb-3">
        <label className='form-label'>Job Title</label>
        <input type="text" className="form-control" placeholder='Enter Employee Job Title'  
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        />
        </div>
        
        <div className="mb-3">
        <label className='form-label'>Department</label>
        <input type="text" className="form-control"   placeholder='Enter Assigned Department'
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        />
        </div>
    
        <div className="mb-3">
        <label className='form-label'>Email</label>
        <input type="email" className="form-control" placeholder='Enter Employee Email'  
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        
        <div className="mb-3">
        <label className='form-label'>Salary</label>
        <input type="number" className="form-control" placeholder='Enter Employee Salary'  
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        />
        </div>
      
        <div className="mb-3">
        <label className='form-label'>Yrs of Service</label>
        <input type="number" className="form-control" placeholder='Enter Employee Years of Service'  
        value={yrsOfService}
        onChange={(e) => setYrsOfService(e.target.value)}
        />
        </div>

      <button onClick={newEmployee} type="submit" className="btn btn-outline-primary"> Submit</button>

      </form>






    </div>
  )
}

export default CreateInfo