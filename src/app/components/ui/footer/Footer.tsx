import { DictionaryResultsProps } from "../../dictoriary/DictionaryResult"


const FooterComponent = ({results}: DictionaryResultsProps) => {
  if(!results || results.length === 0)  return null;
  const source = results[0].sourceUrls[0]
  console.log(source, "source")
  return (
    <div className="flex mt-4 w-[22rem]  sm:w-[30rem] lg:w-[40rem]  mb-8 flex-col items-start">
      <h1 className="mb-3 text-gray-500 text-2xl">Source :</h1>

      {source && (
        <a href={`https://en.wiktionary.org/wiki/${results[0].word} `} target="_blank" className="underline">{source}</a>
      )}
    </div>
  )
}

export default FooterComponent