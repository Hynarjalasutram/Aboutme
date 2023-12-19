import "./Projects.css"
import React from "react";
let Projects=()=>{
    return(
        <div className="project">
            <h1>My Projects</h1>
            <div className="card">
                <div className="card-box">
                    <img src={require("../images/LinkedInclone.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>LinkedIn clone</h6>
                        <p>In LinkedIn clone providing display properties,position etc. </p>
                        <a href="https://linked-in1.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="card-box">
                    <img src={require("../images/mamaearthclone.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>Mamaearth clone</h6>
                        <p>In this clone display properties and margin etc are used</p>
                        <a href="https://mamaearth-kappa.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="card-box">
                    <img src={require("../images/Vclone.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>Vector Sample app clone</h6>
                        <p>In this hover and carousel are used and javascript function are used</p>
                        <a href="https://cloneapp-phi.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="card-box">
                    <img src={require("../images/Sampleclone.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>AMP sample web site</h6>
                        <p>This is HTML and CSS web app.In this padding margin etc are used</p>
                        <a href="https://mobirise-nine.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="card-box">
                    <img src={require("../images/Vclone1.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>Login web page</h6>
                        <p>In this localscope used to login the page</p>
                        <a href="https://cloneapp-phi.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className="card-box">
                    <img src={require("../images/WebApp.png")} alt="img not found"/>
                    <div className="card-disc">
                        <h6>React Clone</h6>
                        <p>This is a sample react app.Router topics are used.</p>
                        <a href="https://cloneapp-phi.vercel.app/" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects