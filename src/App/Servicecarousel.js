import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Servicecarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  // function openWin() {
    // var myWindow
    // myWindow = window.open("Servicedescription", "myWindow:100");
    // const myWindow = window.open("Servicedescription", "myWindow:100");
  // }

  const navigate = useNavigate()
  function Entreprenariat() {
      window.scrollTo(0, 296)
      navigate("/serviceDescription")
  } 
  function Soustraitance() {
      window.scrollTo(0, 300)
      navigate("/serviceDescription")
  } 
  function Consultance() {
      window.scrollTo(0, 800)
      navigate("/serviceDescription")
  } 

  return (
        <div className="servicecarousel">
          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="banner_main card">
            <div className="card_content">
              <h1 className="banner_taital">Entreprenariat</h1>
              <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
              <div className="btn_main">
                <Link to='/contact' className="buttonBtn">Contact</Link>
                <span onClick={Entreprenariat} className="buttonBtn Plus">Lire Plus</span>
                {/* <span onClick={openWin} className="buttonBtn Plus">Lire Plus</span> */}
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="banner_main card">
            <h1 className="banner_taital">Sous-traitance</h1>
            <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
            <div className="btn_main">
              <Link to='/contact' className="buttonBtn">Contact</Link>
              <span onClick={Soustraitance} className="buttonBtn Plus">Lire Plus</span>
              {/* <span onClick={openWin} className="buttonBtn Plus">Lire Plus</span> */}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <div className="banner_main card">
            <h1 className="banner_taital">Consultance</h1>
            <p className="banner_text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
            <div className="btn_main">
              <Link to='/contact' className="buttonBtn">Contact</Link>
              <span onClick={Consultance} className="buttonBtn Plus">Lire Plus</span>
              {/* <span onClick={openWin} className="buttonBtn Plus">Lire Plus</span> */}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
      );
}


export default Servicecarousel;