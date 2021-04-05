import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import { useState } from "react";
import { Element, scroller } from "react-scroll";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const setAboutClick = () => {
    console.log("fire!");
    setShowAbout(true);
    scroller.scrollTo("aboutElement", {
      duration: 2000,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

  const setContactClick = () => {
    console.log("fire!");
    setShowContact(true);
    scroller.scrollTo("contactElement", {
      duration: 2000,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };

  return (
    <div>
      <Landing setAbout={setAboutClick} showArrow={showAbout} />
      {showAbout ? (
        <About setContact={setContactClick} showArrow={showContact} />
      ) : null}
      <Element name="aboutElement" />
      {showContact ? <Contact /> : null}
      <Element name="contactElement" />
    </div>
  );
}

export default App;
