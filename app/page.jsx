"use client";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Supino reto", done: false },
    { id: 2, text: "Supino inclinado", done: false },
    { id: 3, text: "Crossover", done: false },
    { id: 4, text: "Tríceps testa", done: false },
    { id: 5, text: "Tríceps corda", done: false },
    { id: 6, text: "Fundos na paralela", done: false },
  ]);

  const toggle = id =>
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Só Vai</h1>

      <ul className="space-y-3">
        {tasks.map(t => (
          <li
            key={t.id}
            onClick={() => toggle(t.id)}
            className={`cursor-pointer p-3 border rounded ${t.done ? "line-through opacity-60" : ""}`}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </main>
  );
}      clearInterval(interval);
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
