import './intro.scss'
import arrow from './images/arrow.png'
import cap from './images/cap.jpg'
import resume from './resume/myResume.pdf'
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';

export default function Intro() {
    return (
        <div className="intro " id="intro">
            <div className="image">
            <Flash><img className="img" src={cap} alt="pp"/></Flash>
            </div>
            <div className="intro-content">
                <h2>Hi, I'm <span></span></h2>
                <h1>Rujaan Man Singh <span></span></h1>
                <h3 data-text="A freelance Web developer ">A freelance Web developer</h3>
                <Tada><button><a href={resume} className='text-center' rel="noreferrer" target='_blank'>Resume</a></button></Tada>
            </div>
            <div className="arrow"> 
                <a href="#portfolio">
                    <img src={arrow} alt="arrow" />
                </a>
            </div>      
        </div>
    )
}
