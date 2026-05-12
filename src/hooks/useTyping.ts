import { useEffect, useMemo, useState } from "react";

export function useTyping(fullText: string, msPerChar = 42, startDelay = 400) {
  const [index, setIndex] = useState(0);
  const chars = useMemo(() => fullText.split(""), [fullText]);

  useEffect(() => {
    setIndex(0);
    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      let i = 0;
      intervalId = window.setInterval(() => {
        i += 1;
        setIndex(i);
        if (i >= chars.length && intervalId) window.clearInterval(intervalId);
      }, msPerChar);
    }, startDelay);
    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [chars.length, fullText, msPerChar, startDelay]);

  return chars.slice(0, index).join("");
}
