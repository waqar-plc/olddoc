import React from "react";
import img1 from "../../assets/images/help.png";
import vid1 from "../../assets/images/vid.mp4";

const InfoCard = ({ number, description, subtext }) => (
  <div className="text-center bg-[#f7f9fb] rounded-[20px] p-2 h-full flex flex-col justify-center">
    <h2 className="text-[#0f8226] text-[2.2rem] font-[500]">{number}</h2>
    <h2 className="text-[1.2rem]">{description}</h2>
    <p className="text-[1rem]">{subtext}</p>
  </div>
);

const VideoCard = ({ videoSrc }) => (
  <div className="bg-[#f7f9fb] rounded-[20px] h-full">
    <video
      src={videoSrc}
      autoPlay
      loop
      muted
      className="w-full h-full rounded-[30px] object-cover"
    />
  </div>
);

const ImageCard = ({ imageSrc, stat, description, height }) => (
  <div className="flex items-center bg-[#f7f9fb] rounded-[20px] p-2 h-full">
    <img src={imageSrc} className="w-[60%] h-full object-fill" />
    <div>
      <p>{stat}</p>
      <p>{description}</p>
    </div>
  </div>
);

function WeOffer() {
  return (
    <div className="flex justify-center py-14">
      <div className="w-[90rem] flex h-[45rem] bg-[#F1F2F3] rounded-[20px] gap-2 p-2">
        {/* Left Column */}
        <div className="w-[30%] flex flex-col gap-2">
          <div className="h-[65%] flex flex-col justify-between items-center bg-[#f7f9fb] rounded-[20px]">
            <InfoCard
              number="#1"
              description="Most Recognized virtual care brand. *"
              subtext="See Reviews"
            />
            <img src={img1} alt="Help" />
          </div>
          <div className="h-[35%]">
            <VideoCard videoSrc={vid1} />
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-[40%] flex flex-col gap-2">
          <div className="flex h-[30%] gap-2">
            <InfoCard
              number="#1"
              description="Most Recognized virtual care brand. *"
              subtext="See Reviews"
            />
            <InfoCard
              number="#1"
              description="Most Recognized virtual care brand. *"
              subtext="See Reviews"
            />
          </div>
          <div className="h-[40%] bg-red-50">
            <ImageCard
              imageSrc={img1}
              stat="50 Millions"
              description="Most Recognized virtual care brand. *"
            />
          </div>
          <div className="h-[30%] flex gap-2">
            <div className="w-[60%]">
              <InfoCard
                number="78%"
                description="Most Recognized virtual care brand. *"
                subtext="See Reviews"
              />
            </div>
            <div className="w-[40%]">
              <InfoCard
                number="78%"
                description="Most Recognized virtual care brand. *"
                subtext="See Reviews"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[30%] flex flex-col gap-2 ">
          <div className="h-[35%]">
            <VideoCard videoSrc={vid1} />
          </div>
          <div className="h-[65%] flex flex-col justify-between items-center bg-[#f7f9fb] rounded-[20px]">
            <InfoCard
              number="#1"
              description="Most Recognized virtual care brand. *"
              subtext="See Reviews"
            />
            <img src={img1} alt="Help" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
