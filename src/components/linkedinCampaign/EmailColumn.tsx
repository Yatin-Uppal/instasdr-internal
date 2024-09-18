import React from "react";
import EmailCard from "./EmailCard";
import Separator from "./Separator";

interface EmailSequence {
  title: string;
  content: string;
}

interface EmailColumnProps {
  sequence?: EmailSequence[];
  currentOpen?: number | null;
  openBox?: (num: number) => void;
  startIndex: number;
}

function EmailColumn({ sequence, currentOpen, openBox, startIndex }: EmailColumnProps) {
  return (
    <div className="max-w-[280px] min-w-[280px] md:min-w-[inherit] md:max-w-full">
      {sequence.map((email, index) => (
        <React.Fragment key={startIndex + index}>
          <EmailCard
            title={email.title}
            content={email.content}
            isOpen={currentOpen === startIndex + index}
            onToggle={() => openBox(startIndex + index)}
          />
          {index < sequence.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default EmailColumn;