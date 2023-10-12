import { useEffect, useState } from "react";

export default function useProductLocalStorageAction(key, productId) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(key));
    if (items?.includes(productId)) setIsActive(true);
  }, []);

  function updateLocalStorage() {
    const items = JSON.parse(localStorage.getItem(key)) || [];

    const newItems = isActive
      ? items.filter((id) => id !== productId)
      : [...items, productId];
    setIsActive((prev) => !prev);

    localStorage.setItem(key, JSON.stringify(newItems));
  }

  return { updateLocalStorage, isActive };
}
