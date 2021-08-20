import "../CSS/About.css"
import iconDisclaimer from '../assets/icon/Info.png'

function About(){
    return(
        <div className="About">
            <div className="disclaimer-about">
              <img src={iconDisclaimer} alt="icon disclaimer" />
              <p>
                This web just mini project to practive my skill in react,
                but if you guys like it, let me know.
              </p>
            </div>
        </div>
    )
}

export default About;