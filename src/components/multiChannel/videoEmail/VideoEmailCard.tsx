import React from "react";
import { VideoEmailCard as VideoEmailCardProps } from "../../../interfaces/VideoEmail";

function VideoEmailCard({
  avatar,
  name,
  position,
  company,
  subject,
  body,
  videoThumbnail,
  senderName,
  senderPosition,
  senderCompany,
}: VideoEmailCardProps) {
  return (
    <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
      <div className="flex gap-4">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
          <img className="w-full h-full object-cover" src={avatar} alt={name} />
        </div>
        <div className="flex flex-col">
          <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">{name}</h6>
          <span className="text-xs font-semibold text-[#0DF578]">{position}</span>
          <small className="text-xs text-[#F6F9FC] opacity-50 mt-1">{company}</small>
        </div>
      </div>

      <h4 className="text-base font-bold font-inter text-white my-15">
        Subject: {subject}
      </h4>

      <p className="text-[#84989E] text-base font-normal mb-4">
        Body:<br />
        {body}
      </p>
      <p className="text-base text-white font-normal mb-4">
        Would you be interested in a conversation?
      </p>
      <p className="text-base text-white font-normal mb-4">
        I made a <span className="text-[#0DF578]">90 seconds video demo </span> of
        how InstaSDR works
      </p>

      <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
        <img src={videoThumbnail} className="w-full h-full object-cover" alt="Video thumbnail" />
        <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
          <img src="/img/youtube.webp" alt="Play button" className="h-[25px]"/>
        </div>
      </div>

      <div className="w-full flex flex-col mt-15">
        <p className="text-white text-base mb-0">{senderName}</p>
        <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
          {senderPosition}
        </span>
        <span className="text-white text-xs leading-4 inline-block w-full">
          {senderCompany}
        </span>
      </div>
    </div>
  );
}

export default VideoEmailCard;