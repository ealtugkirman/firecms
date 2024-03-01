"use client";
import React from "react";
import Image from "next/image";
import demo from "../../public/demo.png";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import TabsSection from "./TabsSection";

const Team = () => {
  return (
    <div className="flex bg-light px-12 py-12 text-first">
      {/* Left Image */}
      <div className="relative pl-40 w-1/2  pr-12 rounded-3xl py-24 ">
        <div className="z-10 absolute left-20 top-10 ">
          <Image
            src={demo}
            style={{ "border-radius": "30px" }}
            placeholder="blur"
            width={150}
            alt="atila"
          />
        </div>
        <div className="z-10 rounded-2xl">
          <Image
            src={demo}
            style={{ "border-radius": "30px" }}
            placeholder="blur"
            width={400}
            alt="atila"
          />
        </div>
        <div className="z-10 absolute right-20 bottom-10 ">
          <Image
            src={demo}
            style={{ "border-radius": "30px" }}
            placeholder="blur"
            width={150}
            alt="atila"
          />
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 bg-light space-y-2 py-24 text-first">
        <h1 className="text-5xl mb-12 capitalize font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-lg pb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          molestias tempora reiciendis? Ullam dolores veritatis dignissimos
          reiciendis eum alias eligendi quaerat illo ea veniam.
        </p>
        <div>
          <TabsSection />
        </div>
      </div>
    </div>
  );
};

export default Team;
