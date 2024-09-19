import React from "react";
import FeatureList from "../FeatureList";
import CommonSectionWithEmail from "../../home/CommonSectionWithEmail";
import VideoEmailCard from "./VideoEmailCard";
import { VideoEmailCard as VideoEmailCardInterface } from "../../../interfaces/VideoEmail";

function VideoEmail() {
  const features: string[] = [
    "AI-generated personalized video scripts",
    "Automated video creation and editing",
    "Seamless integration with email campaigns",
    "Performance tracking and optimization",
  ];

  const videoEmailCards: VideoEmailCardInterface[] = [
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "CMO-Chief Marketing Officer",
      company: "Privalia",
      subject: "Unlock Data Potential",
      body: "Dear Eric, I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive. Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
      videoThumbnail: "/img/video-bg.webp",
      senderName: "Raja Rao DV",
      senderPosition: "CEO",
      senderCompany: "Telmai",
    },
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "Chief Data Officer",
      company: "BNY",
      subject: "Unlock Data Potential",
      body: "Dear Eric, I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive. Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
      videoThumbnail: "/img/video-bg1.webp",
      senderName: "Raja Rao DV",
      senderPosition: "CEO",
      senderCompany: "Telmai",
    },
    {
      avatar: "/img/avatar.webp",
      name: "Eric Hirschhorn",
      position: "Head of Customer Experience",
      company: "Yampi",
      subject: "Unlock Data Potential",
      body: "Dear Eric, I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive. Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
      videoThumbnail: "/img/video-bg2.webp",
      senderName: "Raja Rao DV",
      senderPosition: "CEO",
      senderCompany: "Telmai",
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] pt-20 px-4 py-0 md:py-[60px] md:!pb-0  m-auto">
        <CommonSectionWithEmail color="#0DF578" img="/img/videoMail.webp">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0">
            AI-Powered <span className="text-[#0DF578]">Video Email</span>
          </h2>
          <p className="text-base md:text-lg text-white  m-auto mt-2.5 md:mt-5 mb-0 max-w-[710px]">
            Leverage the power of personalized video messages to significantly
            boost engagement and conversion rates.
          </p>
          <FeatureList
            maxWidth="max-w-[860px]"
            color="#0DF578"
            features={features}
          />
        </CommonSectionWithEmail>
      </div>

      <div className=" max-w-[1064px] w-full m-auto px-4 mt-[60px]">
        <div className="bg-[#05050A] p-3 py-5 md:px-7 md:py-9 rounded-xxl relative overflow-hidden shadow-lightgreenDark">
          <div className="h-36 w-[500px] bg-[#0DF578] opacity-15 rounded-full -top-14 left-0 absolute blur-[40px]"></div>
          <h3 className="text-[30px] font-semibold text-white mb-2.5 text-center font-inter">
            Video for <span className="text-[#0DF578]">Bob</span>
          </h3>
          <p className="text-white text-lg m-auto text-center mb-5 max-w-[668px]">
            Hey Bob! I made quick video that shows how InstaSDR can help you.
            Would love to get our feedback.
          </p>

          <div className="md:overflow-hidden overflow-auto flex md:grid md:grid-cols-3 gap-5">
            {videoEmailCards.map((card, index) => (
              <VideoEmailCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoEmail;
