"use client";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMastodon,
} from "react-icons/fa";
import Logo from "../../../public/logoDark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-light items-center justify-center flex flex-col text-first px-32 py-12">
      <div className="grid grid-rows-1 items-center justify-center grid-cols-4">
        <div className="">
          <Image src={Logo} />
        </div>
        <div className="flex flex-col  items-center text-left">
          <div className="flex flex-col">
            {" "}
            <lu>Home</lu>
            <lu>About Us</lu>
            <lu>Blog</lu>
            <lu>Services</lu>
          </div>
        </div>
        <div className="flex flex-col items-center text-left">
          <div className="flex flex-col">
            <h4 className="font-semibold underline">Services</h4>
            <lu>Home</lu>
            <lu>About Us</lu>
            <lu>Blog</lu>
            <lu>Services</lu>
          </div>
        </div>
        <div className=" items-center" >
          <p>Lorem ipsum dolor sit.</p>
          <div  className="flex flex-row items-center"> <FaPhone className="text-xl mx-4" />0530 971 19 72 </div>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
       </div>
      </div>
       <div className="text-first mt-12 flex">
        <p> &copy;2024 digitalvoyage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
