import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeSummaryStats,
  formatIndonesianDecimal,
  normalizeAndValidateAnswer,
  roundToOneDecimal,
} from './numericValidation';
import { buildNarrationChunks, mathToIndonesianSpeech } from './speechFormatter';
import { PHYSICS_PROBLEMS } from '../data/problems';

test('numeric validation normalizes comma, dot, and trailing zeros accurately', () => {
  assert.equal(roundToOneDecimal(110.8743), 110.9);
  assert.equal(roundToOneDecimal(-26.7582), -26.8);
  assert.equal(formatIndonesianDecimal(-4), '-4,0');

  const r1 = normalizeAndValidateAnswer('12,5', 12.5);
  assert.equal(r1.valid, true);
  assert.equal(r1.normalizedString, '12,5');
  assert.equal(r1.isCorrect, true);

  const r2 = normalizeAndValidateAnswer('12.5', 12.5);
  assert.equal(r2.valid, true);
  assert.equal(r2.normalizedString, '12,5');
  assert.equal(r2.isCorrect, true);

  const r3 = normalizeAndValidateAnswer('12,50', 12.5);
  assert.equal(r3.valid, true);
  assert.equal(r3.normalizedString, '12,5');
  assert.equal(r3.isCorrect, true);

  const r4 = normalizeAndValidateAnswer('-26,8', -26.8);
  assert.equal(r4.valid, true);
  assert.equal(r4.isCorrect, true);

  const r5 = normalizeAndValidateAnswer('12,4', 12.5);
  assert.equal(r5.valid, true);
  assert.equal(r5.isCorrect, false);

  const rInvalid = normalizeAndValidateAnswer('12,3,4', 12.3);
  assert.equal(rInvalid.valid, false);

  const rEmpty = normalizeAndValidateAnswer('   ', 0);
  assert.equal(rEmpty.valid, false);
});

test('all 40 reconstructed problems exist in sequential order 1..40 with valid 1-decimal format', () => {
  assert.equal(PHYSICS_PROBLEMS.length, 40);
  const g = 9.8;

  const expectedFromFormulas: Record<number, number> = {
    1: g * Math.sin(0),
    2: 16 * g * Math.sin((45 * Math.PI) / 180),
    3: ((13 - 7) / (13 + 7)) * g,
    4: 15 * g * Math.cos((60 * Math.PI) / 180),
    5: (588 / g) * (g + 2.45),
    6: 54 * (40 / 60),
    7: -2 - 2,
    8: Math.sqrt(9.2 * 9.2 - 2 * g * 1.6),
    9: 0.5 * 3 * g * 0.6 * ((1 - (3 / 5) ** 2) / (3 / 5)),
    10: 185.0,
    11: Math.sqrt(2.4 * 2.4 + 2 * g * 12),
    12: 27 / 6,
    13: -Math.sqrt((30 * (3 / 5)) ** 2 + 2 * g * 20),
    14: (72 * g * 1.2) / 0.015,
    15: 0.5 * 12 * (15 + (180 / 12) * 2) ** 2,
    16: (0.8 + 1.2) * g + 5 * 0.08,
    17: (40 + 25 + 15) * (15 / 25) * g,
    18: (25000 * 24 * 24) / (2 * 60),
    19: (320 / (80 + 320)) * 3.5,
    20: 2.5 * 3.0,
    21: (0.45 * g) / (2.0 * 2.0),
    22: 2.0 + 3 * 2.0 * (1 - 0.5),
    23: 3.6 / 0.3,
    24: (4 / Math.sqrt(5)) * 3.5,
    25: Math.sqrt((960 * 12) / 5),
    26: (588 / g) * (g + 2.45) * 1.6,
    27: (58.8 * 58.8) / (2 * g) / 2.0 - 0.5 * g * 2.0,
    28: 7.5 / (2 * (45 / 60)),
    29: ((8 / 5) * (3 / 5) + 2 * (7 / 25)) / ((9 / 5) * (4 / 5) - 2 * (7 / 25)),
    30: 7 / 10,
    31: (4 * 6 * 3) / (6 + 3) / 5,
    32: 0.05 * g * (0.5 * ((5 / 7) * g * 0.8) * 25) * 0.8,
    33: (17 / 12) * 18 * 1.5 * 1.5 * 4,
    34: (60 / 30) * Math.log(Math.sqrt(2 * g * 15) / 6),
    35: (6.0 / (2.2 + 3.8 + 6.0)) * 18.0,
    36: Math.sqrt(10 * Math.sin((60 * Math.PI) / 180)),
    37: (7 * 300 + 420) / (6 * 300),
    38: (() => {
      const aUp = g * (0.5 + (Math.sqrt(3) / 6) * (Math.sqrt(3) / 2));
      const tStop = 2.94 / aUp;
      const sUp = 0.5 * 2.94 * tStop;
      const aDown = g * (0.5 - (Math.sqrt(3) / 6) * (Math.sqrt(3) / 2));
      const t2 = 0.8 - tStop;
      const sDown = 0.5 * aDown * t2 * t2;
      return sUp - sDown;
    })(),
    39: 35 - (g * 35 * 35) / (2 * 25 * 25 * 0.5),
    40: 2 * 2 + (-1) * (-1) + 3 * 3,
  };

  PHYSICS_PROBLEMS.forEach((p, idx) => {
    assert.equal(p.id, idx + 1, `Problem index ${idx} should have id ${idx + 1}`);
    const expectedRounded = roundToOneDecimal(expectedFromFormulas[p.id]);
    assert.equal(
      p.answerValue,
      expectedRounded,
      `Problem #${p.id} answerValue (${p.answerValue}) must match exact formula (${expectedRounded})`
    );
    assert.equal(
      p.answerDisplay,
      formatIndonesianDecimal(expectedRounded),
      `Problem #${p.id} answerDisplay must match formatted 1-decimal string`
    );
    assert.ok(!p.questionText.includes('undefined'));
  });
});

test('Indonesian math speech formatter converts LaTeX and decimals cleanly', () => {
  const spoken = mathToIndonesianSpeech(
    'Diketahui $m_2 = 2m_1 = 16\\text{ kg}$, $\\theta = 45^\\circ$, dan $\\vec{F} = \\frac{12}{5}\\text{ N}$ atau $12{,}5\\text{ m/s}^2$.'
  );
  assert.ok(!spoken.includes('\\'), `Should not contain raw LaTeX backslashes: ${spoken}`);
  assert.ok(!spoken.includes('$'), `Should not contain math delimiters: ${spoken}`);
  assert.ok(!spoken.includes('^'), `Should not contain raw caret: ${spoken}`);
  assert.ok(!spoken.includes('meter dua'), `Should not confuse variable m with meter: ${spoken}`);
  assert.ok(spoken.includes('m dua sama dengan 2 m satu'));
  assert.ok(spoken.includes('45 derajat'));
  assert.ok(spoken.includes('teta'));
  assert.ok(spoken.includes('vektor F'));
  assert.ok(spoken.includes('12 per 5'));

  const chunks = buildNarrationChunks(PHYSICS_PROBLEMS[1], 'pembahasan');
  assert.ok(chunks.length >= 5);
});

test('summary stats computation works accurately', () => {
  const answers = {
    1: { rawInput: '0,0', normalizedInput: '0,0', parsedValue: 0, isCorrect: true, submittedAt: 1 },
    2: { rawInput: '99,0', normalizedInput: '99,0', parsedValue: 99, isCorrect: false, submittedAt: 2 },
  };
  const stats = computeSummaryStats(PHYSICS_PROBLEMS, answers);
  assert.equal(stats.total, 40);
  assert.equal(stats.answered, 2);
  assert.equal(stats.correct, 1);
  assert.equal(stats.incorrect, 1);
  assert.equal(stats.unanswered, 38);
  assert.equal(stats.accuracyPercent, 50.0);
  assert.deepEqual(stats.reviewIds, [2]);
});
