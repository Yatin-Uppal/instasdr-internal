import React from "react";

function Separator() {
  return (
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
  );
}

export default Separator;