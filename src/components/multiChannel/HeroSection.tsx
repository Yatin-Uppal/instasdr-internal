import React from "react";

function HeroSection() {
  return (
    <React.Fragment>
      <div className="py-16 pb-0 pt-12 md:py-24 md:pb-0  text-center">
        <img src="/img/ellipse.webp" className="absolute left-0 top-0  z-[-1]" />

        <div className="w-full max-w-container px-4 m-auto">
          <h1 className="text-3xl	md:text-[56px] md:leading-[70px] font-inter text-light mb-4">
            1-Click <span className="text-yellow w-full md:w-auto  inline-block">Multi-Channel AI SDR</span>
          </h1>
          <p className=" text-base text-light w-full max-w-[840px] m-auto">
            {" "}
            Revolutionize your sales outreach with autonomous, AI-powered,
            multi-channel prospecting. Boost efficiency and conversion rates
            across email, video, LinkedIn, and phone.
          </p>
          <button
            type="button"
            className="font-inter cursor-pointer text-sm mt-7 text-black font-semibold py-3.5 px-12 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow"
          >
            Get Started
          </button>
          <div className="w-full">
            <img src="/img/multichannel.png" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroSection;
