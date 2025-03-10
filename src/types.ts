export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  image: string | null;
  location: string | null;
  tagline: string | null;
  code: string | null;
  entryFees: string | null;
  coordinators: { name: string; contact: string }[] | null;
  rules: string[] | null;
  teamSize: {
    min: number | null;
    max: number | null;
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
  tier: 'platinum' | 'gold' | 'silver';
}

export interface FAQ {
  question: string;
  answer: string;
}