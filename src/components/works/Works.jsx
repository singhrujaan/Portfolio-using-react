import "./works.scss";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

export default function Works() {
  return (
    <div className="works" id="works">
      <LightSpeed bottom>
        <div className="heading">
          <ul>
            <li>Education</li>
          </ul>
        </div>
      </LightSpeed>
      <div className="main-timeline">
        <div className="timeline">
          <Fade right>
            <div className="icon"></div>
          </Fade>
            <div className="date-content">
          <Fade left>
              <div className="date-outer">
                <span className="date">
                  <span className="year">2021</span>
                </span>
              </div>
          </Fade>
            </div>

            <div className="timeline-content">
          <Zoom right cascade>
            <span className="description">
            <Flip left cascade><h1>Bachelors</h1></Flip>
              <p>
                <b><Zoom right cascade>ACHS(Asian College Of Higher Studies)</Zoom></b>
              </p>
            </span>
          </Zoom>
          </div>
            
        </div>
        <div className="timeline">
        <Fade left>
          <div className="icon"></div>
          </Fade>
          <div className="date-content">
          <Fade right>
            <div className="date-outer">
              <span className="date">
                <span className="year">2017</span>
              </span>
            </div>
            </Fade>
          </div>
          <div className="timeline-content">
          <Zoom left cascade>
            <span className="description">
            <Flip left cascade><h1>NEB</h1></Flip>
              <p>
                <b><Zoom left cascade>Trinity International College</Zoom></b>
              </p>
            </span>
            </Zoom>
          </div>
        </div>
        <div className="timeline">
        <Fade right>
          <div className="icon"></div>
          </Fade>
          <div className="date-content">
          <Fade left>
            <div className="date-outer">
              <span className="date">
                <span className="year">2015</span>
              </span>
            </div>
            </Fade>
          </div>
          <div className="timeline-content">
          <Zoom right cascade>
            <span className="description">
              <Flip left cascade><h1>SLC</h1></Flip>
              <p>
                <b><Zoom right cascade>GEMS(Graded English Medium School)</Zoom></b>
              </p>
            </span>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
