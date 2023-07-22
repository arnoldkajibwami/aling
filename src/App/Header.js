import { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const navigate = useNavigate()
  function GotoTeam() {
    window.scrollTo(0, 900)
    navigate("/about")
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  
  return (
    <Fragment>
      <Navbar className={colorChange ? 'navbar colorChange' : 'navbar'} >
        <Container className='Navcontainer container'>
          <Navbar.Brand className='col-lg-5'>
            <Link to='/home' className='logo' >Gabs.</Link>
          </Navbar.Brand>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <span> </span>
            <span id="spanleft"></span>
            <span> </span>
          </div>
          <div className={`me-auto mt-2 nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link to='/serviceDescription' className='hidenav'>Description</Link>
              </li>
              <li>
                <Link to='/home' aria-current='page'>Accueil</Link>
              </li>
              <li>
                <Link to='/about'>Apropos</Link>
              </li>
              <li>
                <Link to='/service'>Services</Link>
              </li>
              <li>
                <span onClick={GotoTeam} className='gototeam'>Team</span>
              </li>
              <li>
                <Link to='/contact' id="contactid"> Contact</Link>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;