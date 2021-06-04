import React from "react";
import "./ServiceDetail.css";

const ServiceDetail = ({ data }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="service-card">
        <div className="mb-4">
          <img src={data.img} alt={data.title} />
        </div>
        <div className="mb-3">
          <h4>{data.title}</h4>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
