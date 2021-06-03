import React from "react";
import "./Hero.scss";
import heroBanner from "../../../images/hero-banner.png";

const Hero = () => {
  return (
    <main id="hero">
      <div className="container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 m-2">
            <div className="title">
              <h1>
                Your new smile <br /> starts here
              </h1>
            </div>
            <div className="short-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum eligendi error fugiat, minima
                odit voluptate perferendis ipsum delectus reprehenderit sunt autem minus repellat officiis consequuntur
                placeat corrupti libero odio.
              </p>
            </div>
            <button className="btn btn-primary">Get appointment</button>
          </div>
          <div className="col-md-6 m-2">
            <img src={heroBanner} alt="Hero Banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
