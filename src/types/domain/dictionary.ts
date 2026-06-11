export interface Example {
  shona: string;
  english: string;
}

export interface Definition {
  definition: string;
  examples: Example[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface DictionaryEntry {
  _id?: string;
  word: string;
  meanings: Meaning[];
}
