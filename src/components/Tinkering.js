import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  Card  from "./Card"

const Tinkering = ({ setContact, showArrow }) => {
  const handleContactClick = () => {
    setContact();
  };

  return (
    <div class="container text-center">
      <h1 class="header" id="tinkering">
        Tinkering
      </h1>
      <div class="text-center container-fluid">
        <div class="row">
            <Card title={"Test title"} text={"Test text"}/>
            <Card title={"Test title2"} text={"Test text2"}/>
            <Card title={"Test title3"} text={"Test text3"}/>


        </div>
      </div>
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
