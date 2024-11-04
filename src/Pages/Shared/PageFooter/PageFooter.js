import React from "react";
import picture from "../../../Assets/Images/image2.jpg"
import { SiWhatsapp,SiLinkedin,SiGithub,SiFacebook } from "react-icons/si";

const PageFooter = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="flex items-center">
          <div>
            <img
              className="h-12 w-12 rounded-full"
              src={picture}
              alt="Footer"
            />
          </div>
          <div className="text-start ms-2">
            <p className="text-2xl">Md Rakib Bhuiyan</p>
            <p>copyright © 2024 all rights reserved</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
          <ul className="menu menu-horizontal px-1">
            <li className="p-1">
              <a className="text-2xl p-1" href="https://www.linkedin.com/in/md-rakib-bhuiyan" target="_blank" rel="noreferrer"><SiLinkedin/></a>
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
      </footer>
    </div>
  );
};

export default PageFooter;
