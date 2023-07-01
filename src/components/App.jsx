import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

import About from "./About";
import {
    BrowserRouter as Router,
   Routes,
    Route,
    Link
  } from "react-router-dom";
import Admissions from "./Admissions";
import Programs from "./Programs";
import Placements from "./Placements";
function App(){
    return(<>
    <Router>
        <Navbar/>
        <div className="container">
        <Routes>
        <Route exact path="/" element={[<Carousel/>]} />
        <Route exact path="/admissions" element={[<Admissions/>]} />
        <Route exact path="/about" element={[<About/>]} />
        <Route exact path="/programs" element={[<Programs/>]} />
        <Route exact path="/placements" element={[<Placements/>]} />

        </Routes>
        </div>
     
        </Router>
        </>
    )
}
export default App;