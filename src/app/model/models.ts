export interface Phonetic {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }
  
  export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }
  
  export interface WordResponse {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    origin?: string;
    meanings: Meaning[];
    license?: {
      name: string;
      url: string;
    };
    sourceUrls: string[];
  }