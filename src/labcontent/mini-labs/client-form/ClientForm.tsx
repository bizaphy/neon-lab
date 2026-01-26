"use client";

import { useState } from "react";

export default function ClientForm() {
  const [name, setName] = useState("");

  return (
    <div className="border p-4 rounded">
      <label className="block mb-2">
        Your name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="ml-2 border px-2 py-1"
        />
      </label>

      <p>Hello, {name || "anonymous"}</p>
    </div>
  );
}
