import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactElement;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  id: string;
}

const Popover: React.FC<PopoverProps> = ({ content, children, placement = 'top', id }) => {
  return (
    <>
      {React.cloneElement(children, {
        'data-tooltip-id': id,
        'data-tooltip-content': typeof content === 'string' ? content : undefined,
      })}
      <Tooltip
        id={id}
        place={placement}
        className="z-10 !max-w-[200px] !w-auto !bg-[#004D61] !py-4 !px-5 text-black  !rounded-xxl shadow-md"
      >
        {typeof content !== 'string' && content}
      </Tooltip>
    </>
  );
};

export default Popover;