import React from "react";
import CommonSectionWithEmail from "./CommonSectionWithEmail";
import Step from "./steps/Step";

const steps = [
  { number: 1, description: "Register" },
  { number: 2, description: "Add your mailboxes to send your emails" },
  { number: 3, description: "Describe your offer" },
  { number: 4, description: "Launch campaign!" },
];

function CreateCampaignWork() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4 py-[60px] m-auto">
        <CommonSectionWithEmail>
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-12">
            How does it work?
          </h2>
        </CommonSectionWithEmail>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-[60px] gap-5 md:gap-14">
          {steps.map((step) => (
            <React.Fragment key={step.number}>
              <Step number={step.number} description={step.description} />
              <div className="w-full h-px bg-white opacity-20 md:hidden block"></div>
            </React.Fragment>
          ))}
        </div>

        <div className="w-full text-center pt-16 relative">
          <div className="absolute left-0 right-0  flex justify-center items-center">
            <div className="bg-[#FF0000] w-[450px] h-28 rounded-full blur-[150px]"></div>
          </div>
          <button
            type="button"
            className="cursor-pointer z-1 relative text-base w-9/12 md:w-auto md:text-[27px] text-white font-semibold font-inter py-2.5 md:py-4 px-8 rounded-xxl md:rounded-2xl border border-[#EC0A0A] bg-[#EC0A0A] hover:opacity-75"
          >
            Create campaign
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateCampaignWork;
