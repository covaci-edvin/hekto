import { useEffect, useState } from "react";

import { useCache } from "/src/context/cache";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const { cache, setCache } = useCache();

  useEffect(() => {
    if (!url) return;
    const abortController = new AbortController();

    const fetchData = async () => {
      if (cache[url]) {
        setData(cache[url].json);
        setTotalCount(cache[url].totalCount);
        return;
      }

      setIsPending(true);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();

        const totalCount = +response.headers.get("x-total-count");
        setTotalCount(totalCount);
        setData(json);
        setCache((prevCache) => ({
          ...prevCache,
          [url]: { json, totalCount },
        }));
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

  return { data, isPending, error, totalCount };
}
