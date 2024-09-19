import React from "react";

interface EmailCardProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function EmailCard({ title, content, isOpen, onToggle }: EmailCardProps) {
  const formattedContent = content.replace(/\n/g, '<br>');

  return (
    <div className="bg-gradient-to-b from-[#1B7CDD] to-[#004285] rounded-xxl relative">
      <div className={`rounded-t-xl px-5 py-6 pb-0 overflow-hidden ${isOpen ? "h-auto" : "h-72"}`}>
        <img src="/img/linkedin-white.webp" alt=""  className="h-[34px]"/>
        <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
          {title}
        </strong>
        <div className={isOpen ? "" : "gradiant-color"}>
          <p 
            className="text-white text-base opacity-80 mb-0"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center p-5 rounded-b-xl relative z-1">
        <label className="text-xs text-white font-medium">
          Expand Details
        </label>

        <button
          onClick={onToggle}
          className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
        >
          <img
            src="/img/arrow-down.svg"
            className={isOpen ? "rotate-180 w-3" : "rotate-0 w-3"}
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default EmailCard;