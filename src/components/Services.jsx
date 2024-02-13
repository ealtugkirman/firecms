import React from "react";
import ServiceCard from "./ServiceCard";
import { FaGavel, FaFileAlt, FaBalanceScale } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col text-center space-y-6 py-20 items-center justify-center mx-32 bg-first text-light">
      <h3 className="text-5xl mx-24 capitalize font-bold">
        Legal Services We Provide
      </h3>
      <p className="mx-32 text-lg pb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        illum harum consequuntur nesciunt doloribus officiis. Corrupti, commodi.
        Iusto, neque tempore cum corporis facere voluptatem voluptates nulla?
      </p>
      <div className="grid gap-8  grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        <ServiceCard
          title={"Criminal Defense"}
          desc={
            "Our experienced team of lawyers specializes in criminal defense. We defend clients facing charges ranging from misdemeanors to serious felonies. We provide personalized legal strategies and represent your interests in court. Your rights and freedom are our top priority."
          }
          icon={<FaGavel />}
        />
        <ServiceCard
          title={"Legal Consultation"}
          desc={
            "Do you have legal questions or concerns? Our legal consultation service is here to help. Our attorneys are available to provide expert advice and guidance on a wide range of legal matters. Schedule a consultation today to discuss your legal needs."
          }
          icon={<FaFileAlt />}
        />
        <ServiceCard
          title={"Civil Litigation"}
          desc={
            "In cases of civil disputes and litigation, our legal team is here to represent your interests. We handle a variety of civil cases, including contract disputes, personal injury claims, and more. Our goal is to achieve the best possible outcome for our clients through negotiation or litigation."
          }
          icon={<FaBalanceScale />}
        />
        <ServiceCard
          title={"Legal Consultation"}
          desc={
            "Do you have legal questions or concerns? Our legal consultation service is here to help. Our attorneys are available to provide expert advice and guidance on a wide range of legal matters. Schedule a consultation today to discuss your legal needs."
          }
          icon={<FaFileAlt />}
        />
        <ServiceCard
          title={"Civil Litigation"}
          desc={
            "In cases of civil disputes and litigation, our legal team is here to represent your interests. We handle a variety of civil cases, including contract disputes, personal injury claims, and more. Our goal is to achieve the best possible outcome for our clients through negotiation or litigation."
          }
          icon={<FaBalanceScale />}
        />{" "}
        <ServiceCard
          title={"Civil Litigation"}
          desc={
            "In cases of civil disputes and litigation, our legal team is here to represent your interests. We handle a variety of civil cases, including contract disputes, personal injury claims, and more. Our goal is to achieve the best possible outcome for our clients through negotiation or litigation."
          }
          icon={<FaBalanceScale />}
        />
      </div>
    </div>
  );
};

export default Services;
