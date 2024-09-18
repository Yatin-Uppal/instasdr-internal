import React from "react";
import FeatureList from "../FeatureList";
import CommonSectionWithEmail from "../../home/CommonSectionWithEmail";
import EmailCampaignCard from "./EmailCampaignCard";
import { EmailCampaignCard as EmailCampaignCardInterface } from "../../../interfaces/EmailCampaign";

function EmailCampaigns() {
  const features: string[] = [
    "AI-generated personalized GIFs",
    "Automated GIF creation and optimization",
    "Seamless integration with email campaigns",
    "A/B testing for maximum impact",
  ];

  const campaignCards: EmailCampaignCardInterface[] = [
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "CMO-Chief Marketing Officer",
      company: "Privalia",
      subject: "Unlock Data Potential",
      body: [
        "Dear Eric,",
        "As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.",
        "Are you interested in exploring how we can assist Privalia?",
      ],
      image: "/img/pic4.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "CMO-Chief Marketing Officer",
      company: "Privalia",
      subject: "Unlock Data Potential",
      body: [
        "Dear Eric,",
        "As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.",
        "Are you interested in exploring how we can assist Privalia?",
      ],
      image: "/img/pic6.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "CMO-Chief Marketing Officer",
      company: "Privalia",
      subject: "Unlock Data Potential",
      body: [
        "Dear Eric,",
        "As the CEO of Datacurve, I admire the innovative marketing strategies you've implemented at Privalia.",
        "Are you interested in exploring how we can assist Privalia?",
      ],
      image: "/img/pic5.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] px-4 py-0 md:py-[60px] !pb-0  m-auto">
        <CommonSectionWithEmail color="#ffd23d" img="/img/email.webp">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
            Autonomous GIF <span className="text-yellow">Email Campaigns</span>
          </h2>
          <p className="text-base md:text-lg text-white  m-auto mt-5 mb-0 max-w-[710px]">
            Leverage the power of personalized video messages to significantly
            boost engagement and conversion rates.
          </p>

          <FeatureList
            maxWidth="max-w-[860px]"
            color="#ffd23d"
            features={features}
          />
        </CommonSectionWithEmail>
      </div>

      <div className=" max-w-[1064px] w-full m-auto px-4 mt-[60px]">
        <div className="md:bg-[#05050A] md:px-7 md:py-9 md:rounded-xxl relative overflow-hidden shadow-lightyellowDark">
          <div className="h-36 w-[500px] bg-yellow opacity-15 rounded-full -top-14 left-0 absolute blur-[40px]"></div>
          <div className="md:overflow-hidden overflow-auto flex  md:grid md:grid-cols-3 gap-5">
            {campaignCards.map((card, index) => (
              <EmailCampaignCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailCampaigns;
