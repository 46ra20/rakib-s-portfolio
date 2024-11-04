import React from "react";
import BannerImage from "./BannerImage";
import TextTyped from "./TextTyped";
import { SiLinkedin, SiGithub, SiWhatsapp, SiFacebook } from "react-icons/si";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-center">
      <div className="md:w-1/2">
        <TextTyped/>
        <div className="flex flex-col justify-center items-center">
          <p>C | C++ | Python | DAS | Algorithom | Django | REST API | Database</p>
          <p>ReactJS | NodeJS | JWT | NextJS | MongoDB | Firebase</p>
          <ul className="menu menu-horizontal px-1">
            <li className="p-1">
              <a className="text-2xl p-1" href="https://www.linkedin.com/in/md-rakib-bhuiyan" target="_blank" rel="noreferrer" ><SiLinkedin/></a>
            </li>
            <li className="p-1">
              <a className="text-2xl p-1" href="https://github.com/46ra20" target="_blank" rel="noreferrer"><SiGithub/></a>
            </li>
            <li className="p-1">
              <a className="text-2xl p-1" href="https://www.facebook.com/mdrakib.bhuiyan.3954/" target="_blank" rel="noreferrer"><SiFacebook/></a>
            </li>
            <li className="p-1">
              <a className="text-2xl p-1" href="https://wa.link/b5ifhe" target="_blank" rel="noreferrer"><SiWhatsapp/></a>
            </li>
          </ul>

        </div>
      </div>
      <div className="md:w-1/2">
        <BannerImage/>
      </div>
    </div>
  );
};

export default Banner;
