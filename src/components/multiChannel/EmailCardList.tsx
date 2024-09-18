import React from "react";
import EmailCard from "./EmailCard";
import { EmailCard as EmailCardType, EmailFeature } from "../../interfaces/EmailOutreach";

interface EmailCardListProps {
  cards: EmailCardType[];
  features: EmailFeature[];
}

function EmailCardList({ cards, features }: EmailCardListProps) {
  return (
    <div className="overflow-auto md:overflow-hidden flex md:grid md:grid-cols-3 bg-[#05050A] rounded-xxl md:px-6 py-7 gap-5 shadow-lightblueDark">
      {cards.map((card, index) => (
        <EmailCard key={index} card={card} features={features} />
      ))}
    </div>
  );
}

export default EmailCardList;