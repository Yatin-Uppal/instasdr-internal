import Link from "@docusaurus/Link";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full max-w-container px-4 py-[60px] m-auto">
        <p className="text-2xl tex-white mb-2 ">
          If you have questions email us at
        </p>
        <Link
          className="text-[32px] font-semibold !no-underline !text-[#FF891C]"
          href=""
        >
          hello@InstaSDR.ai
        </Link>
        <div className="h-px w-full my-14 bg-[#D9D9D9] opacity-30"></div>

        <div className="flex flex-wrap">
          <div className="w-4/6">
            <span className="text-sm font-bold text-yellow mb-6 inline-block w-full">
              Product
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
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
          <div className="w-1/3">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div>
                <span className="text-sm font-bold text-yellow mb-6 inline-block w-full">
                  For Marketing teams
                </span>
                <div className="flex flex-col gap-3">
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    ABM campaign
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Events follow up
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Newsletter{" "}
                  </Link>
                  <Link className="text-white text-xs hover:text-yellow cursor-pointer">
                    Product launch outreach
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-sm font-bold text-yellow mb-6 inline-block w-full">
                  Company
                </span>
                <div className="flex flex-col gap-3">
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

        <div className="mt-14 text-white text-sm opacity-50">© InstaSDR.ai</div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
