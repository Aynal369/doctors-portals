import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./BInfo.css";

const BInfo = ({ data }) => {
  return (
    <div className="col-md-4 info-card">
      <div className={`d-flex justify-content-center box box-${data.backgroundColor}`}>
        <div className="me-3">
          <FontAwesomeIcon className="info-icon" icon={data.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6 className="text-white">{data.title}</h6>
          <small>{data.description}</small>
        </div>
      </div>
    </div>
  );
};

export default BInfo;
