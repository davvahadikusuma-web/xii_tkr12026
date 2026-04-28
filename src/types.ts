export interface Student {
  id: string;
  name: string;
  nickname?: string;
  photoUrl: string;
  bio: string;
  quotes: string;
  instagram?: string;
  email?: string;
  createdAt: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category?: string;
  date: number;
}

export interface Message {
  id: string;
  author: string;
  content: string;
  isApproved: boolean;
  createdAt: number;
}

export interface AppSettings {
  className: string;
  graduationDate: string;
  heroHeadline: string;
  heroSubheadline: string;
}
