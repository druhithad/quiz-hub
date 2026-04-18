import { useState, useEffect } from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration); // reset when question changes
  }, [duration]);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <h3>⏳ Time Left: {time}s</h3>;
}

export default Timer;