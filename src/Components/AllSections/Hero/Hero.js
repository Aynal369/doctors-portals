import React from "react";
import "./Hero.css";
import heroBanner from "../../images/hero-banner.png";

const Hero = () => {
  return (
    <section id="hero_area">
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <h1>
              Your new smile <br /> starts here
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum eligendi error fugiat, minima
              odit voluptate perferendis ipsum delectus reprehenderit sunt autem minus repellat officiis consequuntur
              placeat corrupti libero odio.
            </p>
            <button className="btn btn-primary">Get appointment</button>
          </div>
          <div className="col-md-6 offset-md-2">
            <img src={heroBanner} alt="Hero Banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
