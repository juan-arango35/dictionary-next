import { DictionaryResultsProps } from "../dictoriary/DictionaryResult";

const Verbs = ({ results }: DictionaryResultsProps) => {
  if (!results || results.length === 0) return null;
  const verbs = results[0].meanings[1].definitions[0] ;

  return (
    <div>
      <h1>Meaning :</h1>
      {verbs && (
        <div className="flex flex-col">
          <span>{verbs.definition}</span> 
           <span>{verbs.example}</span>
        </div>
      )}
    </div>
  );
};

export default Verbs;
