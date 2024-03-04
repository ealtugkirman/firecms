"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
<FaArrowRight />;

const Content = ({ section }) => {
  return (
    <div>
      {section === "Law Service" && <p>hello</p>}
      {section === "Another Law Service" && <p>Section 2 Content</p>}
      {section === "Another Service" && <p>Section 3 Content</p>}
      {section === "Law" && <p>Section 1 Content</p>}
      {section === "Digital Law Service" && <p>Section 2 Content</p>}
      {section === "Another one Service" && <p>Section 3 Content</p>}
    </div>
  );
};

const Sidebar = ({ onSelectSection }) => {
  return (
    <div className="flex flex-col bg-slate-100 rounded-3xl p-5 text-first">
      <p className="text-2xl mb-4">Hizmetlerimiz</p>
      <ul className="space-y-4 ">
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center  py-3 font-semibold rounded-lg">
          <li
            className=" pr-20 "
            onClick={() => onSelectSection("Law Service")}>
            Law Service
          </li>
          <FaArrowRight />
        </div>
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center  12 py-3 font-semibold rounded-lg">
          <li
            className=" "
            onClick={() => onSelectSection("Another Law Service")}>
            Another Law Service
          </li>
          <FaArrowRight />
        </div>
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center  12 py-3 font-semibold rounded-lg">
          <li
            className=" pr-20 "
            onClick={() => onSelectSection("Another Service")}>
            Another Service
          </li>
          <FaArrowRight />
        </div>
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center   py-3 font-semibold rounded-lg">
          <li className=" pr-20 " onClick={() => onSelectSection("Law")}>
            Law
          </li>
          <FaArrowRight />
        </div>
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center   py-3 font-semibold rounded-lg">
          <li
            className=" "
            onClick={() => onSelectSection("Digital Law Service")}>
            Digital Law Service
          </li>
          <FaArrowRight />
        </div>
        <div className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light bg-light pl-3 items-center   py-3 font-semibold rounded-lg">
          <li
            className=" "
            onClick={() => onSelectSection("Another one Service")}>
            Another one Service
          </li>
          <FaArrowRight />
        </div>
      </ul>
    </div>
  );
};

const ServicesBar = () => {
  const [currentSection, setCurrentSection] = useState("section1");

  const handleSelectSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="">
      <Sidebar onSelectSection={handleSelectSection} />
      <Content section={currentSection} />
    </div>
  );
};

export default ServicesBar;
