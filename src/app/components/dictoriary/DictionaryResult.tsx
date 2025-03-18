
import AudioPlayer from '../audio/AudioPlayer';
import { WordResponse } from "../../model/models"
export interface DictionaryResultsProps {
  results: WordResponse[];
}
const DictionaryResult = ({results}: DictionaryResultsProps) => {
  if(!results || results.length === 0)  return null;
  const word = results[0];
  const latin = results[0].phonetic || "";
  console.log(latin, "latin");
  return (
    <div>
      <AudioPlayer word={word.word} latin={latin} />
      
    </div>
  )
}

export default DictionaryResult