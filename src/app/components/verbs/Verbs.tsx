import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Verbs = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  
  const verbs = results[0].meanings[1]?.definitions?.[0] ;

  return (
    <ul className="list-disc w-[22rem]  sm:w-[30rem] lg:w-[40rem] mb-8">
      <div className="flex items-center">
        <h2 className="text-center mr-1.5 transition-transform duration-300 hover:scale-110">verb</h2>
        <span className="h-[1px]  bg-gray-300 flex w-[22rem]  sm:w-[30rem] lg:w-[40rem]"></span>
      </div>
      <h1 className="mt-10 text-2xl text-gray-500 hover:text-blue-800 transition-transform duration-300 hover:font-bold">Meaning</h1>
      {verbs && (
        <li className="flex flex-col mt-6">
          <span className="before:content-['•'] before:mr-2 -ml-3.5 hover:text-black hover:font-bold">{verbs.definition}</span> 
           <span className="mt-6 text-gray-500 hover:text-blue-900 hover:font-bold">{verbs.example}</span>
        </li>
      )}
    </ul>
  );
};

export default Verbs;
