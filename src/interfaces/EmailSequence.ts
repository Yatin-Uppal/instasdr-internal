export interface EmailContent {
  psychTest?: string;
  humanLike?: boolean;
  personalized?: boolean;
  positivity?: number;
  readingLevel?: number;
  spamWords?: number;
  avatar?: string;
  name?: string;
  designation?: string;
  company?: string;
  subject?: string;
  body?: string[];
  emailType?: string;
  senderName?: string;
  senderDesignation?: string;
  senderCompany?: string;
  message?: string[];
  phoneNumber?: string;
}

export interface Email {
  id: number;
  type: "email" | "linkedin" | "call";
  bgGradient: string;
  content: EmailContent;
}

export interface EmailSequence {
  emails: Email[];
}