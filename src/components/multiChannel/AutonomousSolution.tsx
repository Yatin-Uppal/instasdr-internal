import React from "react";
import FeatureBox from "./featureBox/FeatureBox";
import { FeatureBoxProps } from "../../interfaces/FeatureBox";

const features: FeatureBoxProps[] = [
  {
    icon: "/img/setting.webp",
    title: "Increased Efficiency",
    description: "Our autonomous AI SDR works 24/7, handling repetitive tasks and allowing your team to focus on high-value activities.",
    color: "orange",
    shadowColor: "lightorange"
  },
  {
    icon: "/img/rates.webp",
    title: "Higher Conversion Rates",
    description: "AI-powered personalization across all channels significantly improves engagement and conversion rates.",
    color: "blue",
    shadowColor: "lightblue"
  },
  {
    icon: "/img/scale.webp",
    title: "Scalable Outreach",
    description: "Easily scale your sales efforts across multiple channels without compromising on quality or personalization.",
    color: "lightGreen",
    shadowColor: "lightorange"
  },
  {
    icon: "/img/data.webp",
    title: "Data-Driven Insights",
    description: "Gain valuable insights into your multi-channel sales process to continuously optimize your strategies.",
    color: "purple",
    shadowColor: "lightorange"
  },
  {
    icon: "/img/seamless.webp",
    title: "Seamless Integration",
    description: "Our solution integrates with your existing CRM and sales tools for a unified, autonomous workflow.",
    color: "green",
    shadowColor: "lightorange"
  },
  {
    icon: "/img/security.webp",
    title: "Compliance and Security",
    description: "Stay compliant with data protection regulations while ensuring the security of your prospects' information across all channels.",
    color: "yellowDark",
    shadowColor: "lightorange"
  }
];

function AutonomousSolution() {
  return (
    <React.Fragment>
      <div className="relative w-full overflow-hidden">
        <div className="w-[750px] h-[750px] bg-[#00C2FF] opacity-20 blur-[150px] rounded-full absolute -right-28 bottom-0 md:block hidden"></div>

        <div className="max-w-[1084px] w-full m-auto px-4 mt-[60px]">
          <div className="bg-[#05050A] py-5 md:px-12 md:py-10 rounded-xxl relative overflow-hidden mb-10">
            <div className="h-36 w-[500px] bg-[#FFD41C] opacity-15 rounded-full -top-14 left-0 absolute blur-[40px]"></div>
            <h3 className="text-[28px] md:text-[45px] font-semibold text-center md:text-left text-white mb-14 md:mb-12 font-inter max-w-[800px]">
              Why CROs, CMOs, and VPs of Sales Choose Our{" "}
              <span className="text-yellow">Autonomous Solution</span>
            </h3>

            <div className="flex overflow-auto md:overflow-hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 md:p-4">
              {features.map((feature, index) => (
                <FeatureBox key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AutonomousSolution;
