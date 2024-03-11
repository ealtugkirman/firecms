"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Ticari ve Kurumsal Danışmanlık",
    content: "Hello",
  },
  {
    title: "İcra ve İflas Yönetimi",
    content: "Section 2 Content",
  },
  {
    title: "İş Hukuku",
    content: "Section 3 Content",
  },
  {
    title: "Teknoloji ve StartUp Hukuku",
    content: "Section 1 Content",
  },
  {
    title: "Yatırım Hukuku",
    content: "Section 2 Content",
  },
  {
    title: "Şirketler Hukuku",
    content: "Section 3 Content",
  },
  {
    title: "UluslarArası Ticaret ve Tahkim",
    content: "Section 1 Content",
  },
  {
    title: "Sigorta Hukuku",
    content: "Section 2 Content",
  },
  {
    title: "Kira Hukuku",
    content: "Section 3 Content",
  },
];

const Sidebar = ({ services, onSelectSection }) => {
  return (
    <div className="flex bg-light flex-col font-gs border border-black  p-5 text-first">
      <p className="text-2xl mb-4">Çalışma Alanlarımız</p>
      <ul className="space-y-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light pl-3 items-center  py-3 font-semibold "
            onClick={() => onSelectSection(service.title)}>
            <li className="pr-20">{service.title}</li>
            <FaArrowRight />
          </div>
        ))}
      </ul>
    </div>
  );
};

const Content = ({ title, content }) => {
  return (
    <div className="flex bg-light flex-col justify-center pt-6 md:pt-0 px-4 md:px-12 lg:px-24 font-gs">
      <h1 className="text-xl  md:text-2xl  lg:text-4xl " >{title}</h1>
      <p>{content}</p>
    </div>
  );
};

const ServicesBar = () => {
  const [currentSection, setCurrentSection] = useState(
    "Ticari ve Kurumsal Danışmanlık"
  );

  const handleSelectSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex bg-light flex-col md:flex-row ">
      <Sidebar services={services} onSelectSection={handleSelectSection} />
      <Content
        title={
          services.find((service) => service.title === currentSection)?.title
        }
        content={
          services.find((service) => service.title === currentSection)?.content
        }
      />
    </div>
  );
};

export default ServicesBar;
