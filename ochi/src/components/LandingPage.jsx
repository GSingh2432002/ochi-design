import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (<div className="mr-[.5vw] w-[8vw] h-[5.7vw] rounded-md -top-[.25vw] relative bg-red-500"></div>)}
                <h1 className="flex items-center uppercase text-[8vw] h-full leading-[6.5vw] tracking-tight font-['Neue_Montreal'] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-2xl font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-2xl uppercase rounded-full">
            start the project
          </div>
          <div className="w-12 h-12 flex justify-center items-center rounded-full border-[2px] border-zinc-500 rotate-[45deg]">
            <FaArrowUpLong className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
