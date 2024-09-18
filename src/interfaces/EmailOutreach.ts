export interface EmailFeature {
  icon: string;
  text: string;
}

export interface EmailCard {
  number: number;
  title: string;
  recipient: string;
  content: string;
  imageSrc: string;
  sender: {
    name: string;
    position: string;
    company: string;
  };
}