import SearchForm from "./components/search/SearchForm";
import HeaderComponent from "./components/ui/header/Header";
import { WordResponse } from "./model/models";
import DictionaryResult from "./components/dictoriary/DictionaryResult";
import Meaning from "./components/Meaning/Meaning";
import Synonyms from "./components/synonyms/Synonyms";
import Verbs from "./components/verbs/Verbs";
import FooterComponent from "./components/ui/footer/Footer";
import { historyService } from "./services/HistoryService";
import SearchHistory from "./components/history/SearchHistory";

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
        result = await response.json(); //agregado
 
      }
    } catch (err) {
      error = `Error al consultar el diccionario: ${
        err instanceof Error ? err.message : "Error desconocido"
      }`;
    }
  }

  return (
    <div className="min-h-screen bg-gray-200  dark:bg-slate-400   w-full flex justify-start items-center flex-col">
      <HeaderComponent />
      <SearchForm initialSearch={searchTerm} />
       {/* Componente de historial (client component) */}
       <SearchHistory />
      {error && (
        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      {result && <DictionaryResult results={result} />}

      {result && <Meaning results={result} />}

      <div>{result && <Synonyms results={result} />}</div>

      <div>{result && <Verbs results={result} />}</div>

      {result && <FooterComponent results={result} />}
      {result && searchTerm && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const historyService = window.historyService || {
                  addToHistory: function(word) {
                    const STORAGE_KEY = 'searchHistory';
                    const history = localStorage.getItem(STORAGE_KEY);
                    const parsedHistory = history ? JSON.parse(history) : [];
                    const filteredHistory = parsedHistory.filter(item => item.toLowerCase() !== word.toLowerCase());
                    const newHistory = [word, ...filteredHistory].slice(0, 10);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
                    window.dispatchEvent(new Event('storage'));
                  }
                };
                historyService.addToHistory("${searchTerm}");
              }
            `
          }}
        />
      )}
    </div>
  );
}
