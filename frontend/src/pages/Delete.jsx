import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Delete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {    
      const confirm = window.confirm('Are you sure you want to delete employee record?');
      if(confirm === false) {
        alert('Record not deleted')
        navigate('/ViewAll')} else {
        axios.delete("http://localhost:3000/employee/" + id)
        .then(res => {
          alert('record deleted')
          navigate('/ViewAll')
        }).catch(err => console.log(err))
      }
      
    }, [])
    
  }
  




export default Delete;
