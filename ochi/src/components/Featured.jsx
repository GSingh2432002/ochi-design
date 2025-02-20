import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full py-20 bg-[#F1F1F1]">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl text-[#212121] font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-25">
          {/* Left Side */}
          <div className="left w-1/2 flex flex-col gap-10">
            {[
              { title: "Salience Labs", imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" },
              { title: "ah2 & matt horn", imgSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" },
              { title: "vise", imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png" },
              { title: "trawa", imgSrc: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" },
              { title: "premium blend", imgSrc: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" }
            ].map((card, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="cardcontainer relative w-full h-[75vh]"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  className="absolute flex text-[#CDEA68] left-full font-['Neue_Montreal'] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap"
                >
                  {card.title}
                </motion.h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <motion.img
                    className="w-full h-full bg-cover bg-center"
                    src={card.imgSrc}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="right w-1/2 flex flex-col gap-10">
            {[
              { title: "Cardboard Spaceship", imgSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" },
              { title: "fyde", imgSrc: "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" },
              { title: "all things go", imgSrc: "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png" },
              { title: "black book", imgSrc: "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg" },
              { title: "softstart", imgSrc: "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg" }
            ].map((card, index) => (
              <motion.div
                key={index + 5}
                onHoverStart={() => setActiveIndex(index + 5)}
                onHoverEnd={() => setActiveIndex(null)}
                className="cardcontainer relative w-full h-[75vh]"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={activeIndex === index + 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  className="absolute flex text-[#CDEA68] right-full font-['Neue_Montreal'] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] uppercase leading-none tracking-tighter text-8xl whitespace-nowrap"
                >
                  {card.title}
                </motion.h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                  <motion.img
                    className="w-full h-full bg-cover bg-center"
                    src={card.imgSrc}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="w-full flex justify-center mt-30">
        <button className="flex items-center justify-center text-[1.1vw] uppercase gap-10 px-16 py-6 bg-zinc-900 rounded-full text-white">
          View all case studies
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default Featured;
