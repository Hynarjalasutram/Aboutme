import "./About.css"
import "../images/PHOTO.jpg"
let About=()=>{
    return(
        <div className="about">
             <div className="about-img">
                <img src={require('../images/PHOTO.jpg')} alt="img not found"/>
            </div>
            <div className="about-des">
                <h1>About Me</h1>
                <h3>MERN Stack Developer !</h3>
                <p>Hello! I'm Hynar, a passionate MERN stack developer with a strong background in creating dynamic and responsive web applications.Collaborative, team player, and proficient in working with interdisciplinary teams and executing goal-oriented projects. Strongly interested in obtaining a Software Developer position to work on enhancing the product.</p>
            </div>
        </div>
    )
}
export default About