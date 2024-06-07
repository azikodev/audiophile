//images
import Logo from "../../public/assets/home/desktop/audiophile.png";

//react router dom (navlink)
import { Link } from "react-router-dom";

//icons 
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Footer(e) {
  const url = e;
  console.log(e);
  return (
    <>
      <div className="bg-[#101010] text-white mx-auto">
        <div className="pt-20 pb-9 flex items-center justify-between h-7 w-[1110px] mx-auto">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="links flex gap-8">
            <Link to="/" className="hover:text-[#d87D4A] link">
              HOME
            </Link>
            <Link to="/headphones" className="hover:text-[#d87D4A] link">
              HEADPHONES
            </Link>
            <Link to="/speakers" className="hover:text-[#d87D4A] link">
              SPEAKERS
            </Link>
            <Link to="/earphones" className="hover:text-[#d87D4A] link">
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="flex justify-between mx-48 items-center pb-9">
          <div>
            <p className="pb-4">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team <br />
              of music lovers and sound specialists who are devoted to helping
              you get the <br />
              most out of personal audio. Come and visit our demo facility -
              we’re open 7 <br />
              days a week.
            </p>
            <p>Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex gap-2">
            <Link to="https://www.facebook.com/">
              <FaFacebookSquare />
            </Link>
            <Link to="https://x.com/">
              <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
