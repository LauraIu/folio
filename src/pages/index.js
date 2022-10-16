import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  About,
  DevProjects,
  DevProjects2,
  Contact
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import OtherStuff from "../components/OtherStuff";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <InfoSection {...About} />
      <InfoSection {...DevProjects} />
      <InfoSection {...DevProjects2} />
      <OtherStuff />
      <InfoSection {...Contact} />

      <Footer />
    </>
  );
};

export default Home;
