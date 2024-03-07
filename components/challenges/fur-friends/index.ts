export type Gender = 'male' | 'female';

export interface Dog {
  name: string;
  gender: Gender;
  breed: string;
  distance: number;
  image: string;
  favorite: boolean;
}
