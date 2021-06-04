import React from "react";
import "./Home.css";
import NavBar from "../../AllSections/NavBar/NavBar";
import Hero from "../../AllSections/Hero/Hero";
import BusinessInfo from "../../AllSections/BusinessInfo/BusinessInfo";
import Services from "../../AllSections/Services/Services";
import Featured from "../../AllSections/Featured/Featured";
import Footer from "../../AllSections/Footer/Footer";
import Appointment from "../../AllSections/Appointment/Appointment";
import Testimonials from "../../AllSections/Testimonials/Testimonials";
import Blogs from "../../AllSections/Blogs/Blogs";
import Doctors from "../../AllSections/Doctors/Doctors";
import Contact from "../../AllSections/Contact/Contact";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
        <BusinessInfo />
      </header>
      <main>
        <Services />
        <Featured />
        <Appointment />
        <Testimonials />
        <Blogs />
        <Doctors />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
