import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-25">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] right-full font-['Neue_Montreal'] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Cardboard spaceship".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap">
              {"Salience Labs".split("").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover bg-center"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
