import React from "react";
import "../cloud.css";
import { BsFillStarFill } from "react-icons/bs";
import { motion } from "framer-motion";
import RightMarquee from "../components/RightMarquee";
import LeftMarquee from "../components/LeftMarquee";
import { PopUp } from "./animation";

const Hero = () => {
  return (
    <div className="">
      <div class="cloud-container">
        <div class="cloud1"></div>
        <div class="cloud2"></div>
        <div class="cloud3"></div>
        <div class="cloud4"></div>
        <div class="cloud5"></div>
        <div class="cloud6"></div>
        <div class="cloud7"></div>
        <div class="cloud8"></div>
      </div>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
        className="container flex flex-col items-center justify-center pt-28 pb-20"
      >
        <motion.div
          variants={PopUp}
          className="relative text-6xl md:text-8xl z-10 text-shadow-2 font-bungee
          text-white text-center"
        >
          <h1>About</h1>
          <h1 className="relative">
            Whalies NFT
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                transition: { duration: 1, repeat: Infinity },
              }}
              style={{ display: "inline-block", fontSize: "2rem" }}
            >
              <BsFillStarFill className="absolute bottom-24 -right-0 md:-right-6 text-4xl md:text-6xl text-yellow-400 z-10 hover:rotate-90 duration-300" />
            </motion.div>
          </h1>
        </motion.div>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center pt-2 text-[#233356D6]"
        >
          10,000 uniquely generated Whalies that have igrated to the cleaner and
          warner network of Solana. Drawn by and assemmbled by code, not one
          Whalies is the same!
        </motion.p>

        <motion.button
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="px-16 text-xl text-center pt-2 mt-6 z-10"
        >
          <div class="absolute -top-5 h-28 w-3 animate-shine bg-[#f3f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
          <div class="absolute -top-5 left-16 h-28 w-5 animate-shine bg-[#f5f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
          Mint
        </motion.button>
      </motion.div>
      <RightMarquee />
      <LeftMarquee />
    </div>
  );
};

export default Hero;
