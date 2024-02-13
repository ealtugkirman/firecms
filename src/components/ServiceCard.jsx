import React from "react";
import { MdCloudDone } from "react-icons/md";

const ServiceCard = ({title, desc, icon}) => {
  return (
    <div className="flex hover:border-t-2 hover:border-r-2 hover:scale-105 border-yellow-400 duration-500  items-center text-center  py-6 rounded-2xl mx-4 justify-center space-y-4 flex-col text-light bg-gradient-to-t from-slate-600 to-slate-800">
      <div className="text-6xl">
        {icon}
      </div>
          <h2 className="text-2xl mx-12 font-bold">{ title }</h2>
      <p className="text-sm mx-8 ">
       {desc}
      </p>
    </div>
  );
};

export default ServiceCard;
