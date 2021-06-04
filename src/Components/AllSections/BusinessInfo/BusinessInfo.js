import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarker, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BInfo from "./BInfo";

const biData = [
  {
    title: "Opening Hours",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: faClock,
    backgroundColor: "left",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10036, United States",
    icon: faMapMarker,
    backgroundColor: "center",
  },
  {
    title: "Contact Us Now",
    description: "+000 123 456789",
    icon: faPhoneVolume,
    backgroundColor: "right",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {biData.map(data => (
          <BInfo data={data} key={data.title} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
