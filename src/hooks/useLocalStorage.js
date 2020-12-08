import {useState, useEffect} from 'react';

function useLocalStorage(keyName, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(keyName);

    return item ? item : defaultValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(keyName, value);
  };

  useEffect(
    () => {
      const handler = storageEvent => {
        if (storageEvent.key === keyName) {
          setStoredValue(storageEvent.newValue);
        }
      };

      window.addEventListener('storage', handler);

      return () => window.removeEventListener('storage', handler);
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
