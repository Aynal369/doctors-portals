import React from "react";
import doctor from "../../images/doctor.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section id="appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="doctor" />
          </div>
          <div className="col-md-7 text-white py-5">
            <div className="appointment-details">
              <h5>Appointment</h5>
              <h1 className="text-white my-4">
                Make an Appointment <br /> Today
              </h1>
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe
                hic amet nemo ea facere a!
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
