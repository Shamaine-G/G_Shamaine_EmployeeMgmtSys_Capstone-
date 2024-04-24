import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewAll = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get("https://g-shamaine-employeemgmtsys-capstone.onrender.com/employee");
    setEmployee(res.data.employee);
  };
    

  // const detailsBtn = (e) =>{
  //   e.preventDefault()
  //   navigate('{`/Details/${employee._id}`}')
  // }

  // const editBtn = (e) =>{
  //   e.preventDefault()
  //   navigate('{`/Edit/${employee._id}`}')
  // }

  // const deleteBtn = (e) =>{
  //   e.preventDefault()
  //   navigate('{`/Delete/${employee._id}`}')
  // }

  
  return (
    <div>
      <div className="App">
        <div className="text-center mt-4 p-5 bg-secondary text-white shadow ">
          <h1>Opus Employee Record Dashboad</h1>
        </div>
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Eid</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {employee.map((employee, index) => (
              <tr key={employee._id}>
                <td>{index + 1}</td>
                <td>{employee.eid}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>

                <td>
                <button type="button" className="btn btn-outline-secondary">
                  <Link to={`/Details/${employee._id}`} style={{textDecoration: 'none', color: 'black' }}>Details</Link>
                  </button>
                </td>

                <td>
                <button type="button" className="btn btn-outline-secondary">
                  <Link to={`/Edit/${employee._id}`} style={{textDecoration: 'none', color: 'black' }}> Edit</Link>
                  </button>
                </td>
                <td>
                <button type="button" className="btn btn-outline-secondary">
                  <Link to={`/Delete/${employee._id}`} style={{textDecoration: 'none', color: 'black' }} >Delete</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAll;
