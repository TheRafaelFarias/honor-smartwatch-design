import React from 'react';
import "./index.css"

import menu from "./assets/menu.svg"
import honorLogo from "./assets/honorlogo.svg"
import bigWatch from "./assets/smartwatch-5.png"
import darkWatch from "./assets/smartwatch-5-dark.png"
import whiteWatch from "./assets/smartwatch-5-white.png"

function App() {
  return (
    <div className="page">
      <section className="navbar">
        <section className="menu">
          <img src={menu} alt="Menu" />
        </section>
        <img src={honorLogo} alt="Honor logo" />
        <div>
          <a
            className="navbutton"
            href="#"
          >
            Home
        </a>
          <a
            className="navbutton"
            href="#"
          >
            Smartphone
        </a>
          <a
            className="navbutton"
            href="#"
          >
            Store
        </a>
          <a
            className="navbutton buybutton"
            href="#"
          >
            Buy now
        </a>
        </div>
      </section>
      <section className="marketing">
        <div>
          <h1 className="marketing-title">Smartwatch</h1>
          <p className="marketing-type">ELEMENT SERIE</p>
          <p className="marketing-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.</p>
          <section className="watches">
            <div className="watch">
              <p className="watch-type">Dark</p>
              <p className="element-word">Element</p>
              <img src={darkWatch} alt="The watch dark version"/>
            </div>
            <div className="watch">
              <p className="watch-type">White</p>
              <p className="element-word">Element</p>
              <img src={whiteWatch} alt="The watch white version"/>
            </div>
          </section>
        </div>
        <img
          src={bigWatch}
          alt="Big rose watch"
          className="big-watch"
        />
      </section>
    </div>
  );
}

export default App;
