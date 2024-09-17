import React, { useState, useEffect, useRef } from "react";
import Link from "@docusaurus/Link";

const Header = () => {
  const [openTab, setOpenTab] = useState<"product" | "marketing" | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleDropdownOpen = (tab: "product" | "marketing") => {
    setOpenTab(prevTab => prevTab === tab ? null : tab);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenTab(null);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpenTab(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const [flag, setFlag] = useState<boolean>(false)
  const handleClick = (flagValue: boolean) => {
    flagValue ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')
    setFlag(flagValue)
  }
  return (
    <React.Fragment>
      {openTab !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[5]"
          onClick={() => setOpenTab(null)}
        />
      )}
      <nav className="w-full flex justify-center py-5 md:py-10 top-0 z-20 main-header">
        <div className="w-full max-w-container px-4 m-auto inline-flex items-center justify-between">
          <div className="inline-flex gap-10 lg:gap-x-48" ref={menuRef}>
            <Link
              href="/"
              className="font-semibold text-xl	text-white !no-underline hover:text-white"
            >
              InstaSDR.ai
            </Link>

            <ul className={` ${flag ? "!flex" : ''} z-10 p-5 md:p-0 top-0 left-0  right-0 bottom-0 fixed  flex-col md:!flex-row w-full mb-height md:h-auto md:w-auto bg-[#000] md:bg-transparent md:static md:flex hidden gap-3 md:gap-5 lg:gap-11`}>
              <li>
                <Link
                  onClick={(e) => handleDropdownOpen("product")}
                  className={`font-semibold md:font-bold text-2xl md:text-sm ${
                    openTab === "product"
                      ? "text-yellow"
                      : "text-yellow md:text-white"
                  } hover:text-yellow cursor-pointer gap-2.5 inline-flex w-full md:w-auto`}
                >
                  Product
                  <img className="ml-auto w-4" src="/img/arrow-down.svg" />
                </Link>
                {openTab === "product" && (
                  <ul className="relative md:absolute mt-5 left-0 right-0 m-auto md:bg-white text-black md:p-8 md:pl-5 rounded-xxl shadow-lg max-w-[1290px] w-full">
                    <li className="grid grid-col-1 md:grid-cols-3 md:gap-8">
                      <ul>
                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/roket.svg" />
                            </div>
                            <span className="relative flex-1">
                              1-click multi-channel campaign
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/email1.svg" />
                            </div>
                            <span className="relative flex-1">
                              Email-only campaign
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/linkedin-blue.svg" />
                            </div>
                            <span className="relative flex-1">
                              LinkedIn-only campaign
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/phone.svg" />
                            </div>
                            <span className="relative flex-1">
                              Phone calls campaign
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/IoListSharp.svg" />
                            </div>
                            <span className="relative flex-1">
                              Auto list building
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/MdOutlineFormatListNumberedRtl.svg" />
                            </div>
                            <span className="relative flex-1">
                              Auto sequencing
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%]  md:block hidden"></div>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/IoCheckmarkDoneCircle.svg" />
                            </div>
                            <span className="relative flex-1">
                              Automatic 15 point message check
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/MdBubbleChart.svg" />
                            </div>
                            <span className="relative flex-1">
                              Psychology based messages
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/MdStars.svg" />
                            </div>
                            <span className="relative flex-1">
                              Premium Inbox rotation
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/IoSunnySharp.svg" />
                            </div>
                            <span className="relative flex-1">
                              Premium Inbox warmup
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/MdVideocam.svg" />
                            </div>
                            <span className="relative flex-1">
                              Personalized Video, GIF and landing pages
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/HiUserGroup.svg" />
                            </div>
                            <span className="relative flex-1">
                              A/B test Sender persona
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] md:block hidden"></div>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <div className="bg-[#000100] rounded-xxl py-6 px-[30px] overflow-hidden relative hidden md:block">
                        <div className="relative z-[2]">
                          <h3 className="font-semibold text-white font-inter text-[28px] leading-[34px] max-w-60 mb-5">
                            Find & Close Your Ideal Clients
                          </h3>
                          <p className="text-white text-sm mb-6">
                            Instantly turns leads into clients with Automated
                            Outreach, Deliverability Network, Lead Database &
                            CRM
                          </p>

                          <button
                            type="button"
                            className="font-inter cursor-pointer text-sm text-black font-semibold py-2 px-4 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow"
                          >
                            Start for Free
                          </button>
                        </div>

                        <div className="linerGradiant-Cicle blur-[80px] z-1"></div>

                        <img
                          src="/img/aero.png"
                          className="absolute bottom-0 right-0 -z-1"
                        />
                      </div>
                    </li>
                  </ul>
                )}
              </li>
             <li className="h-px bg-[#D9D9D9] opacity-20 w-full block md:hidden"></li>
              <li>
                <Link className="font-semibold md:font-bold md:text-sm text-2xl text-yellow md:text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex">
                  Pricing{" "}
                </Link>
              </li>
             <li className="h-px bg-[#D9D9D9] opacity-20 w-full block md:hidden"></li>


              <li>
                <Link
                  onClick={(e) => handleDropdownOpen("marketing")}
                  className={`font-semibold md:font-bold text-2xl md:text-sm ${
                    openTab === "marketing"
                      ? "text-yellow"
                      : "text-yellow md:text-white"
                  } hover:text-yellow cursor-pointer gap-2.5 inline-flex w-full md:w-auto`}
                >
                  For Marketing teams
                  <img className="ml-auto  w-4" src="/img/arrow-down.svg" />
                </Link>
                {openTab === "marketing" && (
                  <ul className="relative md:absolute mt-5 left-0 right-0 m-auto md:bg-white text-black md:p-8 md:pl-5 rounded-xxl shadow-lg max-w-[1290px] w-full">
                    <li className="grid grid-col-1 md:grid-cols-3 md:gap-8">
                      <ul>
                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/HiUserCircle.svg" />
                            </div>
                            <span className="relative flex-1">
                              ABM campaign
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/HiSpeakerphone.svg" />
                            </div>
                            <span className="relative flex-1">
                              Events follow up
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/HiNewspaper.svg" />
                            </div>
                            <span className="relative flex-1">
                              Newsletter
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link className="md:px-5 py-2.5 md:py-5 pr-0 flex gap-x-5 text-white md:text-zblack text-base font-semibold cursor-pointer group relative hover:text-[#5d5d5d]">
                            <div className="min-w-6 h-6 flex items-center justify-center">
                              <img src="/img/IoInformationCircleSharp.svg" />
                            </div>
                            <span className="relative flex-1">
                              Product launch outreach
                              <div className="absolute bg-[#D9D9D9] w-full h-px -bottom-5 opacity-[56%] hidden md:block"></div>
                            </span>
                          </Link>
                        </li>
                      </ul>

                      <div className="bg-[#000100] rounded-xxl py-6 px-[30px] overflow-hidden relative md:block hidden">
                        <div className="relative z-[2]">
                          <h3 className="font-semibold text-white font-inter text-[28px] leading-[34px] max-w-60 mb-5">
                            Find & Close Your Ideal Clients
                          </h3>

                          <button
                            type="button"
                            className="font-inter cursor-pointer text-sm text-black font-semibold py-2 px-4 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow"
                          >
                            Start for Free
                          </button>
                        </div>

                        <div className="linerGradiant-Cicle blur-[80px] z-1"></div>

                        <img
                          src="/img/aero.png"
                          className="absolute -bottom-10 right-0 -z-1 max-w-[200px]"
                        />
                      </div>
                    </li>
                  </ul>
                )}
              </li>
              <li className="h-px bg-[#D9D9D9] opacity-20 w-full block md:hidden"></li>

              <li>
                <Link
                  href="/blog"
                  className="font-semibold md:font-bold md:text-sm text-2xl text-yellow md:text-white hover:text-yellow cursor-pointer gap-2.5 inline-flex"
                >
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="font-inter cursor-pointer text-xs md:text-sm text-black font-semibold py-1.5 px-2.5 md:py-2 md:px-4 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow"
            >
              Start for Free
            </button>

            <button
              onClick={e => handleClick(flag ? false : true)}
              type="button"
              className={` ${flag ? 'abc': ''} w-[30px] h-[30px] rounded-lg flex items-center flex-col justify-center gap-0.5 cursor-pointer border border-solid border-[#FFFCF4] bg-[#FFFCF4] md:hidden`}
            >
              <span
              className={` ${flag ? 'rotate-45 top-[2px]': ''} w-[13px] h-0.5 bg-[#010201] rounded-lg1 relative`} ></span>
              <span  className={` ${flag ? '-rotate-45 -top-[2px]': ''} w-[13px] h-0.5 bg-[#010201] rounded-lg1 relative`}></span>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
