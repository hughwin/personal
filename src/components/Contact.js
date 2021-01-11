import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {

    return( 
<div>
    <div class="text-center">
        <h1 class="header" id="contact">Contact</h1>
    </div>
<footer class="social text-center">
    <a href="https://github.com/hughwin">
    <FontAwesomeIcon icon={faGithub} size="6x"/>
    </a>
    <a href="https://uk.linkedin.com/in/hughwinchester">
    <FontAwesomeIcon icon={faLinkedin} size="6x"/>
    </a>
</footer>
</div>
    )
}

    export default Contact
