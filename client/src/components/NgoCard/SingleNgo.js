import React from "react";
import Fade from "react-reveal/Fade";

export default function SingleNgo({ id, name, pic, written }) {
  return (
    <>
      <Fade bottom>
        <div
          key={id}
          className="md:flex   justify-between mt-10 md:mt-20 flex-col border-2   shadow-2xl hover:shadow-[#719969]  
           md:w-1/4 w-full h-min hover:bg-right-bottom cursor-pointer transition ease-in-out 
          
        rounded-xl"
        >
          <div id={pic} className=" rounded-tl-xl  rounded-tr-xl  ">
            <img
              src={pic}
              className=" md:h-[200px] w-full rounded-tl-xl rounded-tr-xl "
              alt=""
            />
          </div>
          <div
            id={name}
            className="md:flex font-bold  bg-[#235445] flex-col py-4 items-center  gap-2"
          >
            <>
              <h1 className="font-scnd text-[#31ffc1]  text-2xl text-center">
                {/* ENRICH COMMUNITIES */} {name}
              </h1>
            </>
          </div>
          <div
            id={written}
            className="md:flex bg-[#235445] fotn flex-col   items-center  gap-2"
          >
            <>
              <h2 className=" p-8 text-white text-justify">{written}</h2>
            </>
          </div>
        </div>
      </Fade>
    </>
  );
}
