import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import hughImage from "./assets/hugh.jpg"
import transcript from "./assets/Winchester, Hugh.pdf"

const About = ({setContact, showArrow}) => {
    console.log(setContact)

    const handleContactClick = () => {
        setContact()
      }

    return(
    <div class="text-center">
        <img id="hughImage"  src={hughImage} alt="The website creator"/>
        <h1 class="header" id="about">About</h1>
        <p class="container-fluid">
            <div>
           <p>Hi, my name's Hugh. After 5 years working as a police officer, I decided that I wanted to try something different. </p>
        </div>
        <div>
            <p>I have recently completed a master's degree at the University of Glasgow where I graduated with distinction. <a href={transcript}>Click here</a> for a copy of my transcript.</p>
        </div>
        <div>
            <p>I code frequently, and enjoy completing challenges on CodeWars, Leetcode, building my own projects, and learning new skills. To see what I have been working on recently, please see my GitHub account.</p>
        </div>
            <p>Below, you can see the results of some of my tinkering.</p> 
            </p>
            {!showArrow ?
            <FontAwesomeIcon icon={faArrowDown} onClick={()=>handleContactClick()} size="3x" class=" fadeIn"/> :
            <FontAwesomeIcon icon={faArrowDown}  size="3x" class=" fadeOut"/>}
    </div>
    )
}

    export default About