import React from "react";

const ServiceCard = ({ icon, title, children }) => {
  return (
    <div className="p-8 border-b sm:border-r">
      <div className="max-w-md text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          {icon}
        </div>
        <h6 className="mb-2 font-semibold leading-5">{title}</h6>
        {children}
      </div>
    </div>
  );
};

export default ServiceCard;
