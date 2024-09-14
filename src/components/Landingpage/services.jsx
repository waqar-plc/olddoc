import React from "react";
import doctorhelp from "../../assets/images/help.png";
import stetho from "../../assets/images/steho.png";
import ArrowrightSvg from "../../assets/svgs/arrowrightsvg";
const p = [
  {
    image: doctorhelp,
    btnText: "Get ways",
  },
  {
    image: stetho,
    btnText: "Help",
  },
  {
    image: doctorhelp,
    btnText: "Get Konw",
  },
];
function Services() {
  const Card = ({ image, btnText }) => {
    return (
      <div className="h-[40rem] w-[20%] flex flex-col justify-between shadow-custom rounded-[20px] pt-5 cursor-pointer hover:bg-custom-gradient">
        <div className="pl-5">
          <h1 className="text-[1.2rem] text-primary uppercase font-[700]">
            Individuals
          </h1>
          <p className="text-[1.75rem] text-secondary uppercase font-[700] ">
            Anything Anywhere{" "}
          </p>
          <div className="flex gap-3">
            <div className="rounded-[100%] bg-primary h-10 w-10 flex justify-center items-center">
              <ArrowrightSvg />
            </div>
            <button>{btnText}</button>
          </div>
        </div>
        <img src={image} className="pl-5" />
      </div>
    );
  };

  return (
    <div className="flex justify-center gap-10  py-10">
      {p.map((element) => (
        <Card image={element?.image} btnText={element?.btnText} />
      ))}
    </div>
  );
}

export default Services;
