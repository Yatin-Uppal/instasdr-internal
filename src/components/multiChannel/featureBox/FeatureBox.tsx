import React from "react";
import { FeatureBoxProps } from "../../../interfaces/FeatureBox";

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description, color, shadowColor }) => {
  return (
    <div className={`px-7 py-10 relative shadow-${shadowColor} text-center bg-zblack min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full`}>
      <div className="w-7 h-7 rounded-full top-3 left-3 absolute bg-[#D9D9D92B]"></div>
      <img src={icon} alt={title} />
      <h4 className={`font-inter text-lg text-${color} my-3`}>{title}</h4>
      <p className="text-sm text-white mb-0">{description}</p>
    </div>
  );
};

export default FeatureBox;