import React from "react";
import BoxItem from "./BoxItem";
import { FeatureBoxProps } from "@site/src/interfaces/FeatureBox";

function ThreeBox() {
  const boxItems: FeatureBoxProps[] = [
    {
      icon: "setting",
      title: "Convert more customers",
      description:
        "Increase conversion with built-in optimisations, access to 100+ payment methods, and one-click checkout. Unify online and in-person payments to provide a seamless customer experience.",
      colorCode: "#FF6B00", 
    },
    {
      icon: "global",
      title: "Global reach, local experience",
      description:
        "Expand to new markets faster by launching payment methods and presenting in local currencies. Sell cross-border to 195+ countries and lower the costs of multi-currency management.",
      colorCode: "#15a43a", 
    },
    {
      icon: "lessFraud",
      title: "Less fraud, more revenue",
      description:
        "Automatically decrease fraud and improve authorisation rates with Stripe's machine learning–powered optimisations, which are trained on billions of data points.",
      colorCode: "#08a6fb", 
    },
  ];
  return (
    <React.Fragment>
      <div className="w-full max-w-[1078px] px-4 m-auto">
        <div className="flex overflow-auto md:overflow-hidden md:grid md:grid-cols-3 gap-5 md:p-4">
          {boxItems.map((item, index) => (
            <BoxItem key={index} {...item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ThreeBox;
