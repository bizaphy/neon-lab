"use client";
import { useState } from "react";
import { phrases } from "./data/phrases";

export default function TranslationCheckerText() {
  const phrase = phrases[0];
  //para ver lo que escribe el usuario
  const [userInput, setUserInput] = useState("");
  //
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  //normalizador
  const normalize = (text: string) => {
    return text
      .toLowerCase() // ignora mayúsculas
      .trim() // elimina espacios al inicio/fin
      .replace(/[.,!?]/g, "") // elimina puntuación básica
      .replace(/\s+/g, " "); // normaliza espacios múltiples
  };
  //
  const handleCheck = () => {
    const user = normalize(userInput);
    const expected = normalize(phrase.romaji);

    const result = user === expected;
    setIsCorrect(result);
  };
  //

  return (
    <section style={{ marginTop: "1rem" }}>
      <h2>Translation Checker</h2>{" "}
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Translate the following sentence (ENGLISH to JAPANESE):
      </p>
      <blockquote
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem",
          borderLeft: "4px solid #999",
        }}
      >
        {phrase.english}
      </blockquote>
      <div>
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Your answer (romaji):
        </label>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your translation in romaji"
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleCheck}
          style={{
            marginTop: "0.75rem",
            padding: "0.5rem 1rem",
            border: "1px solid #333",
            background: "#000",
            cursor: "pointer",
          }}
        >
          Check
        </button>
        {isCorrect !== null && (
          <p
            style={{
              marginTop: "0.75rem",
              fontWeight: "bold",
              color: isCorrect ? "green" : "red",
            }}
          >
            {isCorrect ? "Correct!" : "Incorrect"}
          </p>
        )}
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.7 }}>
          You typed: <code>{userInput}</code>
        </p>
      </div>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
        (Level: {phrase.level})
      </p>
    </section>
  );
}
