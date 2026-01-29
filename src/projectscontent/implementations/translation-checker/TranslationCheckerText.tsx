"use client";

import { useState, useEffect } from "react";
import { phrases } from "./data/phrases";

export default function TranslationCheckerText() {
  // índice de la frase actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // selecciona una frase aleatoria al montar el componente
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentIndex(randomIndex);
  }, []);

  // frase actual
  const phrase = phrases[currentIndex];

  // texto ingresado por el usuario
  const [userInput, setUserInput] = useState("");

  // resultado de la comparación (true / false / null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // controla si se muestra la respuesta
  const [showAnswer, setShowAnswer] = useState(false);

  // normaliza texto para comparación justa
  const normalize = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?]/g, "")
      .replace(/\s+/g, " ");
  };

  // verifica si la respuesta es correcta
  const handleCheck = () => {
    const user = normalize(userInput);
    const expected = normalize(phrase.romaji);

    const result = user === expected;
    setIsCorrect(result);
  };

  // carga una nueva frase y reinicia el estado
  const handleNext = () => {
    const nextIndex = Math.floor(Math.random() * phrases.length);

    setCurrentIndex(nextIndex);
    setUserInput("");
    setIsCorrect(null);
    setShowAnswer(false);
  };

  return (
    <section style={{ marginTop: "1rem" }}>
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
            color: "#fff",
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

      <button
        onClick={handleNext}
        style={{
          marginTop: "0.75rem",
          padding: "0.5rem 1rem",
          border: "1px solid #333",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Next
      </button>

      <button
        onClick={() => setShowAnswer(true)}
        style={{
          marginTop: "0.75rem",
          marginLeft: "0.5rem",
          padding: "0.5rem 1rem",
          border: "1px solid #555",
          background: "#000",
          cursor: "pointer",
        }}
      >
        Show answer
      </button>

      {/* RESPUESTA CORRECTA */}
      {showAnswer && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            border: "1px solid #ddd",
            background: "#000",
          }}
        >
          <p>
            <strong>Romaji:</strong> {phrase.romaji}
          </p>
          <p>
            <strong>Japanese:</strong> {phrase.japanese}
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            <strong>Explanation:</strong> {phrase.explanation}
          </p>
        </div>
      )}

      <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
        (Level: {phrase.level})
      </p>
    </section>
  );
}
