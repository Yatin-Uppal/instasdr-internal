import React from 'react'

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className='py-16 pt-12 md:py-24 text-center'>
      <img src="/img/bg-top.png" className='absolute right-0 top-0 z-[-1] opacity-20 md:opacity-100 ' />
      <img src="/img/ellipse.png" className='absolute left-0 top-0  z-[-1]' />
        
        <div className='w-full max-w-container px-4 m-auto'>
          <h1 className='text-3xl	md:text-[56px] md:leading-[70px] font-inter text-light mb-4'>A No B.S. <span className='w-full text-[#FF5520] inline-block'> Multi-Channel AI SDR</span></h1>
          <p className='font-semibold md:font-bold text-lg text-light w-full max-w-[450px] m-auto'> write multiple personalized human-like emails, then auto-create numerous sequences</p>
          <button type="button" className="font-inter cursor-pointer text-sm mt-7 text-black font-semibold py-3.5 px-12 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow">
                    Book a Demo
                    </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HeroSection