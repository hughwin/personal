import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Topbar = ({setAbout, setContact}) => {

  const handleAboutClick = () => {
    setAbout()
  }

  const handleContactClick = () => {
    setContact()
  }

  return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>Hugh Winchester</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={()=>handleAboutClick()}>About</Nav.Link>
        <Nav.Link onClick={()=>handleContactClick()}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}


export default Topbar