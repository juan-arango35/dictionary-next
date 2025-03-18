
import AudioPlayer from "../audio/AudioPlayer"
import { WordResponse } from "../../model/models"
interface DictionaryResultsProps {
  results: WordResponse[];
}
const DictionaryResult = ({results}: DictionaryResultsProps) => {
  if(!results || results.length === 0)  return null;
  const word = results[0];
  return (
    <div>
       <h2 className="text-xl font-bold text-gray-900">{word.word}</h2>
    </div>
  )
}

export default DictionaryResult