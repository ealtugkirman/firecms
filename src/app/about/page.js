import Page from "../services/page";
import Hero from "./components/Hero";
import Contact from "../contact/page";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <div className="-my-32" >
        <Page />
      </div>
      <Contact />
    </div>
  );
};

export default page;
