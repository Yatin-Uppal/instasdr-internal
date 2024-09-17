import Link from "@docusaurus/Link";
import React from "react";

interface FeatureCardProps {
  bgColor: string;
  icon: string;
  title: string;
  description: string;
  useCases: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ bgColor, icon, title, description, useCases }) => {
  return (
    <div className={`flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]`}>
      <div className={`h-[18px] min-w-[18px] w-[18px] ${bgColor} rounded-full absolute top-[14px] left-[14px]`}>
        <img src="/img/check.svg" className="absolute -right-[1px] top-[1px]" alt="check"/>
      </div>

      <div className="group-hover:flex hidden gap-2.5 items-start top-3 absolute right-4">
        <Link href="#"><img src="/img/linkedin.svg" /></Link>
        <Link href="#"><img src="/img/CkPhone.svg" /></Link>
        <Link href="#"><img src="/img/MdEmail1.svg" /></Link>
      </div>
      <div className="flex flex-col gap-3 w-full items-center text-center">
        <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
          <img src={icon} alt="icon" />
        </div>
        <h4 className={`text-${bgColor} text-base font-bold text-center m-0`}>{title}</h4>
        <p className="text-sm mb-0 min-h-[54px]">{description}</p>
        <div className="text-left mt-auto">
          <span className="text-xs mb-2 inline-block w-full">Use cases: </span>
          <p className="text-xs text-white opacity-60 mb-0 min-h-11">{useCases}</p>
        </div>
      </div>
      <div className={`w-full h-full rounded-full ${bgColor} opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]`}></div>
    </div>
  );
};

export default FeatureCard;