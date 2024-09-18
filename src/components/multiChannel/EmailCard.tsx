import React from "react";
import { EmailCard as EmailCardType, EmailFeature } from "../../interfaces/EmailOutreach";

interface EmailCardProps {
  card: EmailCardType;
  features: EmailFeature[];
}

function EmailCard({ card, features }: EmailCardProps) {
  return (
    <div className="rounded-xxl shadow-lightblue overflow-hidden bg-zblack min-w-[280px] max-w-[280px] md:min-w-[inherit] md:max-w-full">
      <div className="grid grid-cols-2 gap-x-3 gap-y-[15px] p-5 bg-white">
        {features.map((feature, index) => (
          <span key={index} className="flex gap-2.5 font-medium text-xs text-zblack items-center">
            <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
              <img className="relative -left-px" src={feature.icon} />
            </div>
            {feature.text}
          </span>
        ))}
      </div>

      <div className="p-5 pb-7">
        <span className="text-base text-[#00C2FF] mb-15 font-medium">
          Email {card.number}
        </span>
        <h4 className="font-inter font-bold mb-15">{card.title}</h4>
        <p className="text-normal font-inter text-white opacity-70 text-base mb-15">
          {card.recipient}
        </p>
        <p className="text-normal font-inter text-white opacity-70 text-base mb-15">
          {card.content}
        </p>
        <div className="overflow-hidden h-[150px] rounded-lg1 relative group">
          <img src={card.imageSrc} className="w-full object-cover h-full" />
          <div className="w-full h-full hidden group-hover:flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 ">
            <button className="w-[54px] h-[54px] border border-[#00F0FF] bg-[#00F0FF] rounded-full flex items-center justify-center cursor-pointer">
              <img src="/img/HiLink.svg" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col mt-15">
          <p className="text-white text-base opacity-70 mb-0">
            {card.sender.name}
          </p>
          <span className="text-white text-xs opacity-70 leading-4 w-full inline-block">
            {card.sender.position}
          </span>
          <span className="text-white text-xs opacity-70 leading-4 inline-block w-full">
            {card.sender.company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmailCard;