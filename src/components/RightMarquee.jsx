import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueeData } from "../data/Data";

const RightMarquee = () => {
  return (
    <div className="transform rotate-0 md:-rotate-12 ">
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        direction={"right"}
      >
        {MarqueeData.map((item) => {
          return (
            <div className="flex px-2" key={item.id}>
              <img
                src={item.img}
                alt=""
                className="w-16 sm:w-32 h-16 sm:h-32 rounded"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default RightMarquee;
