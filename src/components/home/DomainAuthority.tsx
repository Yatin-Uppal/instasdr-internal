import React from "react";

function DomainAuthority() {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4   m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#0500FF] blur-[150px] rounded-full m-auto"></div>
          </div>
          <img src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-12">
              No worrying about <br></br> your{" "}
              <span className="text-[#0075FF]">domain authority</span>
            </h2>
            <p className="text-lg text-white mt-5 mb-0">
              With unlimited mailboxes, you can purchase lookalike domains and
              attach them for us to send emails
            </p>
          </div>
        </div>
        <img src="/img/InstaSDR.svg" className="mt-16" />
      </div>
    </React.Fragment>
  );
}

export default DomainAuthority;
