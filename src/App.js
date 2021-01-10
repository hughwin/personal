import './App.css';
import About from './components/About'
import Topbar from './components/TopBar';
import Landing from './components/Landing'
import { useState } from 'react';



function App() {

  const [showAbout, setShowAbout] = useState(true)

  const setAboutClick = () => {
    console.log("fire!")
    setShowAbout(!showAbout)
  }

  const buttonTest = () => setShowAbout(!showAbout)


  return (
    <div>
      <Topbar setAbout={setAboutClick}/>
      <Landing/>
      <input type="submit" value="Search" onClick={buttonTest} /> 
      {showAbout ? <About/> : null}
    </div>
  )
}

export default App;
