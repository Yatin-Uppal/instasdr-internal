import React from "react";

interface HeaderSectionProps {
  color?: string;
  children: React.ReactNode;
}

const CommonSectionWithEmail: React.FC<HeaderSectionProps> = ({ color, children }) => {
  console.log(color, 'color');
  
  return (
    <div className="text-center relative">
      <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
        <div
          className="w-[450px] h-[142px] blur-[150px] rounded-full m-auto"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <img className="relative -z-[2] md:max-w-[inherit] max-w-44" src="/img/email.svg" alt="Email icon"/>
      <div className="relative z-1 w-full text-center inline-block">
        {children}
      </div>
    </div>
  );
};

export default CommonSectionWithEmail;