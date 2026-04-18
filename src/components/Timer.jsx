import { useState, useEffect } from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h3>Time Left: {time}s</h3>;
}

export default Timer;