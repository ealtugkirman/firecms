"use client";
import React from "react";
import CountUp from "react-countup";

const HeroSecond = () => {
  return (
    <div className="grid bg-first items-center pt-16 px-12 justify-center grid-cols-3 grid-rows-1 ">
      <div className="flex items-center justify-center">
        <div className="text-5xl mx-16 ">
          <CountUp end={12} duration={9} />
          <h3 className="text-2xl text-light " >Kişilik Ekip</h3>
          <p className="text-lg">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            minima repellat soluta?Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-5xl mx-16 ">
          <CountUp end={48} duration={6} />
          <h3 className="text-2xl text-light " >Mutlu Müvekkil</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            qui eius harum.Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-5xl mx-16 ">
          <CountUp end={9} duration={5} />
          <h3 className="text-2xl text-light " >Hizmet Alanı</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus
            voluptatum iste.Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
