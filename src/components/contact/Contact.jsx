import './contact.scss'
import { useState } from 'react';
import  fb from './images/fb.png'
import  insta from './images/insta.png'
import  github from './images/github.png'
import Pulse from 'react-reveal/Pulse';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_aKntEQGkdBRZA1uIENIAQ");

export default function Contact() {
    const [message, setmessage] = useState(false);
    const handleClick=(info)=>{
        info.preventDefault();
        setmessage(true);
        emailjs.sendForm('gmail', 'service_bilw4zu', info.current, 'user_aKntEQGkdBRZA1uIENIAQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact" id="contact">
            
            <div className="container">
                <Pulse><h2>Contact Me</h2></Pulse>
                <form onSubmit={handleClick}>
                <Flip bottom>
                    <input type="text" placeholder="Name" id='name' name="name"/></Flip>  
                <Flip bottom>
                    <input type="text" placeholder="Email" name="user_email"/></Flip>
                <Flip bottom>
                    <textarea placeholder="Message" name="message"/></Flip>
                <Zoom ><button type="submit" >Send</button></Zoom>
                    {(message) && <span>thanks for your feedback</span>}
                </form>
            <Rotate cascade>
            <div className="social">
            <a  href="https://facebook.com/rujaan.singh" target="_blank" rel="noreferrer" ><img src={fb} href="facebook.com" alt='fb'/> </a>     
            <a  href="https://www.instagram.com/ru_zaan__/" target="_blank" rel="noreferrer" ><img src={insta} alt='insta'/>  </a>    
            <a  href="https://github.com/singhrujaan" target="_blank" rel="noreferrer" ><img src={github} alt='github'/> </a> 
            </div>
            </Rotate>
            </div>
            <Zoom ><h6 className='text-center'><span>&copy;&nbsp;rujaan&nbsp;2021,</span> <span className="small">Built using reactjs</span> </h6></Zoom>
        </div>
    )
}
