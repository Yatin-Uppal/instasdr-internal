import React from "react";
import { Email } from "../../interfaces/EmailSequence";

interface EmailCardProps {
  email: Email;
  isOpen: boolean;
  onToggle: () => void;
}

function EmailCard({ email, isOpen, onToggle }: EmailCardProps) {
  return (
    <div className={`bg-gradient-to-b ${email.bgGradient} rounded-xxl relative bg-zblack shadow-lightblue`}>
      <div className={`rounded-t-xl pb-0 overflow-hidden ${isOpen ? "h-auto" : "h-72"}`}>
        {email.type === "email" && (
          <>
            <div className="grid grid-cols-2 gap-x-2 gap-y-[15px] p-5 bg-white">
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Psych test: {email.content.psychTest}
              </span>
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Human-like
              </span>
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Personalized
              </span>
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Positivity: {email.content.positivity}/5
              </span>
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Reading level: {email.content.readingLevel}
              </span>
              <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                  <img className="relative -left-px" src="/img/check-bold.svg" />
                </div>
                Spam words: {email.content.spamWords}
              </span>
            </div>
            <div className="rounded-xxl bg-zblack px-5 py-5 shadow-lightgreen">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
                  <img className="w-full h-full object-cover" src={email.content.avatar} />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">{email.content.name}</h6>
                  <span className="text-xs font-semibold text-[#0DF578]">{email.content.designation}</span>
                  <small className="text-xs text-[#F6F9FC] opacity-50 mt-1">{email.content.company}</small>
                </div>
              </div>
              <h4 className="text-base font-bold font-inter text-white my-15">Subject: {email.content.subject}</h4>
              {email.content.body?.map((paragraph, index) => (
                <p key={index} className="text-[#84989E] text-base font-normal mb-4">{paragraph}</p>
              ))}
              <p className="text-green text-base mb-4">{email.content.emailType}</p>
              <div className="w-full flex flex-col mt-15">
                <p className="text-white text-base mb-0">{email.content.senderName}</p>
                <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">{email.content.senderDesignation}</span>
                <span className="text-white text-xs leading-4 inline-block w-full">{email.content.senderCompany}</span>
              </div>
            </div>
          </>
        )}
        {email.type === "linkedin" && (
          <div className="px-5 py-6">
            <img src="/img/linkedin-white.svg" alt="LinkedIn" className="mb-4" />
            <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">Follow-up message</strong>
            <div className={`${isOpen ? "" : "gradiant-color"}`}>
              {email.content.message?.map((paragraph, index) => (
                <p key={index} className="text-white text-base opacity-80 mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
        {email.type === "call" && (
          <div className="px-5 py-6">
            <img src="/img/phone-white.svg" alt="Phone" className="mb-4" />
            <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
              Call from {email.content.phoneNumber}
            </strong>
            <div className={`${isOpen ? "" : "gradiant-color"}`}>
              {email.content.message?.map((paragraph, index) => (
                <p key={index} className="text-white text-base opacity-80 mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={`flex justify-between items-center p-5 rounded-b-xl relative z-1 ${isOpen ? "" : ""}`}>
        <label className="text-xs text-white font-medium">Expand Details</label>
        <button
          onClick={onToggle}
          className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
        >
          <img
            src="/img/arrow-down.svg"
            className={`${isOpen ? "rotate-180 w-3" : "rotate-0 w-3"}`}
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default EmailCard;