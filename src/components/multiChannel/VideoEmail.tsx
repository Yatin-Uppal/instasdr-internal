import React from "react";

function VideoEmail() {
  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] pt-20 px-4 py-0 md:py-[60px] md:!pb-0  m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#0DF578] blur-[150px] rounded-full m-auto"></div>
          </div>
          <img
            className="md:max-w-[inherit] max-w-44"
            src="/img/videoMail.svg"
          />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0">
              AI-Powered <span className="text-[#0DF578]">Video Email</span>
            </h2>
            <p className="text-base md:text-lg text-white  m-auto mt-2.5 md:mt-5 mb-0 max-w-[710px]">
              Leverage the power of personalized video messages to significantly
              boost engagement and conversion rates.
            </p>

            <div className="grid grid-col-1 md:grid-cols-2 gap-5 md:gap-7 max-w-[860px] m-auto mt-12">
              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#0DF578]">
                <div className="w-5 h-5 min-w-5 bg-[#0DF578] flex items-center justify-center rounded-full">
                  <img src="/img/check-bold.svg" />
                </div>
                AI-generated personalized video scripts
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#0DF578]">
                <div className="w-5 h-5 min-w-5 bg-[#0DF578] flex items-center justify-center rounded-full">
                  <img src="/img/check-bold.svg" />
                </div>
                Automated video creation and editing
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#0DF578]">
                <div className="w-5 h-5 min-w-5 bg-[#0DF578] flex items-center justify-center rounded-full">
                  <img src="/img/check-bold.svg" />
                </div>
                Seamless integration with email campaigns
              </span>

              <span className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold text-[#0DF578]">
                <div className="w-5 h-5 min-w-5 bg-[#0DF578] flex items-center justify-center rounded-full">
                  <img src="/img/check-bold.svg" />
                </div>
                Performance tracking and optimization
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1064px] w-full m-auto px-4 mt-[60px]">
        <div className="bg-[#05050A] p-3 py-5 md:px-7 md:py-9 rounded-xxl relative overflow-hidden">
          <div className="h-36 w-[500px] bg-[#0DF578] opacity-15 rounded-full -top-14 left-0 absolute blur-[40px]"></div>
          <h3 className="text-[30px] font-semibold text-white mb-2.5 text-center font-inter">
            Video for <span className="text-[#0DF578]">Bob</span>
          </h3>
          <p className="text-white text-lg m-auto text-center mb-5 max-w-[668px]">
            Hey Bob! I made quick video that shows how InstaSDR can help you.
            Would love to get our feedback.
          </p>

          <div className="md:overflow-hidden overflow-auto flex md:grid md:grid-cols-3 gap-5">
            <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
                  <img
                    className="w-full h-full object-cover"
                    src="/img/avatar.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">
                    Eric Hirschhorn
                  </h6>
                  <span className="text-xs font-semibold text-[#0DF578]">
                    CMO-Chief Marketing Officer
                  </span>
                  <small className="text-xs text-[#F6F9FC ] opacity-50 mt-1">
                    Privalia
                  </small>
                </div>
              </div>

              <h4 className="text-base font-bold font-inter text-white my-15">
                Subject: Unlock Data Potential
              </h4>

              <p className="text-[#84989E] text-base font-normal mb-4">
                Body:<br></br>
                Dear Eric,{" "}
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership
                in data management is impressive.
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                Datacurve's Al-driven Logicware Platform offers actionable
                insights, transforming data into valuable assets and
                personalized experiences. Trusted by industry leaders, we can
                help you stay ahead and drive growth.
              </p>
              <p className="text-base text-white font-normal mb-4">
                Would you be interested in a conversation?
              </p>
              <p className="text-base text-white font-normal mb-4">
                I made a <span className="text-[#0DF578]">90 seconds video demo </span> of how InstaSDR works
              </p>

              <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
                 <img src="/img/video-bg.jpg" className="w-full h-full object-cover"/>
                 <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
                    <img src="/img/youtube.svg"/>
                 </div>
              </div>

              <div className="w-full flex flex-col mt-15">
                <p className="text-white text-base mb-0">
                Raja Rao DV
                </p>
                <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">CEO </span>
                <span className="text-white text-xs leading-4 inline-block w-full">
                Telmai</span>
              </div>
            </div>

            <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
                  <img
                    className="w-full h-full object-cover"
                    src="/img/avatar.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">
                    Eric Hirschhorn
                  </h6>
                  <span className="text-xs font-semibold text-[#0DF578]">
                  Chief Data Officer
                  </span>
                  <small className="text-xs text-[#F6F9FC ] opacity-50 mt-1">
                  BNY
                  </small>
                </div>
              </div>

              <h4 className="text-base font-bold font-inter text-white my-15">
                Subject: Unlock Data Potential
              </h4>

              <p className="text-[#84989E] text-base font-normal mb-4">
                Body:<br></br>
                Dear Eric,{" "}
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership
                in data management is impressive.
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                Datacurve's Al-driven Logicware Platform offers actionable
                insights, transforming data into valuable assets and
                personalized experiences. Trusted by industry leaders, we can
                help you stay ahead and drive growth.
              </p>
              <p className="text-base text-white font-normal mb-4">
                Would you be interested in a conversation?
              </p>
              <p className="text-base text-white font-normal mb-4">
                I made a <span className="text-[#0DF578]">90 seconds video demo </span> of how InstaSDR works
              </p>

              <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
                 <img src="/img/video-bg1.jpg" className="w-full h-full object-cover"/>
                 <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
                    <img src="/img/youtube.svg"/>
                 </div>
              </div>

              <div className="w-full flex flex-col mt-15">
                <p className="text-white text-base mb-0">
                Raja Rao DV
                </p>
                <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">CEO </span>
                <span className="text-white text-xs leading-4 inline-block w-full">
                Telmai</span>
              </div>
            </div>


            <div className="rounded-xxl bg-zblack px-5 py-[30px] shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden mt-2">
                  <img
                    className="w-full h-full object-cover"
                    src="/img/avatar.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-base text-[#F6F9FC] mb-1 font-semibold">
                    Eric Hirschhorn
                  </h6>
                  <span className="text-xs font-semibold text-[#0DF578]">
                  Head of Customer Experience
                  </span>
                  <small className="text-xs text-[#F6F9FC ] opacity-50 mt-1">
                  Yampi
                  </small>
                </div>
              </div>

              <h4 className="text-base font-bold font-inter text-white my-15">
                Subject: Unlock Data Potential
              </h4>

              <p className="text-[#84989E] text-base font-normal mb-4">
                Body:<br></br>
                Dear Eric,{" "}
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership
                in data management is impressive.
              </p>
              <p className="text-[#84989E] text-base font-normal mb-4">
                Datacurve's Al-driven Logicware Platform offers actionable
                insights, transforming data into valuable assets and
                personalized experiences. Trusted by industry leaders, we can
                help you stay ahead and drive growth.
              </p>
              <p className="text-base text-white font-normal mb-4">
                Would you be interested in a conversation?
              </p>
              <p className="text-base text-white font-normal mb-4">
                I made a <span className="text-[#0DF578]">90 seconds video demo </span> of how InstaSDR works
              </p>

              <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
                 <img src="/img/video-bg2.jpg" className="w-full h-full object-cover"/>
                 <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
                    <img src="/img/youtube.svg"/>
                 </div>
              </div>

              <div className="w-full flex flex-col mt-15">
                <p className="text-white text-base mb-0">
                Raja Rao DV
                </p>
                <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">CEO </span>
                <span className="text-white text-xs leading-4 inline-block w-full">
                Telmai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoEmail;
