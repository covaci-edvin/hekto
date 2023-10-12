import { useEffect, useState } from "react";

export default function useProductLocalStorageAction(key, productId) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(key));
    if (items?.includes(productId)) setIsActive(true);
  }, []);

  function handler() {
    const items = JSON.parse(localStorage.getItem(key)) || [];

    let newItems;

    if (items.includes(productId)) {
      newItems = items.filter((id) => id !== productId);
      setIsActive(false);
    } else {
      newItems = [...items, productId];
      setIsActive(true);
    }

    localStorage.setItem(key, JSON.stringify(newItems));
  }

  return { handler, isActive };
}
