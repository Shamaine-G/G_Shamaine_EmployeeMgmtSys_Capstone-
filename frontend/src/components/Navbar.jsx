import React from 'react'
import ViewAll from '../pages/ViewAll'
import CreateInfo from '../pages/CreateInfo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav ">
      
      <li className="nav-item">
        <Link to='/' className="nav-link active">Logout</Link>
      </li>

      <li className="nav-item">
        <Link to='/ViewAll' className="nav-link active">Employee Data Dashboard </Link>
      </li>
      <li className="nav-item">
        <Link to='/CreateInfo' className="nav-link active">Create New Employee File</Link>
      </li>

   
    
    </ul>
  </div>
</nav> 
    </div>
  )
}

export default Navbar;

