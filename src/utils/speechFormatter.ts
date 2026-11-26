import type { PhysicsProblem } from '../types/physics';

const GREEK_MAP: Record<string, string> = {
  '\\theta': 'teta',
  '\\alpha': 'alfa',
  '\\beta': 'beta',
  '\\gamma': 'gama',
  '\\omega': 'omega',
  '\\tau': 'tau',
  '\\mu': 'miu',
  '\\pi': 'pi',
  '\\Delta': 'delta',
  '\\Sigma': 'sigma',
  '\\phi': 'fi',
  '\\lambda': 'lamda',
};

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': 'nol',
  '1': 'satu',
  '2': 'dua',
  '3': 'tiga',
  '4': 'empat',
  'k': 'kinetik',
  's': 'statis',
  'min': 'minimum',
  'max': 'maksimum',
  'maks': 'maksimum',
  'tot': 'total',
  'total': 'total',
  'eff': 'efektif',
  'rel': 'relatif',
  'pm': 'pusat massa',
  'cm': 'pusat massa',
  'up': 'naik',
  'down': 'turun',
  'naik': 'naik',
  'turun': 'turun',
  'henti': 'henti',
  'puncak': 'puncak',
  'arus': 'arus',
  'pria': 'pria',
  'ember': 'ember',
  'pasir': 'pasir',
  'cakram': 'cakram',
  'batang': 'batang',
  'semu': 'semu',
  'tepi': 'tepi',
};

function convertUnitsText(raw: string): string {
  return raw
    .replace(/m\/s\^2/g, 'meter per sekon kuadrat')
    .replace(/m\/s²/g, 'meter per sekon kuadrat')
    .replace(/m\/s/g, 'meter per sekon')
    .replace(/km\/h/g, 'kilometer per jam')
    .replace(/km\/jam/g, 'kilometer per jam')
    .replace(/rad\/s/g, 'radian per sekon')
    .replace(/J\/s/g, 'joule per sekon')
    .replace(/kg\/m/g, 'kilogram per meter')
    .replace(/g\/s/g, 'gram per sekon')
    .replace(/kg\s*m\/s/g, 'kilogram meter per sekon')
    .replace(/kg\s*m\^2/g, 'kilogram meter persegi')
    .replace(/Nm\^2/g, 'newton meter persegi')
    .replace(/N\^2/g, 'newton kuadrat')
    .replace(/N²/g, 'newton kuadrat')
    .replace(/s\^2/g, 'sekon kuadrat')
    .replace(/m\^2/g, 'meter persegi')
    .replace(/\bton\b/g, 'ton')
    .replace(/\bkg\b/g, 'kilogram')
    .replace(/\bg\b/g, 'gram')
    .replace(/\bcm\b/g, 'sentimeter')
    .replace(/\bkm\b/g, 'kilometer')
    .replace(/\bN\b/g, 'newton')
    .replace(/\bJ\b/g, 'joule')
    .replace(/\bm\b/g, 'meter')
    .replace(/\bs\b/g, 'sekon');
}

/**
 * Converts LaTeX/math physics notation into natural Indonesian speech
 * so the TTS narrator never reads symbols chaotically or confuses variable m with meter.
 */
export function mathToIndonesianSpeech(input: string): string {
  let text = input;

  // Replace ellipsis blanks like "adalah ... \text{N}." cleanly
  text = text.replace(/\.\.\./g, ' titik-titik ');

  // Convert explicit unit blocks inside \text{...} or \mathrm{...} BEFORE stripping math
  text = text.replace(/\\(?:text|mathrm)\{([^}]*)\}/g, (_, inner: string) => {
    return ` ${convertUnitsText(inner.trim())} `;
  });

  // Strip display/inline math delimiters
  text = text.replace(/\$\$/g, ' ').replace(/\$/g, ' ');

  // Handle degree notations cleanly before generic ^ handling
  text = text
    .replace(/\^\{\\circ\}/g, ' derajat')
    .replace(/\^\\circ/g, ' derajat')
    .replace(/\\circ/g, ' derajat')
    .replace(/°/g, ' derajat');

  // Replace \vec{x} and \hat{x}
  text = text.replace(/\\vec\{([^}]*)\}/g, 'vektor $1');
  text = text.replace(/\\hat\{([ijk])\}/g, 'vektor satuan $1');
  text = text.replace(/\\hat\{([^}]*)\}/g, 'topi $1');

  // Replace \overline{BC}
  text = text.replace(/\\overline\{([^}]*)\}/g, 'garis $1');

  // Replace \sqrt{...}
  text = text.replace(/\\sqrt\{([^}]*)\}/g, 'akar kuadrat dari $1');

  // Replace nested/simple \frac{a}{b}
  for (let i = 0; i < 3; i++) {
    text = text.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1 per $2');
  }

  // Replace trig & log functions
  text = text
    .replace(/\\sin/g, 'sinus')
    .replace(/\\cos/g, 'kosinus')
    .replace(/\\tan/g, 'tangen')
    .replace(/\\ln/g, 'logaritma natural')
    .replace(/\\times/g, ' dikali ')
    .replace(/\\cdot/g, ' kali ')
    .replace(/\\approx/g, ' kira-kira sama dengan ')
    .replace(/\\implies/g, ' maka ')
    .replace(/\\Rightarrow/g, ' maka ')
    .replace(/\\to/g, ' menuju ')
    .replace(/\\le/g, ' kurang dari atau sama dengan ')
    .replace(/\\ge/g, ' lebih dari atau sama dengan ')
    .replace(/\\neq/g, ' tidak sama dengan ')
    .replace(/\\pm/g, ' plus minus ')
    .replace(/\\propto/g, ' sebanding dengan ')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, ' ');

  // Replace Greek letters
  for (const [cmd, word] of Object.entries(GREEK_MAP)) {
    text = text.replaceAll(cmd, ` ${word} `);
  }

  // Replace common powers
  text = text.replace(/\^2\b/g, ' kuadrat');
  text = text.replace(/\^\{2\}/g, ' kuadrat');
  text = text.replace(/²/g, ' kuadrat');
  text = text.replace(/\^3\b/g, ' pangkat tiga');
  text = text.replace(/\^\{3\}/g, ' pangkat tiga');
  text = text.replace(/\^\{([^}]*)\}/g, ' pangkat $1');
  text = text.replace(/\^([a-zA-Z0-9])/g, ' pangkat $1');

  // Separate implicit multiplication like 2m_1 -> 2 m_1 before subscript expansion
  text = text.replace(/(\d)([a-zA-Z])/g, '$1 $2');

  // Replace subscripts like m_1, v_{0y}, h_{\min}
  text = text.replace(/_\{([^}]*)\}/g, (_, sub: string) => {
    const clean = sub.replace(/\\/g, '').trim();
    const mapped = SUBSCRIPT_MAP[clean];
    return ` ${mapped ?? clean}`;
  });
  text = text.replace(/_([a-zA-Z0-9])/g, (_, sub: string) => {
    const mapped = SUBSCRIPT_MAP[sub];
    return ` ${mapped ?? sub}`;
  });

  // Convert standalone compound units or units directly following a number (avoiding variable m!)
  text = text
    .replace(/\bm\/s\s*kuadrat\b/g, 'meter per sekon kuadrat')
    .replace(/\bm\/s\b/g, 'meter per sekon')
    .replace(/\bkm\/h\b/g, 'kilometer per jam')
    .replace(/\bkm\/jam\b/g, 'kilometer per jam')
    .replace(/\brad\/s\b/g, 'radian per sekon')
    .replace(/\bJ\/s\b/g, 'joule per sekon')
    .replace(/\bkg\/m\b/g, 'kilogram per meter')
    .replace(/\bg\/s\b/g, 'gram per sekon')
    .replace(/\bkg\s*m\/s\b/g, 'kilogram meter per sekon')
    .replace(/(\d)\s*kg\b/g, '$1 kilogram')
    .replace(/(\d)\s*cm\b/g, '$1 sentimeter')
    .replace(/(\d)\s*km\b/g, '$1 kilometer')
    .replace(/(\d)\s+m(?=\s*(?:[.,;!?)]|$))/g, '$1 meter')
    .replace(/(\d)\s*s\b/g, '$1 sekon')
    .replace(/(\d)\s*N\b/g, '$1 newton')
    .replace(/(\d)\s*J\b/g, '$1 joule');

  // Decimal numbers like 12,5 or -3,4 or LaTeX 12{,}5
  text = text.replace(/\{,\}/g, ',');
  text = text.replace(/(^|\s)-(\d)/g, '$1minus $2');
  text = text.replace(/(\d),(\d)/g, '$1 koma $2');

  // Math operators
  text = text
    .replace(/=/g, ' sama dengan ')
    .replace(/\+/g, ' ditambah ')
    .replace(/:/g, ' berbanding ')
    .replace(/[{}]/g, ' ')
    .replace(/\\/g, ' ');

  // Normalize whitespace & punctuation spacing
  text = text.replace(/\s+/g, ' ').replace(/\s+([.,!?])/g, '$1').trim();
  return text;
}

export function splitSpeechChunks(text: string): string[] {
  const rawParts = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  for (const part of rawParts) {
    if (part.length <= 180) {
      chunks.push(part);
    } else {
      const subParts = part.split(/,\s+/).filter(Boolean);
      let buffer = '';
      for (const sub of subParts) {
        if ((buffer + ', ' + sub).length > 170 && buffer) {
          chunks.push(buffer);
          buffer = sub;
        } else {
          buffer = buffer ? `${buffer}, ${sub}` : sub;
        }
      }
      if (buffer) chunks.push(buffer);
    }
  }
  return chunks;
}

export function buildNarrationChunks(
  problem: PhysicsProblem,
  mode: 'soal' | 'diagram' | 'pembahasan'
): string[] {
  if (mode === 'soal') {
    const intro = `Soal nomor ${problem.id}. Topik ${problem.topic}.`;
    const body = mathToIndonesianSpeech(problem.questionText);
    const spokenUnit = convertUnitsText(problem.unit);
    const closing = `Tuliskan jawaban akhir dalam satuan ${spokenUnit} dengan tepat satu angka di belakang koma.`;
    return splitSpeechChunks(`${intro} ${body} ${closing}`);
  }

  if (mode === 'diagram') {
    const intro = `Penjelasan diagram untuk soal nomor ${problem.id}.`;
    const body = mathToIndonesianSpeech(problem.diagramSpeechNote);
    const fbdSummary = mathToIndonesianSpeech(problem.solution.D_fbd.description);
    return splitSpeechChunks(`${intro} ${body} ${fbdSummary}`);
  }

  const sol = problem.solution;
  const spokenUnit = convertUnitsText(problem.unit);
  const fullText = [
    `Pembahasan lengkap soal nomor ${problem.id} bersama Mister Jo.`,
    `Bagian A, Memahami Fenomena Fisika. ${sol.A_memahamiFenomena}`,
    `Bagian B, Pengetahuan Dasar. ${sol.B_pengetahuanDasar}`,
    `Bagian C, Analisis Fisis. ${sol.C_analisisFisis}`,
    `Bagian D, Diagram Gaya dan Analisis Vektor. ${sol.D_fbd.description}`,
    `Bagian E, Persamaan dan Rumus. ` +
      sol.E_persamaanRumus.map((r) => `${r.label}: ${r.formula}. ${r.meaning}`).join(' '),
    `Bagian F, Penyelesaian Langkah demi Langkah. ` +
      sol.F_penyelesaianLangkah
        .map((st, idx) => `Langkah ${idx + 1}, ${st.stepTitle}. ${st.detail} ${st.math ?? ''}`)
        .join(' '),
    `Jawaban akhir yang tepat adalah ${problem.answerDisplay} ${spokenUnit}.`,
    `Bagian G, Interpretasi Fisika. ${sol.G_interpretasiFisika}`,
    `Bagian H, Kesalahan Umum yang perlu dihindari. ${sol.H_kesalahanUmum.join(' ')}`,
    `Bagian I, Inti Pembelajaran. ${sol.I_intiPembelajaran}`,
  ].join(' ');

  return splitSpeechChunks(mathToIndonesianSpeech(fullText));
}
