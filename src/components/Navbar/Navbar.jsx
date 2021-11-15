
import './Navbar.scss'  
import Fade from 'react-reveal/Fade';

import Zoom from 'react-reveal/Zoom';
export default function Navbar({menuOpen,setMenuOpen}) {

  

    return (
        <div className ={'topbar ' + (menuOpen && 'active')} >
        <div className= 'wrapper' >
          <div className="left">
            <div className="itemContainer">
              <Fade className='fade' top big cascade><span><a href="#intro">Rujaan Man Singh</a></span></Fade>
            </div>
          </div>
          <div className="right">
            <div className="menu-list">
              <ul>
              <Zoom top cascade>
                <li><a href='#intro'>Home</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#skills'>Skill</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
                </Zoom>
              </ul>
            </div>
            <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    )
}
