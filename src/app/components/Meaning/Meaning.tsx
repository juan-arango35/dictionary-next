import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Meaning = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  const meanings = results[0].meanings[0].definitions;

  return (
    <ul className="w-[40rem] list-disc">
      {meanings &&
        meanings.map((meaning, index) => (
          <li key={index} className="mt-2">
            {meaning.definition}
          </li>
        ))}
    </ul>
  );
};

export default Meaning;
