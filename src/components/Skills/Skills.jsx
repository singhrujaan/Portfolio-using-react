import './skills.scss'
import php from './photos/php.png'
import bootstrap from './photos/bootstrap.png'
import html from './photos/html.png'
import javascript from './photos/javascript.png'
import node from './photos/node.png'
import react from './photos/react.png'
import css from './photos/css.png'
import sass from './photos/sass.png'
import pr from './photos/pr.png'
import express from './photos/express.png'
import git from './photos/git.png'
import Fade from 'react-reveal/Fade';
export default function Skills() {
    return (
        <div className="skills" id='skills'>
        <h1 className='text-center'><Fade bottom cascade>Technologies familiar with</Fade></h1>
        <div className="skills-container">
            <div className="container row">
            <Fade left cascade>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={html} alt='html'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={css} alt='css'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={sass} alt='sass'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={bootstrap} alt='bootstrap'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={javascript} alt='js'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={php} alt='php'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={react} alt='react'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={node} alt='node'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={pr} alt='pr'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={express} alt='express'/></div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3"><img src={git} alt='git'/></div>
            </Fade>                   
            </div>
        </div>
    </div>    
    )
}
