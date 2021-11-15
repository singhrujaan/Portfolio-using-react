import './portfolio.scss'
import pp from './photos/pp.jpeg';
import {Fade} from 'react-reveal';

export default function Portfolio() {

   

    return (
        <div className="portfolio" id="portfolio" >
            <Fade left>
            <div className="left" >
                <img src={pp} alt="pp2" />
            </div>
            </Fade>
            <div className="mid" >
            <Fade bottom><p>
                Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills and enhance learning in the field for work. A self and a quick learner capable of mastering new technologies. Studying Bachelors degree in Computer Science IT from Tribhuwan University has enhanced my proficiency in developing web applications and looking forward to work in a competitive environment that enhances overall learning.
                </p>
            </Fade>    
            </div>
            <Fade right>
            <div className="right" >
                <ul>
                <li><strong>Education</strong> : <span>Bachelors</span></li>
                <li><strong>Age</strong> : <span>22</span></li>
                <li><strong>Email</strong> : <span>singhrujaanman02@gmail.com</span></li>
                <li><strong>Website</strong> : <span></span></li>
                </ul>
            </div>
            </Fade>
        </div>
    )
}
