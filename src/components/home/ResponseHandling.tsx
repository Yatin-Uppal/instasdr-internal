import React from "react";

function ResponseHandling() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4 py-[60px] m-auto relative">
        <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
          <div className="w-[650px] h-[650px] bg-[#00FF29] opacity-50 blur-[350px] rounded-full m-auto z-0"></div>
        </div>
        <div className="text-center relative mb-0.5">
          <img className="-z-[2] relative" src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-12">
              No worrying about <br></br>{" "}
              <span className="text-[#00FF29]"> response handling</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-9 mt-7 relative z-1 justify-center">
          <div className="w-full three-box px-8 py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
            <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
              We’ll auto-handle{" "}
            </span>
            <p className="m-0 text-base font-bold text-white">
            Positive response (send the owner notification)
            </p>
          </div>

          <div className="w-full  three-box px-8 py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
            <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
              We’ll auto-handle{" "}
            </span>
            <p className="m-0 text-base font-bold text-white">
            Negative response (Unsubscribe, do not email)
            </p>
          </div>

          <div className="w-full three-box px-8 py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
            <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
              We’ll auto-handle{" "}
            </span>
            <p className="m-0 text-base font-bold text-white">
            Out of office response (we’ll send send it after 2 weeks)
            </p>
          </div>

          <div className="w-full three-box px-8 py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
            <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
              We’ll auto-handle{" "}
            </span>
            <p className="m-0 text-base font-bold text-white">
            No response (sequence continues)
            </p>
          </div>

          <div className="w-full three-box px-8 py-6 border-[#2C3E28] border-solid border rounded-lg1 flex items-start flex-col gap-3 hover:bg-[#061403]">
            <span className="py-1.5 px-2 rounded-lg1 text-[#00FF29] bg-[#00FF291A] text-sm">
              We’ll auto-handle{" "}
            </span>
            <p className="m-0 text-base font-bold text-white">
            Conversational response (ask them to book a meeting or hand off to real user)
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResponseHandling;
