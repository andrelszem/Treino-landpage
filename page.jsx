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
}
