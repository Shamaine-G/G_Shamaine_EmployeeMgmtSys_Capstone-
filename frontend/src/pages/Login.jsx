import React from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";





const Login = () => {
const navigate = useNavigate()  
  

  const handleSubmit = () => {
    navigate('/ViewAll')
  }





  return (
    <div>

      <div className="text-center mt-5 p-5 bg-secondary text-white  shadow">
          <h1>Opus Employee Record Managment</h1>
        </div>
      <div className="conatiner mt-5 pt-5 text-center">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
                <svg
                  className="mx-auto my-3 bi bi-person-circle"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <form >
                  <input
                    type="text"
                    className="form-control mt-3 py-2"
                    placeholder="Username"
                  />
                  <input
                    type="text"
                    className="form-control mt-3 py-2"
                    placeholder="Password"
                  />
                  <div className="text-center mt-3">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                      Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
