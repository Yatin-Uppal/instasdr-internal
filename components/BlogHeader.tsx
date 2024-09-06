import React from 'react';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  tags: string[];
  plantedDate: string;
  lastTendedDate: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle, tags, plantedDate, lastTendedDate }) => (
  <section className="bg-[var(--color-cream)] pt-8">
    <div className="custom_container md:mx-auto">
      <div className="pb-5 lg:pb-10 border-b border-[var(--color-tinted-cream)]">
        <h1 className="font-bold text-[var(--color-black)] mb-2 text-[32px] lg:text-[56px] leading-[var(--leading-tighter)]">{title}</h1>
        <p className="text-lg lg:text-3xl mt-7 m-0">{subtitle}</p>
      </div>
      <div className="py-3 flex">
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <li key={index}><a href="#" className="font-lato text-[var(--color-bright-crimson)]">{tag}</a></li>
          ))}
        </ul>
        <div className="ms-auto flex flex-col">
          <p className="m-0 font-lato">{plantedDate}</p>
          <p className="m-0 font-lato">{lastTendedDate}</p>
        </div>
      </div>
    </div>
  </section>
);

export default BlogHeader;