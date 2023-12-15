import "./contant.css"
let Contact=()=>{
    return(
        <div className="main" >
            <div className="heading">
                <h1>Hynar Jalasutram</h1>
            </div>
            <div className="contact">
                <a href="tel:6303366492" rel="noreferrer" target="_blank"><i class="fa-solid fa-phone"></i> +91 6303366492</a>
                <a href="mailto:hynar.j@gmail.com" rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i> hynar.j@gmail.com</a>
            </div>
            <div className="social">
                <a href="https://api.whatsapp.com/send/?phone=916303366492" rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
                <a href="https://www.instagram.com/hynar._j_.jalasutram._.nsrpab/" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a>
            </div>
            <div className="details">
                <button><a href="https://github.com/" rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a></button>
                <button><a href="www.linkedin.com/in/hynar-jalasutram" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></button>
                <button><a href="https://www.hackerrank.com/profile/18481a0477hj" rel="noreferrer" target="_blank"><i class="fa-brands fa-hackerrank"></i> Hackerrank</a></button>
            </div>
        </div>
    )
}
export default Contact