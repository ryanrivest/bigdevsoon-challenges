export type Gender = 'male' | 'female';

export interface Dog {
  name: string;
  gender: Gender;
  breed: string;
  distance: number;
  image: string;
  favorite: boolean;
}

export interface Article {
  title: string;
  content: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
}

export interface Contact {
  name: string;
  image: string;
  online: boolean;
}

export interface Conversation {
  contact: Contact;
  messages: {
    content: string;
    time: string;
    self: boolean;
  }[];
}
