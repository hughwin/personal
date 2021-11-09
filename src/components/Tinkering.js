import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tinkering = ({ setContact, showArrow }) => {
  const handleContactClick = () => {
    setContact();
  };

  return (
    <div class="container text-center">
      <h1 class="header" id="tinkering">
        Tinkering
        <ul>
          <li><a href="https://github.com/hughwin/APIT_assessement">Java Blackjack with networking and concurrency</a></li>
          <li><a href="https://github.com/BelfDev/uofg-msc-team-project">Top Trumps written in Java which stores scores to a database</a></li>
          <li><a href="https://botsin.space/web/accounts/282572">NASA picture bot written using Python. Hosted on Heroku</a></li>
          <li><a href="https://github.com/big-dill/macro-mate">MacroMate a wellness Django application</a></li>
          <li><a href="https://hugh-calculator.herokuapp.com/">Simple calculator built in React.</a></li>
        </ul>
      </h1>
      {!showArrow ? (
        <FontAwesomeIcon
          icon={faArrowDown}
          onClick={() => handleContactClick()}
          size="3x"
          class="fadeIn"
        />
      ) : (
        <FontAwesomeIcon icon={faArrowDown} size="3x" class="fadeOut" />
      )}
    </div>
  );
};

export default Tinkering;
