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

  return (
    <div>
      <Topbar setAbout={setAboutClick}/>
      <Landing/>
      {showAbout ? <About/> : null}
    </div>
  )
}

export default App;
