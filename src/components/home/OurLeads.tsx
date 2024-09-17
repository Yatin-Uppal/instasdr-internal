import React from "react";
import CommonSectionWithEmail from "./CommonSectionWithEmail";

function OurLeads() {
  return (
    <React.Fragment>
      <div className="w-full max-w-[1178px] px-4 m-auto">
        <CommonSectionWithEmail color="#00F0FF">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
            No worrying about not having enough leads,{" "}
            <span className="text-[#00F0FF]">use our leads</span>
          </h2>
          <p className="text-base md:text-lg text-white mt-5 mb-0">
            We have partnered with industry leading companies to provide you
            with the right leads
          </p>
        </CommonSectionWithEmail>

        <div className="flex items-center flex-wrap justify-center md:flex-nowrap gap-6 mt-[60px]">
          <div>
            <span className="text-center text-lg mb-5 inline-block w-full">
              Leads
            </span>
            <img src="/img/leads.webp" className="w-full" alt="leads" />
          </div>
          <div>
            <img className="md:mt-14" src="/img/plus-circle.webp" alt="leads" />
          </div>
          <div>
            <span className="text-center text-lg mb-5 inline-block w-full text-[#00F0FF]">
              Leads
            </span>
            <img src="/img/ourleads.webp" className="w-full" alt="Our leads" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurLeads;
