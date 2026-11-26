import React from 'react';
import type { AppPage } from '../types/physics';

interface NavbarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  hasStarted: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  hasStarted,
}) => {
  const navLinks: Array<{ page: AppPage; label: string }> = [
    { page: 'landing', label: 'Beranda' },
    { page: 'dashboard', label: 'Dashboard' },
    { page: 'practice', label: 'Latihan' },
    { page: 'results', label: 'Hasil' },
    { page: 'learning', label: 'Pembelajaran' },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-blue-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-8">
        <button
          type="button"
          onClick={() => onNavigate('landing')}
          className="font-display min-w-0 truncate text-left text-sm font-extrabold tracking-tight text-blue-900 transition-colors hover:text-orange-600 sm:shrink-0 sm:text-lg"
        >
          <span className="sm:hidden">OSK FISIKA 2025 – MISTER JO</span>
          <span className="hidden sm:inline">OLIMPIADE FISIKA KOTA 2025 – MISTER JO</span>
        </button>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-5 md:flex lg:gap-7"
        >
          {navLinks.map((item) => {
            const active = currentPage === item.page;
            return (
              <button
                key={item.page}
                type="button"
                onClick={() => onNavigate(item.page)}
                className={`whitespace-nowrap shrink-0 border-b-2 py-1 text-sm font-semibold transition-colors ${
                  active
                    ? 'border-orange-500 text-blue-900'
                    : 'border-transparent text-slate-600 hover:border-blue-300 hover:text-blue-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('practice')}
            className="whitespace-nowrap shrink-0 rounded-lg bg-orange-500 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:px-4 sm:text-sm"
          >
            {hasStarted ? 'Lanjut Latihan' : 'Mulai Latihan'}
          </button>
        </div>
      </div>

      {/* Mobile navigation bar */}
      <nav
        aria-label="Navigasi mobile"
        className="flex items-center justify-between gap-1 border-t border-blue-100 px-3 py-1.5 md:hidden"
      >
        {navLinks.map((item) => {
          const active = currentPage === item.page;
          return (
            <button
              key={item.page}
              type="button"
              onClick={() => onNavigate(item.page)}
              className={`whitespace-nowrap rounded-md px-2 py-1.5 text-[11px] font-semibold transition-colors ${
                active
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
