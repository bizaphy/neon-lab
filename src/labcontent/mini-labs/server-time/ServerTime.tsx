export default function ServerTime() {
  const time = new Date().toLocaleTimeString();

  return (
    <div className="border p-4 rounded">
      <p>Server time (fixed per request):</p>
      <strong>{time}</strong>
    </div>
  );
}
