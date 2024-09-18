export interface LinkedinMessage {
  title: string;
  content: string;
  sender: {
    name: string;
    title: string;
    company: string;
  };
}