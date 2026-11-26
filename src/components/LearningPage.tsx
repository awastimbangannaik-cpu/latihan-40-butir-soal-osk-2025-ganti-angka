import React, { useMemo, useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { PhysicsProblem, ProblemTopic } from '../types/physics';
import { PHYSICS_CONSTANTS } from '../data/problems';
import { MathText } from './MathText';
import { StimulusDiagram } from './StimulusDiagram';
import { SolutionAccordion } from './SolutionAccordion';
import { NarratorPanel } from './NarratorPanel';

interface LearningPageProps {
  problems: PhysicsProblem[];
  initialProblemId: number;
  onPracticeProblem: (id: number) => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({
  problems,
  initialProblemId,
  onPracticeProblem,
}) => {
  const [selectedId, setSelectedId] = useState<number>(initialProblemId);
  const [topicFilter, setTopicFilter] = useState<'Semua' | ProblemTopic>('Semua');

  const visibleProblems = useMemo(() => {
    if (topicFilter === 'Semua') return problems;
    return problems.filter((p) => p.topic === topicFilter);
  }, [problems, topicFilter]);

  const activeProblem = problems.find((p) => p.id === selectedId) ?? problems[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Learning Info Panel with Mister Jo identity */}
      <section className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/80 via-white to-orange-50/50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
              <BookOpen className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                Panel Informasi Pembelajaran · {PHYSICS_CONSTANTS.teacherTitle} {PHYSICS_CONSTANTS.teacherName}
              </p>
              <h1 className="font-display mt-1 text-2xl font-extrabold text-slate-950">
                Pusat Pembelajaran Konsep &amp; Pembahasan OSK 2025
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Pelajari teori dasar, diagram gaya bebas (FBD), penurunan rumus, langkah perhitungan, dan kesalahan umum untuk setiap soal dengan pendampingan narator suara Mister Jo.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onPracticeProblem(activeProblem.id)}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-orange-600"
          >
            Latihan Soal #{activeProblem.id}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* Split browser: left question list, right full textbook solution */}
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <aside className="min-w-0 rounded-2xl border border-blue-200 bg-white p-4 lg:col-span-4">
          <div className="mb-3">
            <label htmlFor="learn-topic-filter" className="block text-xs font-bold text-slate-700">
              Filter Topik Pembahasan
            </label>
            <select
              id="learn-topic-filter"
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value as 'Semua' | ProblemTopic)}
              className="mt-1.5 w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
            >
              <option value="Semua">Semua Materi (40 Soal)</option>
              <option value="Kinematika">Kinematika</option>
              <option value="Dinamika & Gaya">Dinamika &amp; Gaya</option>
              <option value="Usaha, Energi & Momentum">Usaha, Energi &amp; Momentum</option>
              <option value="Rotasi, Statika & Osilasi">Rotasi, Statika &amp; Osilasi</option>
            </select>
          </div>

          <div className="max-h-[540px] space-y-1.5 overflow-y-auto pr-1">
            {visibleProblems.map((p) => {
              const isSelected = p.id === activeProblem.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  className={`flex w-full items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                    isSelected
                      ? 'border-orange-400 bg-orange-50 text-slate-950'
                      : 'border-transparent hover:border-blue-200 hover:bg-blue-50/50'
                  }`}
                >
                  <span
                    className={`font-mono mt-0.5 shrink-0 text-xs font-extrabold tabular-nums ${
                      isSelected ? 'text-orange-600' : 'text-blue-800'
                    }`}
                  >
                    #{p.id}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-bold text-slate-900">{p.title}</div>
                    <div className="text-[11px] text-slate-500">{p.topic}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="min-w-0 space-y-5 lg:col-span-8">
          <article className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-blue-800">
              <span>Materi: {activeProblem.topic}</span>
              <span className="font-mono font-bold text-orange-600">
                Kunci: {activeProblem.answerDisplay} {activeProblem.unit}
              </span>
            </div>
            <h2 className="font-display mt-2 text-xl font-extrabold text-slate-950">
              Soal #{activeProblem.id} — {activeProblem.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:text-base">
              <MathText text={activeProblem.questionText} />
            </p>
            <StimulusDiagram
              diagramId={activeProblem.stimulusDiagramId}
              caption={activeProblem.stimulusCaption}
            />
          </article>

          <NarratorPanel
            problem={activeProblem}
            canNarrateSolution={true}
            defaultMode="pembahasan"
          />

          <SolutionAccordion
            key={`learn-${activeProblem.id}`}
            problem={activeProblem}
            isUnlocked={true}
            alwaysVisible={true}
          />
        </div>
      </div>
    </main>
  );
};
