import { DictionaryResultsProps } from "../dictoriary/DictionaryResult"


const Synonyms = ({results}: DictionaryResultsProps) => {
    const synonyms = results[0].meanings[0].synonyms
    console.log(synonyms, "synonyms")
  return (
    <div className="w-[40rem] flex mt-4">
        <h1>Synonymos :</h1>
        <ul className="">{synonyms.map(sin =>(
            <li >{sin}</li>
        ))}</ul>
    </div>
  )
}

export default Synonyms