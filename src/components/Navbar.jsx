import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <>
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}>
            
          <FaBars />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/portofolio"> Portofolio </Link>
        <Link to="/blog"> Blog </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar