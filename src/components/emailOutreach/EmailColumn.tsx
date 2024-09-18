import React from "react";
import EmailCard from "./EmailCard";
import Separator from "./Separator";
import { EmailSequence } from "../../interfaces/EmailSequence";

interface EmailColumnProps {
  sequence: EmailSequence;
  currentOpen: number | null;
  openBox: (num: number) => void;
}

function EmailColumn({ sequence, currentOpen, openBox }: EmailColumnProps) {
  return (
    <div className="max-w-[280px] min-w-[280px] md:min-w-[inherit] md:max-w-full">
      {sequence.emails.map((email, index) => (
        <React.Fragment key={index}>
          <EmailCard
            email={email}
            isOpen={currentOpen === email.id}
            onToggle={() => openBox(email.id)}
          />
          {index < sequence.emails.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default EmailColumn;