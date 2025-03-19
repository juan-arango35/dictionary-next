import { FiPlayCircle } from "react-icons/fi";
import AudioPlayer from "../audio/AudioPlayer";

interface Props {
  word: {
    text: string;
    phonetics: {
      text?: string;
      audio?: string;
    }[];
  };
  latin: string;
}

const WordComponent = ({ word, latin }: Props) => {
  console.log(word, "word");
  return (
    <div className="flex justify-between items-center my-3 w-[24rem] sm:w-[33rem] lg:w-[43rem]">
      <div className="flex flex-col justify-center  w-full pl-5 pr-5">
        <span className="font-bold text-3xl">{word.text}</span>
        <span className="mt-2.5 text-purple-600">{latin}</span>
      </div>

      {word.phonetics.length > 0 && word.phonetics.some((p) => p.text) && (
        <div className="flex items-center space-x-2">
          {word.phonetics.some((p) => p.audio) && (
            <AudioPlayer
              audioUrl={word.phonetics.find((p) => p.audio)?.audio || ""}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default WordComponent;
