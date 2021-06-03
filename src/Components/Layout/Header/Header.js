import React from "react";
import BusinessInfo from "./BusinessInfo/BusinessInfo";
import "./Header.scss";
import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Hero />
      <BusinessInfo />
    </header>
  );
};

export default Header;
