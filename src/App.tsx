import { useEffect, useMemo, useState } from 'react';
import { PHYSICS_PROBLEMS } from './data/problems';
import type { AnswerRecord, AppPage, UserProgressState } from './types/physics';
import { computeSummaryStats } from './utils/numericValidation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { DashboardPage } from './components/DashboardPage';
import { PracticePage } from './components/PracticePage';
import { ResultsPage } from './components/ResultsPage';
import { LearningPage } from './components/LearningPage';

const STORAGE_KEY = 'osk_fisika_2025_mister_jo_progress_v1';

function loadInitialProgress(): UserProgressState {
  if (typeof window === 'undefined') {
    return { answers: {}, currentProblemId: 1 };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { answers: {}, currentProblemId: 1 };
    const parsed = JSON.parse(raw) as Partial<UserProgressState>;
    const answers = parsed.answers && typeof parsed.answers === 'object' ? parsed.answers : {};
    const currentProblemId =
      typeof parsed.currentProblemId === 'number' &&
      parsed.currentProblemId >= 1 &&
      parsed.currentProblemId <= PHYSICS_PROBLEMS.length
        ? parsed.currentProblemId
        : 1;
    return { answers, currentProblemId };
  } catch {
    return { answers: {}, currentProblemId: 1 };
  }
}

function getInitialPage(): AppPage {
  if (typeof window === 'undefined') return 'landing';
  const params = new URLSearchParams(window.location.search);
  if (params.get('autostart') === '1') return 'practice';
  const savedPage = window.localStorage.getItem(`${STORAGE_KEY}_page`) as AppPage | null;
  if (
    savedPage === 'landing' ||
    savedPage === 'dashboard' ||
    savedPage === 'practice' ||
    savedPage === 'results' ||
    savedPage === 'learning'
  ) {
    return savedPage;
  }
  return 'landing';
}

export default function App() {
  const [progress, setProgress] = useState<UserProgressState>(loadInitialProgress);
  const [currentPage, setCurrentPage] = useState<AppPage>(getInitialPage);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore quota errors
    }
  }, [progress]);

  useEffect(() => {
    try {
      window.localStorage.setItem(`${STORAGE_KEY}_page`, currentPage);
    } catch {
      // Ignore quota errors
    }
  }, [currentPage]);

  const summary = useMemo(
    () => computeSummaryStats(PHYSICS_PROBLEMS, progress.answers),
    [progress.answers]
  );

  const handleNavigate = (page: AppPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProblem = (id: number) => {
    setProgress((prev) => ({ ...prev, currentProblemId: id }));
    setCurrentPage('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChangeProblem = (id: number) => {
    setProgress((prev) => ({ ...prev, currentProblemId: id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveAnswer = (id: number, record: AnswerRecord) => {
    setProgress((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [id]: record,
      },
    }));
  };

  const handleResetProgress = () => {
    setProgress({ answers: {}, currentProblemId: 1 });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        hasStarted={summary.answered > 0}
      />

      <div className="flex-1">
        {currentPage === 'landing' && (
          <LandingPage summary={summary} onNavigate={handleNavigate} />
        )}

        {currentPage === 'dashboard' && (
          <DashboardPage
            problems={PHYSICS_PROBLEMS}
            answers={progress.answers}
            summary={summary}
            onSelectProblem={handleSelectProblem}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentPage === 'practice' && (
          <PracticePage
            problems={PHYSICS_PROBLEMS}
            currentProblemId={progress.currentProblemId}
            answers={progress.answers}
            onChangeProblem={handleChangeProblem}
            onSaveAnswer={handleSaveAnswer}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'results' && (
          <ResultsPage
            problems={PHYSICS_PROBLEMS}
            answers={progress.answers}
            summary={summary}
            onSelectProblem={handleSelectProblem}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'learning' && (
          <LearningPage
            problems={PHYSICS_PROBLEMS}
            initialProblemId={progress.currentProblemId}
            onPracticeProblem={handleSelectProblem}
          />
        )}
      </div>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
