import React from "react";
import hero from "../../assets/images/hero2.jpg";

function HeroSection() {
  return (
    <div
      className=" h-screen w-full  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-[rgba(248,247,216,0.6)]"></div>

      {/* <img src={hero} className="w-full " alt="Hero" /> */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] text- p-4 flex items-center justify-center flex-col">
        <p className="text-[40px] text-center text-primary px-[8rem] font-bold">
          OwlDoc is Always in Reach when you Need
        </p>

        <div>
          <button className="border border-secondary rounded-full px-5 py-2 text-white mt-2 bg-secondary">
            Download for Android
          </button>{" "}
          <button className="border border-primary rounded-full px-7 py-2 bg-primary text-white mt-2">
            Download for IOS{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
