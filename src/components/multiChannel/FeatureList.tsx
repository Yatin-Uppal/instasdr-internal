import React from "react";

interface FeatureListProps {
  color: string;
  features: string[];
  maxWidth?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ color, features, maxWidth }) => {
  return (
    <div className={`grid grid-col-1 md:grid-cols-2 gap-5 md:gap-7 ${maxWidth} m-auto mt-12`}>
      {features.map((feature, index) => (
        <span key={index} className="flex gap-2.5 items-center text-left text-base md:text-lg font-semibold" style={{ color }}>
          <div className="w-5 h-5 min-w-5 flex items-center justify-center rounded-full" style={{ backgroundColor: color }}>
            <img src="/img/check-bold.svg" alt="check" />
          </div>
          {feature}
        </span>
      ))}
    </div>
  );
};

export default FeatureList;