import React from 'react'

function HeroSection() {
  return (
    <React.Fragment>
    <div className="py-16 pb-0 pt-12 md:py-24 md:pb-0  text-center">
      <img src="/img/ellipse.webp" className="absolute left-0 top-0  z-[-1]" />

      <div className="w-full max-w-container px-4 m-auto">
        <h1 className="text-3xl	md:text-[56px] md:leading-[70px] font-inter text-light mb-4">
        Email  <span className="text-yellow ">Outreach</span>
        </h1>
        <p className=" text-base text-light w-full max-w-[840px] m-auto">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <button
          type="button"
          className="font-inter cursor-pointer text-sm mt-7 text-black font-semibold py-3.5 px-12 rounded-lg1 border  border-yellow bg-yellow hover:bg-lightYellow"
        >
          Get Started
        </button>
        <div className="w-full ">
          <img src="/img/emailCreation.webp" alt='emailCreation'/>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default HeroSection