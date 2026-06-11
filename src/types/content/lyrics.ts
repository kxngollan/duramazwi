export interface LyricLink {
  word: string;
  url: string;
  tooltip?: string;
}

export interface LyricPair {
  shona: string;
  english: string;
  links?: LyricLink[];
  note?: string;
  displayOrder?: "shona-first" | "english-first";
}

export interface LyricSection {
  type: "section";
  title: string;
}

export interface LyricVerse {
  type: "verse";
  lines: LyricPair[];
}

export type LyricBlock = LyricSection | LyricVerse;
