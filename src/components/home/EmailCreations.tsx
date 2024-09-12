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
      <div className="w-full max-w-container px-4 py-[60px] m-auto">
        <div className="text-center relative">
          <div className="absolute left-0 right-0 text-center top-28 bottom-0 flex items-center justify-center z-0">
            <div className="w-[450px] h-[142px] bg-[#00C2FF] blur-[150px] rounded-full m-auto"></div>
          </div>
          <img src="/img/email.svg" />
          <div className="relative z-1 w-full text-center inline-block">
            <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[750px] mb-0 -mt-12">
              No wasting time on{" "}
              <span className="text-[#00F0FF]">email creation</span> or
              sequencing or branching
            </h2>
            <p className="text-lg text-white mt-5 mb-0">
              Our AI will create multiple personalized emails, it’ll also decide
              on sequencing, if-then-do-this branching
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-9 gap-y-32 mt-32 items-start ">
          <div
            onClick={(e) => openBox(1)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 1 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>

          <div
            onClick={(e) => openBox(2)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>

              <div className="absolute  -bottom-[135px] text-center left-0 right-0">
                <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                  After 3 days
                </span>
                <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
                <img
                  className="m-auto -top-2.5 relative opacity-20"
                  src="/img/arrow-white.svg"
                />
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 2 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>
          </div>

          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 2 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>

          <div
            onClick={(e) => openBox(1)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 1 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 4 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>

          <div
            onClick={(e) => openBox(2)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>

              <div className="absolute  -bottom-[135px] text-center left-0 right-0">
                <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                  After 3 days
                </span>
                <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
                <img
                  className="m-auto -top-2.5 relative opacity-20"
                  src="/img/arrow-white.svg"
                />
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 2 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>
          </div>

          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 2 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>

          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 2 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>


          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

            <div className="absolute  -bottom-[135px] text-center left-0 right-0">
              <span className="bg-[#252525] text-white rounded-xxl px-5 py-1 text-base absolute top-5 m-auto left-0  right-0 max-w-36 z-1">
                After 2 days
              </span>
              <div className="h-[90px] w-px bg-white opacity-20 m-auto"></div>
              <img
                className="m-auto -top-2.5 relative opacity-20"
                src="/img/arrow-white.svg"
              />
            </div>
          </div>


          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

         
          </div>


          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

          </div>


          <div
            onClick={(e) => openBox(3)}
            className="border border-solid border-[#484848] rounded-xxl relative"
          >
            <div className="left-0 h-px absolute right-0 w-full text-center flex justify-center  overflow-hidden -top-px ">
              <div className="h-px w-44 overflow-hidden ">
                <div className="w-[120px] h-[50px] blur-xl bg-[#E6E6D9] m-auto"></div>
              </div>
            </div>
            <div className="px-5 pt-8 pb-6 grid grid-cols-3 gap-y-5 gap-x-3">
              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Psych test: Fomo
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Human-like
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Personalized
                  </span>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Positivity:{" "}
                  </span>
                  <div className="flex gap-px mt-1">
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#00F0FF]"></span>
                    <span className="w-[14px] h-[7px] rounded-[7px] bg-[#C2C2C2]"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Reading level:
                  </span>
                  <div className="text-sm font-bold text-white">2</div>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <img src="/img/checkCircleblue.svg" alt="check" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-white">
                    Spam words
                  </span>
                  <div className="text-sm font-bold text-white">0</div>
                </div>
              </div>
            </div>

            <div
              className={`rounded-t-xl bg-white px-9 py-4 overflow-hidden ${
                currentOpen === 3 ? "h-auto" : "h-44"
              }`}
            >
              <span className="text-[#0094FF] text-base font-medium">
                Email 1
              </span>
              <strong className="text-[#000] text-base font-bold mb-2 w-full inline-block">
                itaque sed voluptatem
              </strong>
              <p className="text-base text-[#000] mb-2.5">
                To . show real email but hide their domain
              </p>
              <p className="text-base text-[#000]">
                Tempore aut quia adipisci corrupti ut nobis. Sit autem
                voluptatem nostrum in dolorem nostrum. Id iste ut quae illum
                ullam. Inventore aperiam numquam neque fuga libero expedita. Et
                sint non consectetur nihil unde autem fugiat quas deleniti. Vero
                natus ducimus ut expedita.
              </p>
              <Link
                href="#"
                className="text-base !text-[#000] bg-[#00F0FF] rounded-full px-5 py-2 font-medium !no-underline"
              >
                View
              </Link>
              <div className="w-full rounded-lg1 overflow-hidden mt-5">
                <img src="/img/dummy.jpg" />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white p-5 pl-9 rounded-b-xl shadow-box relative z-1">
              <label className="text-base text-[#000] opacity-40">
                show signature
              </label>

              <button
                onClick={(e) => {
                  handleClick();
                }}
                className="cursor-pointer w-11 h-11 border-0 rounded-full flex items-center justify-center bg-[rgba(41, 41, 41, 0.10)]"
              >
                <img
                  src="/img/arrow-down-xxl.svg"
                  className={` ${flag ? "rotate-180" : "rotate-0"}`}
                  alt="Arrow"
                />
              </button>
            </div>

          
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailCreations;
