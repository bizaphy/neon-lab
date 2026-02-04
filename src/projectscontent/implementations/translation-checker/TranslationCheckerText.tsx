"use client";

import { useState, useEffect } from "react";
import { phrases } from "./data/phrases";

export default function TranslationCheckerText() {
  //////////////////////////
  //DATOS

  // placeholder inicial
  const [currentIndex, setCurrentIndex] = useState(0);

  // elige una frase al azar para empezar
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentIndex(randomIndex);
  }, []);

  // sacamos la frase actual usando el índice
  const phrase = phrases[currentIndex];

  //////////////////////////
  //INTERACCIÓN:

  // guarda lo que el usuario escribe en el campo de texto
  const [userInput, setUserInput] = useState("");

  // guarda estado de respuesta (null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // controla si se muestra o no la respuesta correcta abajo
  const [showAnswer, setShowAnswer] = useState(false);

  // mensaje temporal cuando intenta marcar correct sin que coincida
  const [showWarning, setShowWarning] = useState(false);

  // normalizacion
  const normalize = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.,!?]/g, "")
      .replace(/\s+/g, "");
  };

  // revisa si es correcta o no la respuesta
  const handleCheck = () => {
    const user = normalize(userInput);
    const expected = normalize(phrase.romaji);

    const result = user === expected;
    setIsCorrect(result);
  };

  //////////////////////////
  // SELF-RATING

  // guarda si el usuario marcó la frase como "correct" o "incorrect" antes de pasar a la siguiente
  const [selfRating, setSelfRating] = useState<"correct" | "incorrect" | null>(
    null,
  );

  //////////////////////////
  // PUNTAJE Y SIGUIENTE FRASE: se suma al contador y se resetea todo

  // guarda el puntaje acumulado
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  // cuando el usuario pulsa "Next", primero suma el rating al contador y LUEGO resetea todo
  const handleNext = () => {
    // 1. suma al contador segun lo que marca el user
    if (selfRating === "correct") {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else if (selfRating === "incorrect") {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    // 2. cambia a una frase nueva al azar
    const nextIndex = Math.floor(Math.random() * phrases.length);
    setCurrentIndex(nextIndex);

    // 3. limpia el campo de texto
    setUserInput("");

    // 4. borra el resultado de Check (correct/incorrect)
    setIsCorrect(null);

    // 5. esconde la respuesta
    setShowAnswer(false);

    // 6. deja los botones Correct/Incorrect sin seleccionar (no actualiza el contador)
    setSelfRating(null);
  };

  return (
    <section style={{ marginTop: "1rem" }}>
      {/* CONTADOR DE PUNTAJE: se muestra arriba todo el tiempo */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "0.5rem",
          fontSize: "0.9rem",
        }}
      >
        <span style={{ color: "green", fontWeight: "bold" }}>
          ✓ {score.correct}
        </span>
        <span style={{ color: "red", fontWeight: "bold" }}>
          ✗ {score.incorrect}
        </span>
      </div>

      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
        Translate the following sentence (ENGLISH to JAPANESE):
      </p>

      {/* FRASE QUE TIENE QUE TRADUCIR */}
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

        {/* INPUT */}
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

        {/* BOTÓN PARA VERIFICAR SI LA RESPUESTA ES CORRECTA */}
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

        {/* MENSAJE DE RESULTADO: (Tras presionar check) */}
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

        {/* muestra el input en tiempo real*/}
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.7 }}>
          You typed: <code>{userInput}</code>
        </p>
      </div>

      {/* boton de show answer*/}
      <button
        onClick={() => setShowAnswer(true)}
        style={{
          marginTop: "0.75rem",
          padding: "0.5rem 1rem",
          border: "1px solid #555",
          background: "#000",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Show answer
      </button>

      {/* RESPUESTA CORRECTA: aparece solo cuando el usuario pulsa "Show answer" */}
      {showAnswer && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            border: "1px solid #ddd",
            background: "#000",
            color: "#fff",
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

      {/* SELF-RATING */}
      <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
        {/* para correcta*/}
        <button
          onClick={() => {
            // hace el check automáticamente antes de permitir marcar como correct
            const user = normalize(userInput);
            const expected = normalize(phrase.romaji);
            const result = user === expected;
            setIsCorrect(result);

            // solo permite marcar como correct si la respuesta coincide
            if (result) {
              setSelfRating("correct");
            } else {
              // si no coincide, muestra el mensaje por 2 segundos y lo borra
              setShowWarning(true);
              setTimeout(() => setShowWarning(false), 2000);
            }
          }}
          style={{
            padding: "0.5rem 1rem",
            border:
              selfRating === "correct" ? "2px solid green" : "1px solid #555",
            background: selfRating === "correct" ? "#d4edda" : "#000",
            color: selfRating === "correct" ? "green" : "#fff",
            cursor: "pointer",
            fontWeight: selfRating === "correct" ? "bold" : "normal",
          }}
        >
          Correct
        </button>

        {/* para incorrecta*/}
        <button
          onClick={() => setSelfRating("incorrect")}
          style={{
            padding: "0.5rem 1rem",
            border:
              selfRating === "incorrect" ? "2px solid red" : "1px solid #555",
            background: selfRating === "incorrect" ? "#f8d7da" : "#000",
            color: selfRating === "incorrect" ? "red" : "#fff",
            cursor: "pointer",
            fontWeight: selfRating === "incorrect" ? "bold" : "normal",
          }}
        >
          Incorrect
        </button>
      </div>

      {/* mensaje temporal si intenta marcar correct sin que coincida */}
      {showWarning && (
        <p
          style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "orange" }}
        >
          You must enter the correct answer first
        </p>
      )}

      {/* boton para next */}
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

      {/* NIVEL DE DIFICULTAD DE LA FRASE ACTUAL */}
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", opacity: 0.7 }}>
        (Level: {phrase.level})
      </p>
    </section>
  );
}
