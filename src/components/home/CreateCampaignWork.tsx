import React from "react";

function CreateCampaignWork() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4 py-[60px] m-auto">
        <div className="text-center relative">
          <img src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-12">
              How does it work?
            </h2>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-4 mt-[60px] gap-14">
          <div className="flex flex-col">
            <strong className="text-[#EC0A0A] text-[42px] font-bold leading-[53px]">
              1
            </strong>
            <div className="w-full h-px bg-white opacity-20 mt-4 mb-6"></div>
            <p className="text-white text-2xl mb-0 font-semibold">Register</p>
          </div>

          <div className="flex flex-col">
            <strong className="text-[#EC0A0A] text-[42px] font-bold leading-[53px]">
              2
            </strong>
            <div className="w-full h-px bg-white opacity-20 mt-4 mb-6"></div>
            <p className="text-white text-2xl mb-0 font-semibold">
              Add your mailboxes to send your emails
            </p>
          </div>

          <div className="flex flex-col">
            <strong className="text-[#EC0A0A] text-[42px] font-bold leading-[53px]">
              3
            </strong>
            <div className="w-full h-px bg-white opacity-20 mt-4 mb-6"></div>
            <p className="text-white text-2xl mb-0 font-semibold">
              Describe your offer{" "}
            </p>
          </div>

          <div className="flex flex-col">
            <strong className="text-[#EC0A0A] text-[42px] font-bold leading-[53px]">
              4
            </strong>
            <div className="w-full h-px bg-white opacity-20 mt-4 mb-6"></div>
            <p className="text-white text-2xl mb-0 font-semibold">
              Launch campaign!
            </p>
          </div>
        </div>

        <div className="w-full text-center pt-16 relative">
          <div className="absolute left-0 right-0 z-[-2] flex justify-center items-center">
            <div className="bg-[#FF0000] w-[450px] h-28 rounded-full blur-[150px]"></div>
          </div>
          <button
            type="button"
            className="cursor-pointer text-[27px] text-white font-semibold font-inter py-4 px-8 rounded-2xl border  border-[#EC0A0A] bg-[#EC0A0A] hover:opacity-75 "
          >
            Create campaign
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateCampaignWork;
