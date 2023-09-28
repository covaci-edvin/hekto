import React, { useContext, useMemo, useState } from "react";

export const CacheContext = React.createContext();

export function CacheProvider({ children }) {
  const [cache, setCache] = useState({});
  const value = useMemo(() => ({ cache, setCache }), [cache]);

  return (
    <CacheContext.Provider value={value}>{children}</CacheContext.Provider>
  );
}

export const useCache = () => useContext(CacheContext);
