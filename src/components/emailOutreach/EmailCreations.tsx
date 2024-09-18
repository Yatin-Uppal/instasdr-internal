import Link from "@docusaurus/Link";
import React, { useState } from "react";

function EmailCreations() {
  const [flag, setFlag] = useState(false);
  const [currentOpen, setCurrentOpen] = useState<number>(null);
  const handleClick = () => {
    setFlag(!flag);
  };
  const openBox = (num: number) => {
    setCurrentOpen(num === currentOpen ? null : num);
  };
  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] mt-12 md:mt-0 px-4 py-0 md:py-[60px] !pb-0  m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#00C2FF] blur-[150px] rounded-full m-auto"></div>
          </div>
          <img className="md:max-w-[inherit] max-w-44" src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[750px] mb-0 -mt-4 md:-mt-12">
              No wasting time on email creation or{" "}
              <span className="text-[#00C2FF]">sequencing or branching</span>
            </h2>
            <p className="text-base md:text-lg text-white  m-auto mt-5 mb-0 max-w-[710px]">
              Our AI will create multiple personalized emails, it’ll also decide
              on sequencing, if-then-do-this branching
            </p>
          </div>
        </div>

        <div className="flex overflow-auto md:overflow-hidden md:grid grid-col-1 md:grid-cols-3 gap-x-5  mt-14 md:mt-16 items-start ">
          <div className="max-w-[280px] min-w-[280px] md:min-w-[inherit] md:max-w-full">
            <div className="bg-zblack rounded-xxl relative shadow-lightblue">
              <div
                className={`rounded-t-xl pb-0 overflow-hidden ${
                  currentOpen === 1 ? "h-auto" : "h-72"
                }`}
              >
                <div className="grid grid-cols-2 gap-x-2 gap-y-[15px] p-5 bg-white">
                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Psych test: Fomo
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Human-like
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Personalized
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Positivity: 4/5
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Reading level:2
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Spam words:0
                  </span>
                </div>
                <div
                  className={`  ${currentOpen === 1 ? "" : "gradiant-color"}`}
                >
                  <div className="rounded-xxl bg-zblack px-5 py-5 shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
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
                      I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your
                      leadership in data management is impressive.
                    </p>
                    <p className="text-[#84989E] text-base font-normal mb-4">
                      Datacurve's Al-driven Logicware Platform offers actionable
                      insights, transforming data into valuable assets and
                      personalized experiences. Trusted by industry leaders, we
                      can help you stay ahead and drive growth.
                    </p>
                
                    <p className="text-green text-base mb-4">Simple Email</p>

                    

                    <div className="w-full flex flex-col mt-15">
                      <p className="text-white text-base mb-0">Raja Rao DV</p>
                      <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
                        CEO{" "}
                      </span>
                      <span className="text-white text-xs leading-4 inline-block w-full">
                        Telmai
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 1 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(1)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 1 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#1B7CDD] to-[#004285] rounded-xxl relative ">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 2 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/linkedin-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Follow-up message
                </strong>
                <div
                  className={`  ${currentOpen === 2 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 2 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(2)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 2 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#FF891C] to-[#BA5900] rounded-xxl relative">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 3 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/phone-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Call from +91 1234 265 320
                </strong>
                <div
                  className={`  ${currentOpen === 3 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 3 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(3)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 3 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[280px] min-w-[280px] md:min-w-[inherit] md:max-w-full">
            <div className="bg-zblack rounded-xxl relative shadow-lightblue">
              <div
                className={`rounded-t-xl pb-0 overflow-hidden ${
                  currentOpen === 4 ? "h-auto" : "h-72"
                }`}
              >
                <div className="grid grid-cols-2 gap-x-2 gap-y-[15px] p-5 bg-white">
                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Psych test: Fomo
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Human-like
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Personalized
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Positivity: 4/5
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Reading level:2
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Spam words:0
                  </span>
                </div>
                <div
                  className={`  ${currentOpen === 4 ? "" : "gradiant-color"}`}
                >
                  <div className="rounded-xxl bg-zblack px-5 py-5 shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
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
                      I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your
                      leadership in data management is impressive.
                    </p>
                    <p className="text-[#84989E] text-base font-normal mb-4">
                      Datacurve's Al-driven Logicware Platform offers actionable
                      insights, transforming data into valuable assets and
                      personalized experiences. Trusted by industry leaders, we
                      can help you stay ahead and drive growth.
                    </p>
                
                    <p className="text-green text-base mb-4">Video Email</p>

                    <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
                      <img
                        src="/img/video-bg.jpg"
                        className="w-full h-full object-cover"
                      />
                      <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
                        <img src="/img/youtube.svg" />
                      </div>
                    </div>

                    <div className="w-full flex flex-col mt-15">
                      <p className="text-white text-base mb-0">Raja Rao DV</p>
                      <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
                        CEO{" "}
                      </span>
                      <span className="text-white text-xs leading-4 inline-block w-full">
                        Telmai
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 4 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(4)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 4 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#1B7CDD] to-[#004285] rounded-xxl relative">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 5 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/linkedin-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Follow-up message
                </strong>
                <div
                  className={`  ${currentOpen === 5 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 5 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(5)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 5 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#FF891C] to-[#BA5900] rounded-xxl relative">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 6 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/phone-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Call from +91 1234 265 320
                </strong>
                <div
                  className={`  ${currentOpen === 6 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 6 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(6)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 6 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[280px] min-w-[280px] md:min-w-[inherit] md:max-w-full">
          <div className="bg-zblack rounded-xxl relative shadow-lightblue">
              <div
                className={`rounded-t-xl pb-0 overflow-hidden ${
                  currentOpen === 7 ? "h-auto" : "h-72"
                }`}
              >
                <div className="grid grid-cols-2 gap-x-2 gap-y-[15px] p-5 bg-white">
                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Psych test: Fomo
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Human-like
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Personalized
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Positivity: 4/5
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Reading level:2
                  </span>

                  <span className="flex gap-2.5 font-medium text-xs text-zblack items-center">
                    <div className="w-5 h-5 bg-[#00C2FF] flex items-center justify-center rounded-full">
                      <img
                        className="relative -left-px"
                        src="/img/check-bold.svg"
                      />
                    </div>
                    Spam words:0
                  </span>
                </div>
                <div
                  className={`  ${currentOpen === 7 ? "" : "gradiant-color"}`}
                >
                  <div className="rounded-xxl bg-zblack px-5 py-5 shadow-lightgreen  min-w-[280px] md:min-w-[inherit] max-w-[280px] md:max-w-full">
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
                      I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your
                      leadership in data management is impressive.
                    </p>
                    <p className="text-[#84989E] text-base font-normal mb-4">
                      Datacurve's Al-driven Logicware Platform offers actionable
                      insights, transforming data into valuable assets and
                      personalized experiences. Trusted by industry leaders, we
                      can help you stay ahead and drive growth.
                    </p>
                
                    <p className="text-green text-base mb-4">Gif Email</p>

                    <div className="w-full h-[148px] overflow-hidden relative rounded-md mb-15">
                      <img
                        src="/img/video-bg.jpg"
                        className="w-full h-full object-cover"
                      />
                      {/* <div className="w-full h-full absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center cursor-pointer">
                        <img src="/img/youtube.svg" />
                      </div> */}
                    </div>

                    <div className="w-full flex flex-col mt-15">
                      <p className="text-white text-base mb-0">Raja Rao DV</p>
                      <span className="text-white text-xs leading-4 w-full inline-block mb-[2px]">
                        CEO{" "}
                      </span>
                      <span className="text-white text-xs leading-4 inline-block w-full">
                        Telmai
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 7 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(7)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 7 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#1B7CDD] to-[#004285] rounded-xxl relative">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 8 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/linkedin-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Follow-up message
                </strong>
                <div
                  className={`  ${currentOpen === 8 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 8 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(8)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 8 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
            <div className="relative text-center h-[145px]">
              <span className="bg-[#16283A] text-[#0A66C2] rounded-xxl px-5 py-1.5 text-base absolute top-12 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[135px] w-px bg-white opacity-50 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>

            <div className="bg-gradient-to-b from-[#FF891C] to-[#BA5900] rounded-xxl relative">
              <div
                className={`rounded-t-xl   px-5 py-6 pb-0 overflow-hidden ${
                  currentOpen === 9 ? "h-auto" : "h-72"
                }`}
              >
                <img src="/img/phone-white.svg" alt="" />
                <strong className="w-full text-left inline-block text-base font-inter font-bold mt-3 mb-2 text-white">
                  Call from +91 1234 265 320
                </strong>
                <div
                  className={`  ${currentOpen === 9 ? "" : "gradiant-color"}`}
                >
                  <p className="text-white text-base opacity-80 mb-0">
                    Hi Jay, <br></br> <br></br>
                    I’m Raja Rao DV, CEO at Denodo.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia. ,<br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                    <br></br>
                    <br></br>
                    Hi Jay, I’m Raja Rao DV, CEO at Denodo. I admire the
                    innovative marketing strategies you've implemented at
                    Privalia.
                  </p>
                </div>
              </div>

              <div
                className={`flex justify-between items-center   p-5 rounded-b-xl  relative z-1 ${
                  currentOpen === 9 ? "" : ""
                }`}
              >
                <label className="text-xs text-white font-medium">
                  Expand Details
                </label>

                <button
                  onClick={(e) => openBox(1)}
                  className="cursor-pointer w-8 h-8 border border-[rgba(255,255,255,0.10)] rounded-full flex items-center justify-center bg-[rgba(41,41,41,0.10)]"
                >
                  <img
                    src="/img/arrow-down.svg"
                    className={` ${
                      currentOpen === 9 ? "rotate-180  w-3" : "rotate-0 w-3"
                    }`}
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailCreations;
