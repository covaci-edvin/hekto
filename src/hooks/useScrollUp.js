import { useEffect, useRef } from "react";

export default function useScrollUp(time, dependency) {
  const firstRender = useRef(false);

  useEffect(() => {
    if (dependency && firstRender.current) {
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, time);

      return () => clearTimeout(timer);
    } else {
      firstRender.current = true;
    }
  }, dependency);
}
