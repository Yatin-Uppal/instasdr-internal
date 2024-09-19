import React from "react";
import { FeatureBoxProps } from "@site/src/interfaces/FeatureBox";

const BoxItem: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  colorCode,
}) => (
  <div
    className={`rounded-xxl py-5 px-6 md:py-[30px] lg:px-9 bg-zblack min-w-[280px] max-w-[280px] md:min-w-[inherit] md:max-w-full`}
    style={{ boxShadow: `0 0 20px ${colorCode}33` }}
  >
    <div className="w-6 h-6 flex justify-center items-center mb-4">
      <img src={`/img/${icon}.webp`} alt={title} />
    </div>
    <h4 className="text-lg font-bold mb-3" style={{ color: colorCode }}>{title}</h4>
    <p className="m-0 text-base text-white opacity-90">{description}</p>
  </div>
);

export default BoxItem;
