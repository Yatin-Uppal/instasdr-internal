import React from "react";

function OurLeads() {
  return (
    <React.Fragment>
      <div className="w-full max-w-[1178px] px-4 m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#00C2FF] blur-[200px] rounded-full m-auto"></div>
          </div>
          <img className="relative -z-[2]" src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-12">
              No worrying about not having enough leads,{" "}
              <span className="text-[#00F0FF]">use our leads</span>
            </h2>
            <p className="text-lg text-white mt-5 mb-0">
              We have partnered with industry leading companies to provide you
              with the right leads
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-center md:flex-nowrap gap-6 mt-[60px]">
            <div>
                <span className="text-center text-lg mb-5 inline-block w-full">Leads</span>
                <img src="/img/leads.png" className="w-full" alt="leads"/>
            </div>
            <div>
            <img className="mt-14" src="/img/plus-circle.png"  alt="leads"/>
            </div>
            <div>
                <span className="text-center text-lg mb-5 inline-block w-full text-[#00F0FF]">Leads</span>
                <img src="/img/ourleads.png" className="w-full" alt="Our leads"/>
            </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default OurLeads;
