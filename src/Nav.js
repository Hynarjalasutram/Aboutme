import { Link } from "react-router-dom"
import "./Nav.css"
import React from "react";

let Nav=()=>{
    return(
        <nav className="nav">
            <div className="navleft">Portfolio</div>
            <div id="navright">
                 <div><Link to="/"><span>Home</span></Link></div>
                 <div><Link to="/about"><span>About</span></Link></div>
                 <div><Link to="/skills"><span >Skills</span></Link></div>
                 <div><Link to="/projects"><span >Projects</span></Link></div>
                <div><Link to="/contact"><span >Contact</span></Link></div>
            </div>
        </nav>
    )
}
export default Nav