import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>

<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img style={{height:'50px'}} src="https://i.postimg.cc/pTJ4FhNF/ducati-id.png" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">MODELS</Nav.Link>
            <Nav.Link href="#pricing">TEST RIDE</Nav.Link>
            <Nav.Link href="#pricing">EVENTS</Nav.Link>
            <Nav.Link href="#pricing">DEALERS</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Header