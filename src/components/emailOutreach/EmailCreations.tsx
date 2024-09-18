import React, { useState } from "react";
import CommonSectionWithEmail from "../home/CommonSectionWithEmail";
import EmailColumn from "./EmailColumn";
import { EmailSequence } from "../../interfaces/EmailSequence";

function EmailCreations() {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const openBox = (num: number) => {
    setCurrentOpen(num === currentOpen ? null : num);
  };

  const emailSequences: EmailSequence[] = [
    {
      emails: [
        {
          id: 1,
          type: "email",
          bgGradient: "zblack",
          content: {
            psychTest: "Fomo",
            humanLike: true,
            personalized: true,
            positivity: 4,
            readingLevel: 2,
            spamWords: 0,
            avatar: "/img/avatar.webp",
            name: "Eric Hirschhorn",
            designation: "CMO-Chief Marketing Officer",
            company: "Privalia",
            subject: "Unlock Data Potential",
            body: [
              "Dear Eric,",
              "I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive.",
              "Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
            ],
            emailType: "Simple Email",
            senderName: "Raja Rao DV",
            senderDesignation: "CEO",
            senderCompany: "Telmai",
          },
        },
        {
          id: 2,
          type: "linkedin",
          bgGradient: "from-[#1B7CDD] to-[#004285]",
          content: {
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
        {
          id: 3,
          type: "call",
          bgGradient: "from-[#FF891C] to-[#BA5900]",
          content: {
            phoneNumber: "+91 1234 265 320",
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
      ],
    },
    {
      emails: [
        {
          id: 4,
          type: "email",
          bgGradient: "zblack",
          content: {
            psychTest: "Fomo",
            humanLike: true,
            personalized: true,
            positivity: 4,
            readingLevel: 2,
            spamWords: 0,
            avatar: "/img/avatar.webp",
            name: "Eric Hirschhorn",
            designation: "CMO-Chief Marketing Officer",
            company: "Privalia",
            subject: "Unlock Data Potential",
            body: [
              "Dear Eric,",
              "I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive.",
              "Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
            ],
            emailType: "Video Email",
            senderName: "Raja Rao DV",
            senderDesignation: "CEO",
            senderCompany: "Telmai",
          },
        },
        {
          id: 5,
          type: "linkedin",
          bgGradient: "from-[#1B7CDD] to-[#004285]",
          content: {
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
        {
          id: 6,
          type: "call",
          bgGradient: "from-[#FF891C] to-[#BA5900]",
          content: {
            phoneNumber: "+91 1234 265 320",
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
      ],
    },
    {
      emails: [
        {
          id: 7,
          type: "email",
          bgGradient: "zblack",
          content: {
            psychTest: "Fomo",
            humanLike: true,
            personalized: true,
            positivity: 4,
            readingLevel: 2,
            spamWords: 0,
            avatar: "/img/avatar.webp",
            name: "Eric Hirschhorn",
            designation: "CMO-Chief Marketing Officer",
            company: "Privalia",
            subject: "Unlock Data Potential",
            body: [
              "Dear Eric,",
              "I'm Raja Rao DV, CEO of Telmai. At BNY Mellon, your leadership in data management is impressive.",
              "Datacurve's Al-driven Logicware Platform offers actionable insights, transforming data into valuable assets and personalized experiences. Trusted by industry leaders, we can help you stay ahead and drive growth.",
            ],
            emailType: "Gif Email",
            senderName: "Raja Rao DV",
            senderDesignation: "CEO",
            senderCompany: "Telmai",
          },
        },
        {
          id: 8,
          type: "linkedin",
          bgGradient: "from-[#1B7CDD] to-[#004285]",
          content: {
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
        {
          id: 9,
          type: "call",
          bgGradient: "from-[#FF891C] to-[#BA5900]",
          content: {
            phoneNumber: "+91 1234 265 320",
            message: [
              "Hi Jay,",
              "I'm Raja Rao DV, CEO at Denodo.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
              "Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.",
            ],
          },
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] mt-12 md:mt-0 px-4 py-0 md:py-[60px] !pb-0  m-auto">
        <CommonSectionWithEmail color="#00F0FF" img="/img/email.webp">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[750px] mb-0 -mt-4 md:-mt-12">
            No wasting time on email creation or{" "}
            <span className="text-[#00C2FF]">sequencing or branching</span>
          </h2>
          <p className="text-base md:text-lg text-white  m-auto mt-5 mb-0 max-w-[710px]">
            Our AI will create multiple personalized emails, it'll also decide
            on sequencing, if-then-do-this branching
          </p>
        </CommonSectionWithEmail>

        <div className="flex overflow-auto md:overflow-hidden md:grid grid-col-1 md:grid-cols-3 gap-x-5  mt-14 md:mt-16 items-start ">
          {emailSequences.map((sequence, index) => (
            <EmailColumn
              key={index}
              sequence={sequence}
              currentOpen={currentOpen}
              openBox={openBox}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailCreations;
