import { PROBLEMS_PART_1 } from './problemsPart1';
import { PROBLEMS_PART_2 } from './problemsPart2';
import { PROBLEMS_PART_3 } from './problemsPart3';
import { PROBLEMS_PART_4 } from './problemsPart4';
import type { PhysicsProblem } from '../types/physics';

export const PHYSICS_PROBLEMS: PhysicsProblem[] = [
  ...PROBLEMS_PART_1,
  ...PROBLEMS_PART_2,
  ...PROBLEMS_PART_3,
  ...PROBLEMS_PART_4,
];

export const PHYSICS_CONSTANTS = {
  gravity: 9.8,
  totalProblems: PHYSICS_PROBLEMS.length,
  teacherTitle: 'PEMBINA OLIMPIADE FISIKA',
  teacherName: 'MISTER JO',
  appTitle: 'OLIMPIADE FISIKA KOTA 2025',
} as const;
