import React from "react";
import FeatureCard from "./featureComponents/FeatureCard";
import FeatureHighlight from "./featureComponents/FeatureHighlight";

const features = [
  {
    bgColor: "bg-orange",
    textColor: "orange",
    icon: "/img/IoRocketSharp.svg",
    title: "1-click Multi-Channel campaign",
    description: "Use our ICP leads from our 750M contacts",
    useCases: "Cold outbound, Email marketing, Demand gen instead of Ads"
  },
  {
    bgColor: "bg-blue",
    textColor: "blue",
    icon: "/img/userMinus.svg",
    title: "Use InstaSDR leads with exceptions",
    description: "Use our ICP leads from our 750M contacts but exclude or include some companies and users",
    useCases: "ABM (Target Fortune 500 companies), Exclude existing customer companies, Exclude existing leads"
  },
  {
    bgColor: "bg-lightGreen",
    textColor: "lightGreen",
    icon: "/img/MdEmail2.svg",
    title: "Use your leads",
    description: "Use your own existing leads for follow ups",
    useCases: "Events followup, Webinar followup, Sign Lifecycle marketing"
  },
  {
    bgColor: "bg-purple",
    textColor: "purple",
    icon: "/img/GoBookmark.svg",
    title: "Use InstaSDR ICP lead",
    description: "Use our ICP leads from our 750M contacts",
    useCases: "Cold outbound, Email marketing, Demand gen instead of Ads"
  },
  {
    bgColor: "bg-green",
    textColor: "green",
    icon: "/img/GoInbox.svg",
    title: "Use InstaSDR leads with exceptions",
    description: "Use our ICP leads from our 750M contacts but exclude or include some companies and users",
    useCases: "ABM (Target Fortune 500 companies), Exclude existing customer companies, Exclude existing leads"
  },
  {
    bgColor: "bg-yellowDark",
    textColor: "yellowDark",
    icon: "/img/MdFlag.svg",
    title: "Use your leads",
    description: "Use your own existing leads for follow ups",
    useCases: "Events followup, Webinar followup, Sign Lifecycle marketing"
  }
];

function FeatureList() {
  return (
    <React.Fragment>
      <div className="w-full max-w-small px-4 py-[60px] m-auto">
        <div className="flex overflow-auto md:overflow-hidden md:grid md:grid-cols-3 gap-[25px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              bgColor={feature.bgColor}
              textColor={feature.textColor}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              useCases={feature.useCases}
            />
          ))}
        </div>
        <FeatureHighlight />
      </div>
    </React.Fragment>
  );
}

export default FeatureList;
