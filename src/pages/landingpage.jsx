import React from "react";
import HeroSection from "../components/Landingpage/heroSection";
import AppBar from "../components/Landingpage/AppBar";
import Services from "../components/Landingpage/services";
import WeOffer from "../components/Landingpage/weOffer";
import WheretoFind from "../components/Landingpage/WheretoFind";
import SuccessStories from "../components/Landingpage/SuccessStories";
import Footer from "../components/Landingpage/Footer";

function LandingPage() {
  return (
    <>
      <AppBar />
      <HeroSection />
      <div className="flex justify-center items-center mt-10 py-14 pb-20">
        <div className="text-[2.5rem] text-center max-w-[55rem] font-[500]">
          For your{" "}
          <span className="text-secondary cursor-pointer">Physical Health</span>
          . For your{" "}
          <span className="text-[green] cursor-pointer">Mental Health</span>.
          For clinicians.{" "}
          <span className="text-primary cursor-pointer">For Hospitals</span>.
          For all of it in one place.
          <span className="text-[#0dcaf0] cursor-pointer">For life</span>.
        </div>
      </div>
      <Services />
      <div className="flex justify-center py-14">
        <div>
          <p className="text-[2.5rem] text-center text-primary font-semibold pb-2">
            A high-quality care experience—anywhere, anytime
          </p>
          <p className="text-[1.5rem] max-w-[70rem]  text-center pt-3">
            It started with a simple yet revolutionary idea. That everyone
            should have access to the best healthcare anywhere in the world on
            their terms. That includes you.
          </p>

          <div className="flex justify-center pt-7">
            <button className="border border-secondary rounded-full px-7 py-2 text-secondary mt-2 ">
              Contact Now
            </button>{" "}
          </div>
        </div>
      </div>
      <WeOffer />
      <WheretoFind />
      <SuccessStories />
      <Footer />
    </>
  );
}

export default LandingPage;
