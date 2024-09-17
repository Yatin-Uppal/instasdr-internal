import Link from "@docusaurus/Link";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
type openMenus = "product" | "company" | "marketing";
const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // State to handle the toggle of the Product section
  const [openedMenu, setOpenedMenu] = useState<openMenus>(null);

  const toggleMenu = (menu: openMenus) => {
    setOpenedMenu(menu === openedMenu ? null : menu); // Toggle the visibility
  };

  return (
    <React.Fragment>
      <div className="bg-[#000100] w-full">
        <div className="max-w-container px-4 pb-8 md:py-[60px] m-auto">
    
            <>
              <p className="text-lg md:text-2xl tex-white mb-2">
                If you have questions email us at
              </p>
              <Link
                className="text-[28px] md:text-[32px] font-semibold !no-underline !text-[#FF891C]"
                href="mailto:hello@InstaSDR.ai"
              >
                hello@InstaSDR.ai
              </Link>
              <div className="h-px w-full my-7 md:my-14 bg-[#D9D9D9] opacity-30"></div>
            </>

          <div className="flex flex-wrap gap-y-5 md:gap-y-6">
            <div className="w-full md:w-4/6">
              <span
                className="text-sm font-bold text-yellow md:mb-6 flex w-full cursor-pointer"
                onClick={(e) => toggleMenu("product")} // Trigger slide on click
              >
                Product{" "}
                <img
                  className={`w-4 ml-auto md:hidden block ${
                    openedMenu === "product" ? "rotate-180" : ""
                  }`}
                  src="/img/arrow-down.svg"
                />
              </span>

              {/* Slide down section */}
              <div
                className={`grid grid-cols-1 gap-3 md:grid-cols-3 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openedMenu === "product"
                    ? "mt-7  max-h-full"
                    : "max-h-0 md:max-h-full"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    1-click multi-channel campaign
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Email-only campaign
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    LinkedIn-only campaign
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Phone calls campaign
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Auto list building
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Auto sequencing
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Automatic 15 point message check
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Psychology based messages
                  </Link>
                </div>

                <div className="flex flex-col gap-3">
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Premium Inbox rotation
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Premium Inbox warmup
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Personalized Video, GIF and landing pages
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    A/B test Sender persona
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-[#D9D9D926] md:hidden block"></div>
            <div className="w-full md:w-1/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
                <div>
                  <span
                    className="text-sm font-bold text-yellow md:mb-6 flex w-full"
                    onClick={(e) => toggleMenu("marketing")}
                  >
                    For Marketing teams{" "}
                    <img
                  className={`w-4 ml-auto md:hidden block ${
                    openedMenu === "marketing" ? "rotate-180" : ""
                  }`}
                  src="/img/arrow-down.svg"
                />
                  </span>
                  <div
                    className={`flex flex-col gap-3 overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openedMenu === "marketing"
                        ? "mt-7 max-h-full"
                        : "max-h-0 md:max-h-full"
                    }`}
                  >
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      ABM campaign
                    </Link>
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      Events follow up
                    </Link>
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      Newsletter
                    </Link>
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      Product launch outreach
                    </Link>
                  </div>
                </div>
                <div className="h-px w-full bg-[#D9D9D926] md:hidden block"></div>

                <div>
                  <span
                    className="text-sm font-bold text-yellow md:mb-6 w-full flex"
                    onClick={(e) => toggleMenu("company")}
                  >
                    Company{" "}
                    <img
                  className={`w-4 ml-auto md:hidden block ${
                    openedMenu === "company" ? "rotate-180" : ""
                  }`}
                  src="/img/arrow-down.svg"
                />
                  </span>
                  <div
                    className={`flex flex-col gap-3 overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openedMenu === "company"
                        ? "mt-7 max-h-full"
                        : "max-h-0 md:max-h-full"
                    }`}
                  >
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      Terms & Conditions
                    </Link>
                    <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 md:mt-14 text-white text-sm opacity-50">
            © InstaSDR.ai
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
