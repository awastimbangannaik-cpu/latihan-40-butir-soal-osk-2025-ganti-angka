import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import type { AnswerRecord, AppPage, PhysicsProblem, ProblemTopic } from '../types/physics';
import { formatIndonesianDecimal, type ProgressSummary } from '../utils/numericValidation';
import { PHYSICS_CONSTANTS } from '../data/problems';

interface ResultsPageProps {
  problems: PhysicsProblem[];
  answers: Record<number, AnswerRecord>;
  summary: ProgressSummary;
  onSelectProblem: (id: number) => void;
  onNavigate: (page: AppPage) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({
  problems,
  answers,
  summary,
  onSelectProblem,
  onNavigate,
}) => {
  const topics: ProblemTopic[] = [
    'Kinematika',
    'Dinamika & Gaya',
    'Usaha, Energi & Momentum',
    'Rotasi, Statika & Osilasi',
  ];

  const reviewProblems = problems.filter((p) => {
    const rec = answers[p.id];
    return !rec || !rec.isCorrect;
  });

  const incorrectProblems = problems.filter((p) => {
    const rec = answers[p.id];
    return Boolean(rec && !rec.isCorrect);
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <section className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-wider text-orange-600 uppercase">
              {PHYSICS_CONSTANTS.teacherTitle} · {PHYSICS_CONSTANTS.teacherName}
            </p>
            <h1 className="font-display mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Rekapitulasi Hasil Latihan
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Evaluasi ketepatan hitungan numerik dan identifikasi topik yang masih perlu diperdalam.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('practice')}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-orange-600"
            >
              Lanjut Kerjakan Soal
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('learning')}
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-blue-300 bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-900 hover:bg-blue-100"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Buka Pembahasan
            </button>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4">
            <div className="text-xs font-semibold text-slate-600">Soal Dikerjakan</div>
            <div className="font-mono mt-1 text-2xl font-extrabold text-blue-950 tabular-nums">
              {summary.answered} / {summary.total}
            </div>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
            <div className="text-xs font-semibold text-emerald-800">Jawaban Benar</div>
            <div className="font-mono mt-1 text-2xl font-extrabold text-emerald-700 tabular-nums">
              {summary.correct}
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
            <div className="text-xs font-semibold text-red-800">Jawaban Salah</div>
            <div className="font-mono mt-1 text-2xl font-extrabold text-red-700 tabular-nums">
              {summary.incorrect}
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 bg-white p-4">
            <div className="text-xs font-semibold text-slate-600">Persentase Ketepatan</div>
            <div className="font-mono mt-1 text-2xl font-extrabold text-blue-700 tabular-nums">
              {formatIndonesianDecimal(summary.accuracyPercent)}%
            </div>
          </div>

          <div className="rounded-xl border border-orange-300 bg-orange-50 p-4">
            <div className="text-xs font-semibold text-orange-900">Skor Keseluruhan</div>
            <div className="font-mono mt-1 text-2xl font-extrabold text-orange-600 tabular-nums">
              {formatIndonesianDecimal(summary.score)}
            </div>
          </div>
        </div>
      </section>

      {/* Topic breakdown */}
      <section className="mt-6 rounded-2xl border border-blue-200 bg-white p-6">
        <h2 className="font-display text-lg font-extrabold text-slate-900">
          Penguasaan per Bidang Materi
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {topics.map((topic) => {
            const group = problems.filter((p) => p.topic === topic);
            const done = group.filter((p) => Boolean(answers[p.id])).length;
            const ok = group.filter((p) => Boolean(answers[p.id]?.isCorrect)).length;
            const pct = group.length > 0 ? Math.round((ok / group.length) * 100) : 0;

            return (
              <div key={topic} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-2 text-sm font-bold text-slate-900">
                  <span>{topic}</span>
                  <span className="font-mono text-xs text-blue-800 tabular-nums">
                    {ok} benar · {done}/{group.length} dikerjakan
                  </span>
                </div>
                <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* List of questions to review */}
      <section className="mt-6 rounded-2xl border border-blue-200 bg-white p-6">
        <h2 className="font-display text-lg font-extrabold text-slate-900">
          Daftar Soal yang Perlu Dipelajari Kembali
        </h2>
        <p className="mt-1 text-xs text-slate-600">
          Menampilkan soal yang jawabannya masih salah ({incorrectProblems.length} soal) maupun yang belum dikerjakan ({summary.unanswered} soal).
        </p>

        {reviewProblems.length === 0 ? (
          <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm font-bold text-emerald-900">
            <CheckCircle2 className="h-5 w-5 text-emerald-700" />
            Luar biasa! Seluruh 40 soal telah dijawab dengan benar.
          </div>
        ) : (
          <div className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200">
            {reviewProblems.map((p) => {
              const rec = answers[p.id];
              return (
                <div
                  key={p.id}
                  className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-extrabold text-blue-900 tabular-nums">
                        #{p.id}
                      </span>
                      <span className="truncate text-sm font-bold text-slate-900">
                        {p.title}
                      </span>
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span>{p.topic}</span>
                      <span aria-hidden="true">·</span>
                      {rec ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-red-700">
                          <XCircle className="h-3 w-3" />
                          Jawaban Anda: {rec.normalizedInput} (Kunci: {p.answerDisplay})
                        </span>
                      ) : (
                        <span className="font-medium text-slate-500">Belum dikerjakan</span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProblem(p.id)}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-orange-600"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Pelajari Soal #{p.id}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};
