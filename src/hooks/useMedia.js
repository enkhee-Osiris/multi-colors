import {useEffect, useState} from 'react';

function useMedia(query, value, defaultValue) {
  const mediaQuery = window.matchMedia(query);

  const getValue = () => {
    if (mediaQuery.matches) {
      return value;
    }

    return defaultValue;
  };

  const [result, setResult] = useState(getValue);

  useEffect(
    () => {
      const handler = () => setResult(getValue);

      mediaQuery.addListener(handler);

      return () => mediaQuery.removeListener(handler);
    },

    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return result;
}

export default useMedia;
