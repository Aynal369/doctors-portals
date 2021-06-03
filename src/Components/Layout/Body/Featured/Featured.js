import React from "react";
import featured from "../../../images/featured.png";
import "./Featured.scss";

const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid" src={featured} alt="featured" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>
              Exceptional Dental <br /> Care, on your Term
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio.
              Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos
              repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit,
              eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi,
              voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae,
              similique excepturi sapiente.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
