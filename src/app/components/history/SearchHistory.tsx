// components/history/SearchHistory.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { historyService } from '../../services/HistoryService';

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const router = useRouter();

  // Cargar el historial cuando el componente se monta
  useEffect(() => {
    setSearchHistory(historyService.getHistory());
    
    // Configurar un evento para actualizar el historial cuando cambie en localStorage
    const handleStorageChange = () => {
      setSearchHistory(historyService.getHistory());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Limpiar el evento al desmontar
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Manejar clic en una palabra del historial
  const handleHistoryClick = (word: string) => {
    router.push(`/?word=${encodeURIComponent(word)}`);
  };

  // Limpiar todo el historial
  const clearHistory = () => {
    historyService.clearHistory();
    setSearchHistory([]);
  };

  // Eliminar una palabra específica del historial
  const removeFromHistory = (e: React.MouseEvent, word: string) => {
    e.stopPropagation(); // Evitar que el clic se propague al elemento padre
    historyService.removeFromHistory(word);
    setSearchHistory(historyService.getHistory());
  };

  if (searchHistory.length === 0) {
    return null; // No mostrar nada si no hay historial
  }

  return (
    <div className="w-full max-w-md mx-auto mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Historial de búsqueda</h2>
        <button 
          onClick={clearHistory}
          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          Limpiar todo
        </button>
      </div>
      
      <ul className="space-y-2">
        {searchHistory.map((word, index) => (
          <li 
            key={index} 
            onClick={() => handleHistoryClick(word)}
            className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <span className="text-gray-800 dark:text-gray-200">{word}</span>
            <button 
              onClick={(e) => removeFromHistory(e, word)}
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
              aria-label="Eliminar del historial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}