import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <a href="https://www.guptalab.org/" target="_blank" rel="noopener noreferrer">
           <img src="../images/logo.jpeg" alt="Logo"></img>
        </a>
          <h2 className="resource">
         
          <div>
            <span>Q</span>uantum
            <span>C</span>omputing
            </div>
            <span>R</span>esources
            
           
            </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/quantum">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quantum/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/quantum/researchpapers">Research papers</NavLink>
            </li>
            <li>
              <NavLink to="/quantum/tools">Tools</NavLink>
            </li>
            <li className="hoverable">
              <span>Tutorials</span>
              <div className="sub-menu">
                <ul>
                  <li>
                  <NavLink to="/quantum/youtubecontent">YouTube Content</NavLink>
                  </li>
                  <li>
                    <NavLink to="/quantum/courses">Courses</NavLink>
                  </li>
                  <li>
                    <NavLink to="/quantum/books">Books</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/quantum/simulators">Simulators</NavLink>
            </li>
            <li>
              <NavLink to="/quantum/patents">Patents</NavLink>
            </li>
            <li>
              <NavLink to="/quantum/workshops">workshops</NavLink>
            </li>
            <li className="hoverable">
              <span>Working People</span>
              <div className="sub-menu">
                <ul>
                  <li>
                  <NavLink to="/quantum/workingpeopleindia">National People</NavLink>
                  </li>
                  <li>
                    <NavLink to="/quantum/workingpeople">International People</NavLink>
                  </li>
                </ul>
                </div>
                </li>
            <li>
              <NavLink to="/quantum/articles">News</NavLink>
            </li>
          </ul>
          
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
          <button className="hamburger-button"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </button>

          </div>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;