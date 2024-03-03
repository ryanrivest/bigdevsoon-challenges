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
