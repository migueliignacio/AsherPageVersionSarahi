"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface Question {
  question: string;
  options: string[];
}

const QUESTIONS: Question[] = [
  {
    question: "¿En qué punto está tu marca?",
    options: [
      "Estoy empezando",
      "Ya existe pero se ve improvisada",
      "Existe y quiero vender más",
      "Necesito presencia digital",
      "Quiero protegerla legalmente",
    ],
  },
  {
    question: "¿Qué es lo más urgente para ti ahora?",
    options: ["Imagen y diseño", "Más clientes y ventas", "Página web o herramientas", "Seguridad legal"],
  },
  {
    question: "¿Tienes ya logo e identidad?",
    options: ["Sí", "No", "Quiero mejorarlos"],
  },
];

const TOTAL = QUESTIONS.length;

/**
 * "Haz tu diagnóstico en 3 pasos" — a short pill quiz, then a name + contact
 * step. Submits to /api/notify (tipo: "diagnostico") so answers land as an
 * email instead of only living in the browser.
 */
export default function DiagnosticoQuiz() {
  const [step, setStep] = useState(0); // 0..TOTAL-1 = questions, TOTAL = contact form, TOTAL+1 = done
  const [answers, setAnswers] = useState<string[]>([]);
  const [negocio, setNegocio] = useState("");
  const [contacto, setContacto] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isQuestion = step < TOTAL;
  const isContactStep = step === TOTAL;
  const isDone = step > TOTAL;

  const selectAnswer = (option: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = option;
      return next;
    });
    setStep((s) => s + 1);
  };

  const goBack = () => setStep((s) => Math.max(0, s - 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (negocio.trim().length < 2) {
      setError("Cuéntanos el nombre de tu negocio.");
      return;
    }
    if (contacto.trim().length < 5) {
      setError("Déjanos un celular o correo para contactarte.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "diagnostico",
          nombre_negocio: negocio,
          contacto,
          respuestas: QUESTIONS.map((q, i) => ({ pregunta: q.question, respuesta: answers[i] ?? "—" })),
          seccion_origen: "Diagnóstico (#diagnostico)",
        }),
      });
    } catch {
      // El diagnóstico no debe bloquearse si el correo falla en enviarse.
    } finally {
      setLoading(false);
      setStep(TOTAL + 1);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
        Diagnóstico gratuito
      </p>
      <h2 className="font-display mt-3 text-center text-3xl font-medium tracking-tight md:text-4xl">
        ¿No sabes por dónde empezar?
      </h2>
      <p className="mt-3 text-center text-sm text-[var(--color-ink-soft)]">
        3 preguntas rápidas. Te decimos exactamente qué necesitas.
      </p>

      <div className="mt-8 rounded-3xl border border-[var(--color-line)] bg-[var(--color-bg)] p-6 shadow-sm md:p-8">
        {!isDone && (
          <div className="mb-6 flex gap-2" aria-hidden="true">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i < Math.min(step + 1, TOTAL) ? "bg-[var(--color-navy)]" : "bg-[var(--color-line)]"
                }`}
              />
            ))}
          </div>
        )}

        {isQuestion && (
          <div>
            <p className="mb-5 text-sm font-semibold text-[var(--color-navy)]">
              {step + 1} / {TOTAL} — {QUESTIONS[step].question}
            </p>
            <div className={QUESTIONS[step].options.length > 3 ? "flex flex-col gap-3" : "flex flex-wrap gap-3"}>
              {QUESTIONS[step].options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectAnswer(option)}
                  data-cursor="expand"
                  className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-3 text-left text-sm font-medium text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-[var(--color-bg)]"
                >
                  {option}
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="mt-5 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-ink-soft)] underline underline-offset-4"
              >
                ← Volver
              </button>
            )}
          </div>
        )}

        {isContactStep && (
          <form onSubmit={handleSubmit}>
            <p className="mb-5 text-sm font-semibold text-[var(--color-navy)]">Último paso — ¿a quién le llega esto?</p>
            <div className="space-y-3.5">
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none placeholder:opacity-50"
              />
              <input
                type="text"
                placeholder="Celular o correo"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-sm outline-none placeholder:opacity-50"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] py-3.5 text-sm font-semibold text-[var(--color-bg)] transition-opacity disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? "Enviando…" : "Ver mi diagnóstico"}
              </button>
            </div>
            <button
              type="button"
              onClick={goBack}
              className="mt-4 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-ink-soft)] underline underline-offset-4"
            >
              ← Volver
            </button>
          </form>
        )}

        {isDone && (
          <div className="py-6 text-center">
            <p className="font-display text-2xl font-medium">¡Listo!</p>
            <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
              Con tus respuestas, nuestro equipo te escribe pronto con una recomendación a la medida.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
