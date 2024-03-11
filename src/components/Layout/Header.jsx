"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import { cx } from "../../utils/index";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

import Logo from "../../../public/atilaLogo.svg";

const Header = () => {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("hidden");
    menuRef.current.classList.toggle("flex");
  }

  function closeMenu() {
    btnRef.current.classList.remove("open");
    menuRef.current.classList.add("hidden");
    menuRef.current.classList.remove("flex");
  }

  useEffect(() => {
    const btn = btnRef.current;
    btn.addEventListener("click", navToggle);

    return () => {
      btn.removeEventListener("click", navToggle);
    };
  }, []);

  useEffect(() => {
    const menuLinks = menuRef.current.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-40 font-gs  top-0 w-full">
      <div
        id="navbar"
        className={`flex bg-first font-gs flex-col ${
          isScrolled ? "py-0" : "py-0"
        } ${isScrolled ? "lg:py-3" : "lg:py-3"}`}>
        <div className="text-light mx-32 items-center bg-first justify-between hidden lg:flex flex-row ">
          <div className=" items-center space-x-4  text-2xl flex">
            <Link className="" href="/">
              <Image
                src={Logo}
                width={200}
                height={80}
                alt="altcoinvoyage.com"
              />
            </Link>
          </div>
          <div className=" space-x-6  text-light mr-8 flex">
            <span className="hover:scale-110 duration-500">
              <Link href="/">Ana Sayfa</Link>
            </span>
            <span className="hover:scale-110 duration-500">
              <Link href="/about">Hakkımızda</Link>
            </span>
            <span className="hover:scale-110 duration-500">
              <Link href="/services">Çalışma Alanlarımız</Link>{" "}
            </span>
            <span className="hover:scale-110 duration-500">
              {" "}
              <Link href="/blog">Blog</Link>{" "}
            </span>
          </div>

          <div className="flex flex-row text-blue-500 text-2xl items-center space-x-4  ">
            <div
              className="bg-light font-semibold animation-pulse hover:scale-110 duration-500 text-lg text-first rounded-xl px-4 py-2"
              aria-label="Toggle Menu">
              <Link href="/contact">Bize Ulaşın</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex md:flex-row items-center justify-evenly">
        <div className="flex z-50 fixed justify-between px-8 bg-first  text-first items-center min-w-full  lg:hidden pt-20 ">
          <div className="mt-2 flex py-2 items-center bg-first text-light ">
            <Link href="/">
              <Image
                src={Logo}
                width={140}
                height={70}
                alt="Atila Hukuk ve Danışmanlık"
              />
            </Link>
          </div>
          <div className="lg:hidden flex items-center  space-x-6">
            <button
              id="menu-btn"
              ref={btnRef}
              type="button"
              className="z-50 mt-2 block hamburger lg:hidden focus:outline-none"
              aria-label="Toggle Menu">
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          ref={menuRef}
          className="fixed   bg-first text-light z-30 top-0 bottom-0 left-0 flex-col text-center hidden lg:hidden w-2/3 min-h-screen py-1 pt-40 space-y-4 text-xl ">
          <div className="absolute" />
          <div className="relative space-y-6 justify-center mx-auto flex-col flex">
            <span>
              <Link href="/">Ana sayfa</Link>
            </span>
            <span>
              <Link href="/about">Hakkımızda</Link>
            </span>
            {/* <span>
              <Link href="/latestnews">Latest News</Link>
            </span> */}
            <span>
              <Link href="/services">Çalışma Alanlarımız</Link>{" "}
            </span>
            <span>
              <Link href="/blog">Blog</Link>{" "}
            </span>
            <span>
              <Link href="/contact">Bize Ulaşın</Link>{" "}
            </span>
          </div>

          <div className="flex text-light text-2xl flex-row space-x-6 pt-6 justify-center">
            <a
              href="https://twitter.com/AltcoinVoyage"
              aria-label="Twitter Link">
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/altcoin_voyage/"
              aria-label="Twitter Link"
              className="text-light">
              <FaInstagram />
            </a>
            <a
              href="https://www.instagram.com/altcoin_voyage/"
              aria-label="Twitter Link"
              className="text-light">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
