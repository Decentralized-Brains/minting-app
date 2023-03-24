import React from "react";

const MintingSoonCard = ({ data }) => {
  return (
    <>
      <div className="relative">
        <img
          src={data.img}
          alt=""
          className=" h-[300px] w-full object-cover  "
        />
      </div>
    </>
  );
};

export default MintingSoonCard;
