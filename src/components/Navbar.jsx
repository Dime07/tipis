import "../CSS/Navbar.css"
import iconDribble from "../assets/icon/dribbble.png"
import iconInstagram from "../assets/icon/instagram.png"
import { Link } from "react-router-dom"


function Navbar(){
    return(
        <div className="Navbar">
            <p className="logo-nav">
                Tipis
            </p>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/tips">Tips</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="socmed">
                <a href="https://dribbble.com/dimas_rafi">
                    <img id="dribble" src={iconDribble} alt="icon dribbble" />
                </a>
                <a href="https://www.instagram.com/dime__/">
                    <img  src={iconInstagram} alt="icon instagram" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;