"use client";
import { useEffect, useState } from "react";
export default function ClientClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="border p-4 rounded">
      <p>Client time (updates every second):</p>
      <strong>{time}</strong>
    </div>
  );
}
