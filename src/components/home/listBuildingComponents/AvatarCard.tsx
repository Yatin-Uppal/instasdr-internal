import Link from "@docusaurus/Link";
import React from "react";

interface AvatarCardProps {
  imgSrc: string;
  name: string;
  title: string;
  age: number;
  description: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ imgSrc, name, title, age, description }) => {
  return (
    <div className="border border-solid border-[#484848] rounded-xxl p-5 relative max-w-[280px] md:max-w-full min-w-[280px] md:min-w-[inherit]   md:w-auto">
      <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center overflow-hidden -top-px">
        <div className="h-px w-44 overflow-hidden">
          <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-1.5 mb-4">
        <div className="w-24 h-24 rounded-full">
          <img src={imgSrc} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <h4 className="text-white font-inter text-[22px] leading-[30px] font-medium m-0 mt-0.5">{name}</h4>
        <h6 className="font-inter text-base m-0 font-medium">{title}</h6>
        <span className="text-base text-white opacity-40">{age} yo</span>
      </div>
      <p className="text-base text-white opacity-50 mb-0 line-clamp-3 font-normal">{description}</p>
      <div className="flex flex-wrap gap-x-1 gap-y-2.5 mt-5">
        {["Product", "Audience", "Pains", "Solutions", "Customer stories", "Trust", "Objections", "FAQ"].map((tag) => (
          <Link
            key={tag}
            href="#"
            className="rounded-lg1 bg-[#448C741A] px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c]"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center overflow-hidden -bottom-px">
        <div className="h-px w-44 overflow-hidden">
          <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;