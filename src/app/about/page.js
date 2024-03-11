import Page from "../services/page";
import Hero from "./components/Hero";
import Contact from "../contact/page"
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Page />
      <Contact />
    </div>
  );
};

export default page;
