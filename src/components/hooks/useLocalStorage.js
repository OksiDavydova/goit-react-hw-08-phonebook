import { useState, useEffect } from "react";

export default function useLSt(key, defaultValue) {
  const [state, setState] = useState(() => {
    const local = JSON.parse(window.localStorage.getItem(key));
    return local.length > 0 ? local : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
//JSON.parse(window.localStorage.getItem(key)) ??
