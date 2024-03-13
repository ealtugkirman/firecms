"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Ticari from "../../../../public/services/1.jpg";
import İcra from "../../../../public/services/2.jpg";
import İs from "../../../../public/services/3.jpg";
import Teknoloji from "../../../../public/services/4.jpg";
import Yatirim from "../../../../public/services/5.jpg";
import Sirketler from "../../../../public/services/6.jpg";
import Uluslararası from "../../../../public/services/7.jpg";
import Sigorta from "../../../../public/services/7.jpg";
import Kira from "../../../../public/services/7.jpg";

const services = [
  {
    title: "Ticari ve Kurumsal Danışmanlık",
    desc: "Hello",

    content: "Hello",
    images: Ticari,
  },
  {
    title: "İcra ve İflas Yönetimi",
    desc: "Hello",

    content: "Section 2 Content",
    images: İcra,
  },
  {
    title: "İş Hukuku",
    desc: "Hello",

    content: "Section 3 Content",
    images: İs,
  },
  {
    title: "Teknoloji ve StartUp Hukuku",
    desc: "Hello",

    content: "Section 1 Content",
    images: Teknoloji,
  },
  {
    title: "Yatırım Hukuku",
    desc: "Hello",

    content: "Section 2 Content",
    images: Yatirim,
  },
  {
    title: "Şirketler Hukuku",
    desc: "Hello",

    content: "Section 3 Content",
    images: Sirketler,
  },
  {
    title: "UluslarArası Ticaret ve Tahkim",
    desc: "Hello",

    content: "Section 1 Content",
    images: Uluslararası,
  },
  {
    title: "Sigorta Hukuku",
    desc: "Hello",

    content: "Section 2 Content",
    images: Sigorta,
  },
  {
    title: "Kira Hukuku",
    desc: "Hello",

    content: "Section 3 Content",
    images: Kira,
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
            className="flex flex-row border pr-4 justify-between hover:bg-first duration-1000 hover:text-light pl-3   py-3 font-semibold "
            onClick={() => onSelectSection(service.title)}>
            <li className="pr-20">{service.title}</li>
            <FaArrowRight />
          </div>
        ))}
      </ul>
    </div>
  );
};

const Content = ({ title, content, images, desc }) => {
  return (
    <div className="flex bg-light flex-col justify-between pt-6 md:pt-0 px-4 md:px-12 lg:px-24 font-gs">
      <h1 className="text-xl  md:text-2xl  lg:text-4xl ">{title}</h1>
      <h3 className="text-lg  md:text-xl  lg:text-2xl">{content}</h3>
      <div className="border border-black rounded-3xl">
        <Image
          className="rounded-3xl"
          width={500}
          height={500}
          alt={title}
          src={images}
        />
      </div>
      <p>{desc}</p>
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
    <div className="flex bg-light items-start flex-col md:flex-row ">
      <Sidebar services={services} onSelectSection={handleSelectSection} />
      <Content
        title={
          services.find((service) => service.title === currentSection)?.title
        }
        content={
          services.find((service) => service.title === currentSection)?.content
        }
        images={
          services.find((service) => service.title === currentSection)?.images
        }
        desc={
          services.find((service) => service.title === currentSection)?.desc
        }
      />
    </div>
  );
};

export default ServicesBar;
