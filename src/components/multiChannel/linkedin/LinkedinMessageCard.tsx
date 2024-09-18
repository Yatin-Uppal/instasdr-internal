import React from "react";
import { LinkedinMessage } from "../../../interfaces/LinkedinMessage";

const LinkedinMessageCard: React.FC<LinkedinMessage> = ({
  title,
  content,
  sender,
}) => {
  return (
    <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
      <img src="/img/linkedin-icon.svg" alt="LinkedIn Icon" />

      <h4 className="text-base font-bold font-inter text-white my-15">
        {title}
      </h4>

      {content.split("\n\n").map((paragraph, index) => (
        <p key={index} className="text-[#84989E] text-base font-normal mb-4">
          {paragraph}
        </p>
      ))}

      <div className="w-full flex flex-col mt-15">
        <p className="text-white text-base mb-0">{sender.name}</p>
        <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
          {sender.title}{" "}
        </span>
        <span className="text-white text-xs leading-4 inline-block w-full">
          {sender.company}
        </span>
      </div>
    </div>
  );
};

export default LinkedinMessageCard;
