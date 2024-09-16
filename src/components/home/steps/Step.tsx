import React from "react";

interface StepProps {
  number: number;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, description }) => {
  return (
    <div className="flex md:gap-0 gap-8 md:flex-col">
      <strong className="text-[#EC0A0A] text-base md:text-[42px] font-bold md:leading-[53px]">
        {number}
      </strong>
      <div className="w-full h-px bg-white opacity-20 mt-4 mb-6 md:block hidden"></div>
      <p className="text-white text-lg md:text-2xl mb-0 font-semibold">
        {description}
      </p>
    </div>
  );
};

export default Step;