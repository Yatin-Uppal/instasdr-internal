import React from 'react';

const TagList = () => {
  const tags = ['Digital Gardening', 'Personal Knowledge', 'The Web'];

  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#" className="font-lato text-[var(--color-bright-crimson)]">
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TagList;