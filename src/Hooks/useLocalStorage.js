import { useEffect, useState } from "react";
const useLocalStorage = (storageKey, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
};

export  { useLocalStorage} ;
