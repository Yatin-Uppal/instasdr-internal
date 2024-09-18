import Footer from '@site/src/components/common/Footer'
import Header from '@site/src/components/common/Header'
import ResponseHandling from '@site/src/components/common/ResponseHandling'
import EmailCreations from '@site/src/components/emailOutreach/EmailCreations'
import HeroSection from '@site/src/components/emailOutreach/HeroSection'  
import AutonomousSolution from '@site/src/components/multiChannel/AutonomousSolution'
import EmailCampaigns from '@site/src/components/multiChannel/emailCampaign/EmailCampaigns'
import PhoneDialer from '@site/src/components/multiChannel/PhoneDialer'
import React from 'react'
const responseItems = [
    {
      title: "We’ll auto-handle",
      description: "Positive response (send the owner notification)",
    },
    {
      title: "We’ll auto-handle",
      description: "Negative response (Unsubscribe, do not email)",
    },
    {
      title: "We’ll auto-handle",
      description: "Out of office response (we’ll send send it after 2 weeks)",
    },
    {
      title: "We’ll auto-handle",
      description: "Out of office response (we'll send it after three weeks)",
    },
    {
      title: "We’ll auto-handle",
      description: "No response (sequence continues)",
    },
    {
        title: "We’ll auto-handle",
        description: "Conversational response (ask them to book a meeting or hand off to you)",
      },
  ];
function EmailOutreach() {
  return (
    <React.Fragment>
        <Header/>
        <HeroSection/>
        <EmailCreations/>
        <ResponseHandling responseItems={responseItems} />
        <EmailCampaigns/>
        <AutonomousSolution/>
        <PhoneDialer/>
        <Footer/>
    </React.Fragment>
  )
}

export default EmailOutreach