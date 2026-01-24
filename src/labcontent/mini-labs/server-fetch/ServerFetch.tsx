type Todo = {
  id: number;
  title: string;
};

export default async function ServerFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo: Todo = await res.json();

  return (
    <div className="border p-4 rounded">
      <p>Fetched on server:</p>
      <strong>{todo.title}</strong>
    </div>
  );
}
