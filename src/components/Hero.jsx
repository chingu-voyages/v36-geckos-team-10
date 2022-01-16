import React from "react";
import { Link } from "react-router-dom";
import banner1 from '../assets/html1.jpg';
import BtnStyled from "./BtnStyled";

function Hero() {
  return (
    <div className="hero">
      <div className="landing-hero-description">
      <div >
        <h1 className="landing-heading-primary">Primary Heading</h1>
        <p className="landing-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero
          suscipit voluptates fugiat delectus odio quasi quidem. Beatae esse
          deleniti, dolore enim quidem omnis quo sint? Adipisci aperiam fuga
          quibusdam?
        </p>
        <p className="landing-paragraph-two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero
          suscipit voluptates fugiat delectus odio 
        </p>
        </div>
          <Link className="btn-create" to='/workspace'>
            <BtnStyled innerText={'create'} />
          </Link>
      </div>
      <div className="landing-hero-banner">
          <img src={banner1} alt="" />


      </div>
    </div>
  );
}

export default Hero;
