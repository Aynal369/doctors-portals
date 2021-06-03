import React from "react";
import "./Services.scss";
import Tooth01 from "../../../images/tooth-01.png";
import Tooth02 from "../../../images/tooth-02.png";
import Tooth03 from "../../../images/tooth-03.png";
import ServiceDetail from "./ServiceDetail";

const sData = [
  {
    img: Tooth03,
    title: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde dicta adipisci deleniti dolorum dolores.",
  },
  {
    img: Tooth02,
    title: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde dicta adipisci deleniti dolorum dolores.",
  },
  {
    img: Tooth01,
    title: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore unde dicta adipisci deleniti dolorum dolores.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="top-title text-center">
        <div className="sub-title">
          <h5>Our Services</h5>
        </div>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {sData.map(data => (
            <ServiceDetail data={data} key={data.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
