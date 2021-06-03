import React from "react";
import "./Testimonials.scss";
import wilson from "../../../images/Ellipse1.png";
import ema from "../../../images/Ellipse2.png";
import aliza from "../../../images/Ellipse3.png";
import Testimonial from "./Testimonial";

const tData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header">
          <h5 className="text-primary text-uppercase">Testimonial</h5>
          <h1>
            What Our Patients <br /> Says
          </h1>
        </div>
        <div className="row mt-5">
          {tData.map(data => (
            <Testimonial data={data} key={data.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
