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
