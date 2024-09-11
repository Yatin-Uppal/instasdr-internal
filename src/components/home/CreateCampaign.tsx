import React from "react";

function CreateCampaign() {
  return (
    <React.Fragment>
        <div className="w-full max-w-small px-4 m-auto">
          <div className="border border-solid border-[#484848] rounded-xxl py-10 px-[60px]">
            <h4 className="text-white text-2xl font-semibold font-inter mb-6">
              Create entire 1-click campaign!
            </h4>
            <form className="relative">
              <input className="w-full h-16 border border-inputBg text-[22px] px-5 pr-52  placeholder:opacity-50 outline-0 !shadow-none	 text-[#8D8D8D] bg-inputBg rounded-[13px]" placeholder="Enter your company URL to try it out" />
              <input className="absolute top-2.5 right-2.5 text-[#F7F9FC] border border-solid border-bgblack text-lg font-semibold bg-bgblack px-5 h-11 flex items-center justify-center rounded-full	cursor-pointer" type="submit" value="Create campaign"></input>
            </form>
            <p className="text-sm mt-6 mb-0">
              In this example, we'll use your website's data as the offer, then
              we automatically build the list of ICPs of REAL leads to target
              from our 750M user database, then write multiple personalized
              human-like emails, then auto-create numerous sequences, branches -
              all in 1-click!
            </p>
          </div>
        </div>
    </React.Fragment>
  );
}

export default CreateCampaign;
