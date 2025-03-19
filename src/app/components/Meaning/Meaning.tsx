import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Meaning = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  const meanings = results[0].meanings[0].definitions;

  return (
    <>
     
      <ul className=" list-disc w-[22rem]  sm:w-[30rem] lg:w-[40rem]">
      <h1 className="mt-10 text-2xl text-gray-500 hover:text-blue-800 transition-transform duration-300 hover:font-bold">Meaning</h1>
        {meanings &&
          meanings.map((meaning, index) => (
            <li key={index} className="mt-6 hover:text-black hover:font-bold">
              {meaning.definition}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Meaning;
