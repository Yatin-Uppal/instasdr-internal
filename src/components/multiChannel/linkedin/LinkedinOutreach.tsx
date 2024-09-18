import React from "react";
import FeatureList from "../FeatureList";
import CommonSectionWithEmail from "../../home/CommonSectionWithEmail";
import LinkedinMessageCard from "./LinkedinMessageCard";
import { LinkedinMessage } from "../../../interfaces/LinkedinMessage";

function LinkedinOutreach() {
  const features: string[] = [
    "AI-driven prospect identification",
    "Automated connection requests and follow-ups",
    "Personalized messaging at scale",
    "Performance analytics and optimization",
  ];

  const linkedinMessages: LinkedinMessage[] = [
    {
      title: "Send connection request",
      content: `Dear Eric, 

As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.

Our Al-driven solutions on the Logicware Platform offer actionable insights that can transform your data into valuable assets, creating personalized experiences for your customers.

Trusted by industry leaders, Datacurve helps companies like yours stay ahead and drive growth through innovation. Are you interested in exploring how we can assist Privalia?`,
      sender: {
        name: "Raja Rao DV",
        title: "CEO",
        company: "Telmai",
      },
    },
    {
      title: "Follow-up message",
      content: `Dear Eric, 

As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.

Our Al-driven solutions on the Logicware Platform offer actionable insights that can transform your data into valuable assets, creating personalized experiences for your customers.

Trusted by industry leaders, Datacurve helps companies like yours stay ahead and drive growth through innovation. Are you interested in exploring how we can assist Privalia?`,
      sender: {
        name: "Raja Rao DV",
        title: "CEO",
        company: "Telmai",
      },
    },
    {
      title: "Meeting request",
      content: `Dear Eric, 

As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.

Our Al-driven solutions on the Logicware Platform offer actionable insights that can transform your data into valuable assets, creating personalized experiences for your customers.

Trusted by industry leaders, Datacurve helps companies like yours stay ahead and drive growth through innovation. Are you interested in exploring how we can assist Privalia?`,
      sender: {
        name: "Raja Rao DV",
        title: "CEO",
        company: "Telmai",
      },
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] px-4 py-0 mt-14 md:mt-0 md:py-[60px] !pb-0  m-auto">
        <CommonSectionWithEmail color="#0077B5" img="/img/linkedinGlass.webp">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 ">
            Autonomous <span className="text-[#0077B5]">LinkedIn Outreach</span>
          </h2>
          <p className="text-base md:text-lg text-white  m-auto mt-5 mb-0 max-w-[710px]">
            Harness the power of AI to automate and optimize your LinkedIn
            prospecting and networking.
          </p>
          <FeatureList
            maxWidth="max-w-[920]"
            color="#0077B5"
            features={features}
          />
        </CommonSectionWithEmail>
      </div>

      <div className="max-w-[1064px] w-full m-auto px-4 mt-[60px]">
        <div className="bg-[#05050A] md:px-7 md:py-9 rounded-xxl relative overflow-hidden shadow-lightblue">
          <div className="h-36 w-[500px] bg-[#0077B5] opacity-15 rounded-full -top-14 left-0 absolute blur-[40px] md:block hidden"></div>
          <div className="overflow-auto md:overflow-hidden flex md:grid grid-cols-3 gap-5">
            {linkedinMessages.map((message, index) => (
              <LinkedinMessageCard key={index} {...message} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LinkedinOutreach;
