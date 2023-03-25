import React from "react";
import { motion } from "framer-motion";
import { FromRightNormal, FromLeftNormal } from "./animation";

const Rarity = () => {
  return (
    <div className="sky-r py-20" id="utility">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center">
          <div>
            <h1
              data-aos="fade-up"
              className="text-4xl md:text-7xl font-fredoka text-white text-shadow-1 font-outline-2"
            >
              Whalies Rarity
            </h1>
            <p data-aos="fade-up" className="text-[#233356] mt-8">
              10,000 uniquely generated Whalies that have igrated to the cleaner
              and warner network of Solana. Drawn by and assemmbled by code, not
              one Whalies is the same! 10,000 uniquely generated Whalies that
              have igrated to the cleaner and warner network of Solana. Drawn by
              and assemmbled by code, not one Whalies is the same!
            </p>
            <br />
            <p data-aos="fade-up" className="text-[#233356] mt-8">
              10,000 uniquely generated Whalies that have igrated to the cleaner
              and warner network of Solana. Drawn by and assemmbled by code, not
              one Whalies is the same!
            </p>
            <br />
            <p data-aos="fade-up" className="text-[#233356] mt-8">
              10,000 uniquely generated Whalies that have igrated to the cleaner
              and warner network of Solana. Drawn by and assemmbled by code, not
              one Whalies is the same!
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-sm w-full border-4 bg-white border-[#233356] text-[#233356] text-lg p-6 rounded-lg"
          >
            <div className="flex justify-between py-2">
              <div>Common</div>
              <div className="bg-blue-400 py-0.5 px-2 rounded-lg">75%</div>
            </div>
            <div className="flex justify-between py-2">
              <div>Uncommon</div>
              <div className="bg-orange-400 py-0.5 px-2 rounded-lg">49%</div>
            </div>
            <div className="flex justify-between py-2">
              <div>Rare</div>
              <div className="bg-yellow-400 py-0.5 px-2 rounded-lg">30%</div>
            </div>
            <div className="flex justify-between py-2">
              <div>Super</div>
              <div className="bg-red-400 py-0.5 px-2 rounded-lg">20%</div>
            </div>
            <div className="flex justify-between py-2">
              <div>Mythic</div>
              <div className="bg-green-400 py-0.5 px-2 rounded-lg">9%</div>
            </div>
            <div className="flex justify-between py-2">
              <div>Legendary</div>
              <div className="bg-purple-400 py-0.5 px-2 rounded-lg">1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
