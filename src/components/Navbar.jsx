import React from "react";
import logo from "../assets/logo.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-7" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer"
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/shrishti-mahor")
          }
        />
        <FaGithub
          className="cursor-pointer"
          onClick={() => handleRedirect("https://www.github.com/shrishti0308")}
        />
        <FaEnvelope
          className="cursor-pointer"
          onClick={() => handleRedirect("mailto:shrishti.m22@iiit.in")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
