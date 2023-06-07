import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const navigate = useNavigate()
  function GotoTeam() {
    window.scrollTo(0, 1222)

    navigate("/about")
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand className='col-lg-5'>
          <Link to='/home' className='HomePage'>Gabs.</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/serviceDescription' className='hidenav'>Description</Link>
            <Link to='/home' className='nav-link' aria-current='page'>Accueil</Link>
            <Link to='/about' className='nav-link' >Apropos</Link>
            <Link to='/service' className='nav-link' >services</Link>
            <span onClick={GotoTeam} className='nav-link gototeam'>Team</span>
          </Nav>
          <Nav>
            <Link to='/contact' className='nav-link'> Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;