{
  "name": "treino-landpage",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
import { useState, useEffect } from "react";

export default function TreinoPage() { const treinos = { "Peito & Tríceps": [ "Supino reto – 3x10-12", "Supino inclinado – 3x10-12", "Crossover – 3x12-15", "Paralelas – 3x falha", "Tríceps corda – 3x12-15", "Tríceps testa – 3x10-12" ], "Costas & Bíceps": [ "Puxada na frente – 3x10-12", "Remada baixa – 3x10-12", "Remada unilateral – 3x12 cada lado", "Levantamento terra leve – 3x8", "Rosca direta – 3x10-12", "Rosca martelo – 3x12" ], "Pernas & Ombros": [ "Agachamento livre – 3x10", "Leg press – 3x12", "Cadeira extensora – 3x15", "Cadeira flexora – 3x12", "Desenvolvimento – 3x10", "Elevação lateral – 3x15" ] };

const [current, setCurrent] = useState("Peito & Tríceps"); const [checks, setChecks] = useState({}); const [timer, setTimer] = useState(0); const [running, setRunning] = useState(false);

const toggleCheck = (exercise) => { setChecks((prev) => ({ ...prev, [exercise]: !prev[exercise] })); };

useEffect(() => { let interval; if (running && timer > 0) { interval = setInterval(() => setTimer((t) => t - 1), 1000); } else if (timer === 0) { setRunning(false); } return () => clearInterval(interval); }, [running, timer]);

const startTimer = (sec) => { setTimer(sec); setRunning(true); };

return ( <div className="p-6 max-w-xl mx-auto space-y-6"> <h1 className="text-3xl font-bold">Treino Diário</h1>

<select
    value={current}
    onChange={(e) => setCurrent(e.target.value)}
    className="p-2 border rounded-xl w-full"
  >
    {Object.keys(treinos).map((t) => (
      <option key={t}>{t}</option>
    ))}
  </select>

  <div className="space-y-3">
    {treinos[current].map((ex) => (
      <label key={ex} className="flex items-center space-x-3 p-3 bg-gray-100 rounded-2xl">
        <input
          type="checkbox"
          checked={checks[ex] || false}
          onChange={() => toggleCheck(ex)}
          className="w-5 h-5"
        />
        <span>{ex}</span>
      </label>
    ))}
  </div>

  <div className="p-4 bg-white rounded-2xl shadow">
    <h2 className="text-xl font-bold mb-2">Intervalo</h2>

    <div className="text-4xl font-mono mb-4 text-center">{timer}s</div>

    <div className="flex justify-center gap-3">
      <button
        onClick={() => startTimer(60)}
        className="px-4 py-2 bg-black text-white rounded-xl"
      >
        60s
      </button>
      <button
        onClick={() => startTimer(90)}
        className="px-4 py-2 bg-black text-white rounded-xl"
      >
        90s
      </button>
      <button
        onClick={() => startTimer(120)}
        className="px-4 py-2 bg-black text-white rounded-xl"
      >
        120s
      </button>
    </div>
  </div>
</div>

); }
