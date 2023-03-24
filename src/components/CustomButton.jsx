import React from "react";

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className=" p-2 border bg-white group border-black hover:bg-black  rounded-full flex items-center justify-center focus:outline-none"
    >
      {children}
    </button>
  );
};

export default CustomButton;
