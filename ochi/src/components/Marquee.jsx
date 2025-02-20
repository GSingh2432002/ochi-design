import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-[30vw] mt-25 pt-20 pb-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-1 border-b-1 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="text-[19vw] leading-none tracking-tight font-['Neue_Montreal'] uppercase font-semibold pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="text-[19vw] leading-none tracking-tight font-['Neue_Montreal'] uppercase font-semibold pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
