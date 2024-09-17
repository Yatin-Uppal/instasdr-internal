import React from "react";
import CommonSectionWithEmail from "./CommonSectionWithEmail";

function DomainAuthority() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4   m-auto">
        <CommonSectionWithEmail color="#00F0FF">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
            No worrying about <br></br> your{" "}
            <span className="text-[#0075FF]">domain authority</span>
          </h2>
          <p className="text-lg text-white mt-5 mb-0">
            With unlimited mailboxes, you can purchase lookalike domains and
            attach them for us to send emails
          </p>
        </CommonSectionWithEmail>
        <img src="/img/InstaSDR.svg" className="mt-16 hidden md:block" alt="InstaSDR"/>
        <img src="/img/instasdr1.svg" className="mt-16 md:hidden block" alt="InstaSDR1"/>
      </div>
    </React.Fragment>
  );
}

export default DomainAuthority;
