import React from "react";
import { Link } from "react-router-dom";

const FooterDetails = props => {
  return (
    <div className="col-md-3">
      <h5>{props.menuTitle ? props.menuTitle : " "}</h5>
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} style={{ textDecoration: "none" }} className="text-secondary">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterDetails;
