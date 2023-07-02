export type GameLevelType = {
  title: string;
  description: string;
  rightAnswer: string;
  code: string[];
  figures: {
    name: string;
    size: string;
    inner?: {
      name: string;
      size: string;
    } 
  }[];
  target: number[];
}