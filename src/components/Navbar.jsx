import React from "react";
import img from "../images/1.png";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div style={{ height: "100px" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div >
                  <Link to="/" ><img style={{ height: "120px", width: "250px" ,borderRadius:"50%"}} src={img} alt="" />    </Link> 
                    <span>
                        <div style={{ position: "relative", left: "350px", top: "-120px" }}>
                            <h1>JMD</h1>
                            <hr style={{ Width: "30px" }} />
                            <span>ACADEMY</span><span> of HIGHER EDUCATION</span>
                               <a style={{postion:"relative",marginLeft:"600px"}}className="btn btn-outline-warning" href="http://localhost:4000/signup">Register</a>
   <a  style={{marginLeft:"5px"}}className="btn btn-outline-success" href="http://localhost:4000/login">LogIn</a>
                        </div>
                    </span>
                
                </div>
            </nav>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginTop:"-75px"}}>
  <div className="container-fluid">

    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link style={{marginLeft:"160px"}} className="nav-link" aria-current="page" to="/about"><h3>About Us</h3></Link>
        </li>
        <li className="nav-item">
          <Link style={{marginLeft:"160px"}}className="nav-link" aria-current="page" to="/admissions"><h3>Admissions</h3></Link>
        </li>
        <li className="nav-item">
          <Link  style={{marginLeft:"160px"}} className="nav-link" to="/programs"><h3>Programs</h3></Link>
        </li>
        <li className="nav-item">
          <Link style={{marginLeft:"160px"}} className="nav-link" to="/placements"><h3>Placements</h3></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;