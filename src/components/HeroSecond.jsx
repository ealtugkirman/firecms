"use client"

import React, { useEffect } from "react";
import { AiOutlineRise } from "react-icons/ai";
import Scroll from "./Scroll";


const HeroSecond = () => {


  return (
    <div className="flex flex-col md:flex-row md:px-32 md:pt-32 bg-first text-light">
      <div>
        <div className="grid grid-cols-2 grid-rows-1 justify-between items-center">
          <div className=" space-y-4 items-center">
            <div className="flex flex-row space-x-4 items-center">
              <h3 className="font-semibold leading-10 capitalize text-4xl">
                We Provide best law
              </h3>
              <div className="bg-second rounded-xl text-first text-4xl px-4">
                <AiOutlineRise />
              </div>
            </div>
            <h3 className="font-semibold leading-10 capitalize text-4xl">
              consultancy for your needs
            </h3>
            <h3 className="font-semibold leading-10 capitalize text-4xl">
              Lorem ipsum dolor sit.
            </h3>
          </div>
          <div className="relative  items-end right-0">
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
              odio dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
