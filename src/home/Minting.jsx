import React, { useState } from "react";
import MintImg1 from "../assets/mint/mint1.jpg";
import MintImg2 from "../assets/mint/mint2.jpg";
import MintImg3 from "../assets/mint/mint3.jpg";
import C1 from "../assets/mint/c11.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion } from "framer-motion";
import "../floating-animation.css";

const Minting = () => {
  const [count, setCount] = useState(1);
  const maxGuests = 999;
  const minGuests = 1;

  const handleCount = (e) => {
    if (e > maxGuests) {
      setCount(maxGuests);
    } else if (e < minGuests) {
      setCount(minGuests);
    } else setCount(e);
  };

  const decrementCount = () => {
    if (count > minGuests) setCount(count - 1);
  };

  const incrementCount = () => {
    if (count < maxGuests) setCount(count + 1);
    else if (count > maxGuests) setCount(maxGuests);
  };
  return (
    <div className="z-10 relative mt-44 py-20">
      <div className=" container ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center">
          <div data-aos="fade-up" className=" max-w-sm">
            <h1 className="text-4xl md:text-7xl font-fredoka text-white text-shadow-1 font-outline-2">
              100/10,000
            </h1>
            <div className="flex justify-between items-center mt-5">
              <button
                onClick={() => incrementCount()}
                className="rounded-full px-2 py-2"
              >
                <AiOutlinePlus className="md:text-3xl" />
              </button>
              <div className=" pt-0">
                <input
                  required
                  type="number"
                  name="counter"
                  value={count}
                  onChange={(event) => {
                    handleCount(event.target.value);
                  }}
                  className="px-3 py-3 hover:box-shadow-1 duration-300 border-4 border-[#233356] placeholder-slate-300 text-slate-600 relative bg-white rounded text-base md:text-xl outline-none focus:outline-none focus:ring w-full"
                />
              </div>
              <button
                onClick={() => decrementCount()}
                className="rounded-full px-2 py-2"
              >
                <AiOutlineMinus className="md:text-3xl" />
              </button>
            </div>
            <motion.button
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="px-16 text-xl md:text-4xl text-center py-2  mt-6 z-10 w-full"
            >
              <div className="absolute -top-5 h-28 w-3 animate-shine bg-[#f3f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
              <div className="absolute -top-5 left-16 h-28 w-5 animate-shine bg-[#f5f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
              Mint
            </motion.button>
            <p className="text-[#233356] mt-8">
              10,000 uniquely generated Whalies that have igrated to the cleaner
              and warner network of Solana. Drawn by and assemmbled by code, not
              one Whalies is the same10,000 uniquely generated Whalies that have
              igrated to the cleaner and warner network of Solana. Drawn by and
              assemmbled by code, not one Whalies is the same!!
            </p>
          </div>
          <div data-aos="fade-up" className="relative group">
            <div className="z-20 ">
              <img
                src={MintImg1}
                alt=""
                className="h-60 sm:h-96 max-w-xs  rounded-t-full border-8 border-white"
              />
            </div>
            <div className="hidden md:flex absolute top-0 left-0 group-hover:left-40 transform group-hover:rotate-12 -z-10 duration-300">
              <img
                src={MintImg2}
                alt=""
                className="h-96 max-w-xs  rounded-t-full border-8 border-white"
              />
            </div>
            <div className="hidden md:flex absolute top-0 right-0 group-hover:right-40 transform group-hover:-rotate-12 -z-10 duration-300">
              <img
                src={MintImg3}
                alt=""
                className="h-96 max-w-xs  rounded-t-full border-8 border-white"
              />
            </div>
            <div className="absolute top-0 -left-20 -z-20 floating">
              <img src={C1} alt="" />
            </div>
            <div className="absolute bottom-0 right-0 md:-right-10 floating">
              <img src={C1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
