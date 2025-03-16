export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string;
  location: string;
  tagline: string;
  code: string;
  entryFees: string;
  coordinators: { name: string; contact: string }[];
  rules: string[];
  teamSize: {
    min: number;
    max: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver";
}

export interface FAQ {
  question: string;
  answer: string;
}
