import { useCallback, useState } from "react";

export function useTimer(initDuration) {
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(initDuration);
  const [playing, setPlaying] = useState(false);

  const changeDuration = useCallback(
    (newDuration) => setDuration(parseInt(newDuration)),
    []
  );
  const restart = useCallback(() => setKey((prevKey) => prevKey + 1), []);
  const startPlaying = useCallback(() => setPlaying(true), []);
  const stopPlaying = useCallback(() => setPlaying(false), []);

  return {
    key,
    duration,
    playing,
    restart,
    changeDuration,
    startPlaying,
    stopPlaying,
  };
}
