import "./App.css";
import { useState } from "react";

const App = () => {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <div class="header">
        <div id="name">
        <p>Anabelle Johnston</p>
        </div>
        <div id="links">
          <p>Work</p>
          <p>About</p>
        </div>
      </div>
      <div class="bio">
        <p>Anabelle is a designer and writer interested in creative storytelling across mediums.</p>
      </div>
     <div class="projects">
      <div id="development">
       <img src="./images/development.png"></img>
       <h3>Development</h3>
       <p>For UI/UX, I designed an interactive interface that allows users to filter and sort an array.</p>
      </div>
      <div id="responsive-redesign">
       <img src="./images/responsive-redesign.png"></img>
       <h3>Responsive Redesign</h3>
       <p>For UI/UX, I designed an interactive interface that responds to changing screen dimensions.</p>
      </div>
      <div id="personas">
       <img src="./images/personas.png"></img>
       <h3>Personas</h3>
       <p>For UI/UX, I developed a user profile and user journey for the CVS self-checkout interface.</p>
      </div>
      <div id="react-studio">
       <img src="./images/react-studio.png"></img>
       <h3>React Studio</h3>
       <p>For UI/UX, I design an aggregator and cart interface. This project was the basis for my Development assignment.</p>
      </div>
      </div>
      <div class="contact">
        <p>Email</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
    


    </div>
  );
}

export default App;
