import React from "react";

const highlights = [
  "Free unlimited Email warmup",
  "Free unlimited mailboxes",
  "Free unlimited Enrichment",
  "750 Million leads to target",
  "Free unlimited 1-click campaigns",
  "Automatic sequencing",
  "Human-like email quality",
  "Machine-like email quantity"
];

const FeatureHighlight: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5 mt-16 md:mt-[88px]">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-xs font-semibold">
          <img height="20" src="/img/checkCircleyellow.svg" /> {highlight}
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlight;