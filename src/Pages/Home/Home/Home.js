import React from "react";  
import { ToastContainer} from 'react-toastify';
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactWithMe from "../ContactWithMe/ContactWithMe";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="mb-8 mt-12" id="home">
      <Banner />
      <Projects />
      <AboutMe />
      <ContactWithMe />
      <ToastContainer/>
    </div>
  );
};

export default Home;
