import Footer from '@site/src/components/common/Footer';
import Header from '@site/src/components/common/Header';
import EmailCreations from '@site/src/components/linkedinCampaign/EmailCreations';
import HeroSection from '@site/src/components/linkedinCampaign/HeroSection';
import AutonomousSolution from '@site/src/components/multiChannel/AutonomousSolution';
import EmailCampaigns from '@site/src/components/multiChannel/EmailCampaigns';
import EmailOutreach from '@site/src/components/multiChannel/EmailOutreach'; 
import PhoneDialer from '@site/src/components/multiChannel/PhoneDialer';
import ThreeBox from '@site/src/components/multiChannel/ThreeBox';
import VideoEmail from '@site/src/components/multiChannel/VideoEmail';
import React from 'react'

function LinkedInCampaign() {
  return (
    <React.Fragment>
        <Header />
        <HeroSection/>
        <ThreeBox/>
        <EmailCreations/>
        <EmailOutreach/>
        <VideoEmail/>
        <EmailCampaigns/>
        <PhoneDialer/>
        <AutonomousSolution/>
        <Footer/>
    </React.Fragment>
  )
}

export default LinkedInCampaign