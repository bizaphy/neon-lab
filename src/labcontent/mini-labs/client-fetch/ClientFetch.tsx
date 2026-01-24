"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

export default function ClientFetch() {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(setTodo);
  }, []);

  return (
    <div className="border p-4 rounded">
      <p>Fetched on client:</p>
      {todo ? <strong>{todo.title}</strong> : <span>Loading…</span>}
    </div>
  );
}
