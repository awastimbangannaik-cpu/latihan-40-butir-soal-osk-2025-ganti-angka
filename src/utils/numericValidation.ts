import type { AnswerRecord, PhysicsProblem } from '../types/physics';

/**
 * Standard mathematical rounding to 1 decimal place (half away from zero).
 */
export function roundToOneDecimal(value: number): number {
  if (!Number.isFinite(value)) return 0;
  const scaled = value * 10;
  const rounded = scaled >= 0 ? Math.floor(scaled + 0.5 + 1e-12) : Math.ceil(scaled - 0.5 - 1e-12);
  const result = rounded / 10;
  return Object.is(result, -0) ? 0 : result;
}

/**
 * Formats a number using Indonesian comma decimal separator and exactly 1 decimal digit.
 */
export function formatIndonesianDecimal(value: number): string {
  const rounded = roundToOneDecimal(value);
  return rounded.toFixed(1).replace('.', ',');
}

export interface ValidationResult {
  valid: boolean;
  parsedValue: number | null;
  normalizedString: string;
  isCorrect: boolean;
  error?: string;
}

/**
 * Parses and validates user numeric input.
 * Accepts comma (",") as primary decimal separator, normalizes dot (".") and trailing zeros (e.g. "12,50" -> "12,5"),
 * and evaluates exact mathematical equivalence to the 1-decimal expected value.
 */
export function normalizeAndValidateAnswer(
  rawInput: string,
  expectedValue: number
): ValidationResult {
  const trimmed = rawInput.trim().replace(/\s+/g, '');
  if (!trimmed) {
    return {
      valid: false,
      parsedValue: null,
      normalizedString: '',
      isCorrect: false,
      error: 'Masukkan jawaban numerik terlebih dahulu.',
    };
  }

  // Reject characters outside digits, sign, comma, or dot
  if (!/^[+-]?(\d+([.,]\d*)?|[.,]\d+)$/.test(trimmed)) {
    return {
      valid: false,
      parsedValue: null,
      normalizedString: '',
      isCorrect: false,
      error: 'Format tidak valid. Gunakan angka dengan koma desimal, misalnya 12,5 atau -3,4.',
    };
  }

  const canonicalDot = trimmed.replace(',', '.');
  const parsed = Number(canonicalDot);
  if (!Number.isFinite(parsed)) {
    return {
      valid: false,
      parsedValue: null,
      normalizedString: '',
      isCorrect: false,
      error: 'Nilai numerik tidak valid.',
    };
  }

  const normalizedVal = Object.is(parsed, -0) ? 0 : parsed;
  const normalizedString = formatIndonesianDecimal(normalizedVal);
  const expectedNormalized = roundToOneDecimal(expectedValue);

  // Strict mathematical equivalence against the 1-decimal target:
  // e.g. 12,5 / 12.5 / 12,50 all equal 12.5, whereas 12,49 or 12,54 do not bypass 1-decimal rounding requirement.
  const isCorrect = Math.abs(normalizedVal - expectedNormalized) < 1e-6;

  return {
    valid: true,
    parsedValue: normalizedVal,
    normalizedString,
    isCorrect,
  };
}

export interface ProgressSummary {
  total: number;
  answered: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  accuracyPercent: number;
  score: number;
  reviewIds: number[];
}

export function computeSummaryStats(
  problems: PhysicsProblem[],
  answers: Record<number, AnswerRecord>
): ProgressSummary {
  const total = problems.length;
  let answered = 0;
  let correct = 0;
  let incorrect = 0;
  const reviewIds: number[] = [];

  for (const p of problems) {
    const rec = answers[p.id];
    if (rec) {
      answered += 1;
      if (rec.isCorrect) {
        correct += 1;
      } else {
        incorrect += 1;
        reviewIds.push(p.id);
      }
    }
  }

  const unanswered = total - answered;
  const accuracyPercent = answered > 0 ? roundToOneDecimal((correct / answered) * 100) : 0;
  const score = total > 0 ? roundToOneDecimal((correct / total) * 100) : 0;

  return {
    total,
    answered,
    correct,
    incorrect,
    unanswered,
    accuracyPercent,
    score,
    reviewIds,
  };
}
