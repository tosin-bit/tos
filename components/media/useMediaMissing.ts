import { useEffect, useState, type RefObject } from "react";

/*
  A <video> with <source> children never fires `error` on the video element, and
  the error it fires on the <source> lands before hydration attaches listeners.
  networkState is the only reliable signal that every source failed.
*/
export default function useMediaMissing(ref: RefObject<HTMLVideoElement>): boolean {
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (el.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || el.error) {
        setMissing(true);
      }
    };

    check();
    const timers = [setTimeout(check, 400), setTimeout(check, 1500)];
    // capture phase reaches events targeted at the <source> children
    el.addEventListener("error", check, true);

    return () => {
      timers.forEach(clearTimeout);
      el.removeEventListener("error", check, true);
    };
  }, [ref]);

  return missing;
}
