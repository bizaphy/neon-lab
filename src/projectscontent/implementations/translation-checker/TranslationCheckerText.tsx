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

  // frase actual según el índice
  const phrase = phrases[currentIndex];

  // texto ingresado por el usuario
  const [userInput, setUserInput] = useState("");

  // resultado de la comparación (true / false / null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // normaliza texto para comparación justa
  const normalize = (text: string) => {
    return text
      .toLowerCase() // ignora mayúsculas
      .trim() // elimina espacios extremos
      .replace(/[.,!?]/g, "") // elimina puntuación
      .replace(/\s+/g, " "); // normaliza espacios
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
  };

  return (
    <section style={{ marginTop: "1rem" }}>
      <h2>Translation Checker</h2>

      {/* instrucción principal */}
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Translate the following sentence (ENGLISH to JAPANESE):
      </p>

      {/* frase a traducir */}
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
        {/* etiqueta del input */}
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Your answer (romaji):
        </label>

        {/* input controlado */}
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

        {/* botón de verificación */}
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

        {/* feedback de resultado */}
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

        {/* muestra lo que escribió el usuario */}
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.7 }}>
          You typed: <code>{userInput}</code>
        </p>
      </div>

      {/* botón para pasar a otra frase */}
      <button
        onClick={handleNext}
        style={{
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
          padding: "0.5rem 1rem",
          border: "1px solid #333",
          background: "#000",
          cursor: "pointer",
        }}
      >
        Next
      </button>

      {/* nivel de dificultad */}
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
        (Level: {phrase.level})
      </p>
    </section>
  );
}
