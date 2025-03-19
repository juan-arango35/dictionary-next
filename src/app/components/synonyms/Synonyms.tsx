import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Synonyms = ({ results }: DictionaryResultsProps) => {
  const synonyms = results[0].meanings[0].synonyms;

  return (
    <div className="flex mt-4 w-[22rem]  sm:w-[30rem] lg:w-[40rem] items-center mb-8">
      <h1 className="text-2xl mr-2.5">Synonymos </h1>
      <ul className="text-purple-600 font-bold ml-2.5 flex gap-3 flex-wrap ">
        {synonyms.map((sin, index) => (
          <li key={index}>{sin}</li>
        ))}
      </ul>
    </div>
  );
};

export default Synonyms;
