import Image from "next/image";
import React from "react";
import crew1 from "../../public/gordon.jpg"

const Crew = () => {
  return (
    <div className="bg-light px-32 py-20 text-first">
      <div className="flex items-start">
        <h3 className="text-5xl w-1/2 font-semibold capitalize ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laborum
            <span className="underline-y-half z-10">totam aut?</span>
        </h3>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 gap-20 mt-6 py-6">
        <div className="flex flex-col items-center justify-center" >
          {" "}
          <Image className="rounded-tr-3xl rounded-bl-3xl" src={crew1} width="fill" />
          <h4 className="text-3xl font-semibold" >gordon ramsey</h4>
          <p>Master Chef</p>{" "}
        </div>
        <div className="flex flex-col items-center justify-center" >
          {" "}
          <Image className="rounded-tr-3xl rounded-bl-3xl" src={crew1} width="fill" />
          <h4 className="text-3xl font-semibold" >gordon ramsey</h4>
          <p>Master Chef</p>{" "}
        </div>
        <div className="flex flex-col items-center justify-center" >
          {" "}
          <Image className="rounded-tr-3xl rounded-bl-3xl" src={crew1} width="fill" />
          <h4 className="text-3xl font-semibold" >gordon ramsey</h4>
          <p>Master Chef</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Crew;
