import React from "react";
import { Link } from "react-router-dom";
function Placements(){
    return(
        <>
        <img style={{height:"500px",marginLeft:"-75px"}}src="https://manipal.edu/content/dam/manipal/mu/mit/images/banners/mit-physics-banner.jpg" alt="" />
        <div><h1 style={{position:"relative",marginTop:"-200px",color:"white"}}>Placements</h1></div>
        <h1 style={{marginTop:"+250px"}}>Overview</h1>
        <h5>JMD Institute of Technology (JIT) JMD has always been very proactive in placing students into their preferred profiles. The institute has a well-organized placement team headed by the Associate Director, three Assistant Directors, and faculty and student coordinators from each department. The student body comprising Placement Secretaries from the Student Council and other support teams, provides seamless support to the students in the placement process.<br/><br/><br/><br/>

 

300+ recruiting teams, including 50+ Fortune 500 companies, visit JIT JMD for UG and PG campus placements and internships recruitment every year.</h5><br/><br/><br/>
<h4 style={{marginBottom:"40px"}}>Some of the highlights of the Office of Industry Liaison, Placement, and Practice School include:</h4>
<p>     <span style={{color:"red",fontSize:"20px"}}>1. Career Counselling Cell :</span> MIT has a fully functional career counselling cell where students can approach for advice regarding their future career opportunities and higher education. Professors from various departments guide these students in their respective areas. This cell helps students make informed career choices concerning higher education. Besides counselling support, the Career Counselling Cell organises programs to create awareness of higher education opportunities in India and abroad.</p><br/>
<p> <span style={{color:"red",fontSize:"20px",marginTop:"30px"}}>2. Placement Team :</span> MIT has a full-fledged student body called the “Placement Team”, with Placement Secretaries of the student council at its helm. This body is involved in various placements-related activities that include conducting skill development programs, workshops related to placements, and social media connect, to name a few. This body strengthens the connection between the students, the recruiters, and the placement cell.</p><br/>
<p> <span style={{color:"red",fontSize:"20px",marginTop:"30px"}}>3. Placement Portal :</span> The placement process at MIT is enabled through an automated Placement Portal, which allows students to apply for jobs with just a click of a button. The students are notified as and when a job is posted, and they can apply immediately through their mobile for the jobs. Through this portal, we provide students practice for various company-specific online tests, thus increasing the number of students clearing the tests.</p><br/>
<p> <span style={{color:"red",fontSize:"20px",marginTop:"30px"}}>4. Coaching For CAT/GRE :</span> We have signed an MoU with one of the leading coaching institutes in India for training students for various entrance examinations to pursue their higher education in India and abroad. Interested students can make use of this opportunity. The classes are being held at MIT premises, so the students need not travel outside the campus for the training program.</p>
<div style={{height:"300px",backgroundColor:"#3AA6B9",marginTop:"100px",borderRadius:"50%"}}><footer style={{position:"relative",top:"70px"}}className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary" ><h1>About Us</h1></Link></li>
      <li className="nav-item"><Link to="/admissions" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Admissions</h1></Link></li>
      <li className="nav-item"><Link to="/programs" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Programs</h1></Link></li>
      <li className="nav-item"><Link to="/placements" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Placements</h1></Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 JMD❤️Neeraj Chanchlani</p>
  </footer></div>
        </>
    )
}
export default Placements;