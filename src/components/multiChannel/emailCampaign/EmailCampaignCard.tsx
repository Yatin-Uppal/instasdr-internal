import React from "react";
import { EmailCampaignCard as EmailCampaignCardProps } from "@site/src/interfaces/EmailCampaign";

function EmailCampaignCard({
  avatar,
  name,
  position,
  company,
  subject,
  body,
  image,
  sender,
}: EmailCampaignCardProps) {
  return (
    <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
      <div className="flex gap-4">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
          <img className="w-full h-full object-cover" src={avatar} alt={name} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">{name}</h6>
          <span className="text-xs font-semibold text-[#F6F9FC]">{position}</span>
          <small className="text-xs text-[#F6F9FC] opacity-50 mt-1">{company}</small>
        </div>
      </div>

      <h4 className="text-base font-bold font-inter text-white my-15">
        Subject: {subject}
      </h4>

      {body.map((paragraph, index) => (
        <p key={index} className="text-[#84989E] text-base font-normal mb-4">
          {index === 0 ? "Body:" : ""} {paragraph}
        </p>
      ))}

      <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
        <img src={image} className="w-full h-full object-cover" alt="Campaign image" />
      </div>

      <div className="w-full flex flex-col mt-15 opacity-70">
        <p className="text-white text-base mb-0">{sender.name}</p>
        <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
          {sender.position}
        </span>
        <span className="text-white text-xs leading-4 inline-block w-full">
          {sender.company}
        </span>
      </div>
    </div>
  );
}

export default EmailCampaignCard;