export const getLocalStorageWithoutParsing = (key: string) => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
};  