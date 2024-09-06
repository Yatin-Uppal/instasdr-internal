import React from 'react';
import TagList from './TagList';
import MetaInfo from './MetaInfo';

const Header = () => {
  return (
    <section className="bg-[var(--color-cream)] pt-8">
      <div className="custom_container md:mx-auto">
        <div className="pb-5 lg:pb-10 border-b border-[var(--color-tinted-cream)]">
          <h1 className="font-bold text-[var(--color-black)] mb-2 text-[32px] lg:text-[56px] leading-[var(--leading-tighter)]">
            A Brief History & Ethos of the Digital Garden
          </h1>
          <p className="text-lg lg:text-3xl mt-7 m-0">
            A newly revived philosophy for publishing personal knowledge on the web
          </p>
        </div>
        <div className="py-3 flex">
          <TagList />
          <MetaInfo />
        </div>
      </div>
    </section>
  );
};

export default Header;