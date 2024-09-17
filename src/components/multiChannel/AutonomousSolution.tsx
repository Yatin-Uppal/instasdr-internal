import React from "react";

function AutonomousSolution() {
  return (
    <React.Fragment>
      <div className=" max-w-[1064px] w-full m-auto px-4 mt-[60px]">
        <div className="bg-[#05050A] py-5 md:px-16 md:py-14 rounded-xxl relative overflow-hidden">
          <div className="h-36 w-[500px] bg-[#FFD41C] opacity-15 rounded-full -top-14 left-0 absolute blur-[40px]"></div>
          <h3 className="text-[28px] md:text-[45px] font-semibold  md:text-left text-white mb-16 font-inter max-w-[800px]">
            Why CROs, CMOs, and VPs of Sales Choose Our{" "}
            <span className="text-yellow"> Autonomous Solution</span>
          </h3>

          <div className="flex overflow-auto md:overflow-hidden md:grid md:grid-cols-3 gap-x-3 gap-y-10">
            <div className="px-10 py-12 relative shadow-lightorange text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B] border-[8px] border-solid border-orange"> 
                </div>
                <img src="/img/setting.svg"/>
                <h4 className="font-inter text-lg text-orange my-3">Increased Efficiency</h4>
                <p className="text-base text-white">Our autonomous AI SDR works 24/7, handling repetitive tasks and allowing your team to focus on high-value activities.</p>
            </div>

            <div className="px-10 py-12 relative shadow-lightblue text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B]"> 
                </div>
                <img src="/img/rates.svg"/>
                <h4 className="font-inter text-lg text-blue my-3">Higher Conversion Rates</h4>
                <p className="text-base text-white">AI-powered personalization across all channels significantly improves engagement and conversion rates.</p>
            </div>


            <div className="px-10 py-12 relative shadow-lightorange text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B]"> 
                </div>
                <img src="/img/scale.svg"/>
                <h4 className="font-inter text-lg text-lightGreen my-3">Scalable Outreach</h4>
                <p className="text-base text-white">Easily scale your sales efforts across multiple channels without compromising on quality or personalization.</p>
            </div>


            <div className="px-10 py-12 relative shadow-lightorange text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B] "> 
                </div>
                <img src="/img/data.svg"/>
                <h4 className="font-inter text-lg text-purple my-3">Data-Driven Insights</h4>
                <p className="text-base text-white">Gain valuable insights into your multi-channel sales process to continuously optimize your strategies.</p>
            </div>


            <div className="px-10 py-12 relative shadow-lightorange text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B]"> 
                </div>
                <img src="/img/seamless.svg"/>
                <h4 className="font-inter text-lg text-green my-3">Seamless Integration</h4>
                <p className="text-base text-white">Our solution integrates with your existing CRM and sales tools for a unified, autonomous workflow.</p>
            </div>

            <div className="px-10 py-12 relative shadow-lightorange text-center bg-zblack  min-w-[280px] max-w-[280px] md:max-w-full">
                <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B] border-[8px] border-soli"> 
                </div>
                <img src="/img/security.svg"/>
                <h4 className="font-inter text-lg text-yellowDark my-3">Compliance and Security</h4>
                <p className="text-base text-white">Stay compliant with data protection regulations while ensuring the security of your prospects' information across all channels. </p>
            </div>
        </div>
        </div>

    

      </div>
    </React.Fragment>
  );
}

export default AutonomousSolution;
