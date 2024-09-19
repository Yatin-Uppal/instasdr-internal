import React from "react";
import FeatureList from "./FeatureList";
import CommonSectionWithEmail from "../home/CommonSectionWithEmail";
import EmailCardList from "./EmailCardList";
import { EmailFeature, EmailCard } from "../../interfaces/EmailOutreach";

function EmailOutreach() {
  const emailFeatures: string[] = [
    "Intelligent list building and segmentation",
    "Dynamic sender and buyer personas",
    "Automated inbox rotation and warmup",
    "AI-generated personalized content",
  ];

  const emailCards: EmailCard[] = [
    {
      number: 1,
      title: "itaque sed voluptatem",
      recipient: "To . show real email but hide their domain",
      content: "Tempore aut quia adipisci corrupti ut nobis. Sit autem voluptatem nostrum in dolorem nostrum. Id iste ut quae illum ullam. Inventore aperiam numquam neque fuga libero expedita. Et sint non consectetur nihil unde autem fugiat quas deleniti. Vero natus ducimus ut expedita.",
      imageSrc: "/img/dummy.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
    {
      number: 2,
      title: "itaque sed voluptatem",
      recipient: "To . show real email but hide their domain",
      content: "Tempore aut quia adipisci corrupti ut nobis. Sit autem voluptatem nostrum in dolorem nostrum. Id iste ut quae illum ullam. Inventore aperiam numquam neque fuga libero expedita. Et sint non consectetur nihil unde autem fugiat quas deleniti. Vero natus ducimus ut expedita.",
      imageSrc: "/img/pic2.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
    {
      number: 3,
      title: "itaque sed voluptatem",
      recipient: "To . show real email but hide their domain",
      content: "Tempore aut quia adipisci corrupti ut nobis. Sit autem voluptatem nostrum in dolorem nostrum. Id iste ut quae illum ullam. Inventore aperiam numquam neque fuga libero expedita. Et sint non consectetur nihil unde autem fugiat quas deleniti. Vero natus ducimus ut expedita.",
      imageSrc: "/img/pic3.webp",
      sender: {
        name: "Raja Rao DV",
        position: "CEO",
        company: "Telmai",
      },
    },
  ];

  const cardFeatures: EmailFeature[] = [
    { icon: "/img/check-bold.svg", text: "Psych test: Fomo" },
    { icon: "/img/check-bold.svg", text: "Human-like" },
    { icon: "/img/check-bold.svg", text: "Personalized" },
    { icon: "/img/check-bold.svg", text: "Positivity: 4/5" },
    { icon: "/img/check-bold.svg", text: "Reading level:2" },
    { icon: "/img/check-bold.svg", text: "Spam words:0" },
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] mt-12 md:mt-0 px-4 py-0 md:py-[60px] !pb-0  m-auto">
        <CommonSectionWithEmail color="#00F0FF" img="/img/email.webp">
          <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 -mt-4 md:-mt-12">
            Autonomous <span className="text-[#00F0FF]">Email Outreach</span>
          </h2>
          <p className="text-base md:text-lg text-white  m-auto mt-5 mb-0 max-w-[710px]">
            Our AI-powered email automation system handles every aspect of your
            email outreach, from list building to inbox management.
          </p>

          <FeatureList maxWidth="max-w-[808px]" color="#00C2FF" features={emailFeatures} />
        </CommonSectionWithEmail>
      </div>

      <div className="w-full max-w-[1064px] mt-5 md:mt-0 px-4 py-0 md:py-[60px] m-auto">
        <EmailCardList cards={emailCards} features={cardFeatures} />
      </div>
    </React.Fragment>
  );
}

export default EmailOutreach;
