import Footer from '@site/src/components/common/Footer';
import Header from '@site/src/components/common/Header';
import AutonomousSolution from '@site/src/components/multiChannel/AutonomousSolution';
import EmailCampaigns from '@site/src/components/multiChannel/emailCampaign/EmailCampaigns';
import EmailOutreach from '@site/src/components/multiChannel/EmailOutreach';
import HeroSection from '@site/src/components/multiChannel/HeroSection';
import LinkedinOutreach from '@site/src/components/multiChannel/linkedin/LinkedinOutreach';
import PhoneDialer from '@site/src/components/multiChannel/PhoneDialer';
import ThreeBox from '@site/src/components/multiChannel/featureBox/ThreeBox';
import VideoEmail from '@site/src/components/multiChannel/videoEmail/VideoEmail';
import React from 'react'

const MultiChannel = () => {
  return (
    <React.Fragment>
        <Header/>
        <HeroSection/>
        <ThreeBox/>
        <EmailOutreach/>
        <VideoEmail/>
        <EmailCampaigns/>
        <LinkedinOutreach/>
        <PhoneDialer/>
        <AutonomousSolution/>
        <Footer/>
    </React.Fragment>
  )
}

export default MultiChannel;