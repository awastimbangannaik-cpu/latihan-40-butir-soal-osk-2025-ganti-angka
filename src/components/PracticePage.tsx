import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Grid,
  Save,
  XCircle,
} from 'lucide-react';
import type { AnswerRecord, AppPage, PhysicsProblem } from '../types/physics';
import { normalizeAndValidateAnswer } from '../utils/numericValidation';
import { MathText } from './MathText';
import { StimulusDiagram } from './StimulusDiagram';
import { NarratorPanel } from './NarratorPanel';
import { SolutionAccordion } from './SolutionAccordion';
import { PHYSICS_CONSTANTS } from '../data/problems';

interface PracticePageProps {
  problems: PhysicsProblem[];
  currentProblemId: number;
  answers: Record<number, AnswerRecord>;
  onChangeProblem: (id: number) => void;
  onSaveAnswer: (id: number, record: AnswerRecord) => void;
  onNavigate: (page: AppPage) => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  problems,
  currentProblemId,
  answers,
  onChangeProblem,
  onSaveAnswer,
  onNavigate,
}) => {
  const problem = problems.find((p) => p.id === currentProblemId) ?? problems[0];
  const savedRecord = answers[problem.id];

  const [inputValue, setInputValue] = useState<string>(savedRecord?.rawInput ?? '');
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    setInputValue(savedRecord?.rawInput ?? '');
    setValidationError(null);
  }, [problem.id, savedRecord?.rawInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = normalizeAndValidateAnswer(inputValue, problem.answerValue);
    if (!res.valid || res.parsedValue === null) {
      setValidationError(res.error ?? 'Input tidak valid.');
      return;
    }

    setValidationError(null);
    onSaveAnswer(problem.id, {
      rawInput: inputValue.trim(),
      normalizedInput: res.normalizedString,
      parsedValue: res.parsedValue,
      isCorrect: res.isCorrect,
      submittedAt: Date.now(),
    });
  };

  const hasPrev = problem.id > 1;
  const hasNext = problem.id < problems.length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Top context bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-200 bg-white px-5 py-3.5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-extrabold text-blue-900 tabular-nums">
            Soal {problem.id} / {problems.length}
          </span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-xs font-semibold text-blue-700">{problem.topic}</span>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <span className="text-xs font-semibold text-orange-600">
            {PHYSICS_CONSTANTS.teacherTitle}: {PHYSICS_CONSTANTS.teacherName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-900 hover:bg-blue-100"
          >
            <Grid className="h-3.5 w-3.5" />
            Daftar Soal
          </button>
          <button
            type="button"
            onClick={() => onNavigate('results')}
            className="whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            Lihat Hasil
          </button>
        </div>
      </div>

      {/* Main split layout */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left column: Problem text, diagram, narrator */}
        <div className="min-w-0 space-y-5 lg:col-span-7">
          <article className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-7">
            <h1 className="font-display text-xl font-extrabold text-slate-950 sm:text-2xl">
              {problem.id}. {problem.title}
            </h1>

            <div className="mt-4 text-base leading-relaxed text-slate-800">
              <MathText text={problem.questionText} />
            </div>

            <StimulusDiagram
              diagramId={problem.stimulusDiagramId}
              caption={problem.stimulusCaption}
            />

            <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
              Konstanta gravitasi <span className="font-mono font-semibold text-slate-700">g = 9,8 m/s²</span> · Jawaban numerik tepat <strong className="text-slate-700">1 angka di belakang koma</strong> (gunakan koma, contoh: <span className="font-mono">12,5</span>).
            </p>
          </article>

          <NarratorPanel
            problem={problem}
            canNarrateSolution={Boolean(savedRecord)}
          />
        </div>

        {/* Right column: Numeric answer form, navigation, number strip */}
        <div className="min-w-0 space-y-5 lg:col-span-5">
          <section className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <h2 className="font-display text-base font-extrabold text-blue-950">
              Input Jawaban Numerik
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Ketik nilai akhir dalam satuan <strong>{problem.unit}</strong> dengan 1 angka di belakang koma.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor={`answer-input-${problem.id}`}
                  className="block text-xs font-bold text-slate-700"
                >
                  Jawaban Anda ({problem.unit})
                </label>
                <div className="mt-1.5 flex items-center gap-2">
                  <input
                    id={`answer-input-${problem.id}`}
                    type="text"
                    inputMode="decimal"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Contoh: 12,5 atau -3,4"
                    className="w-full rounded-xl border-2 border-blue-200 bg-slate-50 px-4 py-3 font-mono text-lg font-bold text-slate-900 tabular-nums transition-colors focus:border-orange-500 focus:bg-white focus:outline-none"
                  />
                  <span className="shrink-0 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-3 font-mono text-sm font-bold text-blue-900">
                    {problem.unit}
                  </span>
                </div>
                {validationError && (
                  <p role="alert" className="mt-2 text-xs font-semibold text-red-600">
                    {validationError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <Save className="h-4 w-4" />
                SIMPAN JAWABAN
              </button>
            </form>

            {/* Feedback card once saved */}
            {savedRecord && (
              <div
                className={`mt-5 rounded-xl border p-4 ${
                  savedRecord.isCorrect
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                    : 'border-red-300 bg-red-50 text-red-950'
                }`}
              >
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  {savedRecord.isCorrect ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                      <span>Jawaban Benar!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-red-700" />
                      <span>Jawaban Belum Tepat</span>
                    </>
                  )}
                </div>
                <div className="mt-2 space-y-1 text-xs">
                  <p>
                    Input ternormalisasi:{' '}
                    <span className="font-mono font-bold tabular-nums">
                      {savedRecord.normalizedInput} {problem.unit}
                    </span>
                  </p>
                  {!savedRecord.isCorrect && (
                    <p>
                      Kunci jawaban yang benar:{' '}
                      <span className="font-mono font-bold tabular-nums">
                        {problem.answerDisplay} {problem.unit}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                disabled={!hasPrev}
                onClick={() => hasPrev && onChangeProblem(problem.id - 1)}
                className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                  hasPrev
                    ? 'border-blue-300 bg-white text-blue-900 hover:bg-blue-50'
                    : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                }`}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                SOAL SEBELUMNYA
              </button>
              <button
                type="button"
                disabled={!hasNext}
                onClick={() => hasNext && onChangeProblem(problem.id + 1)}
                className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                  hasNext
                    ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                    : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                }`}
              >
                SOAL BERIKUTNYA
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </section>

          {/* Compact 1-40 quick jump */}
          <section className="rounded-2xl border border-blue-200 bg-white p-4">
            <h3 className="font-display text-xs font-bold tracking-wide text-blue-900 uppercase">
              Navigasi Nomor Soal (1–40)
            </h3>
            <div className="mt-3 grid grid-cols-8 gap-1.5 sm:grid-cols-10">
              {problems.map((p) => {
                const rec = answers[p.id];
                const isActive = p.id === problem.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-label={`Buka Soal ${p.id}`}
                    onClick={() => onChangeProblem(p.id)}
                    className={`rounded-lg py-1.5 font-mono text-xs font-bold tabular-nums transition-colors ${
                      isActive
                        ? 'bg-orange-500 text-white ring-2 ring-orange-300'
                        : !rec
                        ? 'border border-blue-200 bg-white text-slate-700 hover:bg-blue-50'
                        : rec.isCorrect
                        ? 'border border-emerald-300 bg-emerald-100 text-emerald-900'
                        : 'border border-red-300 bg-red-100 text-red-900'
                    }`}
                  >
                    {p.id}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* Solution Accordion below */}
      <div className="mt-6">
        <SolutionAccordion
          key={`sol-${problem.id}-${Boolean(savedRecord)}`}
          problem={problem}
          isUnlocked={Boolean(savedRecord)}
          defaultOpen={false}
        />
      </div>
    </main>
  );
};
