"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { historyService } from "../../services/HistoryService";

interface SearchFormProps {
  initialSearch?: string;
}

const SearchForm = ({ initialSearch = "" }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [loading, setLoading] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const router = useRouter();
  const historyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cargar el historial al montar el componente
  useEffect(() => {
    // Inicialmente cargamos el historial desde localStorage
    const history = historyService.getHistory();
    setSearchHistory(history);
    
    // Actualizar el historial cuando cambie en localStorage
    const handleStorageChange = () => {
      setSearchHistory(historyService.getHistory());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Detectar clicks fuera del historial para cerrarlo
    const handleClickOutside = (event: MouseEvent) => {
      if (
        historyRef.current && 
        !historyRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowHistory(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setShowHistory(false);

    const term = searchTerm.toLowerCase().trim();

    if (term) {
      router.push(`?word=${encodeURIComponent(term)}`);
      // Añadir al historial
      historyService.addToHistory(term);
      // Actualizamos el estado local del historial
      setSearchHistory(historyService.getHistory());
    } else {
      router.push("/");
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleInputFocus = () => {
    // Mostrar historial cuando el input recibe foco y hay historial
    if (historyService.getHistory().length > 0) {
      setShowHistory(true);
    }
  };

  const handleHistoryItemClick = (word: string) => {
    setSearchTerm(word);
    setShowHistory(false);
    router.push(`?word=${encodeURIComponent(word)}`);
  };

  const handleRemoveHistoryItem = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    historyService.removeFromHistory(word);
    setSearchHistory(historyService.getHistory());
    if (historyService.getHistory().length === 0) {
      setShowHistory(false);
    }
  };

  const clearAllHistory = () => {
    historyService.clearHistory();
    setSearchHistory([]);
    setShowHistory(false);
  };

  return (
    <div className="w-full flex justify-center items-center my-3 relative">
      <div className="w-[22rem] sm:w-[32rem] lg:w-[42rem] relative flex flex-col justify-center mt-4">
        <form onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="search"
            className="bg-gray-300 w-[25rem] sm:w-[32rem] lg:w-[42rem] h-12 pl-5 rounded-2xl dark: text-black"
          />

          <FaMagnifyingGlass className="absolute -right-4 sm:right-5 top-3.5" />
        </form>
        
        {/* Historial de búsqueda */}
        {showHistory && searchHistory.length > 0 && (
          <div 
            ref={historyRef}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-500 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto w-full"
          >
            <div className="flex justify-between items-center p-3 border-b dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Historial de búsqueda</h3>
              <button 
                onClick={clearAllHistory}
                className="text-xs text-blue-600 hover:text-blue-800 dark:text-black"
              >
                Limpiar
              </button>
            </div>
            <ul className="w-full">
              {searchHistory.map((word, index) => (
                <li 
                  key={index}
                  onClick={() => handleHistoryItemClick(word)}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex justify-between items-center w-full"
                >
                  <span className="truncate max-w-[80%]">{word}</span>
                  <button 
                    onClick={(e) => handleRemoveHistoryItem(e, word)}
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;