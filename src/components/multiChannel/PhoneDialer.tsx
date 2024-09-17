import React from 'react'

function PhoneDialer() {
  return (
     <React.Fragment>
      <div className="w-full max-w-[988px] px-4 py-0 mt-14 md:mt-0 md:py-[60px] !pb-0  m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#FF891C] blur-[150px] rounded-full m-auto"></div>
          </div>
          <img
            className="md:max-w-[inherit] max-w-44"
            src="/img/callglass.svg"
          />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 ">
            AI-Powered  
              <span className="text-[#FF891C]">Phone Dialer</span>
            </h2>
            <p className="text-base md:text-lg text-white  m-auto mt-2.5 md:mt-5 mb-0 max-w-[710px]">
            Revolutionize your cold calling with our intelligent, autonomous phone dialer system.
            </p>

            <div className="grid grid-col-1 md:grid-cols-2 gap-5 md:gap-7 max-w-[684px] m-auto mt-12">
              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#FF891C]">
                <div className="w-5 h-5 bg-[#FF891C] flex items-center justify-center rounded-full min-w-5">
                  <img src="/img/check-bold.svg" />
                </div>
                AI-driven call prioritization
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#FF891C]">
                <div className="w-5 h-5 bg-[#FF891C] flex items-center justify-center rounded-full min-w-5">
                  <img src="/img/check-bold.svg" />
                </div>
                Automated voicemail drops
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#FF891C]">
                <div className="w-5 h-5 bg-[#FF891C] flex items-center justify-center rounded-full min-w-5">
                  <img src="/img/check-bold.svg" />
                </div>
                Real-time call scripting assistance
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#FF891C]">
                <div className="w-5 h-5 bg-[#FF891C] flex items-center justify-center rounded-full min-w-5">
                  <img src="/img/check-bold.svg" />
                </div>
                Call analytics and insights
              </span>
            </div>
          </div>
        </div>

       <div className='w-full text-center mt-8'> <img src="/img/image-black.jpg"/></div>

      </div>
      </React.Fragment>
  )
}

export default PhoneDialer