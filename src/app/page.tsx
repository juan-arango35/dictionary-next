import SearchForm from "./components/search/SearchForm";
import HeaderComponent from "./components/ui/header/Header";
import { WordResponse } from "./model/models";
import DictionaryResult from "./components/dictoriary/DictionaryResult";

interface PageProps {
  searchParams: {
    word?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const searchTerm = searchParams.word || "";

  let result: WordResponse[] | null = null;
  let error: string | null = null;

  if (searchTerm) {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
        { cache: "no-store" }
      );
      if (!response.ok) {
        if (response.status === 404) {
          error = `No se encontro la plabra "${searchTerm}" en el diccionario`;
        } else {
          error = `Error al buscar la palabra "${searchTerm}"`;
        }
      } else {
        result = await response.json();
      }
    } catch (err) {
      error = `Error al consultar el diccionario: ${
        err instanceof Error ? err.message : "Error desconocido"
      }`;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 w-full flex justify-start items-center flex-col">
      <HeaderComponent />
      <SearchForm initialSearch={searchTerm} />
      {error && (
        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      {result && <DictionaryResult results={result} />}
      <div className="flex items-center">
        <h2 className="text-center">Nun</h2>
        <span className="w-[40rem] h-1  bg-amber-300 flex"></span>
      </div>
      
    </div>
  );
}
