import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import hamb from "../../assets/svgs/hamb.svg";
import close from "../../assets/svgs/close.svg";

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center pt-3 absolute w-full top-0 z-10">
      <div className="bg-white h-[80px] w-[90%] xl:w-[82%] rounded-[20px] flex items-center justify-between px-5">
        {/* Hamburger icon for smaller screens */}
        <div className="block xl:hidden">
          <button onClick={toggleMenu} className="text-primary">
            {isOpen ? <img src={close} /> : <img src={hamb} />}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } xl:flex flex-col xl:flex-row gap-5 xl:gap-5 text-center absolute xl:static top-[100%] left-0 w-full bg-white xl:w-auto p-5 xl:p-0 rounded-lg xl:rounded-none shadow-lg xl:shadow-none transition-all duration-500 ease-in-out transform xl:transform-none ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <p className="text-primary text-[1rem] font-semibold">Individuals</p>
          <p className="text-primary text-[1rem] font-semibold">
            Organizations
          </p>
          <p className="text-primary text-[1rem] font-semibold">Clinics</p>
        </div>

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          height={50}
          width={50}
          className="min-w-[11.5rem]"
        />

        {/* Download Button */}
        <div className="hidden xl:block">
          <button className="bg-primary py-3 px-7 rounded-[50px] text-white">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
