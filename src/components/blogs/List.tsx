import React from 'react';

interface ListProps {
  className?: string;
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default List;