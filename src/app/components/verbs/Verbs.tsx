import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Verbs = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  
  const verbs = results[0].meanings[1]?.definitions?.[0] ;

  return (
    <ul className="list-disc w-[22rem]  sm:w-[30rem] lg:w-[40rem] mb-8">
      <h1 className="mt-10 text-2xl text-gray-500">Meaning</h1>
      {verbs && (
        <li className="flex flex-col mt-6">
          <span className="before:content-['•'] before:mr-2 -ml-3.5">{verbs.definition}</span> 
           <span className="mt-6 text-gray-500">"{verbs.example}"</span>
        </li>
      )}
    </ul>
  );
};

export default Verbs;
