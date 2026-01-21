"use client";

import { useState } from "react";

export default function ClientCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="border p-4 rounded">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-3 py-1 border rounded"
      >
        Increment
      </button>
    </div>
  );
}
