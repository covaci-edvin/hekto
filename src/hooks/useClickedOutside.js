import { useEffect } from "react";

export default function useClickedOutside(ref, cb, shouldCall) {
  useEffect(() => {
    if (!shouldCall) return;
    const handleClickedOutside = (event) => {
      if (!ref.current?.contains(event.target)) cb();
    };
    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, [shouldCall]);
}
