import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MenuBar = () => {
  // const handleResume = () => {
  //   window.open(
  //     "https://drive.google.com/file/d/1o7aGS8AKhfe7qDON3n76r0FyrRUQUNCH/view",
  //     "_blank"
  //   );
  // };
  const menu = (
    <>
      <li>
        <HashLink to="/home#home">Home</HashLink>
      </li>
      <li>
        <HashLink to="/home#projects">Projects</HashLink>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <HashLink to="/home#about-me">About</HashLink>
      </li>
      <li>
        <HashLink to="/home#contact-with-me">Contact With Me</HashLink>
      </li>
    </>
  );
  return (
    <div className=" mb-10 fixed top-0 z-50 w-full">
      {/* <div className="container mx-auto navbar">
        <div className=" navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=""
            >
              {
                menu
              }
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Md Rakib Bhuiyan</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              menu
            }
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-accent" onClick={handleResume}>
            My Resume
          </button>
        </div>
      </div> */}
      <div className="container mx-auto navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl p-0 font-semibold" href="/home" rel="noreferrer">rakib's Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{menu}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn"
            href="https://drive.google.com/file/d/1p2OYF23t8UAWW307IjKIOFxlxLrhZuNU/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
