import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="text-center py-5">
        <h5>Contact</h5>
        <h2 className="text-white">Always connect with us</h2>
      </div>
      <div className="col-md-7 mx-auto">
        <form>
          <div className="form-group mt-5">
            <input type="text" className="form-control" placeholder="Email Address *" />
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" placeholder="Subject *" />
          </div>
          <div className="form-group mt-3">
            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
          </div>
          <div className="form-group text-center mt-3">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
