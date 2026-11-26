import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, Square, Volume2 } from 'lucide-react';
import type { PhysicsProblem } from '../types/physics';
import { buildNarrationChunks } from '../utils/speechFormatter';

export type NarrationMode = 'soal' | 'diagram' | 'pembahasan';

interface NarratorPanelProps {
  problem: PhysicsProblem;
  canNarrateSolution?: boolean;
  defaultMode?: NarrationMode;
}

export const NarratorPanel: React.FC<NarratorPanelProps> = ({
  problem,
  canNarrateSolution = true,
  defaultMode = 'soal',
}) => {
  const [mode, setMode] = useState<NarrationMode>(defaultMode);
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle');
  const [rate, setRate] = useState<number>(1.0);
  const [activeChunkIndex, setActiveChunkIndex] = useState<number>(-1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const chunks = useMemo(() => buildNarrationChunks(problem, mode), [problem, mode]);

  const statusRef = useRef(status);
  statusRef.current = status;
  const rateRef = useRef(rate);
  rateRef.current = rate;
  const indexRef = useRef(activeChunkIndex);
  indexRef.current = activeChunkIndex;
  const fallbackTimerRef = useRef<number | null>(null);
  const sessionTokenRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const clearTimersAndSpeech = () => {
    sessionTokenRef.current += 1;
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  // Stop narration when switching problem or mode
  useEffect(() => {
    clearTimersAndSpeech();
    setStatus('idle');
    setActiveChunkIndex(-1);
    return () => clearTimersAndSpeech();
  }, [problem.id, mode]);

  // If solution becomes locked on a new question while mode was pembahasan, switch back to soal
  useEffect(() => {
    if (!canNarrateSolution && mode === 'pembahasan') {
      setMode('soal');
    }
  }, [canNarrateSolution, mode]);

  const pickIndonesianVoice = (): SpeechSynthesisVoice | null => {
    if (!voices.length) return null;
    return (
      voices.find((v) => v.lang.toLowerCase() === 'id-id') ??
      voices.find((v) => v.lang.toLowerCase().startsWith('id')) ??
      voices.find((v) => v.name.toLowerCase().includes('indonesia')) ??
      null
    );
  };

  const speakFromIndex = (idx: number, token: number) => {
    if (sessionTokenRef.current !== token) return;
    if (idx >= chunks.length) {
      setStatus('idle');
      setActiveChunkIndex(-1);
      return;
    }

    setActiveChunkIndex(idx);
    const chunkText = chunks[idx];
    const hasSynth = typeof window !== 'undefined' && 'speechSynthesis' in window;
    const availableVoices = hasSynth ? window.speechSynthesis.getVoices() : [];

    // Estimate realistic reading duration (~15 chars/sec at 1.0x)
    const estimatedMs = Math.max(1400, Math.round((chunkText.length / 15) * (1000 / rateRef.current)));

    if (hasSynth && availableVoices.length > 0) {
      const utterance = new SpeechSynthesisUtterance(chunkText);
      utterance.lang = 'id-ID';
      utterance.rate = rateRef.current;
      utterance.pitch = 1.02;
      const idVoice = pickIndonesianVoice();
      if (idVoice) {
        utterance.voice = idVoice;
      }

      let advanced = false;
      const advanceOnce = () => {
        if (advanced || sessionTokenRef.current !== token) return;
        advanced = true;
        if (fallbackTimerRef.current !== null) {
          window.clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = null;
        }
        if (statusRef.current === 'playing') {
          speakFromIndex(idx + 1, token);
        }
      };

      utterance.onend = advanceOnce;
      utterance.onerror = advanceOnce;
      window.speechSynthesis.speak(utterance);

      // Safety watchdog in case browser TTS stalls on an utterance
      fallbackTimerRef.current = window.setTimeout(advanceOnce, estimatedMs + 4500);
    } else {
      // Graceful timed-caption narration fallback if OS has no installed TTS voices
      fallbackTimerRef.current = window.setTimeout(() => {
        if (sessionTokenRef.current === token && statusRef.current === 'playing') {
          speakFromIndex(idx + 1, token);
        }
      }, estimatedMs);
    }
  };

  const handlePlay = () => {
    clearTimersAndSpeech();
    const token = sessionTokenRef.current;
    setStatus('playing');
    statusRef.current = 'playing';
    speakFromIndex(0, token);
  };

  const handlePause = () => {
    if (status !== 'playing') return;
    sessionTokenRef.current += 1;
    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setStatus('paused');
  };

  const handleResume = () => {
    if (status !== 'paused') return;
    const resumeIdx = activeChunkIndex >= 0 ? activeChunkIndex : 0;
    const token = ++sessionTokenRef.current;
    setStatus('playing');
    statusRef.current = 'playing';
    speakFromIndex(resumeIdx, token);
  };

  const handleStop = () => {
    clearTimersAndSpeech();
    setStatus('idle');
    setActiveChunkIndex(-1);
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    rateRef.current = newRate;
    if (status === 'playing') {
      const idx = activeChunkIndex >= 0 ? activeChunkIndex : 0;
      clearTimersAndSpeech();
      const token = sessionTokenRef.current;
      speakFromIndex(idx, token);
    }
  };

  return (
    <section
      aria-label="Narator Suara Mister Jo"
      className="rounded-2xl border border-blue-200 bg-white p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Volume2 className="h-4 w-4" />
          </span>
          <div>
            <h3 className="font-display text-sm font-bold text-slate-900">
              Narator Pembina · Mister Jo
            </h3>
            <p className="text-xs text-slate-500">
              Pembacaan teks bahasa Indonesia dengan pelafalan rumus otomatis
            </p>
          </div>
        </div>

        {/* Mode selector tabs */}
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('soal')}
            className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === 'soal'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Baca Soal
          </button>
          <button
            type="button"
            onClick={() => setMode('diagram')}
            className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === 'diagram'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Baca Diagram
          </button>
          <button
            type="button"
            disabled={!canNarrateSolution}
            onClick={() => setMode('pembahasan')}
            title={!canNarrateSolution ? 'Simpan jawaban dulu untuk membuka pembahasan' : undefined}
            className={`whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              mode === 'pembahasan'
                ? 'bg-blue-600 text-white shadow-xs'
                : canNarrateSolution
                ? 'text-slate-600 hover:text-slate-900'
                : 'cursor-not-allowed text-slate-400'
            }`}
          >
            Baca Pembahasan
          </button>
        </div>
      </div>

      {/* Controls row */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handlePlay}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-orange-500 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            {status === 'idle' ? <Play className="h-3.5 w-3.5" /> : <RotateCcw className="h-3.5 w-3.5" />}
            {status === 'idle' ? 'PLAY' : 'ULANGI'}
          </button>

          <button
            type="button"
            onClick={handlePause}
            disabled={status !== 'playing'}
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
              status === 'playing'
                ? 'border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100'
                : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
            }`}
          >
            <Pause className="h-3.5 w-3.5" />
            PAUSE
          </button>

          <button
            type="button"
            onClick={handleResume}
            disabled={status !== 'paused'}
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
              status === 'paused'
                ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
            }`}
          >
            <Play className="h-3.5 w-3.5" />
            RESUME
          </button>

          <button
            type="button"
            onClick={handleStop}
            disabled={status === 'idle'}
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
              status !== 'idle'
                ? 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                : 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
            }`}
          >
            <Square className="h-3.5 w-3.5" />
            STOP
          </button>
        </div>

        {/* Speed selector */}
        <div className="flex items-center gap-1.5">
          <label htmlFor={`tts-rate-${problem.id}`} className="text-xs font-medium text-slate-600">
            Kecepatan:
          </label>
          <select
            id={`tts-rate-${problem.id}`}
            value={rate}
            onChange={(e) => handleRateChange(Number(e.target.value))}
            className="rounded-lg border border-blue-200 bg-white px-2.5 py-1.5 font-mono text-xs font-semibold text-slate-800 focus:border-blue-500 focus:outline-none"
          >
            <option value={0.85}>0,85x</option>
            <option value={1.0}>1,0x</option>
            <option value={1.2}>1,2x</option>
            <option value={1.4}>1,4x</option>
          </select>
        </div>
      </div>

      {/* Live highlighted transcript */}
      <div className="mt-3 max-h-40 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
        {chunks.map((chunk, i) => {
          const isActive = i === activeChunkIndex && status !== 'idle';
          return (
            <span
              key={i}
              className={`mr-1 inline rounded px-1 py-0.5 transition-colors ${
                isActive ? 'bg-orange-200 font-semibold text-slate-950' : ''
              }`}
            >
              {chunk}
            </span>
          );
        })}
      </div>
    </section>
  );
};
