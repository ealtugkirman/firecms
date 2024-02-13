"use client";
import Image from "next/image";
import Lawyer from "../../public/PlaceHolderLawyer.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row  md:px-32  md:pt-32 bg-light text-first ">
      <div className="flex space-y-8 leading-10 my-24 items-start   text-5xl flex-col w-1/2">
        <p className="font-bold">
          Lorem ipsum dolor sit amet. <br /> Nisi nulla
          <br />
          <span className="underline-y-half z-10">dignissimos temporibus!</span>
        </p>
        <p className="text-lg opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eos, ipsa beatae sunt possimus consequatur non harum deleniti
          similique placeat quae cumque iste blanditiis, provident corporis!
          Quo, libero adipisci. Tempore, blanditiis accusantium.
        </p>
        <button className="bg-first text-xl  px-4 py-2 rounded-xl text-light">
          {" "}
          Contact Us
        </button>
      </div>
      <div className="flex  w-1/2">
        <Lottie animationData={Lawyer} />
      </div>
    </div>
  );
};

export default Hero;
