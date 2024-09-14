import React from "react";
import bg from "../../assets/images/bg2.jpeg";
import ios from "../../assets/svgs/ios.svg";
import android from "../../assets/svgs/android.svg";

function WheretoFind() {
  return (
    <div className="flex justify-center py-14">
      <div className="w-[90rem] h-[30rem]  rounded-[20px] relative">
        <div className="absolute inset-0 bg-[rgba(85,112,186,0.6)]  rounded-[20px]"></div>
        <img src={bg} className="w-full h-full object-cover rounded-[20px]" />
        <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  w-full">
          <h2 className="text-[3rem] w-full text-center text-white">
            You’ll find us in more than 600 U.S. hospitals, too
          </h2>
        </div>
        <div className="absolute  right-10 bottom-1">
          <p className="text-white">Get our Mobile App</p>
          <div className="flex gap-5 items-center justify-center mt-4">
            <img src={ios} height={50} width={50} />
            <img src={android} height={40} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WheretoFind;
