import Link from "@docusaurus/Link";
import React from "react";

function FeatureList() {
  return (
    <React.Fragment>
      <div className="w-full max-w-small px-4 py-[60px] m-auto">
        <div className="flex overflow-auto md:overflow-hidden  md:grid  md:grid-cols-3 gap-[25px]">
          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-orange rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex hidden gap-2.5 items-start top-3 absolute right-4">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/IoRocketSharp.svg" />
              </div>
              <h4 className="text-orange text-base font-bold text-center m-0">
                1-click <br></br> Multi-Channel campaign
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use our ICP leads from our 750M contacts
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-11">
                  Cold outbound, Email marketing, Demand gen instead of Ads
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-orange opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl  transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>

          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-blue rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex gap-2.5 items-start top-3 absolute right-4 hidden">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/userMinus.svg" />
              </div>
              <h4 className="text-blue text-base font-bold text-center m-0">
                Use InstaSDR leads <br></br>with exceptions
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use our ICP leads from our 750M contacts but exclude or include
                some companies and users
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-11">
                  ABM (Target Fortune 500 companies), Exclude existing customer
                  companies, Exclude existing leads
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-blue opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>

          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-lightGreen rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex gap-2.5 items-start top-3 absolute right-4 hidden">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/MdEmail2.svg" />
              </div>
              <h4 className="text-lightGreen text-base font-bold text-center m-0">
                Use your leads
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use your own existing leads for follow ups
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-11">
                  Events followup, Webinar followup, Sign Lifecycle marketing
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-lightGreen opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>

          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-purple rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex gap-2.5 items-start top-3 absolute right-4 hidden">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/GoBookmark.svg" />
              </div>
              <h4 className="text-purple text-base font-bold text-center m-0">
                Use InstaSDR <br></br> ICP lead
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use our ICP leads from our 750M contacts
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-11">
                  Cold outbound, Email marketing, Demand gen instead of Ads
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-purple opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>

          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-green rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex gap-2.5 items-start top-3 absolute right-4 hidden">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/GoInbox.svg" />
              </div>
              <h4 className="text-green text-base font-bold text-center m-0">
                Use InstaSDR leads <br></br>with exceptions
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use our ICP leads from our 750M contacts but exclude or include
                some companies and users
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-11">
                  ABM (Target Fortune 500 companies), Exclude existing customer
                  companies, Exclude existing leads
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-green opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>

          <div className="flex h-full rounded-xxl border border-solid border-[rgba(255,255,255,0.15)] p-[14px] relative overflow-hidden group min-w-[280px] max-w-[280px]">
            <div className="h-[18px] min-w-[18px] w-[18px] bg-yellowDark rounded-full absolute top-[14px] left-[14px]">
              <img
                src="/img/check.svg"
                className="absolute -right-[1px] top-[1px]"
              />
            </div>

            <div className="group-hover:flex gap-2.5 items-start top-3 absolute right-4 hidden">
              <Link href="#">
                <img src="/img/linkedin.svg" />
              </Link>
              <Link href="#">
                <img src="/img/CkPhone.svg" />
              </Link>
              <Link href="#">
                <img src="/img/MdEmail1.svg" />
              </Link>
            </div>
            <div className="flex flex-col gap-3 w-full items-center text-center">
              <div className="w-6 h-6 inline-flex justify-center items-center mt-2">
                <img src="/img/MdFlag.svg" />
              </div>
              <h4 className="text-yellowDark text-base font-bold text-center m-0">
                Use your leads
              </h4>
              <p className="text-sm mb-0 min-h-[54px]">
                Use your own existing leads for follow ups
              </p>

              <div className="text-left mt-auto">
                <span className="text-xs mb-2 inline-block w-full">
                  Use cases:{" "}
                </span>
                <p className="text-xs text-white opacity-60  mb-0  min-h-12">
                  Events followup, Webinar followup, Sign Lifecycle marketing
                </p>
              </div>
            </div>
            <div className="w-full h-full rounded-full bg-yellowDark opacity-20 absolute -bottom-2/4 left-0 right-0 blur-3xl transition-all group-hover:-bottom-1/4 z-[-1]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5 mt-16 md:mt-[88px] ">
          <div className="flex items-center gap-2 text-xs font-semibold">  <img height="20" src="/img/checkCircleyellow.svg" /> Free unlimited Email warmup</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> Free unlimited mailboxes</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> Free unlimited Enrichment</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> 750 Million leads to target</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> Free unlimited 1-click campaigns</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> Automatic sequencing</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img  height="20" src="/img/checkCircleyellow.svg" /> Human-like email quality</div>
          <div className="flex items-center gap-2 text-xs font-semibold">  <img height="20"  src="/img/checkCircleyellow.svg" /> Machine-like email quantity</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeatureList;
