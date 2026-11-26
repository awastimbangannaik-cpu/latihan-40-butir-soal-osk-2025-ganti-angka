import type { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_1: PhysicsProblem[] = [
  {
    id: 1,
    topic: 'Dinamika & Gaya',
    title: 'Gerak Anak pada Bukit Datar',
    questionText:
      'Seorang anak memiliki massa $45\\text{ kg}$ menuruni bukit. Bila bukit tersebut memiliki kemiringan $0^\\circ$ terhadap garis horizontal, percepatan gerak horizontal dari anak tersebut adalah ... $\\text{m/s}^2$.',
    unit: 'm/s²',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Bayangkan sebuah permukaan datar dengan sudut kemiringan nol derajat terhadap garis horizontal, dan anak bermassa 45 kilogram berada di atasnya.',
    answerValue: 0.0,
    answerDisplay: '0,0',
    solution: {
      A_memahamiFenomena:
        'Soal ini menguji pemahaman konseptual tentang gerak di atas bidang miring dengan kasus batas sudut kemiringan $\\theta = 0^\\circ$. Diketahui massa anak $m = 45\\text{ kg}$ dan sudut kemiringan permukaan $\\theta = 0^\\circ$. Yang ditanyakan adalah percepatan gerak horizontal anak tersebut. Konsep yang relevan adalah Hukum II Newton pada bidang miring karena komponen gaya berat sejajar bidang bergantung pada $\\sin\\theta$.',
      B_pengetahuanDasar:
        'Pada bidang miring licin bersudut $\\theta$ terhadap horizontal, gaya berat $w = m g$ diuraikan menjadi dua komponen: komponen sejajar bidang $w_\\parallel = m g \\sin\\theta$ dan komponen tegak lurus bidang $w_\\perp = m g \\cos\\theta$. Jika tidak ada gaya dorong luar, satu-satunya penyebab benda meluncur menuruni bidang adalah $m g \\sin\\theta$.',
      C_analisisFisis:
        'Tetapkan sumbu $x$ searah permukaan bidang (horizontal saat $\\theta = 0^\\circ$) dan sumbu $y$ tegak lurus permukaan (vertikal ke atas). Karena $\\theta = 0^\\circ$, permukaan bukit sebenarnya mendatar sempurna sehingga tidak ada komponen gaya gravitasi yang bekerja ke arah horizontal.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Anak pada Kemiringan 0°',
        diagramId: 'fbd-flat-hill',
        description:
          'Hanya ada dua gaya yang bekerja secara vertikal dan saling meniadakan, yaitu gaya berat ke bawah dan gaya normal ke atas. Gaya horizontal bernilai nol.',
        vectors: [
          { label: 'w = mg', direction: 'Vertikal ke bawah', note: 'Gaya gravitasi bumi sebesar 441,0 N' },
          { label: 'N', direction: 'Vertikal ke atas', note: 'Gaya normal permukaan sebesar 441,0 N' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Percepatan pada Bidang Miring',
          formula: 'a_x = g \\sin\\theta',
          meaning: 'Komponen percepatan sejajar permukaan akibat gravitasi, independen terhadap massa $m$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Identifikasi besaran yang diketahui',
          detail: 'Massa anak $m = 45\\text{ kg}$, sudut kemiringan $\\theta = 0^\\circ$, percepatan gravitasi $g = 9{,}8\\text{ m/s}^2$.',
        },
        {
          stepTitle: 'Substitusi ke persamaan percepatan',
          detail: 'Hitung percepatan horizontal menggunakan komponen sinus sudut kemiringan.',
          math: 'a_x = 9{,}8 \\cdot \\sin(0^\\circ) = 9{,}8 \\cdot 0 = 0{,}0\\text{ m/s}^2',
        },
      ],
      G_interpretasiFisika:
        'Nilai $0{,}0\\text{ m/s}^2$ berarti gravitasi tidak mampu menggerakkan anak ke arah horizontal pada permukaan yang datar sempurna tanpa dorongan tambahan.',
      H_kesalahanUmum: [
        'Mengira percepatan sama dengan $g = 9{,}8\\text{ m/s}^2$ tanpa melihat sudut kemiringan.',
        'Menggunakan $\\cos 0^\\circ = 1$ alih-alih $\\sin 0^\\circ = 0$ untuk komponen gaya sejajar bidang.',
      ],
      I_intiPembelajaran:
        'Selalu periksa syarat batas sudut pada soal mekanika: kemiringan $0^\\circ$ berarti bidang horizontal datar sehingga komponen gaya berat sepanjang bidang sama dengan nol.',
    },
  },
  {
    id: 2,
    topic: 'Dinamika & Gaya',
    title: 'Kesetimbangan Dua Benda di Bidang Datar dan Miring',
    questionText:
      'Dua buah benda dihubungkan oleh tali ideal tak bermassa seperti ditunjukkan pada Gambar no 2 di bawah, diketahui bahwa $m_2 = 2m_1 = 16\\text{ kg}$. Asumsikan tali dan katrol tidak bermassa dan licin. Jika tidak ada gesekan antara kedua benda dengan permukaan bidang serta diketahui sudut $\\theta = 45^\\circ$, gaya horizontal yang harus diberikan pada benda bermassa $m_1$ agar sistem benda tidak bergerak adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'gambar-2',
    stimulusCaption: 'Gambar no 2 (Angka sudut dan massa telah disesuaikan)',
    diagramSpeechNote:
      'Pada Gambar nomor 2, benda bermassa m satu berada di atas permukaan datar bagian atas, terhubung melalui tali dan katrol di sudut kanan atas ke benda bermassa m dua yang berada di bidang miring bersudut 45 derajat. Panah percepatan gravitasi g mengarah vertikal ke bawah.',
    answerValue: 110.9,
    answerDisplay: '110,9',
    solution: {
      A_memahamiFenomena:
        'Sistem terdiri atas dua balok yang terhubung tali melalui katrol licin di puncak bidang miring. Diketahui $m_2 = 16\\text{ kg}$, $m_1 = 8\\text{ kg}$, sudut bidang miring $\\theta = 45^\\circ$, dan seluruh permukaan licin. Ditanyakan besar gaya horizontal $F$ pada $m_1$ agar sistem tetap diam (kesetimbangan statik).',
      B_pengetahuanDasar:
        'Dalam kondisi setimbang ($\\sum F = 0$), resultan gaya pada setiap benda bernilai nol. Karena tali dan katrol tak bermassa serta licin, besar tegangan tali $T$ seragam di sepanjang tali.',
      C_analisisFisis:
        'Benda $m_2$ cenderung meluncur menuruni bidang miring akibat komponen gaya berat $m_2 g \\sin\\theta$, sehingga menarik tali ke kanan. Agar $m_1$ dan $m_2$ tidak bergerak, gaya luar horizontal $F$ harus diberikan pada $m_1$ ke arah kiri untuk mengimbangi tegangan tali $T$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas pada m₁ dan m₂',
        diagramId: 'fbd-two-block-incline',
        description:
          'Pada m₁ bekerja gaya dorong/tarik horizontal F ke kiri, tegangan tali T ke kanan, gaya berat m₁g ke bawah, dan gaya normal N₁ ke atas. Pada m₂ bekerja berat m₂g ke bawah, gaya normal N₂ tegak lurus bidang miring, dan tegangan tali T sejajar bidang miring ke atas.',
        vectors: [
          { label: 'F', direction: 'Horizontal ke kiri pada m₁', note: 'Menahan tarikan tali agar setimbang' },
          { label: 'T', direction: 'Ke kanan pada m₁ / naik miring pada m₂', note: 'Tegangan tali ideal seragam' },
          { label: 'm₂g sin θ', direction: 'Menuruni bidang miring', note: 'Komponen gravitasi penarik sistem' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kesetimbangan benda m₂ sejajar bidang miring',
          formula: 'T = m_2 g \\sin\\theta',
          meaning: 'Tegangan tali harus mengimbangi komponen berat $m_2$ sepanjang bidang miring.',
        },
        {
          label: 'Kesetimbangan horizontal benda m₁',
          formula: 'F = T = m_2 g \\sin\\theta',
          meaning: 'Gaya horizontal penahan pada $m_1$ sama besar dengan tegangan tali.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Tentukan massa masing-masing benda',
          detail: 'Dari $m_2 = 2m_1 = 16\\text{ kg}$, diperoleh $m_2 = 16\\text{ kg}$ dan $m_1 = 8\\text{ kg}$.',
        },
        {
          stepTitle: 'Hitung tegangan tali T dari kesetimbangan m₂',
          detail: 'Masukkan $m_2 = 16\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$, dan $\\theta = 45^\\circ$.',
          math: 'T = 16 \\times 9{,}8 \\times \\sin(45^\\circ) = 156{,}8 \\times 0{,}70710678 = 110{,}8743\\text{ N}',
        },
        {
          stepTitle: 'Tentukan gaya horizontal F dan bulatkan',
          detail: 'Karena $F = T$, bulatkan ke satu angka di belakang koma.',
          math: 'F \\approx 110{,}9\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Gaya horizontal sebesar $110{,}9\\text{ N}$ ke arah kiri tepat mengimbangi kecenderungan $m_2$ meluncur turun. Perhatikan bahwa massa $m_1$ tidak memengaruhi nilai $F$ karena lantai datar licin.',
      H_kesalahanUmum: [
        'Mengikutsertakan $m_1 g$ ke dalam perhitungan gaya horizontal $F$.',
        'Menggunakan $\\cos 45^\\circ$ tetapi lupa bahwa untuk $\\theta \\neq 45^\\circ$ komponen penggerak di bidang miring adalah $\\sin\\theta$.',
        'Membulatkan $\\sin 45^\\circ$ menjadi $0{,}7$ terlalu dini ($156{,}8 \\times 0{,}7 = 109{,}8\\text{ N}$ yang melenceng).',
      ],
      I_intiPembelajaran:
        'Pisahkan diagram gaya bebas tiap benda; pada bidang datar licin, gaya normal dan berat pada $m_1$ saling meniadakan secara vertikal sehingga tidak memengaruhi gaya horizontal penahan.',
    },
  },
  {
    id: 3,
    topic: 'Dinamika & Gaya',
    title: 'Percepatan Sistem Katrol Atwood',
    questionText:
      'Seutas tali tak bermassa tergantung melewati sebuah katrol tanpa gesekan. Suatu massa $13\\text{ kg}$ diikatkan pada salah satu ujung tali dan massa $7\\text{ kg}$ pada ujung lainnya. Percepatan massa pada sistim tali-katrol ini adalah ... $\\text{m/s}^2$.',
    unit: 'm/s²',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Dua buah massa masing-masing 13 kilogram dan 7 kilogram digantungkan pada ujung-ujung tali yang melewati katrol licin tak bermassa.',
    answerValue: 2.9,
    answerDisplay: '2,9',
    solution: {
      A_memahamiFenomena:
        'Sistem ini adalah pesawat Atwood sederhana dengan dua beban $m_1 = 13\\text{ kg}$ dan $m_2 = 7\\text{ kg}$ pada tali ideal dan katrol licin. Karena $m_1 > m_2$, beban $13\\text{ kg}$ bergerak turun dan beban $7\\text{ kg}$ bergerak naik dengan besar percepatan yang sama.',
      B_pengetahuanDasar:
        'Berdasarkan Hukum II Newton ($\\sum F = m a$), gaya penggerak total sistem berasal dari selisih berat kedua beban, sedangkan massa total yang dipercepat adalah jumlah kedua massa.',
      C_analisisFisis:
        'Asumsikan arah gerak $m_1$ ke bawah dan $m_2$ ke atas sebagai arah positif sistem. Karena tali tidak meregang, percepatan kedua benda sama besar ($a_1 = a_2 = a$) dan tegangan tali di kedua sisi sama besar ($T$).',
      D_fbd: {
        title: 'Diagram Gaya Bebas Pesawat Atwood',
        diagramId: 'fbd-atwood',
        description:
          'Pada m₁ bekerja berat m₁g ke bawah dan tegangan tali T ke atas. Pada m₂ bekerja berat m₂g ke bawah dan tegangan tali T ke atas.',
        vectors: [
          { label: 'm₁g', direction: 'Ke bawah pada massa 13 kg', note: 'Lebih besar dari T sehingga bergerak turun' },
          { label: 'T', direction: 'Ke atas pada kedua massa', note: 'Menahan m₁ dan menarik m₂ ke atas' },
          { label: 'm₂g', direction: 'Ke bawah pada massa 7 kg', note: 'Lebih kecil dari T sehingga terangkat' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Persamaan Gerak Tiap Benda',
          formula: 'm_1 g - T = m_1 a \\quad \\text{dan} \\quad T - m_2 g = m_2 a',
          meaning: 'Hukum II Newton pada masing-masing beban.',
        },
        {
          label: 'Percepatan Sistem Atwood',
          formula: 'a = \\frac{m_1 - m_2}{m_1 + m_2} g',
          meaning: 'Menjumlahkan kedua persamaan menghilangkan $T$ dan menghasilkan percepatan bersama.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung selisih dan jumlah massa',
          detail: 'Dengan $m_1 = 13\\text{ kg}$ dan $m_2 = 7\\text{ kg}$, peroleh selisih $6\\text{ kg}$ dan total $20\\text{ kg}$.',
        },
        {
          stepTitle: 'Hitung percepatan sistem',
          detail: 'Substitusikan nilai massa dan $g = 9{,}8\\text{ m/s}^2$.',
          math: 'a = \\frac{13 - 7}{13 + 7} \\times 9{,}8 = \\frac{6}{20} \\times 9{,}8 = 0{,}3 \\times 9{,}8 = 2{,}94\\text{ m/s}^2',
        },
        {
          stepTitle: 'Pembulatan satu angka desimal',
          detail: 'Bulatkan $2{,}94$ menjadi satu angka di belakang koma.',
          math: 'a \\approx 2{,}9\\text{ m/s}^2',
        },
      ],
      G_interpretasiFisika:
        'Percepatan sistem jauh lebih kecil daripada percepatan jatuh bebas ($9{,}8\\text{ m/s}^2$) karena massa $7\\text{ kg}$ menahan laju turunnya massa $13\\text{ kg}$, sekaligus total inersia yang harus digerakkan adalah $20\\text{ kg}$.',
      H_kesalahanUmum: [
        'Membagi selisih gaya hanya dengan salah satu massa, bukan jumlah total $m_1 + m_2$.',
        'Menggunakan $g = 10\\text{ m/s}^2$ padahal petunjuk soal menetapkan $g = 9{,}8\\text{ m/s}^2$.',
      ],
      I_intiPembelajaran:
        'Pada sistem katrol licin tak bermassa, gunakan metode penjumlahan persamaan dinamika benda untuk mengeliminasi tegangan tali internal dengan cepat.',
    },
  },
  {
    id: 4,
    topic: 'Dinamika & Gaya',
    title: 'Gaya Normal Kereta Belanja pada Bidang Miring',
    questionText:
      'Sebuah kereta belanja massa $15\\text{ kg}$ didorong di atas bidang miring $\\theta = 60^\\circ$ dengan gaya konstan $F = 160\\text{ N}$ sejajar bidang miring. Jika koefisien gesek bidang miring $\\mu_k = 0{,}25$ maka gaya normal permukaan lantai terhadap kereta belanja adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Kereta belanja bermassa 15 kilogram didorong ke atas sepanjang bidang miring bersudut 60 derajat oleh gaya konstan 160 newton yang sejajar bidang miring.',
    answerValue: 73.5,
    answerDisplay: '73,5',
    solution: {
      A_memahamiFenomena:
        'Kereta belanja bermassa $m = 15\\text{ kg}$ berada pada bidang miring $\\theta = 60^\\circ$ dan didorong gaya $F = 160\\text{ N}$ yang sejajar dengan permukaan bidang miring. Yang ditanyakan hanyalah gaya normal $N$ oleh permukaan bidang terhadap kereta belanja.',
      B_pengetahuanDasar:
        'Gaya normal $N$ adalah gaya kontak yang selalu tegak lurus terhadap permukaan bidang. Pada benda yang tidak bergerak dalam arah tegak lurus bidang ($a_\\perp = 0$), jumlah seluruh komponen gaya tegak lurus bidang sama dengan nol.',
      C_analisisFisis:
        'Pilih sumbu $x$ sejajar bidang miring dan sumbu $y$ tegak lurus bidang miring mengarah keluar dari bidang. Karena gaya dorong $F$ dan gaya gesek $f_k$ sama-sama sejajar sumbu $x$, keduanya tidak memiliki komponen sepanjang sumbu $y$. Hanya $N$ dan komponen berat $m g \\cos\\theta$ yang bekerja pada sumbu $y$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Kereta Belanja',
        diagramId: 'fbd-push-incline',
        description:
          'Gaya normal N tegak lurus ke atas bidang, gaya berat mg vertikal ke bawah (diuraikan menjadi mg cos θ tegak lurus bidang dan mg sin θ sejajar bidang ke bawah), gaya dorong F sejajar bidang ke atas, dan gaya gesek kinetik fk sejajar bidang ke bawah.',
        vectors: [
          { label: 'N', direction: 'Tegak lurus permukaan miring ke atas', note: 'Mengimbangi komponen berat mg cos θ' },
          { label: 'mg', direction: 'Vertikal ke bawah', note: 'Komponen tegak lurusnya adalah mg cos 60°' },
          { label: 'F', direction: 'Sejajar bidang miring ke atas', note: 'Tidak berkontribusi pada arah tegak lurus' },
          { label: 'f_k', direction: 'Sejajar bidang miring ke bawah', note: 'Melawan arah gerak naik' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kesetimbangan Arah Tegak Lurus Bidang',
          formula: '\\sum F_\\perp = 0 \\implies N - m g \\cos\\theta = 0',
          meaning: 'Tidak ada percepatan menembus atau meninggalkan permukaan bidang miring.',
        },
        {
          label: 'Rumus Gaya Normal',
          formula: 'N = m g \\cos\\theta',
          meaning: 'Nilai gaya normal hanya bergantung pada massa, gravitasi, dan sudut kemiringan.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Identifikasi komponen gaya pada sumbu tegak lurus',
          detail: 'Nilai $F = 160\\text{ N}$ dan $\\mu_k = 0{,}25$ tidak memengaruhi gaya normal karena $F$ sejajar bidang.',
        },
        {
          stepTitle: 'Hitung gaya normal N',
          detail: 'Substitusikan $m = 15\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$, dan $\\theta = 60^\\circ$ ($\\cos 60^\\circ = 0{,}5$).',
          math: 'N = 15 \\times 9{,}8 \\times \\cos(60^\\circ) = 147 \\times 0{,}5 = 73{,}5\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Gaya normal bernilai $73{,}5\\text{ N}$, tepat setengah dari berat benda ($147\\text{ N}$), karena bidang sangat curam ($60^\\circ$) sehingga sebagian besar berat ditopang ke arah sejajar bidang daripada menekan permukaan.',
      H_kesalahanUmum: [
        'Terpancing menghitung gaya gesek atau percepatan akibat adanya angka $F = 160\\text{ N}$ dan $\\mu_k = 0{,}25$.',
        'Keliru menukar $\\cos\\theta$ dengan $\\sin\\theta$ saat mencari gaya normal.',
      ],
      I_intiPembelajaran:
        'Baca pertanyaan dengan cermat sebelum menghitung: data $F$ dan $\\mu_k$ sering diberikan sebagai pengecoh atau informasi konteks ketika yang ditanyakan hanya gaya normal dengan dorongan sejajar bidang.',
    },
  },
  {
    id: 5,
    topic: 'Dinamika & Gaya',
    title: 'Berat Semu di Dalam Lift Dipercepat ke Atas',
    questionText:
      'Seorang pria dengan berat $w = 588\\text{ N}$ berada di dalam lift. Lift tersebut bergerak vertikal ke atas dengan percepatan $a = 2{,}45\\text{ m/s}^2$. Berat semu pria tersebut di dalam lift adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seorang pria berada di atas lantai sebuah lift yang sedang bergerak vertikal ke atas dengan percepatan 2 koma 45 meter per sekon kuadrat.',
    answerValue: 735.0,
    answerDisplay: '735,0',
    solution: {
      A_memahamiFenomena:
        'Ketika seseorang berdiri di dalam lift yang mengalami percepatan vertikal ke atas, lantai lift menekan kaki orang tersebut lebih kuat daripada saat diam. Tekanan lantai (gaya normal $N$) inilah yang dirasakan dan terbaca sebagai berat semu.',
      B_pengetahuanDasar:
        'Berat sejati adalah $w = m g$, sehingga massa orang dapat dicari dari $m = w / g$. Berat semu $w_{\\text{semu}}$ sama dengan besar gaya normal $N$ dari lantai lift terhadap kaki orang.',
      C_analisisFisis:
        'Tetapkan arah vertikal ke atas sebagai arah positif. Karena lift dan pria bergerak bersama dengan percepatan $a = +2{,}45\\text{ m/s}^2$, Hukum II Newton memberikan $N - w = m a$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Pria di Dalam Lift',
        diagramId: 'fbd-elevator',
        description:
          'Pada tubuh pria bekerja gaya berat w vertikal ke bawah dan gaya normal lantai lift N vertikal ke atas. Karena percepatan mengarah ke atas, N lebih besar daripada w.',
        vectors: [
          { label: 'N (w_semu)', direction: 'Vertikal ke atas', note: 'Gaya tekan lantai lift (735,0 N)' },
          { label: 'w = mg', direction: 'Vertikal ke bawah', note: 'Gaya berat sejati (588,0 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Hukum II Newton Vertikal',
          formula: 'N - m g = m a \\implies N = m (g + a)',
          meaning: 'Saat lift dipercepat ke atas, gaya normal bertambah sebesar $m a$.',
        },
        {
          label: 'Hubungan dengan Berat Sejati',
          formula: 'w_{\\text{semu}} = w \\left(1 + \\frac{a}{g}\\right)',
          meaning: 'Dinyatakan langsung dalam berat sejati $w$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Cari massa pria',
          detail: 'Gunakan $g = 9{,}8\\text{ m/s}^2$ untuk memperoleh massa dari berat sejati.',
          math: 'm = \\frac{w}{g} = \\frac{588}{9{,}8} = 60\\text{ kg}',
        },
        {
          stepTitle: 'Hitung berat semu (gaya normal)',
          detail: 'Substitusikan $m = 60\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$, dan $a = 2{,}45\\text{ m/s}^2$.',
          math: 'w_{\\text{semu}} = 60 \\times (9{,}8 + 2{,}45) = 60 \\times 12{,}25 = 735{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Berat semu meningkat sebesar $25\\%$ dari $588\\text{ N}$ menjadi $735{,}0\\text{ N}$, sehingga pria merasa tubuhnya lebih berat saat lift mulai melaju naik.',
      H_kesalahanUmum: [
        'Mengurangkan percepatan ($g - a$) yang seharusnya berlaku saat lift dipercepat ke bawah.',
        'Memakai $w = 588$ langsung sebagai massa $m$ tanpa membaginya dengan $g$.',
      ],
      I_intiPembelajaran:
        'Berat semu adalah gaya normal lantai. Lift dipercepat ke atas menambah gaya normal ($g + a$), sedangkan lift dipercepat ke bawah menguranginya ($g - a$).',
    },
  },
  {
    id: 6,
    topic: 'Kinematika',
    title: 'Jarak Tempuh dari Grafik Kecepatan terhadap Waktu',
    questionText:
      'Sebuah mobil bergerak lurus sepanjang sumbu $x$ dengan kecepatan ($v_x$) sebagai fungsi yang bergantung waktu seperti ditunjukkan pada Grafik no 6 di bawah. Jarak tempuh mobil dari menit ke-$20$ hingga ke-$60$ adalah ... $\\text{km}$.',
    unit: 'km',
    stimulusDiagramId: 'grafik-6',
    stimulusCaption: 'Grafik no 6 (Skala kecepatan dan waktu telah disesuaikan)',
    diagramSpeechNote:
      'Pada Grafik nomor 6, sumbu mendatar menunjukkan waktu dalam satuan menit dari 0 hingga 80, dan sumbu tegak menunjukkan kecepatan dalam satuan kilometer per jam. Grafik naik lurus dari 0 hingga 54 kilometer per jam pada menit ke-20, lalu mendatar konstan di 54 kilometer per jam hingga menit ke-80.',
    answerValue: 36.0,
    answerDisplay: '36,0',
    solution: {
      A_memahamiFenomena:
        'Grafik no 6 menyajikan kecepatan mobil $v_x$ (dalam $\\text{km/jam}$) terhadap waktu $t$ (dalam $\\text{menit}$). Pada selang menit ke-20 hingga ke-60, grafik berbentuk garis datar pada $v = 54\\text{ km/jam}$, artinya mobil melakukan Gerak Lurus Beraturan (GLB).',
      B_pengetahuanDasar:
        'Pada grafik kecepatan terhadap waktu ($v$-$t$), jarak tempuh atau perpindahan dalam selang waktu tertentu sama dengan luas daerah di bawah kurva $v(t)$ pada selang waktu tersebut.',
      C_analisisFisis:
        'Perhatikan ketidaksamaan satuan waktu: sumbu vertikal memakai jam ($\\text{km/jam}$), sedangkan sumbu horizontal memakai $\\text{menit}$. Oleh karena itu, selang waktu $\\Delta t$ dalam menit wajib dikonversi menjadi jam sebelum dikalikan dengan kecepatan.',
      D_fbd: {
        title: 'Representasi Luas di Bawah Grafik v-t',
        diagramId: 'fbd-vx-graph',
        description:
          'Luas daerah berbentuk persegi panjang antara t = 20 menit sampai t = 60 menit dengan tinggi v = 54 km/jam merepresentasikan jarak tempuh mobil.',
        vectors: [
          { label: 'v = 54 km/jam', direction: 'Tinggi persegi panjang', note: 'Kecepatan konstan selama selang tinjauan' },
          { label: 'Δt = 40 menit', direction: 'Alas persegi panjang', note: 'Setara dengan 2/3 jam' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Jarak dari Luas Grafik v-t',
          formula: 's = \\int_{t_1}^{t_2} v_x(t)\\, dt = v \\cdot \\Delta t',
          meaning: 'Untuk kecepatan konstan $v$, integral luas menjadi perkalian luas persegi panjang.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung selang waktu dan konversi ke jam',
          detail: 'Dari menit ke-20 hingga ke-60, selang waktu adalah $40\\text{ menit}$.',
          math: '\\Delta t = 60 - 20 = 40\\text{ menit} = \\frac{40}{60}\\text{ jam} = \\frac{2}{3}\\text{ jam}',
        },
        {
          stepTitle: 'Hitung jarak tempuh',
          detail: 'Kalikan kecepatan konstan $54\\text{ km/jam}$ dengan selang waktu dalam jam.',
          math: 's = 54\\text{ km/jam} \\times \\frac{2}{3}\\text{ jam} = 36{,}0\\text{ km}',
        },
      ],
      G_interpretasiFisika:
        'Dalam waktu $40\\text{ menit}$ dengan kelajuan stabil $54\\text{ km/jam}$, mobil menempuh jarak tepat $36{,}0\\text{ km}$.',
      H_kesalahanUmum: [
        'Lupa mengonversi menit ke jam sehingga mengalikan $54 \\times 40 = 2160\\text{ km}$.',
        'Menghitung luas dari $t = 0$ sampai $t = 60$ alih-alih hanya dari menit ke-20 hingga ke-60.',
      ],
      I_intiPembelajaran:
        'Selalu cek satuan pada kedua sumbu grafik sebelum menghitung luas daerah di bawah kurva.',
    },
  },
  {
    id: 7,
    topic: 'Kinematika',
    title: 'Perpindahan Benda pada Garis Bilangan 1D',
    questionText:
      'Sebuah benda bergerak sebagaimana ditunjukkan pada Gambar no 7 di atas. Posisi benda pada waktu-waktu tertentu digambarkan dengan titik merah. Perpindahan benda antara $t = 0\\text{ s}$ hingga $t = 4\\text{ s}$ adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'gambar-7',
    stimulusCaption: 'Gambar no 7 (Posisi titik merah pada garis bilangan telah disesuaikan)',
    diagramSpeechNote:
      'Pada Gambar nomor 7 terdapat garis bilangan mendatar dari minus 3 meter hingga 7 meter. Titik merah menunjukkan posisi benda: pada t sama dengan 0 berada di 2 meter, t sama dengan 1 sekon di 5 meter, berbalik arah melewati 6 meter pada t sama dengan 2 sekon, kembali ke 3 meter pada t sama dengan 3 sekon, dan berakhir di minus 2 meter pada t sama dengan 4 sekon.',
    answerValue: -4.0,
    answerDisplay: '-4,0',
    solution: {
      A_memahamiFenomena:
        'Soal membedakan secara tegas konsep besaran vektor perpindahan dengan besaran skalar jarak tempuh. Meskipun benda bergerak ke kanan terlebih dahulu lalu berbalik arah ke kiri, perpindahan hanya bergantung pada posisi awal dan posisi akhir.',
      B_pengetahuanDasar:
        'Perpindahan ($\\Delta x$) dalam gerak satu dimensi didefinisikan sebagai perubahan posisi: $\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}$. Tanda positif atau negatif menunjukkan arah perpindahan sepanjang sumbu $x$.',
      C_analisisFisis:
        'Baca koordinat dari Gambar no 7: pada $t = 0\\text{ s}$, benda berada di $x(0) = +2\\text{ m}$. Pada $t = 4\\text{ s}$, benda berada di $x(4) = -2\\text{ m}$. Lintasan belok di $x = +6\\text{ m}$ ($t = 2\\text{ s}$) tidak memengaruhi nilai perpindahan netto.',
      D_fbd: {
        title: 'Vektor Perpindahan pada Sumbu-x',
        diagramId: 'fbd-number-line',
        description:
          'Vektor perpindahan Δx ditarik langsung dari titik awal x(0) = +2 m menuju titik akhir x(4) = -2 m, sehingga mengarah ke kiri sejauh 4 meter.',
        vectors: [
          { label: 'x(0) = +2 m', direction: 'Titik awal', note: 'Posisi saat t = 0 s' },
          { label: 'x(4) = -2 m', direction: 'Titik akhir', note: 'Posisi saat t = 4 s' },
          { label: 'Δx = -4,0 m', direction: 'Mengarah ke kiri (-x)', note: 'Selisih posisi akhir dikurangi awal' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Definisi Perpindahan 1D',
          formula: '\\Delta x = x(t_{\\text{akhir}}) - x(t_{\\text{awal}})',
          meaning: 'Perubahan posisi bertanda sepanjang sumbu koordinat.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Baca posisi awal dan akhir dari gambar',
          detail: 'Diperoleh $x(0) = 2\\text{ m}$ dan $x(4) = -2\\text{ m}$.',
        },
        {
          stepTitle: 'Hitung perpindahan bertanda',
          detail: 'Kurangkan posisi akhir dengan posisi awal.',
          math: '\\Delta x = x(4) - x(0) = -2 - 2 = -4{,}0\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Tanda negatif pada $-4{,}0\\text{ m}$ menunjukkan bahwa secara keseluruhan posisi benda bergeser $4{,}0\\text{ m}$ ke arah sumbu $x$ negatif (ke kiri) dibandingkan posisi awalnya.',
      H_kesalahanUmum: [
        'Menghitung panjang lintasan total ($4 + 8 = 12\\text{ m}$), yang merupakan jarak tempuh bukan perpindahan.',
        'Menghilangkan tanda minus dan menuliskan $4{,}0\\text{ m}$, padahal arah perpindahan ke kiri harus mempertahankan tanda negatif.',
      ],
      I_intiPembelajaran:
        'Perpindahan adalah besaran vektor yang hanya ditentukan oleh titik awal dan titik akhir ($\\Delta x = x_2 - x_1$), sedangkan jarak adalah panjang lintasan total.',
    },
  },
  {
    id: 8,
    topic: 'Kinematika',
    title: 'Kecepatan Topi yang Dilemparkan Vertikal ke Atas',
    questionText:
      'Seorang wisatawan melemparkan topinya ke udara dengan kecepatan awal $9{,}20\\text{ m/s}$. Dengan mengabaikan hambatan udara, maka kecepatan topi saat di ketinggian $1{,}60\\text{ m}$ di atas titik pelepasannya adalah ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah topi dilemparkan vertikal ke atas dari titik pelepasan dengan kecepatan awal 9 koma 20 meter per sekon, dan diamati pada ketinggian 1 koma 60 meter di atas titik pelepasan.',
    answerValue: 7.3,
    answerDisplay: '7,3',
    solution: {
      A_memahamiFenomena:
        'Topi bergerak vertikal ke atas di bawah pengaruh percepatan gravitasi konstan ke bawah ($g = 9{,}8\\text{ m/s}^2$). Diketahui laju awal $v_0 = 9{,}20\\text{ m/s}$ dan ketinggian $h = 1{,}60\\text{ m}$. Dicari besar kecepatan (kelajuan) topi saat mencapai ketinggian tersebut.',
      B_pengetahuanDasar:
        'Gerak vertikal ke atas tanpa gesekan udara merupakan Gerak Lurus Berubah Beraturan (GLBB) dengan percepatan $a = -g$, atau dapat diselesaikan lewat kekekalan energi mekanik.',
      C_analisisFisis:
        'Tetapkan titik pelepasan sebagai $y = 0$ dengan arah positif ke atas. Karena waktu tidak diketahui dan tidak ditanyakan, persamaan kinematika tanpa waktu $v^2 = v_0^2 - 2 g h$ merupakan jalur paling langsung.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Topi di Udara',
        diagramId: 'fbd-vertical-throw',
        description:
          'Selama di udara (hambatan udara diabaikan), satu-satunya gaya yang bekerja pada topi adalah gaya berat w = mg ke bawah, menghasilkan perlambatan konstan g ke bawah.',
        vectors: [
          { label: 'v(h)', direction: 'Ke atas (saat naik)', note: 'Laju berkurang terhadap v₀' },
          { label: 'w = mg', direction: 'Vertikal ke bawah', note: 'Menghasilkan percepatan a = -9,8 m/s²' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Persamaan Kinematika GLBB (Torricelli)',
          formula: 'v^2 = v_0^2 - 2 g h',
          meaning: 'Menghubungkan kecepatan pada ketinggian $h$ dengan kecepatan awal tanpa perlu menghitung waktu.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi nilai yang diketahui',
          detail: 'Masukkan $v_0 = 9{,}20\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$, dan $h = 1{,}60\\text{ m}$.',
          math: 'v^2 = (9{,}20)^2 - 2(9{,}8)(1{,}60) = 84{,}64 - 31{,}36 = 53{,}28',
        },
        {
          stepTitle: 'Tarik akar kuadrat dan bulatkan',
          detail: 'Hitung akar kuadrat dari $53{,}28$ dan bulatkan ke 1 angka di belakang koma.',
          math: 'v = \\sqrt{53{,}28} \\approx 7{,}2993\\text{ m/s} \\approx 7{,}3\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Pada ketinggian $1{,}60\\text{ m}$, energi kinetik topi sebagian berubah menjadi energi potensial gravitasi sehingga lajunya turun dari $9{,}20\\text{ m/s}$ menjadi $7{,}3\\text{ m/s}$.',
      H_kesalahanUmum: [
        'Menambahkan $+2gh$ bukannya mengurangkan $-2gh$, sehingga menghasilkan kecepatan lebih besar daripada $v_0$.',
        'Lupa menarik akar kuadrat setelah menghitung $v^2 = 53{,}28$.',
      ],
      I_intiPembelajaran:
        'Gunakan $v^2 = v_0^2 - 2gh$ kapan pun soal gerak vertikal memberikan posisi dan menanyakan kecepatan tanpa melibatkan waktu.',
    },
  },
  {
    id: 9,
    topic: 'Dinamika & Gaya',
    title: 'Energi Kinetik pada Ayunan Kerucut',
    questionText:
      'Sebuah massa $m$ di titik $P$ digantung pada suatu tali dengan panjang $a$, seperti pada Gambar no 9. Tali tersebut diputar dengan kecepatan sudut tertentu sehingga massa $m$ bergerak melingkar beraturan pada bidang horizontal, dengan sudut antara tali dengan garis vertikal adalah $\\alpha$. Jika massa $m = 3\\text{ kg}$, $a = 60\\text{ cm}$, dan $\\cos\\alpha = 3/5$, maka energi kinetik massa $m$ sama dengan ... $\\text{J}$.',
    unit: 'J',
    stimulusDiagramId: 'gambar-9',
    stimulusCaption: 'Gambar no 9 (Ayunan kerucut dengan panjang tali a dan sudut α)',
    diagramSpeechNote:
      'Pada Gambar nomor 9, sebuah tali sepanjang a menggantung dari titik O dengan sudut alfa terhadap garis vertikal OC, sehingga massa m di titik P menempuh lintasan lingkaran horizontal berpusat di C.',
    answerValue: 9.4,
    answerDisplay: '9,4',
    solution: {
      A_memahamiFenomena:
        'Sistem ini adalah ayunan kerucut (conical pendulum). Massa $m = 3\\text{ kg}$ bergerak melingkar beraturan secara horizontal dengan jari-jari lingkaran $r = a \\sin\\alpha$, sementara tali sepanjang $a = 0{,}6\\text{ m}$ membentuk sudut tetap $\\alpha$ terhadap vertikal.',
      B_pengetahuanDasar:
        'Pada gerak melingkar horizontal beraturan, resultan gaya arah vertikal sama dengan nol (benda tidak naik-turun) dan resultan gaya arah radial menuju pusat lingkaran berperan sebagai gaya sentripetal $F_s = \\frac{m v^2}{r}$.',
      C_analisisFisis:
        'Uraikan tegangan tali $T$ menjadi komponen vertikal $T \\cos\\alpha$ ke atas dan komponen horizontal $T \\sin\\alpha$ ke pusat lingkaran $C$. Dari segitiga siku-siku dengan $\\cos\\alpha = 3/5$, diperoleh $\\sin\\alpha = 4/5$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Massa pada Ayunan Kerucut',
        diagramId: 'fbd-conical-pendulum',
        description:
          'Dua gaya bekerja pada massa m: gaya berat mg vertikal ke bawah dan tegangan tali T sepanjang tali miring membentuk sudut α terhadap vertikal.',
        vectors: [
          { label: 'T cos α', direction: 'Vertikal ke atas', note: 'Menyeimbangkan berat mg' },
          { label: 'T sin α', direction: 'Horizontal menuju pusat C', note: 'Berperan sebagai gaya sentripetal mv²/r' },
          { label: 'mg', direction: 'Vertikal ke bawah', note: 'Gaya berat benda bermassa 3 kg' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kesetimbangan Vertikal & Gaya Sentripetal',
          formula: 'T\\cos\\alpha = m g, \\qquad T\\sin\\alpha = \\frac{m v^2}{r}',
          meaning: 'Dengan $r = a \\sin\\alpha$, pembagian kedua persamaan menghasilkan $\\tan\\alpha = \\frac{v^2}{g a \\sin\\alpha}$.',
        },
        {
          label: 'Energi Kinetik Ayunan Kerucut',
          formula: 'E_k = \\frac{1}{2} m v^2 = \\frac{1}{2} m g a \\frac{\\sin^2\\alpha}{\\cos\\alpha}',
          meaning: 'Substitusi langsung $v^2 = g a \\frac{\\sin^2\\alpha}{\\cos\\alpha}$ ke rumus energi kinetik.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Konversi panjang tali dan tentukan sin α',
          detail: 'Panjang tali $a = 60\\text{ cm} = 0{,}60\\text{ m}$. Dari identitas trigonometri $\\sin^2\\alpha = 1 - \\cos^2\\alpha$.',
          math: '\\sin^2\\alpha = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}',
        },
        {
          stepTitle: 'Hitung energi kinetik massa m',
          detail: 'Masukkan $m = 3\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$, $a = 0{,}60\\text{ m}$, dan $\\cos\\alpha = 3/5$.',
          math: 'E_k = \\frac{1}{2} (3)(9{,}8)(0{,}60) \\times \\frac{16/25}{3/5} = 8{,}82 \\times \\frac{16}{15} = 9{,}408\\text{ J}',
        },
        {
          stepTitle: 'Pembulatan satu angka desimal',
          detail: 'Bulatkan hasil akhir ke satu angka di belakang koma.',
          math: 'E_k \\approx 9{,}4\\text{ J}',
        },
      ],
      G_interpretasiFisika:
        'Semakin besar sudut $\\alpha$ terhadap vertikal, komponen radial tegangan tali harus makin besar, yang hanya dapat dicapai jika kelajuan putar dan energi kinetiknya lebih besar.',
      H_kesalahanUmum: [
        'Lupa mengonversi $a = 60\\text{ cm}$ menjadi $0{,}60\\text{ m}$.',
        'Menganggap jari-jari lintasan $r = a$, padahal seharusnya $r = a \\sin\\alpha$.',
      ],
      I_intiPembelajaran:
        'Pada ayunan kerucut, jari-jari lintasan melingkar adalah $r = a \\sin\\alpha$ dan hubungan sudutnya adalah $\\tan\\alpha = v^2 / (g r)$.',
    },
  },
  {
    id: 10,
    topic: 'Dinamika & Gaya',
    title: 'Gaya Gesek Statis pada Balok Diam',
    questionText:
      'Tinjaulah sebuah balok bermassa $50\\text{ kg}$ yang sedang diam. Balok tersebut kemudian didorong dengan gaya sebesar $185\\text{ N}$, tetapi balok tetap diam. Jika diketahui lantai kasar dengan koefisien gesek statis $\\mu_s = 0{,}6$, maka besarnya gaya gesek pada sistem saat didorong tersebut sama dengan ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah balok bermassa 50 kilogram diam di atas lantai kasar dan didorong dengan gaya horizontal 185 newton, namun balok tetap tidak bergerak.',
    answerValue: 185.0,
    answerDisplay: '185,0',
    solution: {
      A_memahamiFenomena:
        'Balok $m = 50\\text{ kg}$ didorong dengan gaya horizontal $F = 185\\text{ N}$ pada lantai kasar ($\\mu_s = 0{,}6$), tetapi balok tetap diam. Ini adalah kondisi kesetimbangan statik di bawah pengaruh gaya gesek statis.',
      B_pengetahuanDasar:
        'Gaya gesek statis bersifat menyesuaikan diri (self-adjusting) hingga batas maksimum $f_{s,\\text{maks}} = \\mu_s N$. Selama gaya dorong luar lebih kecil daripada $f_{s,\\text{maks}}$, balok tetap diam dan besar gaya gesek statis tepat sama dengan gaya dorong tersebut, bukan $f_{s,\\text{maks}}$.',
      C_analisisFisis:
        'Pertama cek batas maksimum gaya gesek statis: $N = m g = 50 \\times 9{,}8 = 490\\text{ N}$, sehingga $f_{s,\\text{maks}} = 0{,}6 \\times 490 = 294\\text{ N}$. Karena $F = 185\\text{ N} < 294\\text{ N}$, balok memang belum bergerak dan $\\sum F_x = 0$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Balok dalam Kesetimbangan Statik',
        diagramId: 'fbd-static-friction',
        description:
          'Gaya dorong F ke kanan tepat diimbangi oleh gaya gesek statis fs ke kiri sehingga resultan gaya horizontal sama dengan nol.',
        vectors: [
          { label: 'F = 185 N', direction: 'Horizontal ke kanan', note: 'Gaya dorong luar' },
          { label: 'f_s = 185,0 N', direction: 'Horizontal ke kiri', note: 'Gaya gesek statis penyeimbang' },
          { label: 'N & mg', direction: 'Vertikal atas & bawah', note: 'Saling meniadakan (490,0 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Syarat Gaya Gesek Statis',
          formula: 'f_s \\le \\mu_s N \\quad \\text{dan jika diam: } f_s = F',
          meaning: 'Rumus $\\mu_s N$ hanya menghitung nilai maksimum, bukan nilai gaya gesek yang bekerja setiap saat.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Verifikasi apakah balok diam',
          detail: 'Hitung $f_{s,\\text{maks}} = \\mu_s m g = 0{,}6 \\times 50 \\times 9{,}8 = 294\\text{ N}$. Karena $185\\text{ N} < 294\\text{ N}$, balok tetap diam.',
        },
        {
          stepTitle: 'Tentukan besar gaya gesek statis',
          detail: 'Dari hukum kesetimbangan $\\sum F_x = F - f_s = 0$.',
          math: 'f_s = F = 185{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Jika gaya gesek bernilai $294\\text{ N}$ sementara dorongan hanya $185\\text{ N}$, balok justru akan bergerak mundur secara tidak masuk akal. Oleh karena itu gaya gesek statis hanya muncul sebesar $185{,}0\\text{ N}$ untuk menjaga balok tetap diam.',
      H_kesalahanUmum: [
        'Langsung mengalikan $\\mu_s m g = 294{,}0\\text{ N}$ tanpa menyadari bahwa rumus tersebut hanya untuk gaya gesek statis maksimum.',
      ],
      I_intiPembelajaran:
        'Untuk benda diam di bidang datar kasar, selalu bandingkan gaya dorong dengan $f_{s,\\text{maks}}$. Jika belum bergerak, $f_s$ sama persis dengan gaya dorongnya.',
    },
  },
];
