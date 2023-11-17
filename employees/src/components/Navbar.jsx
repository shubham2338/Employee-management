import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    
    <div className='divbox'>
        <div className="divnav">
            <p>Employee Details Management</p>

        </div>
        <nav className='navbox'>
            <NavLink className="p" to ="/" >Home</NavLink>
            <NavLink className="p" to ="/add" >Add Employee</NavLink>
            <NavLink className="p" to="/active" >Active Employee</NavLink>
            <NavLink className="p" to="/all" >All Employee</NavLink>
        </nav>
    </div>
    
  )
}

export default Navbar;