import React from "react";
import { Link } from "react-router-dom";
function About() {
    return (
        <>
            <div style={{ marginTop: "140px", marginLeft: "-75px" }}><img style={{ height: "500px", width: "1700px" }} src="https://manipal.edu/content/dam/manipal/mu/images/banner/mu-global-village.jpg" alt="" /></div>
            <div className="vision"><h1 style={{ color: "white", position: "relative", top: "-110px", left: "140px" }}>Vision & Mission</h1></div>
            <div className="vi">
                <h2 style={{ textDecoration: "underline" }}>Vision & Mission</h2>
                <ul>
                    <h3 style={{ position: "relative", left: "-30px", top: "+30px" }}>Vision</h3>
                    <li style={{ position: "relative", top: "40px", left: "-10px" }}><h5 >Global leadership in human development, excellence in education and healthcare.</h5></li>
                    <h3 style={{ position: "relative", left: "-30px", top: "+80px" }}>Mission</h3>
                    <li style={{ position: "relative", top: "90px", left: "-10px" }}><h5 >Be the most preferred choice of students, faculty and industry.</h5></li>
                    <li style={{ position: "relative", top: "90px", left: "-10px" }}><h5 >Be in the top 10 in every discipline of education health sciences, engineering and management.</h5></li>
                    <h3 style={{ position: "relative", left: "-30px", top: "+130px",textDecoration:"underline" }}>JMD Values</h3>
                    <li style={{ position: "relative", top: "135px", left: "-10px" }}><h5 >Integrity
                    </h5></li>
                    <li style={{ position: "relative", top: "140px", left: "-10px" }}><h5 >Humane touch
                    </h5></li>
                    <li style={{ position: "relative", top: "145px", left: "-10px" }}><h5 >Transparency
                    </h5></li>
                    <li style={{ position: "relative", top: "150px", left: "-10px" }}><h5 >Quality
                    </h5></li>
                    <li style={{ position: "relative", top: "155px", left: "-10px" }}><h5 > Team work
                    </h5></li>
                    <li style={{ position: "relative", top: "160px", left: "-10px" }}><h5 >Execution with passion
                    </h5></li>
                    <h6 style={{ marginLeft: "350px", marginTop: "250px" }}>"JMD Institutions have long been distinguished for excellence in professional education.<br /> The University is home to some of the top ranking institutions across diverse disciplines."</h6>
                    <h5 style={{ marginLeft: "550px", marginTop: "40px" }}><em>Vice Chancellor</em></h5>

                </ul>
            </div>
            <div style={{height:"300px",backgroundColor:"#3AA6B9",marginTop:"+120px",borderRadius:"50%"}}><footer style={{position:"relative",top:"70px"}}className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary" ><h1>About Us</h1></Link></li>
      <li className="nav-item"><Link to="/admissions" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Admissions</h1></Link></li>
      <li className="nav-item"><Link to="/program" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Programs</h1></Link></li>
      <li className="nav-item"><Link to="/placements" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Placements</h1></Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 JMD❤️Neeraj Chanchlani</p>
  </footer></div>
        </>
    )
}
export default About;