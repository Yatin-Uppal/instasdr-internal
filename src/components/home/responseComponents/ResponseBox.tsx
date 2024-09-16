import React from "react";

interface ResponseBoxProps {
  title: string;
  description: string;
}

const ResponseBox: React.FC<ResponseBoxProps> = ({ title, description }) => {
  return (
    <div className="three-box p-5 md:px-8 md:py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
      <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
        {title}
      </span>
      <p className="m-0 text-base font-bold text-white">{description}</p>
    </div>
  );
};

export default ResponseBox;