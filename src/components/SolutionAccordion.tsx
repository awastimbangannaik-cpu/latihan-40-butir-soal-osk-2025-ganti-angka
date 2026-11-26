import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lock } from 'lucide-react';
import type { PhysicsProblem } from '../types/physics';
import { MathText } from './MathText';
import { FbdDiagram } from './FbdDiagram';
import { PHYSICS_CONSTANTS } from '../data/problems';

interface SolutionAccordionProps {
  problem: PhysicsProblem;
  isUnlocked: boolean;
  defaultOpen?: boolean;
  alwaysVisible?: boolean;
}

export const SolutionAccordion: React.FC<SolutionAccordionProps> = ({
  problem,
  isUnlocked,
  defaultOpen = false,
  alwaysVisible = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || alwaysVisible);
  const sol = problem.solution;

  if (!isUnlocked && !alwaysVisible) {
    return (
      <div className="rounded-2xl border border-blue-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-700">
              <Lock className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-slate-900">
                LIHAT PEMBAHASAN LENGKAP
              </p>
              <p className="text-xs text-slate-600">
                Pembahasan sistematis terkunci. Simpan jawaban numerik Anda terlebih dahulu untuk membukanya.
              </p>
            </div>
          </div>
          <button
            type="button"
            disabled
            className="shrink-0 cursor-not-allowed whitespace-nowrap rounded-lg border border-slate-300 bg-slate-200 px-4 py-2 text-xs font-bold text-slate-500"
          >
            Terkunci
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-blue-300 bg-white">
      {!alwaysVisible && (
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors hover:bg-blue-50/60"
        >
          <div>
            <span className="font-display text-sm font-extrabold tracking-tight text-blue-900 sm:text-base">
              LIHAT PEMBAHASAN LENGKAP
            </span>
            <p className="mt-0.5 text-xs font-medium text-slate-600">
              {PHYSICS_CONSTANTS.teacherTitle} · {PHYSICS_CONSTANTS.teacherName} — Kunci Jawaban:{' '}
              <span className="font-mono font-bold text-orange-600">
                {problem.answerDisplay} {problem.unit}
              </span>
            </p>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>
        </button>
      )}

      {(isOpen || alwaysVisible) && (
        <div className={`space-y-6 px-5 pb-6 ${alwaysVisible ? 'pt-5' : 'border-t border-blue-100 pt-5'}`}>
          {/* Identity Banner inside Solution */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3">
            <div className="text-xs font-semibold text-blue-950">
              {PHYSICS_CONSTANTS.teacherTitle}:{' '}
              <span className="font-extrabold text-orange-600">{PHYSICS_CONSTANTS.teacherName}</span>
            </div>
            <div className="font-mono text-xs font-bold text-blue-900 tabular-nums">
              Jawaban Akhir: {problem.answerDisplay} {problem.unit}
            </div>
          </div>

          {/* A. Memahami Fenomena Fisika */}
          <section className="space-y-2">
            <h4 className="font-display text-sm font-bold text-blue-900">
              A. Memahami Fenomena Fisika
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              <MathText text={sol.A_memahamiFenomena} />
            </p>
          </section>

          {/* B. Pengetahuan Dasar */}
          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              B. Pengetahuan Dasar
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              <MathText text={sol.B_pengetahuanDasar} />
            </p>
          </section>

          {/* C. Analisis Fisis */}
          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              C. Analisis Fisis
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              <MathText text={sol.C_analisisFisis} />
            </p>
          </section>

          {/* D. Free Body Diagram (FBD) */}
          <section className="space-y-3 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              D. Free Body Diagram (FBD) &amp; Vektor Fisika
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              <MathText text={sol.D_fbd.description} />
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <FbdDiagram diagramId={sol.D_fbd.diagramId} title={sol.D_fbd.title} />
              <div className="space-y-2.5">
                {sol.D_fbd.vectors.map((v, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-900">
                      <span className="font-mono text-blue-800">{v.label}</span>
                      <span className="text-orange-600">{v.direction}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">{v.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* E. Persamaan dan Rumus */}
          <section className="space-y-3 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              E. Persamaan dan Rumus Utama
            </h4>
            <div className="space-y-3">
              {sol.E_persamaanRumus.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-blue-200 bg-blue-50/40 p-4"
                >
                  <p className="text-xs font-bold text-blue-900">{item.label}</p>
                  <div className="my-2 overflow-x-auto text-slate-900">
                    <MathText text={`$$${item.formula}$$`} />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">
                    <MathText text={item.meaning} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* F. Penyelesaian Langkah demi Langkah */}
          <section className="space-y-3 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              F. Penyelesaian Langkah demi Langkah
            </h4>
            <ol className="space-y-3">
              {sol.F_penyelesaianLangkah.map((step, idx) => (
                <li
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="text-xs font-bold text-slate-900">
                    Langkah {idx + 1}. {step.stepTitle}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    <MathText text={step.detail} />
                  </p>
                  {step.math && (
                    <div className="mt-2 overflow-x-auto rounded-lg bg-slate-50 px-3 py-2 text-slate-900">
                      <MathText text={`$$${step.math}$$`} />
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <div className="rounded-xl border border-orange-300 bg-orange-50 px-4 py-3 text-sm font-bold text-orange-950">
              Jawaban Akhir (1 Angka di Belakang Koma):{' '}
              <span className="font-mono text-base text-orange-700">
                {problem.answerDisplay} {problem.unit}
              </span>
            </div>
          </section>

          {/* G. Interpretasi Fisika */}
          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              G. Interpretasi Fisika
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">
              <MathText text={sol.G_interpretasiFisika} />
            </p>
          </section>

          {/* H. Kesalahan Umum */}
          <section className="space-y-2 border-t border-slate-100 pt-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              H. Kesalahan Umum yang Harus Dihindari
            </h4>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
              {sol.H_kesalahanUmum.map((err, idx) => (
                <li key={idx}>
                  <MathText text={err} />
                </li>
              ))}
            </ul>
          </section>

          {/* I. Inti Pembelajaran */}
          <section className="space-y-2 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
            <h4 className="font-display text-sm font-bold text-blue-900">
              I. Inti Pembelajaran
            </h4>
            <p className="text-sm leading-relaxed text-slate-800">
              <MathText text={sol.I_intiPembelajaran} />
            </p>
          </section>
        </div>
      )}
    </div>
  );
};
