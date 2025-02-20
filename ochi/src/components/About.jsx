import React from "react";

function About() {
  return (
    <div className="w-full py-28 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="font-['Neue_Montreal'] w-full flex items-center justify-between border-t-[1px] mt-[6rem] pt-10 border-[#888888]">
        <div className="w-full flex justify-between">
          <div className="w-2/4">
            <h1 className="text-black text-[1vw] font-medium">
              What you can expect:
            </h1>
          </div>
          <div className="w-[20%] text-black space-y-6">
            <p className="text-[1.2vw]">
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p className="text-[1.2vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-[10vw] text-black flex flex-col items-start self-end">
            <div>
              <h2 className="text-[1.3vw]">S:</h2>
            </div>
            <ul className="space-y-1 text-[1vw] mt-4">
              <li>
                <a href="#" className="underline hover:text-blue-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:text-blue-600">
                  Behance
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:text-blue-600">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:text-blue-600">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] mt-[6rem] pt-10 border-[#888888]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex text-[1.1vw] uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className="w-full h-full rounded-2xl object-cover bg-center"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
