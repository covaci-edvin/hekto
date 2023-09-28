import { useEffect, useState } from "react";

import { useCache } from "/src/context/cache";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { cache, setCache } = useCache();

  useEffect(() => {
    if (!url) return;
    const abortController = new AbortController();

    const fetchData = async () => {
      if (cache[url]) {
        setData(cache[url]);
        return;
      }

      setIsPending(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();

        setData(json);
        setCache((prevCache) => ({ ...prevCache, [url]: json }));
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};
