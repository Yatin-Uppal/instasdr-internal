export interface EmailCampaignCard {
  avatar: string;
  name: string;
  position: string;
  company: string;
  subject: string;
  body: string[];
  image: string;
  sender: {
    name: string;
    position: string;
    company: string;
  };
}