import React from 'react'
import FeatureList from './FeatureList'
import CommonSectionWithEmail from '../home/CommonSectionWithEmail';
import DialerImage from '../common/DialerImage';

function PhoneDialer() {
  const features: string[] = [
    "AI-driven call prioritization",
    "Automated voicemail drops",
    "Real-time call scripting assistance",
    "Call analytics and insights",
  ];
  return (
     <React.Fragment>
      <div className="w-full max-w-[988px] px-4 py-0 mt-14 md:mt-0 md:py-[60px] !pb-0  m-auto">
      <CommonSectionWithEmail color="#FF891C" img="/img/callglass.svg">
      <h2 className="text-white font-semibold inline-block w-full text-[28px] md:text-[46px] md:leading-[55px] font-inter max-w-[850px] mb-0 ">
            AI-Powered  
              <span className="text-[#FF891C]">Phone Dialer</span>
            </h2>
            <p className="text-base md:text-lg text-white  m-auto mt-2.5 md:mt-5 mb-0 max-w-[710px]">
            Revolutionize your cold calling with our intelligent, autonomous phone dialer system.
            </p>

            <FeatureList
            maxWidth="max-w-[684px]"
            color="#FF891C"
            features={features}
          />
        </CommonSectionWithEmail>

        <DialerImage/>

      </div>
      </React.Fragment>
  )
}

export default PhoneDialer