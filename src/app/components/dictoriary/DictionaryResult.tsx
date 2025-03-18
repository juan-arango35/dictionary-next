import { WordResponse } from "../../model/models";
import WordComponent from "../words/WordComponent";
export interface DictionaryResultsProps {
  results: WordResponse[];
}
const DictionaryResult = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  const word = results[0];
  const latin = results[0].phonetic || "";

  return (
    <div>
      <WordComponent
        word={{ text: word.word, phonetics: word.phonetics }}
        latin={latin}
      />
    </div>
  );
};

export default DictionaryResult;
