"use client";
import React from "react";
import Lawyer from "../../public/LawyerPlaceholder.jpg";
import Image from "next/image";
import demo from "../../public/demo.png"

const Hero = () => {
  return (
    <div className="relative bg-light font-gs flex flex-col-reverse py-24 pl-0 md:pl-6 lg:pl-12  lg:flex-col ">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice">
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover hidden lg:block w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={demo}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 md:px-12 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Atila Hukuk ve Danışmanlık
          </p>
          <h2 className="mb-5 font-gs capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            YERİNDE GÜÇLÜ HİZMET
            <br className="hidden md:block" />
            KARARLI VE ETKİLİ{" "}
            <span className="inline-block text-deep-purple-accent-400">
              ÇÖZÜMLER
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Atila Hukuk & Danışmanlık yerinde ve etkili hizmet vizyonu ile
           kurulmuş, hukuki hizmetlerde doğrudanlık esası ile yerli ve yabancı
           müvekkillerine çeşitli hukuk alanlarında hizmet veren bir hukuk
           bürosudur.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-first text-white hover:bg-red-700 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
           Bize Ulasın
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-red-500">
              Yazılarımız
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
