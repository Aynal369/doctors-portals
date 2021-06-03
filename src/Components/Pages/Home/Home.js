import React from "react";
import Appointment from "../../Layout/Body/Appointment/Appointment";
import Blogs from "../../Layout/Body/Blogs/Blogs";
import Contact from "../../Layout/Body/Contact/Contact";
import Doctors from "../../Layout/Body/Doctors/Doctors";
import Featured from "../../Layout/Body/Featured/Featured";
import Services from "../../Layout/Body/Services/Services";
import Testimonials from "../../Layout/Body/Testimonials/Testimonials";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Featured />
      <Appointment />
      <Testimonials />
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
