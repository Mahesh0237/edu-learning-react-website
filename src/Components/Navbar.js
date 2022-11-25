import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
function Navbar() {
  return (
   <nav class="navbar navbar-expand-lg  fixed-top" id="navb">
      <div class="container p-2">
        <a href='/' className='navbar-brand' id="brand"  ><b><i class="fa fa-book me-2"></i>eLEARNING</b></a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#demo"><span class="navbar-toggler-icon"></span></button>
        <ul class="navbar-nav collapse navbar-collapse" id="demo">
          <Link to='/home' style={{textDecoration:"none"}}><li class="naV-item " style={{marginLeft:"380px"}}><h6 className="nav-link" id="navt"  ><b>HOME</b></h6></li></Link>
          <Link to='/about' style={{textDecoration:"none"}}><li class="naV-item ms-5"><h6 class="nav-link " id="navt" ><b>ABOUT</b></h6></li></Link>
          <Link to='/course' style={{textDecoration:"none"}}><li class="naV-item ms-5"><h6 class="nav-link " id="navt" ><b>COURSES</b></h6></li></Link>
          <Link to='/pages' style={{textDecoration:"none"}}><li class="naV-item ms-5">
            <div class="dropdown">
              <h6 class="nav-link  dropdown-toggle " id="navt"   data-bs-toggle="dropdown"><b>PAGES</b></h6>
              <ul class="dropdown-menu ">
                <li class="dropdown-item">our team</li>
                <li class="dropdown-item">Testimonials</li>
                <li class="dropdown-item">404 page</li>
             </ul>
             </div>
          </li></Link>
          <Link to='/team' style={{textDecoration:"none"}}><li class="naV-item ms-5"><h6 class="nav-link" id="navt"><b>TEAM</b></h6></li></Link>
          <Link to='/contact' style={{textDecoration:"none"}}><li class="naV-item ms-5"><h6 class="nav-link "id="navt"  ><b>CONTACT</b></h6></li></Link>
        </ul>
      </div>
   </nav> 
  )
}

export default Navbar;