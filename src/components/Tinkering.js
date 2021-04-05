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
