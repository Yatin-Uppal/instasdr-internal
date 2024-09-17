import React from "react";

function ThreeBox() {
  return (
    <React.Fragment>
      <div className="w-full max-w-[1046px] px-4   m-auto">
        <div className="flex overflow-auto md:overflow-hidden md:grid md:grid-cols-3 gap-5">
          <div className="rounded-xxl py-5 px-6 md:py-[30px] md:px-9 bg-zblack shadow-lightorange min-w-[280px] max-w-[280px] md:max-w-full">
            <div className="w-6 h-6 flex justify-center items-center mb-4">
              <img src="/img/customer.svg" />
            </div>
            <h4 className="text-lg text-orange font-bold  mb-3">
              Convert more customers
            </h4>
            <p className="m-0 text-base text-white opacity-90">
              Increase conversion with built-in optimisations, access to 100+
              payment methods, and one-click checkout. Unify online and
              in-person payments to provide a seamless customer experience.
            </p>
          </div>

          <div className="rounded-xxl px-6 md:py-[30px] md:px-9 bg-zblack shadow-lightgreen min-w-[280px] max-w-[280px] md:max-w-full">
            <div className="w-6 h-6 flex justify-center items-center mb-4">
              <img src="/img/global.svg" />
            </div>
            <h4 className="text-lg text-green font-bold  mb-3">
              Global reach, local experience
            </h4>
            <p className="m-0 text-base text-white opacity-90">
              Expand to new markets faster by launching payment methods and
              presenting in local currencies. Sell cross-border to 195+
              countries and lower the costs of multi-currency management.
            </p>
          </div>

          <div className="rounded-xxl px-6 md:py-[30px] md:px-9 bg-zblack shadow-lightblue min-w-[280px] max-w-[280px] md:max-w-full">
            <div className="w-6 h-6 flex justify-center items-center mb-4">
              <img src="/img/lessFraud.svg" />
            </div>
            <h4 className="text-lg text-blue font-bold  mb-3">
            Less fraud, more revenue
            </h4>
            <p className="m-0 text-base text-white opacity-90">
            Automatically decrease fraud and improve authorisation rates with Stripe’s machine learning–powered optimisations, which are trained on billions of data points.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ThreeBox;
