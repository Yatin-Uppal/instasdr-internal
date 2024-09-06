import React from 'react';

const Content = () => {
  return (
    <section className="bg-[linear-gradient(var(--color-cream) 0, white 110px)] pt-10 lg:pt-16 mt-4">
    <div className="custom_container md:mx-auto">
        <img className="w-full mb-3" src="https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_1000/v1622719121/maggieappleton.com/notes/garden-history/garden-main_ayoaqo_shrink_szbgc7.png" alt="" />

        <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] first-letter:text-8xl first-letter:font-bold mb-10">Back in April of 2020 I put up a long twitter thread on the emerging trend of Digital Gardening. It gathered a little buzz, and made clear we're in a moment where there is something culturally compelling about this concept.</p>

        <div className="border border-[rgb(207, 217, 222)] rounded-md min-h-28 flex items-center justify-center mb-4 lg:mb-9">Twitter Box</div>

        <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">My <a href="#" className="text-[var(--color-bright-crimson)] underline">small collection</a> highlighted a number of sites that are taking a new approach to the way we publish personal knowledge on the web.</p>

        <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">They're not following the conventions of the "personal blog," as we've come to know it. Rather than presenting a set of polished articles, displayed in reverse chronological order, these sites act more like free form, work-in-progress wikis.</p>

        <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">A garden is a collection of evolving ideas that aren't strictly organised by their publication date. They're inherently exploratory – notes are linked through contextual associations. They aren't refined or complete - notes are published as half-finished thoughts that will grow and evolve over time. They're less rigid, less performative, and less perfect than the personal websites we're used to seeing.</p>

        <img src="https://res.cloudinary.com/dxj9qr5gj/image/upload/c_scale,f_auto,q_auto:best,w_1000/v1616170717/maggieappleton.com/notes/garden-history/growth-leaves_gtdalf.png" className="w-full my-12" alt="" />

        <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">It harkens back to the early days of the web when people had fewer notions of how websites "should be.” It's an ethos that is both classically old and newly imagined.</p>

        <hr className="my-15 lg:my-22 border-[2px] border-[var(--color-salmon)] w-[20%] h-1 mx-auto" />

        <div>
            <h4 className="font-regular text-[var(--color-black)] leading-[var(--leading-base)] text-[44px] mt-[66px] mb-[33px]"><a href="#" className="text-[var(--color-black)]">A Brief History of Digital Gardens</a></h4>

            <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">Let's go on a short journey to the origin of this word. The notion of a digital garden is not a 2020 invention. It's been floating around for over two decades. However, it's passed through a couple of semantic shifts in that time, meaning different things to different people across the years. As words tend to do.</p>

            <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">Tracing back how <a href="#" className="underline text-[var(--color-medium-sea-blue)]">Neologisms</a> are born helps us understand why anyone needed this word in the first place. Language is always a response to the evolving world around us – we expand it when our current vocabulary fails to capture what we're observing, or have a particular desire for how we'd like the future to unfold. Naming is a political act as much as a poetic one.</p>

            <h4 className="font-lato text-[var(--color-black)] leading-[var(--leading-base)] text-[32px] mt-[33px] mb-[22px]">The Early Gardens of Hypertext</h4>

            <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">Mark Bernstein's 1998 essay <a href="#" className="text-[var(--color-bright-crimson)] underline">Hypertext Gardens</a> appears to be the first recorded mention of the term. Mark was part of the early hypertext crowd – the developers figuring out how to arrange and present this new medium.</p>

            <p className="leading-[var(--leading-looser)] text-[var(--color-black)] text-[22px] mb-10">While the essay is a beautiful ode to free-wheeling internet exploration, it's less about building personal internet spaces, and more of a manifesto on user experience flows and content organisation.</p>

        </div>

    </div>
</section>
  );
};

export default Content;