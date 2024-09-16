import React from 'react';

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;