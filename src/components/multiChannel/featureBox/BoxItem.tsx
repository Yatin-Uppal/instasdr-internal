import React from "react";
import { BoxItemProps } from "@site/src/interfaces/FeatureBox";

const BoxItem: React.FC<BoxItemProps> = ({
  icon,
  title,
  description,
  color,
}) => (
  <div
    className={`rounded-xxl py-5 px-6 md:py-[30px] lg:px-9 bg-zblack shadow-light${color} min-w-[280px] max-w-[280px] md:min-w-[inherit] md:max-w-full`}
  >
    <div className="w-6 h-6 flex justify-center items-center mb-4">
      <img src={`/img/${icon}.svg`} alt={title} />
    </div>
    <h4 className={`text-lg text-${color} font-bold mb-3`}>{title}</h4>
    <p className="m-0 text-base text-white opacity-90">{description}</p>
  </div>
);

export default BoxItem;
