import "./Home.css"
let Home=()=>{
    return(
        <div className="home">
            <div className="homedes">
                <h2>Hello, It's Me</h2>
                <h2><i>Hynar Jalasutram</i></h2>
                <h4>I'm a <strong >MERN Stack Developer</strong></h4>
                <div className="homebutton">
                    <a href="https://drive.google.com/u/0/uc?id=1OHq73rHHy-xG0u0u2vxGS3bi_9B3v0XI&export=download">Download the Resume</a>
                    <a href="https://drive.google.com/file/d/1OHq73rHHy-xG0u0u2vxGS3bi_9B3v0XI/view">View the Resume</a>
                </div>
            </div>
            <div className="homeimg">
                <img src={require('../images/PHOTO.jpg')} alt="img not found"/>
            </div>
        </div>
    )
}
export default Home