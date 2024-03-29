import React, { useState } from "react";
import { AiFillTag, AiOutlineMenu, AiOutlineSearch ,AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsFillSave2Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoHelp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";




const Navbar = () => {
    const [nav, setNav] = useState(false);



  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer ">
          <div>
            <AiOutlineMenu size={30} />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Sushi<span className="font-bold "> Shogun</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400] lg:w-[500px]">
        
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search Sushi"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={30} className="mr-2" /> Cart
      </button>
      {/* Mobile Menu*/}
      {/* Overlay */}
      {nav ?  <div className="bg-black/80 fixed w-full z-10 top-0 left-0" ></div>: ""}

      {/* Side Drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"} >
        <AiOutlineClose
            onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <h2 className="text-2xl p-4 ">
          Sushi<span className="font-bold">Shogun</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="tex-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="tex-xl py-4 flex">
              <MdFavoriteBorder size={25} className="mr-4" /> Favorites
            </li>
            <li className="tex-xl py-4 flex">
              <GiWallet size={25} className="mr-4 " /> Wallet
            </li>
            <li className="tex-xl py-4 flex">
              <IoHelp size={25} className="mr-4" /> Help
            </li>
            <li className="tex-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="tex-xl py-4 flex">
              <BsFillSave2Fill size={25} className="mr-4" /> Best ones
            </li>
            <li className="tex-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
