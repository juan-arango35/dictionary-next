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
    <div >
      <WordComponent
        word={{ text: word.word, phonetics: word.phonetics }}
        latin={latin}
      />
      <div className="flex items-center">
        <h2 className="text-center mr-1.5">noun</h2>
        <span className="h-[1px]  bg-gray-300 flex w-[22rem]  sm:w-[30rem] lg:w-[40rem]"></span>
      </div>
    </div>
  );
};

export default DictionaryResult;
