export type AppPage = 'landing' | 'dashboard' | 'practice' | 'results' | 'learning';

export type ProblemTopic =
  | 'Kinematika'
  | 'Dinamika & Gaya'
  | 'Usaha, Energi & Momentum'
  | 'Rotasi, Statika & Osilasi';

export type StimulusDiagramId =
  | 'none'
  | 'gambar-2'
  | 'grafik-6'
  | 'gambar-7'
  | 'gambar-9'
  | 'grafik-13'
  | 'gambar-17'
  | 'gambar-20'
  | 'gambar-23'
  | 'gambar-24'
  | 'gambar-29'
  | 'gambar-30'
  | 'gambar-31'
  | 'gambar-33'
  | 'gambar-35'
  | 'gambar-36'
  | 'gambar-37';

export type FbdDiagramId =
  | 'fbd-flat-hill'
  | 'fbd-two-block-incline'
  | 'fbd-atwood'
  | 'fbd-push-incline'
  | 'fbd-elevator'
  | 'fbd-vx-graph'
  | 'fbd-number-line'
  | 'fbd-vertical-throw'
  | 'fbd-conical-pendulum'
  | 'fbd-static-friction'
  | 'fbd-diving-freefall'
  | 'fbd-parabolic-x-t'
  | 'fbd-projectile-cliff'
  | 'fbd-landing-impulse'
  | 'fbd-horizontal-push'
  | 'fbd-sand-bucket'
  | 'fbd-three-block-cart'
  | 'fbd-train-braking'
  | 'fbd-boat-log-com'
  | 'fbd-loop-the-loop'
  | 'fbd-rotating-disc'
  | 'fbd-pursuit-triangle'
  | 'fbd-ramp-flat-friction'
  | 'fbd-two-particle-T'
  | 'fbd-explosion-3way'
  | 'fbd-elevator-ladder'
  | 'fbd-two-bullets'
  | 'fbd-river-raft'
  | 'fbd-semicircle-rods'
  | 'fbd-L-rod-friction'
  | 'fbd-pulley-two-springs'
  | 'fbd-rolling-sphere'
  | 'fbd-disc-rod-rotation'
  | 'fbd-viscous-dive'
  | 'fbd-three-boxes-contact'
  | 'fbd-sliding-ladder'
  | 'fbd-particle-in-box'
  | 'fbd-brick-up-down'
  | 'fbd-soccer-goal'
  | 'fbd-vector-torque';

export interface FormulaItem {
  label: string;
  formula: string;
  meaning: string;
}

export interface SolutionStep {
  stepTitle: string;
  detail: string;
  math?: string;
}

export interface VectorNote {
  label: string;
  direction: string;
  note: string;
}

export interface SolutionContent {
  A_memahamiFenomena: string;
  B_pengetahuanDasar: string;
  C_analisisFisis: string;
  D_fbd: {
    title: string;
    diagramId: FbdDiagramId;
    description: string;
    vectors: VectorNote[];
  };
  E_persamaanRumus: FormulaItem[];
  F_penyelesaianLangkah: SolutionStep[];
  G_interpretasiFisika: string;
  H_kesalahanUmum: string[];
  I_intiPembelajaran: string;
}

export interface PhysicsProblem {
  id: number;
  topic: ProblemTopic;
  title: string;
  questionText: string;
  unit: string;
  stimulusDiagramId: StimulusDiagramId;
  stimulusCaption?: string;
  diagramSpeechNote: string;
  answerValue: number;
  answerDisplay: string;
  solution: SolutionContent;
}

export interface AnswerRecord {
  rawInput: string;
  normalizedInput: string;
  parsedValue: number;
  isCorrect: boolean;
  submittedAt: number;
}

export interface UserProgressState {
  answers: Record<number, AnswerRecord>;
  currentProblemId: number;
}
