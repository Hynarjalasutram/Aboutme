import "./Skills.css"
import React from "react";
let Skills=()=>{
    return(
        <div className="skill-main">
            <h1>Skills</h1>
            <div className="skills">
                <div><i class="fa-brands fa-python"></i>Python</div>
                <div><i class="fa-brands fa-github"></i>GitHub</div>
                <div><i class="fa-brands fa-html5"></i>HTML</div>
                <div><i class="fa-brands fa-css3-alt"></i>CSS</div>
                <div><i class="fa-brands fa-js"></i>JavaScript</div>
                <div><img src={require("../images/R.png")} alt="img not fond"/>JSON</div>
                <div><i class="fa-brands fa-react"></i>React Js</div>
                <div><i class="fa-brands fa-node"></i>Node JS</div>
                <div><i class="fa-brands fa-npm"></i>NPM</div>
                <div><img src={require("../images/Expressjs.jpg")} alt="img not fond"/>Express JS</div>
                <div><img src={require("../images/postman.png")} alt="img not fond"/>API (Postman)</div>
                <div><i class="fa-brands fa-envira"></i>MongoDB</div>
                <div><img src={require("../images/sql.png")} alt="img not fond"/>MySQL</div>
            </div>
        </div>
    )
}
export default Skills