import { Link } from "react-router-dom";
import './Navbar.css';
import React from "react"; 
import logo from'../Pages/logo.png'
function Nav() {
  return (
    <div className="nav">
      <h1 style={{color:"black"}}> CivicFix</h1>
      <nav>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/report" className="nav-link">Report</Link>
        <Link to='/myreports' className="nav-link">My Reports</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  );
}

export default Nav;
