import React, { useMemo, useState } from 'react';
import { CheckCircle2, Circle, RotateCcw, XCircle } from 'lucide-react';
import type { AnswerRecord, PhysicsProblem, ProblemTopic } from '../types/physics';
import type { ProgressSummary } from '../utils/numericValidation';
import { PHYSICS_CONSTANTS } from '../data/problems';

interface DashboardPageProps {
  problems: PhysicsProblem[];
  answers: Record<number, AnswerRecord>;
  summary: ProgressSummary;
  onSelectProblem: (id: number) => void;
  onResetProgress: () => void;
}

type StatusFilter = 'semua' | 'belum' | 'sudah' | 'benar' | 'salah';

export const DashboardPage: React.FC<DashboardPageProps> = ({
  problems,
  answers,
  summary,
  onSelectProblem,
  onResetProgress,
}) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('semua');
  const [topicFilter, setTopicFilter] = useState<'Semua Topik' | ProblemTopic>('Semua Topik');
  const [showResetModal, setShowResetModal] = useState(false);

  const topics: Array<'Semua Topik' | ProblemTopic> = [
    'Semua Topik',
    'Kinematika',
    'Dinamika & Gaya',
    'Usaha, Energi & Momentum',
    'Rotasi, Statika & Osilasi',
  ];

  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      if (topicFilter !== 'Semua Topik' && p.topic !== topicFilter) return false;
      const rec = answers[p.id];
      if (statusFilter === 'belum') return !rec;
      if (statusFilter === 'sudah') return Boolean(rec);
      if (statusFilter === 'benar') return Boolean(rec?.isCorrect);
      if (statusFilter === 'salah') return Boolean(rec && !rec.isCorrect);
      return true;
    });
  }, [problems, answers, statusFilter, topicFilter]);

  const progressPercent = summary.total > 0 ? Math.round((summary.answered / summary.total) * 100) : 0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header & progress summary */}
      <section className="rounded-2xl border border-blue-200 bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-wider text-orange-600 uppercase">
              {PHYSICS_CONSTANTS.teacherTitle} · {PHYSICS_CONSTANTS.teacherName}
            </p>
            <h1 className="font-display mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Dashboard Latihan 40 Soal
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Pilih nomor soal sesuai urutan naskah asli OSK Fisika 2025 untuk mulai mengerjakan atau meninjau jawaban.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-bold text-red-700 transition-colors hover:bg-red-100"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset Progres
          </button>
        </div>

        {/* Progress indicator bar */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-700">
            <span>
              Progres Pengerjaan:{' '}
              <span className="font-mono font-bold text-blue-900 tabular-nums">
                {summary.answered} / {summary.total} soal ({progressPercent}%)
              </span>
            </span>
            <span className="font-mono tabular-nums text-slate-600">
              Benar: <strong className="text-emerald-700">{summary.correct}</strong> · Salah:{' '}
              <strong className="text-red-700">{summary.incorrect}</strong> · Belum:{' '}
              <strong className="text-slate-800">{summary.unanswered}</strong>
            </span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-orange-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 border-t border-blue-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1">
            {(
              [
                ['semua', 'Semua'],
                ['belum', 'Belum Dikerjakan'],
                ['sudah', 'Sudah Dikerjakan'],
                ['benar', 'Benar'],
                ['salah', 'Salah'],
              ] as Array<[StatusFilter, string]>
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setStatusFilter(key)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  statusFilter === key
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="topic-select" className="text-xs font-semibold text-slate-600">
              Topik:
            </label>
            <select
              id="topic-select"
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value as 'Semua Topik' | ProblemTopic)}
              className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
            >
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Problem grid */}
      <section className="mt-6">
        {filteredProblems.length === 0 ? (
          <div className="rounded-2xl border border-blue-200 bg-white p-10 text-center">
            <p className="font-display text-base font-bold text-slate-800">
              Tidak ada soal yang cocok dengan filter ini.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatusFilter('semua');
                setTopicFilter('Semua Topik');
              }}
              className="mt-3 rounded-lg bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600"
            >
              Tampilkan Semua Soal
            </button>
          </div>
        ) : (
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProblems.map((p) => {
              const rec = answers[p.id];
              const statusLabel = !rec
                ? 'Belum Dikerjakan'
                : rec.isCorrect
                ? 'Benar'
                : 'Salah';

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onSelectProblem(p.id)}
                  className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition-colors ${
                    !rec
                      ? 'border-blue-200 bg-white hover:border-orange-400 hover:bg-orange-50/30'
                      : rec.isCorrect
                      ? 'border-emerald-300 bg-emerald-50/40 hover:border-emerald-500'
                      : 'border-red-300 bg-red-50/40 hover:border-red-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm font-extrabold text-blue-900 tabular-nums">
                        Soal #{p.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-bold ${
                          !rec
                            ? 'text-slate-500'
                            : rec.isCorrect
                            ? 'text-emerald-700'
                            : 'text-red-700'
                        }`}
                      >
                        {!rec ? (
                          <Circle className="h-3.5 w-3.5" />
                        ) : rec.isCorrect ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : (
                          <XCircle className="h-3.5 w-3.5" />
                        )}
                        {statusLabel}
                      </span>
                    </div>
                    <h2 className="font-display mt-2 line-clamp-2 text-sm font-bold text-slate-900 group-hover:text-blue-900">
                      {p.title}
                    </h2>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-200/70 pt-2.5 text-xs text-slate-500">
                    <span className="truncate">{p.topic}</span>
                    {rec && (
                      <span className="font-mono shrink-0 font-semibold text-slate-700 tabular-nums">
                        {rec.normalizedInput}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Reset confirmation modal */}
      {showResetModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
        >
          <div className="w-full max-w-md rounded-2xl border border-blue-200 bg-white p-6">
            <h2 id="reset-dialog-title" className="font-display text-lg font-extrabold text-slate-900">
              Konfirmasi Reset Progres
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Apakah Anda yakin ingin menghapus seluruh jawaban dan mengulang latihan dari awal? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setShowResetModal(false);
                }}
                className="rounded-lg bg-red-600 px-4 py-2 text-xs font-bold text-white hover:bg-red-700"
              >
                Ya, Reset Semua
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
