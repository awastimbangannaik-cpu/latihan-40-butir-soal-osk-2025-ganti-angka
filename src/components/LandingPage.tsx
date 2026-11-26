import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Volume2 } from 'lucide-react';
import type { AppPage } from '../types/physics';
import { PHYSICS_CONSTANTS } from '../data/problems';
import type { ProgressSummary } from '../utils/numericValidation';

interface LandingPageProps {
  summary: ProgressSummary;
  onNavigate: (page: AppPage) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ summary, onNavigate }) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Hero section */}
      <section className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-blue-50/60 to-orange-50/50 p-6 sm:p-10 lg:p-12">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                {PHYSICS_CONSTANTS.teacherTitle} · {PHYSICS_CONSTANTS.teacherName}
              </p>
              <h1 className="font-display mt-3 text-3xl leading-tight font-extrabold tracking-tight text-slate-950 text-balance sm:text-5xl">
                {PHYSICS_CONSTANTS.appTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Platform latihan intensif Olimpiade Sains Nasional Fisika tingkat Kota/Kabupaten 2025. Seluruh 40 soal direkonstruksi setia terhadap naskah asli dengan angka terbarukan, perhitungan ulang presisi satu angka desimal, pembahasan lengkap sembilan tahap, diagram gaya akurat, dan narator suara bahasa Indonesia.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('practice')}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:text-base"
              >
                MULAI LATIHAN
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-blue-300 bg-white px-5 py-3.5 text-sm font-bold text-blue-900 transition-colors hover:bg-blue-50 sm:text-base"
              >
                Lihat Daftar 40 Soal
              </button>
            </div>
          </div>

          {/* Right visual summary card */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-200 bg-white p-6 lg:col-span-5">
            <div>
              <p className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                Informasi Program Latihan
              </p>
              <h2 className="font-display mt-1 text-xl font-extrabold text-slate-900">
                40 Soal Terverifikasi dari Naskah OSK 2025
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Dibimbing langsung oleh <strong className="text-blue-900">{PHYSICS_CONSTANTS.teacherName}</strong> untuk membangun penguasaan konsep dari dasar hingga tingkat olimpiade.
              </p>
            </div>

            <div className="my-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
                <div className="font-mono text-2xl font-bold text-blue-900 tabular-nums">
                  {summary.total}
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-600">
                  Total Soal Direkonstruksi
                </div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
                <div className="font-mono text-2xl font-bold text-orange-600 tabular-nums">
                  9,8 m/s²
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-600">
                  Konstanta Gravitasi Baku
                </div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
                <div className="font-mono text-2xl font-bold text-slate-900 tabular-nums">
                  1 Desimal
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-600">
                  Format Koma (cth: 12,5)
                </div>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
                <div className="font-mono text-2xl font-bold text-emerald-700 tabular-nums">
                  {summary.answered}/{summary.total}
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-600">
                  Progres Anda Saat Ini
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('learning')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-xs font-bold text-blue-900 transition-colors hover:bg-blue-100"
            >
              <BookOpen className="h-4 w-4" />
              Buka Halaman Pembelajaran Konsep
            </button>
          </div>
        </div>
      </section>

      {/* Feature pillars row */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-blue-200 bg-white p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
            Isian Singkat Numerik Presisi
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Tanpa pilihan ganda. Latih ketelitian hitungan dengan pemisah desimal koma serta normalisasi otomatis untuk validasi matematis.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-white p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
            Pembahasan Buku Teks 9 Tahap
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Terbuka setelah pengerjaan: mulai dari pemahaman fenomena, teori dasar, FBD akurat, penurunan rumus, hingga kesalahan umum.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-white p-6">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Volume2 className="h-5 w-5" />
          </div>
          <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
            Narator Suara Bahasa Indonesia
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Dilengkapi kontrol Play, Pause, Resume, Stop, kecepatan suara, serta pelafalan rumus fisika yang natural membimbing siswa.
          </p>
        </div>
      </section>
    </main>
  );
};
