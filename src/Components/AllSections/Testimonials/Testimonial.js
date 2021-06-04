import React from "react";

const Testimonial = ({ data }) => {
  return (
    <div className="col-md-4">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <p className="text-center">{data.quote}</p>
        </div>
        <div className="d-flex  align-items-center">
          <img className="mx-3" src={data.img} alt="" width="60" />
          <div>
            <h5>{data.name}</h5>
            <p className="m-0">{data.from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
