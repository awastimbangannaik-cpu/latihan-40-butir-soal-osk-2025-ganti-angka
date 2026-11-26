import React from 'react';
import type { AppPage } from '../types/physics';
import { PHYSICS_CONSTANTS } from '../data/problems';

interface FooterProps {
  onNavigate: (page: AppPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 border-t border-blue-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm font-extrabold tracking-tight text-blue-900">
            {PHYSICS_CONSTANTS.appTitle}
          </p>
          <p className="mt-1 text-xs font-semibold tracking-wide text-orange-600">
            {PHYSICS_CONSTANTS.teacherTitle} · {PHYSICS_CONSTANTS.teacherName}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            40 soal latihan rekonstruksi terstruktur OSK Fisika SMA 2025 dengan pembulatan 1 desimal.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600">
          <button
            type="button"
            onClick={() => onNavigate('landing')}
            className="hover:text-blue-700"
          >
            Beranda
          </button>
          <button
            type="button"
            onClick={() => onNavigate('dashboard')}
            className="hover:text-blue-700"
          >
            Dashboard Soal
          </button>
          <button
            type="button"
            onClick={() => onNavigate('learning')}
            className="hover:text-blue-700"
          >
            Pusat Pembelajaran
          </button>
          <button
            type="button"
            onClick={() => onNavigate('results')}
            className="hover:text-blue-700"
          >
            Rekap Hasil
          </button>
        </div>
      </div>
    </footer>
  );
};
