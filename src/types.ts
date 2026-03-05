export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  balance: number;
  skillsOffered: Skill[];
  skillsWanted: string[];
}

export interface Skill {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviewsCount: number;
  provider: {
    name: string;
    avatar?: string;
  };
  duration: number;
  image: string;
}

export interface Exchange {
  id: string;
  skillTitle: string;
  participant: string;
  date: string;
  credits: number;
  status: 'completed' | 'active' | 'pending';
}
