// services/HistoryService.ts

class HistoryService {
  private readonly STORAGE_KEY = 'searchHistory';
  private readonly MAX_HISTORY_ITEMS = 10;

  /**
   * Obtiene el historial de búsquedas
   * @returns Array de palabras buscadas
   */
  getHistory(): string[] {
    if (typeof window === 'undefined') {
      return []; // Si estamos en el servidor, devolvemos un array vacío
    }
    
    const history = localStorage.getItem(this.STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  }

  /**
   * Añade una palabra al historial
   * @param word Palabra a añadir
   */
  addToHistory(word: string): void {
    if (typeof window === 'undefined') {
      return; // No hacemos nada si estamos en el servidor
    }
    
    const history = this.getHistory();
    
    // Eliminar la palabra si ya existe (para ponerla al principio)
    const filteredHistory = history.filter(
      item => item.toLowerCase() !== word.toLowerCase()
    );
    
    // Agregar la palabra al principio
    const newHistory = [word, ...filteredHistory];
    
    // Limitar el historial a MAX_HISTORY_ITEMS elementos
    const limitedHistory = newHistory.slice(0, this.MAX_HISTORY_ITEMS);
    
    // Guardar en localStorage
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(limitedHistory));
  }

  /**
   * Elimina el historial completo
   */
  clearHistory(): void {
    if (typeof window === 'undefined') {
      return;
    }
    
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Elimina una palabra específica del historial
   * @param word Palabra a eliminar
   */
  removeFromHistory(word: string): void {
    if (typeof window === 'undefined') {
      return;
    }
    
    const history = this.getHistory();
    const filteredHistory = history.filter(
      item => item.toLowerCase() !== word.toLowerCase()
    );
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredHistory));
  }
}

// Exportar una instancia única del servicio
export const historyService = new HistoryService();