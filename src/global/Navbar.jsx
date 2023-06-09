import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Carrot from "../assets/navbar/carrot.png";
import Home from "../assets/navbar/home.png";
import Bowl from "../assets/navbar/mixing-bowl.png";
import Rubber from "../assets/navbar/rubber-duck.png";
import { motion } from "framer-motion";

const Navbar = ({ account, setAccount }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      img: Home,
    },
    {
      id: 2,
      link: "minitng",
      img: Carrot,
    },
    {
      id: 3,
      link: "utility",
      img: Bowl,
    },
    {
      id: 4,
      link: "roadmap",
      img: Rubber,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  // CONNECT WALLET
  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      toast.warn(
        "Wallet " +
          accounts[0].slice(0, 4) +
          "...." +
          accounts[0].slice(accounts[0].length - 5, accounts[0].length) +
          " connected!"
      );
    } catch (error) {
      console.log("Error connecting...");
    }
  };

  // logout meta
  const logoutMeta = async () => {
    toast.success("Wallet Disconnected!");
    setAccount("");
  };

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[70px] duration-300 z-[100] shadow-lg bg-white/50 backdrop-blur-xl"
            : "fixed w-full h-[70px] duration-300 z-[100] backdrop-blur-xl"
        }
      >
        {/* this is for large screen devices */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 0.8, bounce: 0.5 },
          }}
          className="flex justify-end  font-outline-2 text-xl text-shadow-1 items-center h-[70px] container text-white md:px-0"
        >
          <ul className="hidden md:flex justify-around font-fredoka items-center">
            {links.map(({ id, link, img }) => (
              <li
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-300 px-4 flex justify-center items-center gap-2"
              >
                <img src={img} alt="" />
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
            {/* shinnig button inifinity loop */}
          </ul>

          <button
            className="mx-4"
            onClick={connectWallet}
            disabled={account ? true : false}
          >
            <div className="absolute -top-5 h-28 w-3 animate-shine bg-[#f3f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
            <div className="absolute -top-5 left-16 h-28 w-5 animate-shine bg-[#f5f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
            {account
              ? account.slice(0, 4) +
                "..." +
                account.slice(account.length - 4, account.length)
              : "Connect Wallet "}
          </button>
          <div className="mx-4">
            {account ? (
              <button onClick={logoutMeta}>
                <div className="absolute -top-5 h-28 w-3 animate-shine bg-[#f3f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
                <div className="absolute -top-5 left-16 h-28 w-5 animate-shine bg-[#f5f3f3]  shadow-[0_0_10px] bg-opacity-50"></div>
                Disconnect
              </button>
            ) : (
              ""
            )}
          </div>
          <div onClick={handleNav} className="block md:hidden text-[#233356]">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </motion.div>
      </div>

      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen pt-20 left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40 md:hidden"
            : "fixed h-screen pt-20 left-[-100%] top-0 w-[80%] ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul>
          {links.map(({ id, link, img }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 flex justify-center items-center gap-2 text-[#233356] font-bold"
            >
              <img src={img} alt="" />
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* this is for toastify popup  */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </div>
  );
};

export default Navbar;
