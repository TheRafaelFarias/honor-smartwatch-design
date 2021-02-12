import React from 'react';

import menu from "./menu.svg"
import honorLogo from "./honorlogo.svg"

function App() {
  return (
    <div className="">
      <section className="">
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
      <section>
        <div>
          <h1>Smartwatch</h1>
          <p>ELEMENT SERIE</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.</p>
          <section className="watches">
            <div className="watch"></div>
            <div className="watch"></div>
            <div className="watch"></div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
