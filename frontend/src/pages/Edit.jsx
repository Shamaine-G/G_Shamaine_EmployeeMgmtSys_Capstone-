import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    id: id,
    eid: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    department: "",
    email: "",
    salary: "",
    yrsOfService: "",
  });

  useEffect(() => {
    axios
      .get("https://g-shamaine-employeemgmtsys-capstone.onrender.com/employee/" + id)
      .then((res) => setData(res.data.employee))
      .catch((err) => console.log(err));
  }, []);

  const editEmployee = (e) => {
    e.preventDefault();
    axios
      .put("https://g-shamaine-employeemgmtsys-capstone.onrender.com/employee/" + id, data)
      .then((res) => {
        alert("Data updated sucessfully!");
        navigate("/ViewAll");
      })
      .catch((err) => console.log(err));
  };

  const backBtn = (e) =>{
    e.preventDefault()
    navigate('/ViewAll')
  }

  return (
    <div>
      <div className=" p-4 container bg-secondary text-center text-white ">
        <h2>Edit Employee Information</h2>
      </div>
      <form onSubmit={editEmployee}>
        <div className="mb-3">
          <label className="form-label">Eid</label>
          <input
            type="number"
            className="form-control"
            value={data.eid}
            onChange={(e) => setData({ ...data, eid: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            value={data.jobTitle}
            onChange={(e) => setData({ ...data, jobTitle: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            value={data.department}
            onChange={(e) => setData({ ...data, department: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            value={data.salary}
            onChange={(e) => setData({ ...data, salary: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Yrs of Service</label>
          <input
            type="number"
            className="form-control"
            value={data.yrsOfService}
            onChange={(e) => setData({ ...data, yrsOfService: e.target.value })}
          />
        </div>

        <button className="btn btn-outline-secondary m-1" onClick={backBtn} style={{textDecoration: 'none', color: 'black' }}  >
          Back
        </button>

        <button type="submit" className="btn btn-outline-secondary" style={{textDecoration: 'none', color: 'black' }} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
