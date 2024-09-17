import React from "react";
import ResponseBox from "./responseComponents/ResponseBox";

const responseItems = [
  {
    title: "We’ll auto-handle",
    description: "Positive response (send the owner notification)",
  },
  {
    title: "We’ll auto-handle",
    description: "Negative response (Unsubscribe, do not email)",
  },
  {
    title: "We’ll auto-handle",
    description: "Out of office response (we’ll send send it after 2 weeks)",
  },
  {
    title: "We’ll auto-handle",
    description: "No response (sequence continues)",
  },
  {
    title: "We’ll auto-handle",
    description: "Conversational response (ask them to book a meeting or hand off to real user)",
  },
];

function ResponseHandling() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4 py-[60px] m-auto relative">
        <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
          <div className="w-[650px] h-[650px] bg-[#00FF29] opacity-50 blur-[350px] rounded-full m-auto z-0"></div>
        </div>
        <div className="text-center relative mb-0.5">
          <img
            className="-z-[2] relative md:max-w-[inherit] max-w-44"
            src="/img/email.svg"
            alt="email"
          />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
              No worrying about <br></br>{" "}
              <span className="text-[#00FF29]"> response handling</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-nowrap md:flex-wrap gap-4 md:gap-9 mt-7 relative z-1 md:justify-center overflow-auto md:overflow-hidden">
          {responseItems.map((item, index) => (
            <ResponseBox key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResponseHandling;
