"use client";

import { useState, useEffect } from "react";

export default function Page() {
  // LISTA DE EXERCÍCIOS
  const initial = [
    { id: 1, text: "Supino reto" },
    { id: 2, text: "Supino inclinado" },
    { id: 3, text: "Crossover" },
    { id: 4, text: "Tríceps testa" },
    { id: 5, text: "Tríceps corda" },
    { id: 6, text: "Fundos na paralela" }
  ];

  const [items, setItems] = useState(initial);

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // TIMER
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!running && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Só Vai</h1>

      {/* CHECKLIST */}
      <div className="space-y-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-4 rounded-lg cursor-pointer border ${
              item.done ? "bg-green-600 border-green-700" : "bg-gray-800 border-gray-700"
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* TIMER */}
      <div className="text-center">
        <div className="text-4xl font-bold mb-4">
          {String(Math.floor(seconds / 60)).padStart(2, "0")}:
          {String(seconds % 60).padStart(2, "0")}
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={start} className="px-4 py-2 bg-blue-600 rounded">
            Start
          </button>
          <button onClick={stop} className="px-4 py-2 bg-yellow-600 rounded">
            Stop
          </button>
          <button onClick={reset} className="px-4 py-2 bg-red-600 rounded">
            Reset
          </button>
        </div>
      </div>
    </main>
  );
              }
