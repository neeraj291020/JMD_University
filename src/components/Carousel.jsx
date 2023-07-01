import React from "react";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import { Link } from "react-router-dom";
import img4 from "../images/4.png";
function Carousel (){
    return(
        <div className="container"style={{height:"600px",marginTop:"190px"}}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" >
  <div className="carousel-inner">
    <div className="carousel-item " >
      <img src="https://manipal.edu/content/dam/manipal/mu/images/banner/web-banner.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item active">
      <img src="https://manipal.edu/content/dam/manipal/mu/images/banner/home/website-banner_18_5.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://manipal.edu/content/dam/manipal/mu/images/banner/website_0206.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div style={{height:"550px",backgroundColor:"#212529",marginTop:"40px"}}>
    <div style={{height:"45px"}}></div>
   <center> <h1 style={{color:"white"}}>300+ programs. 30+ disciplines. One JMD</h1></center>
   <hr style={{backgroundColor:"white",border:"2px solid white",width:"900px",marginLeft:"200px"}}/>
   <h5 style={{color:"white",marginLeft:"40px",marginRight:"40px",marginTop:"40px"}}>JAHE is one of India's leading academic and research institutions. It has been granted Institution of Eminence status<br/> by the Ministry of Education, Government of India.</h5>
   <div style={{height:"200px",width:"200px",backgroundColor:"red",display:"inline-block",marginLeft:"130px",marginTop:"60px"}}><img style={{height:"200px",width:"300px"}}src="https://www.cinec.edu/wp-content/uploads/2016/02/Mobile-health-sciences-001.png"/></div>
   <div style={{height:"200px",width:"200px",backgroundColor:"red",display:"inline-block",marginLeft:"150px"}}><img style={{height:"200px",width:"300px"}}src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWFZ0Yxdq4ViJ1WrNnrFRRZlZ_ji_qOl6zA&usqp=CAU"}/></div>
   <div style={{height:"200px",width:"200px",backgroundColor:"red",display:"inline-block",marginLeft:"150px"}}><img style={{height:"200px",width:"300px"}}src={img4}/></div>
</div>
<div style={{height:"600px",backgroundColor:"white",marginTop:"30px"}}className="contain">
<h1 style={{position:"relative",top:"200px",left:"60px"}}>Research is in our nature</h1>
<h6 style={{position:"relative",top:"200px",left:"60px",fontWeight:"bolder"}}>Ever since the foundation in 1953, we have applied our research efforts <br/> to develop scientific knowledge with an emphasis on <br/> interdisciplinary research and engagement with wider research community.</h6>
<img style={{height:"350px",width:"350px",position:"relative",left:"700px",top:"10px",borderRadius:"20%"}} src="https://manipal.edu/content/dam/manipal/mu/images/optimised/320x304.jpg" alt="" />
<img  style={{height:"146px",width:"162px",position:"relative",left:"730px",top:"-90px",borderRadius:"20%"}} src="https://manipal.edu/content/dam/manipal/mu/home/162x146..png" alt="" />
<img  style={{height:"146px",width:"162px",position:"relative",left:"570px",top:"110px",borderRadius:"20%"}} src="https://manipal.edu/content/dam/manipal/mu/home/162x146.png" alt="" />
</div>
<div style={{height:"450px",backgroundColor:"#212529",marginTop:"40px"}}>
  <center><h1 style={{color:"white",position:"relative",top:"70px"}}>International Collaborations</h1></center>
  <h6 style={{color:"white",position:"relative",top:"100px",left:"250px"}}>JMD Academy of Higher Education is a globally engaged institution with active partnership with more than <br/> 250+ leading universities around the globe. Our relations with institutions, government agencies and organisations  <br/> in study, research and service provide faculty and students access to world-class institutions, experiences and <br/> resources.</h6>
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"50px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/4.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"70px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/2.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"90px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/1.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"110px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/3.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"130px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/9.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"150px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/6.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"170px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/11.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"190px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/8.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
  <img style={{height:"80px",width:"110px",position:"relative",top:"150px",left:"210px"}} src="https://manipal.edu/content/dam/manipal/mu/images/international-collaborations/logo-whitebg/5.png.transform/manipal-edu-transform-width-height-176px/image.png" alt="" />
</div>
<div style={{marginTop:"90px"}}>
  <h1 style={{postion:"relative",top:"40px"}}>Alumni Stories</h1>
  <h6 style={{postion:"relative",top:"80px"}} >Our alumni are making their mark in the world as decision-makers, innovators, change agents, thought-leaders, and creators, each in their own original way.</h6>
  <Link to="/programs"><img style={{height:"400px",width:"750px",marginTop:"20px"}}src="https://assets.entrepreneur.com/content/3x2/2000/1670937046-Myproject-112.jpg"/></Link>
  <img style={{height:"400px",width:"400px",marginLeft:"90px",marginTop:"20px"}} src={"https://www.sportzcraazy.com/wp-content/uploads/2019/05/Yuzvendra-Chahal-1200x720.jpeg"}/>
  <img style={{height:"400px",width:"550px",marginLeft:"0px",marginTop:"100px"}}src="https://mms.businesswire.com/media/20170119006172/en/565433/5/Dinesh_Close_Up_2-opt1.jpg"/>
  <img style={{height:"400px",width:"640px",position:"relative",marginLeft:"600px",top:"-400px"}}src="https://inc42.com/wp-content/uploads/2016/08/o.KUNAL_.BAHL_.facebook.jpg"/>
  <h3 style={{position:"relative",top:"-1000px",left:"530px"}}>Sanjeev Kapoor</h3>
  <h6 style={{position:"relative",top:"-1000px",left:"530px"}}>Renowned Chef</h6>
  <h3 style={{position:"relative",top:"-1050px",left:"1000px",color:"#F29727"}}>Yuzvendra chahal</h3>
  <h6 style={{position:"relative",top:"-1050px",left:"1000px",color:"#F29727"}}>Cricketer</h6>
  <h3 style={{position:"relative",top:"-600px",left:"50px",color:"#F29727"}}>Dinesh Paliwal</h3>
  <h6 style={{position:"relative",top:"-610px",left:"50px",color:"#F29727"}}>CEO Of JBL</h6>
  <h3 style={{position:"relative",top:"-950px",left:"650px",color:"black"}}>Kunal Bahl</h3>
  <h6 style={{position:"relative",top:"-950px",left:"650px",color:"black"}}>CEO Of Snapdeal</h6>
</div>
<div style={{height:"300px",backgroundColor:"#3AA6B9",marginTop:"-490px",borderRadius:"50%"}}><footer style={{position:"relative",top:"70px"}}className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary" ><h1>About Us</h1></Link></li>
      <li className="nav-item"><Link to="/admissions" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Admissions</h1></Link></li>
      <li className="nav-item"><Link to="/programs" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Programs</h1></Link></li>
      <li className="nav-item"><Link to="/placements" className="nav-link px-2 text-body-secondary"style={{marginLeft:"30px"}}><h1>Placements</h1></Link></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 JMD❤️Neeraj Chanchlani</p>
  </footer></div>
        </div>
    )
}
export default Carousel;