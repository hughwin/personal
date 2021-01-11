import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Landing = ({ setAbout, showArrow }) => {

    const handleAboutClick = () => {
        setAbout()
      }

return(
        <div class="top container text-center">
            <h1 class="title" id="name">Hugh Winchester</h1>
            {!showArrow ?
            <FontAwesomeIcon icon={faArrowDown} onClick={()=>handleAboutClick()} size="3x" class="fadeIn"/> :
            <FontAwesomeIcon icon={faArrowDown} size="3x" class="fadeOut"/>}
        </div>
)
}


export default Landing