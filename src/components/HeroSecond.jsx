"use client";
import React from "react";
import CountUp from "react-countup";

const HeroSecond = () => {
  return (
    <div className="grid bg-first items-center pt-16 px-4 md:px-8 lg:px-12 justify-center md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 ">
      <div className="flex items-center justify-start">
        <div className="text-xl   md:text-3xl  lg:text-5xl mx-4  lg:mx-8 ">
          <CountUp end={12} duration={9} />
          <h3 className="text-2xl text-light ">Kişilik Ekip</h3>
          <p className="text-xs md:text-sm  lg:text-lg">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima repellat soluta?Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="text-xl  md:text-3xl  lg:text-5xl mx-4  lg:mx-8 ">
          <CountUp end={48} duration={6} />
          <h3 className="text-2xl text-light ">Mutlu Müvekkil</h3>
          <p className="text-xs md:text-sm  lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            qui eius harum.Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start">
        <div className="text-xl  md:text-3xl  lg:text-5xl mx-4  lg:mx-8 ">
          <CountUp end={9} duration={5} />
          <h3 className="text-2xl text-light ">Hizmet Alanı</h3>
          <p className="text-xs md:text-sm  lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus
            voluptatum iste.Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
