import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";

import Skills from "./components/Skills/Skills";
import "./app.scss";
import { useState, useEffect } from "react";
import Menuitems from "./components/menu-items/Menu-items";
import Projects from "./components/Projects/Projects";
import { SpinnerDotted } from 'spinners-react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);


  return (
    <div className='loadingScreen' >
      {Loading ? (
        
        <SpinnerDotted className='loader' size={110} thickness={120} speed={80} color="#01fe87" />
        
      ) 
      
      : (
        <div className="app">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menuitems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Intro />
            <Portfolio />
            <Works/>
            <Skills/>
            <Projects/>
            <Contact/>
          </div>
        </div>
      )}
    
    </div>
  );
}
export default App;
