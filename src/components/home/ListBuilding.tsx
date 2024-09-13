import Link from "@docusaurus/Link";
import React from "react";

function ListBuilding() {
  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] px-4 py-0 md:py-[60px] m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-purple blur-[150px] rounded-full m-auto"></div>
          </div>
          <img className="md:max-w-[inherit] max-w-44" src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
              No wasting time on “
              <span className="text-purple">list building</span>”, figuring out
              whom to email
            </h2>
            <p className="text-base md:text-lg text-white mt-5 mb-0">
              Let the Al do all the work of finding the right people
            </p>
            <strong className="text-base md:text-lg text-white mt-2 inline-block w-full">
              Recepient Persona
            </strong>
          </div>
        </div>

        <div className="flex  md:grid md:grid-cols-3 gap-3 md:gap-14 mt-6 md:mt-28 md:overflow-hidden overflow-auto">
          <div className="border border-solid border-[#484848] rounded-xxl p-5 relative max-w-[280px] min-w-[280px] md:w-auto">
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1.5 mb-4">
              <div className="w-24 h-24 rounded-full">
                <img
                  src="/img/mark.png"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-inter text-[22px] leading-[30px] font-medium m-0 mt-0.5">
                Mark
              </h4>
              <h6 className="font-inter text-base m-0 font-medium">
                Senior Usability Designer
              </h6>
              <span className="text-base text-white opacity-40">22 yo</span>
            </div>
            <p className="text-base text-white opacity-50 mb-0 line-clamp-3 font-normal">
              Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et
              ducimus ut assumenda id.
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-2.5 mt-5">
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Product
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Audience
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Pains
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Customer stories
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Trust
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Objections
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                FAQ
              </Link>
            </div>
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -bottom-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
          </div>

          <div className="border border-solid border-[#484848] rounded-xxl p-5 relative max-w-[280px] min-w-[280px] md:w-auto">
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1.5 mb-4">
              <div className="w-24 h-24 rounded-full">
                <img
                  src="/img/justin.png"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-inter text-[22px] leading-[30px] font-medium m-0 mt-0.5">
                Justin
              </h4>
              <h6 className="font-inter text-base m-0 font-medium">
                Dynamic Web Consultant
              </h6>
              <span className="text-base text-white opacity-40">31 yo</span>
            </div>
            <p className="text-base text-white opacity-50 mb-0 line-clamp-3 font-normal">
              Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et
              ducimus ut assumenda id.
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-2.5 mt-5">
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Product
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Audience
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Pains
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Customer stories
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Trust
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Objections
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                FAQ
              </Link>
            </div>
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -bottom-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
          </div>

          <div className="border border-solid border-[#484848] rounded-xxl p-5 relative max-w-[280px] min-w-[280px] md:w-auto">
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1.5 mb-4">
              <div className="w-24 h-24 rounded-full">
                <img
                  src="/img/maggi.png"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-inter text-[22px] leading-[30px] font-medium m-0 mt-0.5">
                Maggie
              </h4>
              <h6 className="font-inter text-base m-0 font-medium">
                Central Branding Specialist
              </h6>
              <span className="text-base text-white opacity-40">22 yo</span>
            </div>
            <p className="text-base text-white opacity-50 mb-0 line-clamp-3 font-normal">
              Commodi repellat dolorem ut. Et aperiam adipisci laudantium qui et
              ducimus ut assumenda id.
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-2.5 mt-5">
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Product
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Audience
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Pains
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Customer stories
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Trust
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                Objections
              </Link>
              <Link
                href="#"
                className="rounded-lg1 bg-[#448C741A]  px-2 py-1.5 !text-purple text-sm !no-underline hover:bg-[#448c742c] "
              >
                FAQ
              </Link>
            </div>
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -bottom-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListBuilding;
