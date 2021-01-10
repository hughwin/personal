import './App.css';
import About from './components/About'
import Topbar from './components/TopBar';
import Landing from './components/Landing'
import { useState } from 'react';
import { Element, scroller, animateScroll as scroll } from "react-scroll";





function App() {

  const [showAbout, setShowAbout] = useState(false)

  const setAboutClick = () => {
    console.log("fire!")
    setShowAbout(!showAbout)
    scroller.scrollTo("aboutElement", {
      duration: 1500,
      delay: 100,
      smooth: true, 
      offset: 50,
    })
  }

  return (
    <div>
      <Topbar setAbout={setAboutClick}/>
      <Landing/>
      {showAbout ? <About/> : null}
      <Element name="aboutElement"/>
    </div>
  )
}

export default App;
