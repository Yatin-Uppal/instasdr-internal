import React from 'react';

interface BlockquoteProps {
  className?: string;
  children: React.ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = ({ className, children }) => {
  return <blockquote className={className}>{children}</blockquote>;
};

export default Blockquote;