import React from "react";

const root = document.querySelector('root');
class Navbar extends React.Component {
    state = {
        menuToggle: false
    }

    render() {
        return (
        <>
      <nav id="navbar" className="">
  <div className="nav-wrapper">

    <div className="logo">
      <a href="#home"><i className="fas fa-chess-knight"></i> Logo</a>
    </div>

 
    <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


<div className="menuIcon">
  <span className="icon icon-bars"></span>
  <span className="icon icon-bars overlay"></span>
</div>


<div className="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
</>
    );
}
}
export default function Testing() {

    return (
        <>
            <nav id="navbar" class="">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="#home"><i class="fas fa-chess-knight"></i> Logo</a>
                    </div>


                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>


            <div class="menuIcon">
                <span class="icon icon-bars"></span>
                <span class="icon icon-bars overlay"></span>
            </div>


            <div class="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}
