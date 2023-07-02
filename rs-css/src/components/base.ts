export type GameLevelType = {
  title: string;
  description: string;
  rightAnswer: string;
  code: string[];
  figures?: {
    name: string;
    size: string
  }[];
  target?: number[];
}

// export type FiguresType = {
//   figure: string,
//   src: string
// }