"use client"; import { useState, useEffect } from "react";

// Simple timer hook function useTimer() { const [seconds, setSeconds] = useState(0); const [running, setRunning] = useState(false);

useEffect(() => { if (!running) return; const id = setInterval(() => setSeconds((s) => s + 1), 1000); return () => clearInterval(id); }, [running]);

const start = () => setRunning(true); const stop = () => setRunning(false); const reset = () => { setRunning(false); setSeconds(0); };

return { seconds, start, stop, reset, running }; }

export default function Page() { const initial = [ { id: 1, text: "Supino reto" }, { id: 2, text: "Supino inclinado" }, { id: 3, text: "Crossover" }, { id: 4, text: "Tríceps testa" }, { id: 5, text: "Tríceps corda" }, { id: 6, text: "Fundos na paralela" } ];

const [checks, setChecks] = useState<Record<number, boolean>>({}); const { seconds, start, stop, reset, running } = useTimer();

// Load from localStorage useEffect(() => { const saved = localStorage.getItem("trainingChecks"); if (saved) setChecks(JSON.parse(saved)); }, []);

// Persist useEffect(() => { localStorage.setItem("trainingChecks", JSON.stringify(checks)); }, [checks]);

const toggle = (id: number) => { setChecks((prev) => ({ ...prev, [id]: !prev[id] })); };

const resetAll = () => { setChecks({}); reset(); };

const format = (s: number) => { const m = Math.floor(s / 60).toString().padStart(2, "0"); const sec = (s % 60).toString().padStart(2, "0"); return ${m}:${sec}; };

return ( <main className="min-h-screen bg-neutral-900 text-white p-6 max-w-md mx-auto space-y-6"> <h1 className="text-2xl font-bold">Treino Peito + Tríceps</h1>

<section className="space-y-3">
    {initial.map((item) => (
      <label
        key={item.id}
        className="flex items-center gap-3 bg-neutral-800 p-3 rounded-lg cursor-pointer select-none"
      >
        <input
          type="checkbox"
          checked={!!checks[item.id]}
          onChange={() => toggle(item.id)}
        />
        <span>{item.text}</span>
      </label>
    ))}
  </section>

  <section className="space-y-3 pt-4">
    <div className="text-xl font-mono text-center">{format(seconds)}</div>
    <div className="flex gap-3 justify-center">
      {!running && (
        <button onClick={start} className="bg-green-600 px-4 py-2 rounded-lg">Start</button>
      )}
      {running && (
        <button onClick={stop} className="bg-yellow-600 px-4 py-2 rounded-lg">Stop</button>
      )}
      <button onClick={reset} className="bg-blue-600 px-4 py-2 rounded-lg">Reset Timer</button>
    </div>
  </section>

  <button onClick={resetAll} className="w-full bg-red-700 py-3 rounded-lg mt-6">
    Resetar Tudo
  </button>
</main>

); }
