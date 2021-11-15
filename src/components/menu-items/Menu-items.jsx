import React from 'react'
import './menu-items.scss'
export default function Menuitems({menuOpen,setMenuOpen}) {
    return (
        <div  className={"menu-items " + (menuOpen && "active")}> 
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">intro</a> 
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#portfolio">Portfolio</a> 
                </li>   
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#skills">Skills</a> 
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#projects">Projects</a> 
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#contact">contact</a> 
                </li>
            </ul>
        </div>
    )
}
