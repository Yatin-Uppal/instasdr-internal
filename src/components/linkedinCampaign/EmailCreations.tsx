import React, { useState } from "react";
import CommonSectionWithEmail from "../home/CommonSectionWithEmail";
import EmailColumn from "./EmailColumn";

interface EmailSequence {
  title: string;
  content: string;
}

function EmailCreations() {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const openBox = (num: number) => {
    setCurrentOpen(num === currentOpen ? null : num);
  };

  const emailSequences: EmailSequence[][] = [
    [
      {
        title: "Send connection request",
        content: `Hi Jay, 

I'm Raja Rao DV, CEO at Denodo.

Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.

Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.

Hi Jay, I'm Raja Rao DV, CEO at Denodo. I admire the innovative marketing strategies you've implemented at Privalia.`
      },
      {
        title: "Follow-up message",
        content: `Hi Jay, 

I hope this message finds you well. I wanted to follow up on my previous connection request.

I'm really impressed with your work at Privalia and would love to discuss how Denodo's data virtualization solutions could potentially benefit your operations.

Would you be open to a brief chat about how we might be able to help streamline your data management processes?

Looking forward to your response.

Best regards,
Raja`
      },
      {
        title: "Goodbye message",
        content: `Hi Jay,

I hope this message finds you well. I understand that you might be busy or that our offering may not align with your current needs.

I want to respect your time, so this will be my last message. However, if you ever find yourself interested in exploring data virtualization solutions in the future, please don't hesitate to reach out.

Thank you for your time, and I wish you all the best in your endeavors at Privalia.

Best regards,
Raja Rao DV
CEO, Denodo`
      }
    ],
    [
      {
        title: "Send connection request",
        content: `Hello Sarah,

I'm Raja Rao DV, the CEO of Denodo. I came across your profile and was impressed by your extensive experience in data management at TechCorp.

I believe our innovative data virtualization solutions at Denodo could be of interest to you. Would you be open to connecting and perhaps sharing insights on the evolving data landscape?

Looking forward to the possibility of networking with you.

Best regards,
Raja`
      },
      {
        title: "Follow-up message",
        content: `Hi Sarah,

I hope this message finds you well. I wanted to follow up on my previous connection request.

Given your role at TechCorp, I thought you might be interested in learning about how our data virtualization platform has helped similar organizations streamline their data integration processes and improve data accessibility.

Would you be open to a brief conversation about the challenges and opportunities you're seeing in data management today?

Best regards,
Raja`
      },
      {
        title: "Goodbye message",
        content: `Hello Sarah,

I hope all is well. I understand that you may be busy or that our solutions might not be a priority for you at this time.

This will be my final message, as I want to respect your inbox. However, if you ever want to discuss data virtualization or explore how Denodo could potentially add value to TechCorp's data strategy, please don't hesitate to reach out.

Wishing you continued success in your role.

Best regards,
Raja Rao DV
CEO, Denodo`
      }
    ],
    [
      {
        title: "Send connection request",
        content: `Hello Alex,

I'm Raja Rao DV, CEO at Denodo. I noticed your impressive work in digital transformation at InnovateCo and thought we might benefit from connecting.

At Denodo, we're at the forefront of data virtualization, helping companies like yours navigate the complexities of modern data landscapes. I'd love to exchange ideas on how businesses are leveraging data for digital innovation.

Would you be interested in connecting?

Best regards,
Raja`
      },
      {
        title: "Follow-up message",
        content: `Hi Alex,

I hope this message finds you well. I wanted to follow up on my previous connection request.

Given your expertise in digital transformation, I thought you might be interested in how data virtualization is enabling companies to accelerate their digital initiatives. We've had some exciting results with clients in similar industries to InnovateCo.

Would you be open to a brief chat about the role of data in digital transformation and how Denodo might be able to support your efforts?

Looking forward to your thoughts.

Best regards,
Raja`
      },
      {
        title: "Goodbye message",
        content: `Hello Alex,

I hope this message finds you well. I understand that you might be busy or that our offering may not align with your current priorities at InnovateCo.

As this will be my last message, I want to thank you for your time. If you ever find yourself interested in exploring how data virtualization can support digital transformation initiatives, please don't hesitate to reach out.

Wishing you continued success in your innovative work at InnovateCo.

Best regards,
Raja Rao DV
CEO, Denodo`
      }
    ]
  ];

  return (
    <React.Fragment>
      <div className="w-full max-w-[988px] mt-12 md:mt-0 px-4 py-0 md:py-[60px] !pb-0  m-auto">
        <CommonSectionWithEmail color="#00C2FF" img="/img/email.webp">
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
              startIndex={index * sequence.length}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default EmailCreations;
