import { DictionaryResultsProps } from "../../dictoriary/DictionaryResult"


const FooterComponent = ({results}: DictionaryResultsProps) => {
  if(!results || results.length === 0)  return null;
  const source = results[0].sourceUrls[0]
  console.log(source, "source")
  return (
    <div>
      <h1>Source :</h1>

      {source && (
        <p>{source}</p>
      )}
    </div>
  )
}

export default FooterComponent