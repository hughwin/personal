import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Topbar from './components/TopBar';
import Landing from './components/Landing'
import { useState } from 'react';
import { Element, scroller, } from "react-scroll";





function App() {

  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const setAboutClick = () => {
    console.log("fire!")
    setShowAbout(!showAbout)
    scroller.scrollTo("aboutElement", {
      duration: 2000,
      delay: 100,
      smooth: true, 
      offset: 50,
    })
  }

  const setContactClick = () => {
    console.log("fire!")
    setShowContact(!showContact)
    scroller.scrollTo("contactElement", {
      duration: 2000,
      delay: 100,
      smooth: true, 
      offset: 50,
    })
  }


  return (
    <div>
      <Topbar setAbout={setAboutClick} setContact={setContactClick}/>
      <Landing/>
      {showAbout ? <About/> : null}
      <Element name="aboutElement"/>
      {showContact ? <Contact/> : null}
      <Element name="contactElement"/>
    </div>
  )
}

export default App;
