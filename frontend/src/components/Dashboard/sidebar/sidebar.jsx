import React, { useState } from "react";
import { motion } from "framer-motion";

import { AiOutlineUser } from "react-icons/ai";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/aizen.jpg";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};

function Sidebar() {
  const [activeLink, setActiveLink] = useState("/Dashboard");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    //????? wtf
    //! setActiveLink( ( prevActiveLink ) =>
    //!     prevActiveLink === link ? prevActiveLink : link
    //! );
  };

  const navLinks = [
    {
      name: "Profile",
      icon: <RxDashboard size={30} />,
      link: "Profile",
    },
    {
      name: "Users",
      icon: <AiOutlineUser size={30} />,
      link: "Users",
    },
    {
      name: "Activity",
      icon: <LuClock3 size={30} />,
      link: "Activity",
    },
    {
      name: "Analytics",
      icon: <TbBrandGoogleAnalytics size={30} />,
      link: "Analytics",
    },
    // Add more links as needed
  ];

  return isExpanded ? (
    <motion.div
      exit={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex  flex-col border border-r-8 border-blue-700 rounded-r-xl bg-[#fffefe] fixed  z-20" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute right-1 top-12 rounded-full w-8 h-8 shadow bg-blue-500 flex justify-center items-center"
      >
        {isExpanded ? (
          <BiSolidLeftArrowAlt size={50} color="white" />
        ) : (
          <BiSolidRightArrowAlt size={50} color="white" />
        )}
      </div>
      <div className="logo-div flex flex-col gap-3 items-center">
        <img
          className={`rounded-full ${!isExpanded ? "h-20 w-20" : "w-10 h-10"}`}
          src={Logo}
        />
        <span className={`text-2xl ${!isExpanded ? "hidden" : "block"}`}>
          Zinou lite
        </span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          {navLinks?.map((item, index) => (
            <motion.div whileInView={{scale:1}} transition={{duration:index/5}} initial={{scale:0.5 }}
              key={item.link}
              className={`w-full my-6 ${
                activeLink === item.link
                  ? "text-white bg-blue-300 border-r-4 border-blue-400 font-bold rounded-lg"
                  : ""
              }`}
              onClick={() => handleLinkClick(item.link)}
            >
              <Link
                to={item.link}
                className="flex space-x-3 w-full p-2 rounded "
              >
                {item.icon}
                <span className={!isExpanded ? "hidden" : "block"}>
                  {item.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  ) : (
    <>
    <div 
        onClick={() => setIsExpanded(true)}
        className="cursor-pointer fixed rounded-full w-8 h-8 top-6  bg-blue-500 flex justify-center items-center z-20"
      >
          <BiSolidRightArrowAlt size={50} color="white" />
      </div>

    </>
  );
}
export default Sidebar;
