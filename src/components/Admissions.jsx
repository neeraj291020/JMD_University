import React from "react";
import { Link } from "react-router-dom";
function Admissions() {
    return (
        <>
            <div style={{ marginTop: "140px", marginLeft: "-75px" }}><img style={{ height: "500px", width: "1700px" }} src="https://manipal.edu/content/dam/manipal/mu/Admissions/Home_Banner.png" alt="" /></div>
            <div className="vision"><h1 style={{ color: "white", position: "relative", top: "-190px", left: "20px" }}>Admissions Open 2023</h1></div>
            <a href="http://localhost:4000/signup" style={{ marginTop: "-340px", marginLeft: "25px" }} type="button" className="btn btn-light">Apply Now!</a>
            <div>
                <h1 >Create Your Own Story</h1>
                <br />
                <br />
                <h5>At JMD, your success is as important to us, as it is to you. We offer a helping hand every step of the way, from your first visit to completing your degree and beyond.<br />
                    <br />

                    For more than 50 years, JMD has been a leader in higher education in India and around the world. With its first-rate facilities and world-class teaching staff, JMD gives you access to extraordinary academics, caring faculty, and endless opportunities.</h5>
                <h1 style={{ marginTop: "60px" }} >Get Started</h1>
                <br />
                <br />
                <h5>Based on your career choices, we are there to guide you through the admissions requirements and figuring out the financial aid to fulfill the same. JMD application is a simple 3 step process, where you are asked to provide your email address, mobile number, followed by a password of your choice to continue.<br />
                    <br />
                </h5>
            <Link to="/programs">   <div style={{ height: "200px", width: "200px", display: "inline-block" }}> <img style={{ height: "200px", width: "200px" }} src="https://manipal.edu/content/dam/manipal/mu/home/Admissions/UNDERGRADUATE.png.transform/manipal-edu-transform-width-height-192px/image.png" alt="" /></div></Link> 
            <Link to="/programs">    <div style={{ height: "200px", width: "200px", display: "inline-block", marginLeft: "60px" }}><img style={{ height: "200px", width: "200px" }} src="https://manipal.edu/content/dam/manipal/mu/home/Admissions/POSTGRADUATE.png.transform/manipal-edu-transform-width-height-192px/image.png" alt="" /></div></Link> 
            <Link to="/programs">    <div style={{ height: "200px", width: "200px", display: "inline-block", marginLeft: "60px" }}><img style={{ height: "200px", width: "200px" }} src="https://manipal.edu/content/dam/manipal/mu/home/Admissions/CERTIFICATE.png.transform/manipal-edu-transform-width-height-192px/image.png" alt="" /></div></Link> 
            <Link to="/programs">    <div style={{ height: "200px", width: "200px", display: "inline-block" }}><img style={{ height: "200px", width: "200px", marginLeft: "60px" }} src="https://manipal.edu/content/dam/manipal/mu/home/Admissions/ADVANCED-PROGRAMS.png.transform/manipal-edu-transform-width-height-192px/image.png" alt="" /></div></Link> 
                <div style={{ position: "relative", top: "-30px" }}><h6 style={{ color: "white" }}>UNDERGRADUATE</h6></div>
                <div style={{ position: "relative", top: "-60px", left: "270px" }}><h6 style={{ color: "white" }}>POSTGRADUATE</h6></div>
                <div style={{ position: "relative", top: "-85px", left: "570px" }}><h6 style={{ color: "white" }}>CERTIFICATE</h6></div>
                <div style={{ position: "relative", top: "-115px", left: "790px" }}><h6 style={{ color: "white" }}>ADVANCED PROGRAMS</h6></div>
                <img style={{ height: "400px", marginLeft: "-75px" }} src="https://manipal.edu/content/dam/manipal/mu/Admissions/Visit_our_Campus.png" alt="" />
                <div ><h1 style={{ marginTop: "-200px", marginLeft: "-20px", color: "white" }}>Visit Our Campus</h1>
                    <h4 style={{ marginTop: "-10px", marginLeft: "-10px", color: "white" }}>A visit to our campus will give you a good idea of what JMD has to offer.<br /> You can also explore our virtual campus tour</h4></div>
               <a target="_blank" href="https://youtu.be/EAwebSzog38"><button type="button" className="btn btn-light" style={{ marginLeft: "-10px" }}>360 VIRTUAL TOUR</button></a> 
                <div>
                    <h1 style={{ marginTop: "130px" }}>Student Testimonials</h1>
                </div>
                <div style={{ display: "inline-block", marginTop: "30px" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/rahul_babu_kodali.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Jai Mankani</h5>
                            <p className="card-text">JAHE is where people are motivated to acquire knowledge and engage the world around them.

                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "inline-block", marginLeft: "80px" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/deepak_joyappa.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Uday Shetty</h5>
                            <p className="card-text">Interacting with people from all over the world in a free environment has helped me become receptive to change.</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: "inline-block", marginLeft: "80px" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/yasha_shetty.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Ambika Singhaniya</h5>
                            <p className="card-text">JMD is a place which moulded my character and made me what I am today. It Helped Me In Exploring My Inner Talent.</p>

                        </div>
                    </div>
                </div>
                <div style={{ display: "inline-block", marginTop: "40px" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/niva_mohanty.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aastha Awasthi</h5>
                            <p className="card-text">Best-in-class infrastructure and a curriculum that makes learning fun – JMD is the place to be.</p>

                        </div>
                    </div>
                </div>
                <div style={{ display: "inline-block", marginLeft: "80px" }}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/aakash_singh.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vijay Raichand</h5>
                            <p className="card-text">JAHE has provided a great platform for all students to explore themselves.</p>

                        </div>
                    </div>
                </div>
                <div style={{ display: "inline-block" }}>
                    <div className="card" style={{ width: "18rem", marginLeft: "80px" }}>
                        <img src="https://manipal.edu/content/dam/manipal/mu/images/testimonialPictures/meghana_manjunath.jpg.transform/manipal-edu-transform-width-height-304px/image.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Yatika Agnihotri</h5>
                            <p className="card-text">My teachers are my mentors. They have helped me grow academically and personally.</p>

                        </div>
                    </div>
                </div>

                <img style={{height:"400px",width:"1460px",marginLeft:"-90px",marginTop:"+40px"}} src="https://www.amity.edu/greaternoida/images/greater_noida.jpg" alt="" />
                <h1 style={{marginTop:"-300px",color:"white"}}>Life At</h1>
                <h5 style={{marginTop:"+10px",color:"white"}}>JMD is a globally engaged institution with active partnership<br/> with 15 leading universities around the globe.</h5>
                <div style={{height:"300px",backgroundColor:"#3AA6B9",marginTop:"240px",borderRadius:"50%"}}><footer style={{position:"relative",top:"70px"}}className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary" ><h1>About Us</h1></Link></li>
      <li className="nav-item"><Link to="/admissions" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Admissions</h1></Link></li>
      <li className="nav-item"><Link to="/programs" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Programs</h1></Link></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Placements</h1></a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 JMD❤️Neeraj Chanchlani</p>
  </footer></div>
            </div>
        </>
    )
}
export default Admissions;