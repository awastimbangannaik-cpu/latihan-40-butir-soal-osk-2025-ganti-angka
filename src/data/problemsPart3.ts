import type { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_3: PhysicsProblem[] = [
  {
    id: 21,
    topic: 'Dinamika & Gaya',
    title: 'Radius Maksimum Anak di Atas Piringan Berputar',
    questionText:
      'Di sebuah taman bermain, ada piringan datar yang dapat berputar. Jejari piringannya $2{,}0\\text{ m}$. Seorang anak dapat duduk di piringan itu dalam radius berapapun. Saat piringan mulai berputar makin cepat, anak itu dapat tergelincir jika gaya geseknya tidak cukup. Jika massa anak itu $40\\text{ kg}$, koefisien gesekannya $0{,}45$ dan kecepatan sudutnya adalah $2{,}0\\text{ rad/s}$, maka radius maksimum $R$ agar ia dapat tetap duduk di piringan itu adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah piringan datar horizontal berjari-jari 2 koma 0 meter berputar dengan kecepatan sudut 2 koma 0 radian per sekon, dengan seorang anak bermassa 40 kilogram duduk pada jarak R dari pusat putaran.',
    answerValue: 1.1,
    answerDisplay: '1,1',
    solution: {
      A_memahamiFenomena:
        'Anak ikut berputar bersama piringan horizontal sehingga mengalami percepatan sentripetal ke arah pusat piringan. Satu-satunya gaya horizontal yang menyediakan gaya sentripetal tersebut adalah gaya gesek statis antara anak dan permukaan piringan.',
      B_pengetahuanDasar:
        'Kebutuhan gaya sentripetal pada jarak $R$ dari sumbu putar adalah $F_s = m \\omega^2 R$. Agar anak tidak tergelincir, gaya gesek statis yang diperlukan tidak boleh melebihi batas maksimumnya $f_{s,\\text{maks}} = \\mu_s N = \\mu_s m g$.',
      C_analisisFisis:
        'Pada radius maksimum $R_{\\text{maks}}$, gaya gesek statis mencapai nilai maksimumnya sehingga $m \\omega^2 R_{\\text{maks}} = \\mu_s m g$. Massa anak $m = 40\\text{ kg}$ saling meniadakan di kedua ruas, dan kita juga perlu memastikan $R_{\\text{maks}} \\le 2{,}0\\text{ m}$ (jejari piringan).',
      D_fbd: {
        title: 'Diagram Gaya Bebas Anak di Atas Piringan Berputar',
        diagramId: 'fbd-rotating-disc',
        description:
          'Pada arah vertikal, gaya normal N mengimbangi berat mg. Pada arah horizontal radial, gaya gesek statis fs mengarah ke pusat rotasi menyediakan gaya sentripetal.',
        vectors: [
          { label: 'f_s', direction: 'Radial menuju pusat putaran', note: 'Maksimum μs mg = 176,4 N' },
          { label: 'N & mg', direction: 'Vertikal atas & bawah', note: 'Saling meniadakan (392,0 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Syarat Batas Tidak Tergelincir',
          formula: 'm \\omega^2 R_{\\text{maks}} = \\mu_s m g \\implies R_{\\text{maks}} = \\frac{\\mu_s g}{\\omega^2}',
          meaning: 'Semakin cepat piringan berputar ($\\omega$ besar), semakin kecil radius aman untuk duduk.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung radius maksimum R',
          detail: 'Substitusikan $\\mu_s = 0{,}45$, $g = 9{,}8\\text{ m/s}^2$, dan $\\omega = 2{,}0\\text{ rad/s}$.',
          math: 'R_{\\text{maks}} = \\frac{0{,}45 \\times 9{,}8}{(2{,}0)^2} = \\frac{4{,}41}{4} = 1{,}1025\\text{ m}',
        },
        {
          stepTitle: 'Verifikasi batas piringan dan bulatkan',
          detail: 'Karena $1{,}1025\\text{ m} < 2{,}0\\text{ m}$, posisi ini berada di atas piringan. Bulatkan ke satu desimal.',
          math: 'R_{\\text{maks}} \\approx 1{,}1\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Jika anak duduk lebih jauh dari $1{,}1\\text{ m}$ dari pusat, percepatan sentripetal $\\omega^2 R$ melampaui $\\mu_s g$ sehingga gaya gesek tidak lagi cukup menahan dan anak tergelincir keluar.',
      H_kesalahanUmum: [
        'Memakai $\\omega$ tanpa mengkuadratkannya.',
        'Lupa bahwa jika $R$ hasil hitungan melebihi jejari piringan ($2{,}0\\text{ m}$), jawaban harus dibatasi jejari piringan (dalam soal ini aman karena $1{,}1 < 2{,}0$).',
      ],
      I_intiPembelajaran:
        'Gaya gesek statis berperan sebagai gaya sentripetal pada lintasan putar datar: batas aman ditentukan oleh $\\omega^2 R \\le \\mu_s g$.',
    },
  },
  {
    id: 22,
    topic: 'Kinematika',
    title: 'Kinematika Kejar-Kejaran Tiga Pelari (Andi, Budi, Didi)',
    questionText:
      'Andi mengejar Budi dengan kecepatan sebesar $v = 2{,}0\\text{ m/s}$ yang selalu mengarah ke Budi, sedangkan Budi menghindari Andi dengan kecepatan sebesar $v$ dan membentuk sudut sebesar $60^\\circ$ terhadap arah kecepatan Andi. Untuk menghentikan hal ini, Didi mengejar Andi dengan kecepatan sebesar $v\'$ ke arah Andi. Apabila pada awalnya Jarak Andi ke Budi adalah $L$ dan jarak Didi ke Andi adalah $3L$, kelajuan minimal yang dibutuhkan Didi untuk menangkap Andi sebelum Andi berhasil menangkap Budi jika mereka mulai bergerak di waktu yang sama adalah ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Andi mengejar Budi pada jarak awal L dengan laju v sama dengan 2 koma 0 meter per sekon, sementara Budi bergerak menjauh dengan laju sama membentuk sudut 60 derajat terhadap arah gerak Andi. Di belakang, Didi mengejar Andi dari jarak awal 3 L dengan laju minimal v aksen.',
    answerValue: 5.0,
    answerDisplay: '5,0',
    solution: {
      A_memahamiFenomena:
        'Ini adalah masalah kinematika kecepatan relatif dan kurva pengejaran. Jarak antara Andi dan Budi berkurang secara konstan sepanjang garis hubung keduanya karena sudut antara vektor kecepatan Budi dan arah Andi-ke-Budi tetap $60^\\circ$. Didi harus menempuh jarak awal $3L$ relatif terhadap Andi sebelum waktu tangkap Andi terhadap Budi habis.',
      B_pengetahuanDasar:
        'Laju perubahan jarak antara dua partikel bergantung pada proyeksi vektor kecepatan masing-masing sepanjang garis hubung keduanya: $\\frac{dr_{AB}}{dt} = v_B\\cos\\theta - v_A$.',
      C_analisisFisis:
        'Pertama, hitung waktu $t_{AB}$ yang dibutuhkan Andi untuk menangkap Budi: laju mendekat sepanjang garis hubung Andi-Budi adalah $v - v\\cos 60^\\circ = 2{,}0(1 - 0{,}5) = 1{,}0\\text{ m/s}$, sehingga $t_{AB} = \\frac{L}{1{,}0}$. Kedua, agar Didi pasti menangkap Andi sebelum $t_{AB}$ bahkan pada skenario terburuk ketika Andi bergerak menjauhi Didi dengan kelajuan penuh $v$, laju mendekat Didi-Andi harus memenuhi $(v\' - v) t_{AB} \\ge 3L$.',
      D_fbd: {
        title: 'Diagram Vektor Kecepatan Kejar-Kejaran',
        diagramId: 'fbd-pursuit-triangle',
        description:
          'Vektor kecepatan Andi v mengarah lurus ke Budi, vektor kecepatan Budi v membentuk sudut 60° terhadap garis AB sehingga komponen menjauhnya v cos 60°. Didi mengejar Andi dari jarak 3L dengan kelajuan v\'.',
        vectors: [
          { label: 'v_Andi = 2,0 m/s', direction: 'Menuju Budi', note: 'Mendekati Budi dengan laju bersih 1,0 m/s' },
          { label: 'v_Budi = 2,0 m/s', direction: 'Sudut 60° dari arah Andi', note: 'Komponen searah garis AB = v cos 60° = 1,0 m/s' },
          { label: 'v\'_Didi = 5,0 m/s', direction: 'Menuju Andi', note: 'Laju relatif minimum terhadap Andi adalah 3,0 m/s' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Waktu Tangkap Andi ke Budi',
          formula: 't_{AB} = \\frac{L}{v(1 - \\cos 60^\\circ)}',
          meaning: 'Karena sudut $60^\\circ$ tetap, laju berkurangnya jarak $L$ bernilai konstan.',
        },
        {
          label: 'Syarat Minimum Kecepatan Didi',
          formula: '(v\' - v) t_{AB} = 3L \\implies v\' = v + \\frac{3L}{t_{AB}} = v + 3v(1 - \\cos 60^\\circ)',
          meaning: 'Didi harus menutup selisih jarak $3L$ dalam batas waktu $t_{AB}$ terhadap Andi yang bergerak.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung waktu tangkap Andi-Budi dalam L',
          detail: 'Dengan $v = 2{,}0\\text{ m/s}$ dan $\\cos 60^\\circ = 0{,}5$.',
          math: 't_{AB} = \\frac{L}{2{,}0(1 - 0{,}5)} = \\frac{L}{1{,}0} = L\\text{ (sekon)}',
        },
        {
          stepTitle: 'Hitung kelajuan minimal Didi',
          detail: 'Untuk menutup jarak $3L$ dalam waktu $t_{AB}$ saat Andi bergerak menjauh dengan laju $v = 2{,}0\\text{ m/s}$.',
          math: 'v\' - 2{,}0 = \\frac{3L}{L} = 3{,}0 \\implies v\' = 2{,}0 + 3{,}0 = 5{,}0\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Dengan laju $5{,}0\\text{ m/s}$, Didi mendekati Andi setidaknya sebesar $5{,}0 - 2{,}0 = 3{,}0\\text{ m/s}$, sehingga jarak $3L$ pasti habis sebelum atau tepat saat $t = L/1{,}0$, yakni sebelum Andi menangkap Budi.',
      H_kesalahanUmum: [
        'Menganggap Didi hanya perlu menempuh jarak $3L$ tanpa memperhitungkan bahwa Andi juga bergerak sejauh $v \\cdot t_{AB}$ (menghasilkan $v\' = 3{,}0\\text{ m/s}$ yang salah).',
        'Menggunakan $\\sin 60^\\circ$ alih-alih $\\cos 60^\\circ$ untuk proyeksi kecepatan sepanjang garis hubung.',
      ],
      I_intiPembelajaran:
        'Gunakan turunan jarak antarpartikel $\\frac{dr}{dt}$ sepanjang garis hubung untuk mengubah masalah kurva pengejaran yang rumit menjadi aljabar laju relatif yang sederhana.',
    },
  },
  {
    id: 23,
    topic: 'Usaha, Energi & Momentum',
    title: 'Jarak Henti Benda Menuruni Bidang Miring Licin lalu Bidang Datar Kasar',
    questionText:
      'Perhatikan Gambar no 23 di atas. Sebuah benda titik bermassa $m = 12\\text{ kg}$ berada di titik $A$ dalam keadaan diam. Ketinggian titik $A$ dari dasar bidang miring adalah $3{,}6\\text{ m}$. Benda tersebut kemudian dilepaskan dari titik $A$ dan bergerak menuruni permukaan bidang miring yang licin. Selanjutnya benda bergerak secara horizontal dari titik $B$ hingga berhenti di titik $C$. Permukaan bidang datar memiliki koefisien gesek kinetik $\\mu_k = 0{,}30$. Panjang lintasan $\\overline{BC}$ adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'gambar-23',
    stimulusCaption: 'Gambar no 23 (Ketinggian A = 3,6 m, lintasan datar BC kasar)',
    diagramSpeechNote:
      'Pada Gambar nomor 23, titik A berada di puncak bidang miring licin pada ketinggian 3 koma 6 meter di atas titik B. Setelah tiba di B, benda melanjutkan gerak pada lantai datar kasar dengan koefisien gesek miu k hingga berhenti di titik C.',
    answerValue: 12.0,
    answerDisplay: '12,0',
    solution: {
      A_memahamiFenomena:
        'Benda $m = 12\\text{ kg}$ meluncur dari keadaan diam di puncak $A$ ($h = 3{,}6\\text{ m}$) sepanjang bidang miring licin ke $B$, kemudian energi kinetiknya dihabiskan oleh gaya gesek kinetik di lintasan datar kasar $BC$ ($\\mu_k = 0{,}30$) hingga berhenti di $C$.',
      B_pengetahuanDasar:
        'Menurut teorema usaha-energi mekanik, perubahan energi mekanik dari titik $A$ ke titik $C$ sama dengan usaha gaya non-konservatif (gaya gesek kinetik sepanjang $BC$). Karena benda diam di $A$ dan diam kembali di $C$, seluruh energi potensial awal diserap oleh gesekan.',
      C_analisisFisis:
        'Di bidang miring $AB$ tidak ada gesekan sehingga tidak ada energi yang hilang. Di bidang datar $BC$, gaya normal adalah $N = m g$ sehingga gaya gesek kinetik bernilai $f_k = \\mu_k m g$. Usaha gesekan adalah $-f_k \\cdot s_{BC}$.',
      D_fbd: {
        title: 'Diagram Gaya pada Lintasan Miring Licin dan Datar Kasar',
        diagramId: 'fbd-ramp-flat-friction',
        description:
          'Di bidang datar BC bekerja berat mg ke bawah, gaya normal N = mg ke atas, dan gaya gesek kinetik fk = μk mg ke kiri melawan gerak.',
        vectors: [
          { label: 'f_k = μk mg', direction: 'Horizontal ke kiri pada BC', note: 'Menyerap energi mekanik awal mgh' },
          { label: 'N & mg', direction: 'Vertikal atas & bawah', note: 'Saling meniadakan (117,6 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kekekalan Energi dengan Usaha Gesekan',
          formula: 'm g h = f_k \\cdot s_{BC} = \\mu_k m g \\cdot s_{BC} \\implies s_{BC} = \\frac{h}{\\mu_k}',
          meaning: 'Massa $m$ dan percepatan gravitasi $g$ saling meniadakan sehingga panjang $BC$ hanya bergantung pada $h$ dan $\\mu_k$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi ketinggian h dan koefisien gesek',
          detail: 'Masukkan $h = 3{,}6\\text{ m}$ dan $\\mu_k = 0{,}30$.',
          math: 's_{BC} = \\frac{3{,}6}{0{,}30} = 12{,}0\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Benda menempuh $12{,}0\\text{ m}$ pada bidang datar sebelum berhenti total. Panjang lintasan ini tidak bergantung pada sudut kemiringan bidang $AB$ selama transisi di $B$ berlangsung mulus.',
      H_kesalahanUmum: [
        'Mencoba mencari sudut bidang miring terlebih dahulu padahal tidak diperlukan.',
        'Salah mengalikan $h \\times \\mu_k$ alih-alih membagi $h / \\mu_k$.',
      ],
      I_intiPembelajaran:
        'Metode usaha-energi dari titik awal ke titik akhir meniadakan kebutuhan menghitung kecepatan di titik antara $B$ maupun sudut bidang miring licin.',
    },
  },
  {
    id: 24,
    topic: 'Kinematika',
    title: 'Jarak Terdekat Dua Partikel Menuju Titik T',
    questionText:
      'Dua buah partikel ($A$ dan $B$) sedang bergerak menuju suatu titik $T$. Lokasi awal kedua partikel serta lokasi titik $T$ membentuk segitiga siku-siku dengan panjang sisi masing-masing $3s$, $4s$, dan $5s$ seperti Gambar no 24 di atas, di mana nilai $s = 3{,}5\\text{ m}$. Diketahui kedua partikel bergerak dengan kelajuan konstan yang sama dan tetap bergerak meski telah melewati titik $T$. Selama gerakan, kedua partikel akan memiliki jarak terdekat sebesar ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'gambar-24',
    stimulusCaption: 'Gambar no 24 (Segitiga siku-siku 3s, 4s, 5s dengan s = 3,5 m)',
    diagramSpeechNote:
      'Pada Gambar nomor 24 terdapat segitiga siku-siku T A B dengan sudut siku-siku di A. Partikel A di bawah bergerak vertikal ke atas menuju T sejauh 3 s, sedangkan partikel B di kanan bergerak miring menuju T sepanjang sisi miring 5 s. Panjang sisi datar A B adalah 4 s.',
    answerValue: 6.3,
    answerDisplay: '6,3',
    solution: {
      A_memahamiFenomena:
        'Partikel $A$ berjarak awal $3s$ dari $T$ sepanjang lintasan $AT$, dan partikel $B$ berjarak awal $5s$ dari $T$ sepanjang lintasan $BT$. Karena keduanya bergerak lurus dengan kelajuan konstan yang sama $u$, keduanya tidak mencapai $T$ bersamaan ($A$ melewati $T$ lebih dulu sebelum $B$ tiba). Kita mencari jarak pisah minimum antara $A$ dan $B$ sepanjang gerak mereka.',
      B_pengetahuanDasar:
        'Sudut antara dua lintasan di titik $T$ memenuhi $\\cos\\theta = \\frac{3s}{5s} = \\frac{3}{5}$. Aturan kosinus berlaku untuk jarak $d(t)$ antara dua partikel yang posisinya dari titik temu $T$ dinyatakan sebagai koordinat bertanda $r_A$ dan $r_B$.',
      C_analisisFisis:
        'Misalkan pada saat $t$, jarak bertanda partikel $A$ terhadap $T$ adalah $x = 3s - ut$. Karena $B$ mula-mula berada $2s$ lebih jauh dan kelajuan keduanya sama, jarak bertanda $B$ terhadap $T$ selalu $r_B = x + 2s$. Kuadrat jarak antara $A$ dan $B$ adalah fungsi kuadrat terhadap $x$ yang memiliki nilai minimum.',
      D_fbd: {
        title: 'Geometri Vektor Posisi Partikel A dan B terhadap T',
        diagramId: 'fbd-two-particle-T',
        description:
          'Lintasan A menuju T (panjang awal 3s) dan lintasan B menuju T (panjang awal 5s) bertemu di T dengan sudut θ (cos θ = 3/5). Jarak minimum tercapai saat A sudah melewati T sejauh s dan B masih berjarak s sebelum T.',
        vectors: [
          { label: 'v_A = u', direction: 'Sepanjang AT menuju T', note: 'Jarak awal ke T adalah 3s' },
          { label: 'v_B = u', direction: 'Sepanjang BT menuju T', note: 'Jarak awal ke T adalah 5s' },
          { label: 'd_min', direction: 'Jarak pisah saat x = -s', note: 'Terjadi ketika A lewat T sejauh s dan B di s sebelum T' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Aturan Kosinus Fungsi Jarak Kuadrat',
          formula: 'd^2(x) = x^2 + (x+2s)^2 - 2x(x+2s)\\cos\\theta',
          meaning: 'Dengan $\\cos\\theta = \\frac{3}{5}$, disederhanakan menjadi fungsi kuadrat $d^2(x) = \\frac{4}{5}x^2 + \\frac{8}{5}s x + 4s^2$.',
        },
        {
          label: 'Jarak Terdekat',
          formula: 'd_{\\min} = \\frac{4}{\\sqrt{5}} s',
          meaning: 'Diperoleh dari turunan $\\frac{d(d^2)}{dx} = 0 \\implies x = -s$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Sederhanakan fungsi d²(x) dengan cos θ = 3/5',
          detail: 'Substitusi $\\cos\\theta = 3/5$ ke persamaan aturan kosinus.',
          math: 'd^2(x) = 2x^2 + 4sx + 4s^2 - \\frac{6}{5}(x^2 + 2sx) = \\frac{4}{5}x^2 + \\frac{8}{5}sx + 4s^2',
        },
        {
          stepTitle: 'Cari titik minimum fungsi kuadrat',
          detail: 'Turunkan terhadap $x$ dan samakan dengan nol.',
          math: '\\frac{d(d^2)}{dx} = \\frac{8}{5}x + \\frac{8}{5}s = 0 \\implies x = -s',
        },
        {
          stepTitle: 'Hitung jarak minimum dengan s = 3,5 m',
          detail: 'Masukkan $x = -s$ dan $s = 3{,}5\\text{ m}$.',
          math: 'd_{\\min}^2 = \\frac{4}{5}s^2 - \\frac{8}{5}s^2 + 4s^2 = \\frac{16}{5}s^2 \\implies d_{\\min} = \\frac{4}{\\sqrt{5}}(3{,}5) = \\frac{14}{\\sqrt{5}} \\approx 6{,}2610\\text{ m} \\approx 6{,}3\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Jarak terdekat $6{,}3\\text{ m}$ terjadi tepat pada saat simetris ketika partikel $A$ telah melampaui $T$ sejauh $s = 3{,}5\\text{ m}$ sementara partikel $B$ masih berada sejauh $s = 3{,}5\\text{ m}$ sebelum $T$.',
      H_kesalahanUmum: [
        'Menganggap jarak terdekat terjadi saat $A$ tepat berada di $T$ ($d = 2s = 7{,}0\\text{ m}$), padahal saat itu keduanya masih saling mendekat.',
        'Mengira jarak terdekat adalah $0\\text{ m}$ dengan asumsi keduanya bertumbukan di $T$.',
      ],
      I_intiPembelajaran:
        'Nyatakan kuadrat jarak antarbenda sebagai fungsi satu variabel parameter gerak lalu cari titik minimumnya lewat turunan atau gerak relatif.',
    },
  },
  {
    id: 25,
    topic: 'Usaha, Energi & Momentum',
    title: 'Momentum Linear Pecahan Ledakan Tiga Bagian',
    questionText:
      'Sebuah benda bermassa $12\\text{ kg}$ berada dalam keadaan diam, kemudian tiba-tiba meledak dan terpecah menjadi tiga bagian, masing-masing bermassa $6\\text{ kg}$, $3\\text{ kg}$, dan $3\\text{ kg}$. Setelah ledakan, kedua massa $3\\text{ kg}$ saling bergerak dengan kelajuan yang sama dan membentuk sudut $120^\\circ$ terhadap satu sama lain. Jika energi kinetik total ketiga pecahan adalah $960\\text{ J}$, maka besar momentum linear untuk massa $6\\text{ kg}$ adalah ... $\\text{kg m/s}$.',
    unit: 'kg m/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah benda diam bermassa 12 kilogram meledak menjadi tiga pecahan bermassa 6 kilogram, 3 kilogram, dan 3 kilogram. Dua pecahan 3 kilogram bergerak dengan kelajuan sama dan saling membentuk sudut 120 derajat.',
    answerValue: 48.0,
    answerDisplay: '48,0',
    solution: {
      A_memahamiFenomena:
        'Ledakan internal memecah benda diam bermassa $12\\text{ kg}$ menjadi $m_1 = 6\\text{ kg}$, $m_2 = 3\\text{ kg}$, dan $m_3 = 3\\text{ kg}$. Tidak ada gaya luar saat ledakan sehingga momentum total sistem tetap nol.',
      B_pengetahuanDasar:
        'Dalam dua dimensi, kekekalan momentum vektor $\\vec{p}_1 + \\vec{p}_2 + \\vec{p}_3 = \\vec{0}$ berlaku. Hubungan energi kinetik tiap pecahan dengan momentumnya adalah $E_k = \\frac{p^2}{2m}$.',
      C_analisisFisis:
        'Karena kedua pecahan $3\\text{ kg}$ bermassa sama dan berkelajuan sama, besar momentumnya sama: $p_2 = p_3 = p$. Sudut di antara $\\vec{p}_2$ dan $\\vec{p}_3$ adalah $120^\\circ$, sehingga besar resultannya adalah $\\sqrt{p^2 + p^2 + 2p^2\\cos 120^\\circ} = p$. Agar total momentum tetap nol, pecahan $6\\text{ kg}$ harus memiliki besar momentum yang tepat sama: $p_1 = p$.',
      D_fbd: {
        title: 'Diagram Vektor Momentum Tiga Pecahan Ledakan',
        diagramId: 'fbd-explosion-3way',
        description:
          'Vektor p₂ dan p₃ sama panjang p dan mengapit sudut 120°, sedangkan vektor p₁ berlawanan arah dengan resultan p₂ + p₃ dan memiliki besar sama yaitu p.',
        vectors: [
          { label: 'p₂ (3 kg)', direction: 'Membentuk +60° dari sumbu-x', note: 'Besar momentum p = 48,0 kg m/s' },
          { label: 'p₃ (3 kg)', direction: 'Membentuk -60° dari sumbu-x', note: 'Besar momentum p = 48,0 kg m/s' },
          { label: 'p₁ (6 kg)', direction: 'Ke kiri (-x)', note: 'Menyeimbangkan resultan p₂ + p₃, besar = 48,0 kg m/s' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Resultan Momentum Dua Pecahan Simetris',
          formula: 'p_1 = |\\vec{p}_2 + \\vec{p}_3| = \\sqrt{p^2 + p^2 + 2p^2\\cos 120^\\circ} = p',
          meaning: 'Dua vektor sama besar bersudut $120^\\circ$ memiliki resultan sama dengan besar masing-masing vektor.',
        },
        {
          label: 'Energi Kinetik Total dalam Momentum',
          formula: 'E_{k,\\text{tot}} = \\frac{p^2}{2 m_2} + \\frac{p^2}{2 m_3} + \\frac{p^2}{2 m_1}',
          meaning: 'Menyatakan energi total dalam satu variabel momentum $p$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Susun persamaan energi kinetik total',
          detail: 'Masukkan $m_1 = 6\\text{ kg}$, $m_2 = 3\\text{ kg}$, dan $m_3 = 3\\text{ kg}$ dengan $p_1 = p_2 = p_3 = p$.',
          math: 'E_{k,\\text{tot}} = \\frac{p^2}{2(3)} + \\frac{p^2}{2(3)} + \\frac{p^2}{2(6)} = \\left(\\frac{1}{6} + \\frac{1}{6} + \\frac{1}{12}\\right)p^2 = \\frac{5}{12} p^2',
        },
        {
          stepTitle: 'Hitung nilai momentum p',
          detail: 'Diketahui $E_{k,\\text{tot}} = 960\\text{ J}$.',
          math: '\\frac{5}{12} p^2 = 960 \\implies p^2 = \\frac{960 \\times 12}{5} = 2304 \\implies p = \\sqrt{2304} = 48{,}0\\text{ kg m/s}',
        },
      ],
      G_interpretasiFisika:
        'Ketiga pecahan memiliki besar momentum yang sama ($48{,}0\\text{ kg m/s}$), namun karena massa pecahan pertama dua kali lipat lebih berat, kelajuannya ($8\\text{ m/s}$) hanya setengah dari kelajuan masing-masing pecahan ringan ($16\\text{ m/s}$).',
      H_kesalahanUmum: [
        'Mengira kedua pecahan $3\\text{ kg}$ punya momentum resultan $2p\\cos 30^\\circ$ alih-alih $2p\\cos 60^\\circ = p$.',
        'Menghitung kelajuan $v_1$ ($8{,}0\\text{ m/s}$) bukan momentum $p_1 = m_1 v_1$ ($48{,}0\\text{ kg m/s}$).',
      ],
      I_intiPembelajaran:
        'Menuliskan energi kinetik sebagai $E_k = p^2/(2m)$ sangat efisien pada soal ledakan karena langsung menghubungkan momentum vektor yang kekal dengan energi total.',
    },
  },
  {
    id: 26,
    topic: 'Usaha, Energi & Momentum',
    title: 'Daya Pengeluaran Energi Pria Menaiki Tangga di Dalam Lift',
    questionText:
      'Seorang pria dengan berat $w = 588\\text{ N}$ berada di dalam lift yang sedang bergerak vertikal ke atas dengan percepatan $a = 2{,}45\\text{ m/s}^2$. Pada saat tertentu lift memiliki kecepatan sebesar $18\\text{ m/s}$. Pria tersebut menaiki tangga vertikal di dalam lift dengan kecepatan $1{,}6\\text{ m/s}$ relatif terhadap lift. Laju pengeluaran energi pria tersebut ... $\\text{J/s}$.',
    unit: 'J/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seorang pria dengan berat 588 newton menaiki tangga vertikal berkecepatan 1 koma 6 meter per sekon relatif terhadap lift yang sedang bergerak dipercepat ke atas sebesar 2 koma 45 meter per sekon kuadrat.',
    answerValue: 1176.0,
    answerDisplay: '1176,0',
    solution: {
      A_memahamiFenomena:
        'Pria memanjat tangga vertikal dengan laju konstan $v_{\\text{rel}} = 1{,}6\\text{ m/s}$ relatif terhadap kerangka lift yang sedang mengalami percepatan ke atas $a = 2{,}45\\text{ m/s}^2$. Laju pengeluaran energi oleh pria adalah daya yang dikeluarkan ototnya untuk mengangkat dirinya relatif terhadap anak tangga lift.',
      B_pengetahuanDasar:
        'Dalam kerangka lift yang dipercepat ke atas sebesar $a$, terdapat gravitasi efektif $g_{\\text{eff}} = g + a$. Gaya tekan rata-rata yang harus diberikan oleh tangan dan kaki pria pada anak tangga sama dengan berat semunya $N = m(g + a)$.',
      C_analisisFisis:
        'Kecepatan sesaat lift $v_{\\text{lift}} = 18\\text{ m/s}$ hanya menyumbang daya yang berasal dari mesin/kabel lift ($N \\cdot v_{\\text{lift}}$). Daya mekanik yang murni dikeluarkan oleh tubuh pria untuk mendaki anak tangga relatif terhadap lift adalah $P_{\\text{pria}} = N \\cdot v_{\\text{rel}} = m(g + a) v_{\\text{rel}}$.',
      D_fbd: {
        title: 'Diagram Gaya pada Pria yang Memanjat Tangga di Lift',
        diagramId: 'fbd-elevator-ladder',
        description:
          'Anak tangga memberikan gaya ke atas N = m(g + a) pada pria agar ia memiliki percepatan sama dengan lift, sedangkan berat mg mengarah ke bawah.',
        vectors: [
          { label: 'N = m(g+a)', direction: 'Vertikal ke atas', note: 'Gaya tumpu tangga sebesar 735,0 N' },
          { label: 'w = mg', direction: 'Vertikal ke bawah', note: 'Berat sejati sebesar 588,0 N' },
          { label: 'v_rel = 1,6 m/s', direction: 'Kecepatan naik relatif lift', note: 'Menentukan daya otot pria' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Daya Otot Pria di Kerangka Lift',
          formula: 'P_{\\text{pria}} = m (g + a) v_{\\text{rel}}',
          meaning: 'Daya biologis/mekanik pria independen terhadap kecepatan inersia lift ($18\\text{ m/s}$).',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung massa pria dari beratnya',
          detail: 'Gunakan $g = 9{,}8\\text{ m/s}^2$.',
          math: 'm = \\frac{588}{9{,}8} = 60\\text{ kg}',
        },
        {
          stepTitle: 'Hitung berat semu dan laju pengeluaran energi pria',
          detail: 'Kalikan gaya efektif $m(g+a)$ dengan $v_{\\text{rel}} = 1{,}6\\text{ m/s}$.',
          math: 'P_{\\text{pria}} = 60 \\times (9{,}8 + 2{,}45) \\times 1{,}6 = 735 \\times 1{,}6 = 1176{,}0\\text{ J/s}',
        },
      ],
      G_interpretasiFisika:
        'Prinsip invariansi Galilean menjamin bahwa laju pengeluaran energi tubuh seseorang saat memanjat tangga tidak bergantung pada apakah lift sedang berkecepatan $18\\text{ m/s}$ atau $180\\text{ m/s}$, melainkan hanya bergantung pada percepatan lift dan laju relatif memanjat.',
      H_kesalahanUmum: [
        'Menjumlahkan kecepatan lift $18\\text{ m/s}$ dengan $1{,}6\\text{ m/s}$, padahal daya dari kecepatan $18\\text{ m/s}$ disuplai oleh motor lift, bukan oleh pria.',
        'Lupa menambahkan percepatan lift $a$ pada percepatan gravitasi $g$.',
      ],
      I_intiPembelajaran:
        'Untuk menghitung daya yang dikeluarkan oleh seseorang di dalam kendaraan dipercepat, selalu hitung gaya reaksi terhadap tumpuan di dalam kendaraan dikalikan kecepatan relatif terhadap tumpuan tersebut.',
    },
  },
  {
    id: 27,
    topic: 'Kinematika',
    title: 'Kecepatan Peluru B Saat Mengenai Peluru A di Puncak',
    questionText:
      'Sebuah peluru $A$ ditembakkan vertikal ke atas dengan kecepatan $58{,}8\\text{ m/s}$. $4{,}0\\text{ s}$ kemudian peluru $B$ ditembakkan dari tempat yang sama, sedemikian sehingga peluru $B$ mengenai peluru $A$ ketika peluru $A$ berada pada ketinggian maksimum. Kecepatan peluru $B$ saat mengenai peluru $A$ sama dengan ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Peluru A ditembakkan vertikal ke atas dengan laju 58 koma 8 meter per sekon. Empat sekon kemudian peluru B menyusul vertikal dari titik yang sama hingga menumbuk A tepat di ketinggian puncak.',
    answerValue: 78.4,
    answerDisplay: '78,4',
    solution: {
      A_memahamiFenomena:
        'Peluru $A$ naik vertikal ke atas hingga berhenti sesaat di ketinggian maksimum $h_{\\text{maks}}$ pada waktu $t_A$. Peluru $B$ baru diluncurkan $\\Delta t = 4{,}0\\text{ s}$ setelah $A$, sehingga $B$ hanya memiliki waktu terbang $t_B = t_A - 4{,}0\\text{ s}$ untuk mencapai ketinggian $h_{\\text{maks}}$ yang sama.',
      B_pengetahuanDasar:
        'Pada ketinggian maksimum peluru $A$, kecepatannya nol sehingga $t_A = v_{0A}/g$ dan $h_{\\text{maks}} = \\frac{v_{0A}^2}{2g}$. Untuk peluru $B$, posisi dan kecepatan pada waktu $t_B$ memenuhi $h_{\\text{maks}} = v_{0B} t_B - \\frac{1}{2} g t_B^2$ dan $v_B = v_{0B} - g t_B$.',
      C_analisisFisis:
        'Alih-alih mencari $v_{0B}$ lalu menguranginya dengan $g t_B$, perhatikan bahwa dari persamaan ketinggian $v_{0B} = \\frac{h_{\\text{maks}}}{t_B} + \\frac{1}{2} g t_B$, maka kecepatan saat tumbukan langsung diberikan oleh $v_B = \\frac{h_{\\text{maks}}}{t_B} - \\frac{1}{2} g t_B$.',
      D_fbd: {
        title: 'Sketsa Posisi Vertikal Peluru A dan B Saat Bertemu',
        diagramId: 'fbd-two-bullets',
        description:
          'Saat peluru A tepat diam di ketinggian puncak h_maks = 176,4 m pada t = 6,0 s, peluru B yang baru menempuh 2,0 s datang dari bawah dengan kecepatan tinggi menumbuk A.',
        vectors: [
          { label: 'v_A(puncak) = 0', direction: 'Berhenti sesaat di puncak', note: 'Pada ketinggian 176,4 m (t = 6,0 s)' },
          { label: 'v_B = 78,4 m/s', direction: 'Vertikal ke atas', note: 'Setelah menempuh 2,0 s sejak diluncurkan' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Waktu Puncak dan Ketinggian Maksimum Peluru A',
          formula: 't_A = \\frac{v_{0A}}{g}, \\qquad h_{\\text{maks}} = \\frac{v_{0A}^2}{2g}',
          meaning: 'Menentukan kapan dan di mana tumbukan terjadi.',
        },
        {
          label: 'Kecepatan Peluru B Saat Tumbukan',
          formula: 'v_B = v_{0B} - g t_B = \\frac{h_{\\text{maks}}}{t_B} - \\frac{1}{2} g t_B',
          meaning: 'Diperoleh dari eliminasi $v_{0B}$ pada persamaan posisi $h_{\\text{maks}}$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung waktu dan ketinggian puncak peluru A',
          detail: 'Dengan $v_{0A} = 58{,}8\\text{ m/s}$ dan $g = 9{,}8\\text{ m/s}^2$.',
          math: 't_A = \\frac{58{,}8}{9{,}8} = 6{,}0\\text{ s}, \\qquad h_{\\text{maks}} = \\frac{58{,}8^2}{2 \\times 9{,}8} = 176{,}4\\text{ m}',
        },
        {
          stepTitle: 'Tentukan waktu terbang peluru B',
          detail: 'Peluru $B$ berangkat $4{,}0\\text{ s}$ lebih lambat.',
          math: 't_B = 6{,}0 - 4{,}0 = 2{,}0\\text{ s}',
        },
        {
          stepTitle: 'Hitung kecepatan peluru B saat mengenai A',
          detail: 'Hitung terlebih dahulu $v_{0B}$ atau langsung pakai rumus selisih.',
          math: 'v_B = \\frac{176{,}4}{2{,}0} - \\frac{1}{2}(9{,}8)(2{,}0) = 88{,}2 - 9{,}8 = 78{,}4\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Peluru $B$ harus ditembakkan sangat cepat ($v_{0B} = 98{,}0\\text{ m/s}$) agar bisa mengejar ketinggian $176{,}4\\text{ m}$ hanya dalam $2{,}0\\text{ s}$, sehingga saat bertemu $A$ kecepatannya masih $78{,}4\\text{ m/s}$ ke atas.',
      H_kesalahanUmum: [
        'Menghitung kecepatan awal $v_{0B}$ ($98{,}0\\text{ m/s}$) lalu berhenti tanpa menguranginya dengan $g t_B$.',
        'Menggunakan $t = 4{,}0\\text{ s}$ sebagai waktu terbang $B$, padahal $4{,}0\\text{ s}$ adalah selisih waktu peluncuran.',
      ],
      I_intiPembelajaran:
        'Pada gerak dua proyektil dengan waktu peluncuran berbeda, bedakan dengan tegas antara selisih waktu peluncuran ($\\Delta t$) dan lama waktu terbang masing-masing benda ($t_A$ dan $t_B$).',
    },
  },
  {
    id: 28,
    topic: 'Kinematika',
    title: 'Kecepatan Arus Sungai dari Gerak Perahu Motor dan Rakit',
    questionText:
      'Sebuah perahu motor yang tengah melaju ke hilir melewati sebuah rakit di titik $A$. Setelah $45\\text{ menit}$ bergerak, perahu tersebut berbalik arah dan setelah beberapa saat ia berjumpa lagi dengan rakit tersebut pada jarak $l = 7{,}5\\text{ km}$ dari titik $A$. Jika dianggap kinerja mesinnya konstan, maka kecepatan arus sungai adalah ... $\\text{km/h}$.',
    unit: 'km/h',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah perahu motor melaju searah arus sungai melewati rakit di titik A, berlayar ke hilir selama 45 menit, lalu berbalik arah menuju hulu hingga bertemu kembali dengan rakit yang telah hanyut sejauh 7 koma 5 kilometer dari titik A.',
    answerValue: 5.0,
    answerDisplay: '5,0',
    solution: {
      A_memahamiFenomena:
        'Rakit hanyut mengikuti aliran sungai (kecepatannya terhadap air adalah nol, dan terhadap daratan sama dengan $v_{\\text{arus}}$). Kinerja mesin perahu motor konstan berarti kelajuan perahu relatif terhadap air ($v_p$) tetap sama baik saat ke hilir maupun saat ke hulu.',
      B_pengetahuanDasar:
        'Memilih kerangka acuan yang bergerak bersama air sungai membuat masalah ini sangat ringkas: dalam kerangka air, rakit diam di tempat sedangkan perahu motor melaju menjauh dengan laju $v_p$ lalu kembali dengan laju $v_p$ yang sama.',
      C_analisisFisis:
        'Dalam kerangka air, karena jarak pergi dan jarak pulang menuju rakit sama dan kelajuan relatif perahu terhadap air tetap $v_p$, waktu tempuh kembali $t_2$ tepat sama dengan waktu tempuh pergi $t_1 = 45\\text{ menit}$. Jadi total waktu sejak berpisah hingga bertemu lagi adalah $t_{\\text{tot}} = 90\\text{ menit} = 1{,}5\\text{ jam}$. Selama waktu tersebut, rakit hanyut sejauh $l = 7{,}5\\text{ km}$ terhadap daratan.',
      D_fbd: {
        title: 'Diagram Gerak Relatif Perahu dan Rakit di Sungai',
        diagramId: 'fbd-river-raft',
        description:
          'Dalam kerangka sungai, perahu pergi selama 45 menit dan pulang selama 45 menit. Dalam kerangka daratan, titik pertemuan bergeser ke hilir sejauh l = 7,5 km akibat arus sungai.',
        vectors: [
          { label: 'v_rakit = v_arus', direction: 'Ke hilir', note: 'Menempuh 7,5 km dalam 1,5 jam' },
          { label: 'v_perahu (hilir)', direction: 'Ke hilir (vp + v_arus)', note: 'Selama t₁ = 45 menit' },
          { label: 'v_perahu (hulu)', direction: 'Ke hulu (vp - v_arus)', note: 'Selama t₂ = 45 menit' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Simetri Waktu dalam Kerangka Air',
          formula: 't_2 = t_1 \\implies t_{\\text{tot}} = 2 t_1',
          meaning: 'Kecepatan perahu terhadap rakit selalu bernilai $v_p$ baik saat pergi maupun pulang.',
        },
        {
          label: 'Kecepatan Arus Sungai',
          formula: 'v_{\\text{arus}} = \\frac{l}{t_{\\text{tot}}} = \\frac{l}{2 t_1}',
          meaning: 'Rakit hanyut murni mengikuti arus selama total waktu perjalanan.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung total waktu hingga berjumpa kembali',
          detail: 'Waktu pergi $45\\text{ menit}$ dan waktu kembali juga $45\\text{ menit}$.',
          math: 't_{\\text{tot}} = 2 \\times 45\\text{ menit} = 90\\text{ menit} = 1{,}5\\text{ jam}',
        },
        {
          stepTitle: 'Hitung kecepatan arus sungai',
          detail: 'Bagi jarak hanyut rakit $l = 7{,}5\\text{ km}$ dengan $1{,}5\\text{ jam}$.',
          math: 'v_{\\text{arus}} = \\frac{7{,}5\\text{ km}}{1{,}5\\text{ jam}} = 5{,}0\\text{ km/h}',
        },
      ],
      G_interpretasiFisika:
        'Menariknya, kecepatan perahu motor $v_p$ tidak perlu diketahui karena $v_p$ memengaruhi jauhnya perahu pergi, tetapi tidak memengaruhi rasio waktu pulang-pergi dalam kerangka sungai.',
      H_kesalahanUmum: [
        'Membagi $7{,}5\\text{ km}$ hanya dengan $45\\text{ menit}$ ($0{,}75\\text{ jam}$), lupa memperhitungkan waktu saat perahu berbalik ke hulu.',
      ],
      I_intiPembelajaran:
        'Transformasi ke kerangka acuan fluida (sungai) mengubah soal gerak dua benda yang panjang aljabarnya menjadi simetri 2 langkah yang sangat elegan.',
    },
  },
  {
    id: 29,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Kesetimbangan Dua Batang pada Setengah Lingkaran Licin',
    questionText:
      'Dua buah batang seragam $A$ dan $B$ masing-masing dengan massa berturut-turut $m_A$ dan $m_B$ dan panjang berturut-turut $2L_A = \\frac{18R}{5}$ dan $2L_B = \\frac{16R}{5}$ diletakkan pada batang licin setengah lingkaran berjari-jari $R$ seperti pada Gambar no 29. Ujung batang $A$ bertemu dengan ujung batang $B$ pada permukaan setengah lingkaran. Pada keadaan kesetimbangan statik, sudut yang dibentuk antara batang $A$ dengan horizontal adalah $\\theta$. Percepatan gravitasi $g$ mengarah ke bawah. Jika diketahui $\\tan\\theta = 3/4$, maka nilai perbandingan $m_A/m_B$ sama dengan ... (tanpa satuan).',
    unit: 'rasio',
    stimulusDiagramId: 'gambar-29',
    stimulusCaption: 'Gambar no 29 (Dua batang bertemu pada lintasan setengah lingkaran licin berjari-jari R)',
    diagramSpeechNote:
      'Pada Gambar nomor 29 terlihat setengah lingkaran berdiameter mendatar 2 R. Batang B bersandar di tepi kiri dan batang A bersandar di tepi kanan, dengan kedua ujung bawahnya bertemu pada titik di busur setengah lingkaran. Sudut antara batang A dan garis mendatar adalah teta.',
    answerValue: 1.7,
    answerDisplay: '1,7',
    solution: {
      A_memahamiFenomena:
        'Dua batang homogen $A$ dan $B$ bertumpu pada tepi kiri dan tepi kanan setengah lingkaran licin berdiameter horizontal $2R$, sementara kedua ujung bawahnya bertemu di satu titik $P$ pada busur setengah lingkaran. Sistem berada dalam kesetimbangan statik pada sudut $\\theta$ ($\\tan\\theta = 3/4$).',
      B_pengetahuanDasar:
        'Karena seluruh tumpuan bersifat licin (tidak ada gesekan), metode paling ampuh dan bebas gaya reaksi normal adalah Prinsip Kerja Virtual (atau minimum energi potensial $\\frac{dU}{d\\theta} = 0$). Berdasarkan Teorema Thales, sudut di titik $P$ yang menghadap diameter $2R$ adalah sudut siku-siku $90^\\circ$.',
      C_analisisFisis:
        'Pilih garis diameter horizontal sebagai acuan $y = 0$. Panjang tali busur dari tepi kanan ke $P$ adalah $2R\\cos\\theta$, sehingga ketinggian titik $P$ adalah $y_P = -2R\\sin\\theta\\cos\\theta$. Pusat massa batang $A$ berjarak $L_A$ dari $P$ ke kanan-atas pada sudut $\\theta$: $y_A = (L_A - 2R\\cos\\theta)\\sin\\theta$. Pusat massa batang $B$ berjarak $L_B$ dari $P$ ke kiri-atas pada sudut $(90^\\circ - \\theta)$: $y_B = (L_B - 2R\\sin\\theta)\\cos\\theta$.',
      D_fbd: {
        title: 'Geometri Koordinat dan Gaya pada Kesetimbangan Dua Batang',
        diagramId: 'fbd-semicircle-rods',
        description:
          'Batang A dan B membentuk sudut 90° di titik P pada busur setengah lingkaran. Energi potensial gravitasi total bergantung pada posisi vertikal pusat massa masing-masing batang.',
        vectors: [
          { label: 'm_A g', direction: 'Vertikal ke bawah di pusat massa A', note: 'Jarak dari titik P adalah L_A = 9R/5' },
          { label: 'm_B g', direction: 'Vertikal ke bawah di pusat massa B', note: 'Jarak dari titik P adalah L_B = 8R/5' },
          { label: 'N_tepi & N_P', direction: 'Tegak lurus permukaan licin', note: 'Tidak melakukan usaha virtual' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Energi Potensial Total Sistem',
          formula: 'U(\\theta) = m_A g (L_A \\sin\\theta - R\\sin 2\\theta) + m_B g (L_B \\cos\\theta - R\\sin 2\\theta)',
          meaning: 'Menggunakan identitas $2\\sin\\theta\\cos\\theta = \\sin 2\\theta$.',
        },
        {
          label: 'Syarat Kesetimbangan (dU/dθ = 0)',
          formula: '\\frac{m_A}{m_B} = \\frac{L_B \\sin\\theta + 2R\\cos 2\\theta}{L_A \\cos\\theta - 2R\\cos 2\\theta}',
          meaning: 'Perbandingan massa diperoleh dari syarat turunan pertama energi potensial sama dengan nol.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Tentukan nilai trigonometri dari tan θ = 3/4',
          detail: 'Dari segitiga 3-4-5, $\\sin\\theta = 3/5$, $\\cos\\theta = 4/5$, dan $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$.',
          math: '\\cos 2\\theta = \\frac{16}{25} - \\frac{9}{25} = \\frac{7}{25}',
        },
        {
          stepTitle: 'Substitusi L_A = 9R/5 dan L_B = 8R/5',
          detail: 'Hitung pembilang dan penyebut perbandingan $m_A / m_B$.',
          math: '\\frac{m_A}{m_B} = \\frac{\\frac{8}{5}\\left(\\frac{3}{5}\\right) + 2\\left(\\frac{7}{25}\\right)}{\\frac{9}{5}\\left(\\frac{4}{5}\\right) - 2\\left(\\frac{7}{25}\\right)} = \\frac{\\frac{24 + 14}{25}}{\\frac{36 - 14}{25}} = \\frac{38}{22} = \\frac{19}{11}',
        },
        {
          stepTitle: 'Hitung nilai desimal dan bulatkan',
          detail: 'Ubah pecahan $\\frac{19}{11}$ menjadi desimal satu angka di belakang koma.',
          math: '\\frac{m_A}{m_B} = 1{,}7272\\ldots \\approx 1{,}7',
        },
      ],
      G_interpretasiFisika:
        'Karena batang $A$ miring lebih landai ($\\theta \\approx 36{,}9^\\circ$) daripada batang $B$ ($53{,}1^\\circ$), batang $A$ harus lebih berat ($1{,}7$ kali massa $B$) agar momen gaya beratnya mampu menyeimbangkan sistem.',
      H_kesalahanUmum: [
        'Mengira panjang batang sama dengan panjang tali busur di dalam setengah lingkaran, padahal sebagian batang menjulur ke luar tepi.',
        'Salah menulis tanda turunan $\\frac{d}{d\\theta}(\\cos\\theta) = -\\sin\\theta$.',
      ],
      I_intiPembelajaran:
        'Pada kesetimbangan statik sistem licin berderajat kebebasan tunggal ($\\theta$), prinsip kerja virtual $\\frac{dU}{d\\theta} = 0$ jauh lebih cepat dan bebas kesalahan dibandingkan menguraikan tiga gaya normal yang tidak diketahui.',
    },
  },
  {
    id: 30,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Kesetimbangan Rotasi Batang Berbentuk L di Bidang Kasar',
    questionText:
      'Sebuah batang homogen dengan panjang $17a$ dibengkokkan menyerupai huruf $L$ menjadi dua batang dengan panjang $10a$ dan $7a$ di mana sudut antara kedua sisi batang adalah $90^\\circ$ (lihat Gambar no 30). Batang $L$ tersebut diletakkan pada bidang kasar horisontal. Pada titik siku $L$ tersebut dipasang benang tak bermassa, kemudian benang tersebut ditarik ke kanan sepanjang bidang horisontal dengan kecepatan konstan. Selama gerakan, batang $L$ tetap mempertahankan bentuknya relatif terhadap arah gerakan, di mana sudut tumpul antara batang $10a$ dengan arah gerakan adalah $180^\\circ - \\theta$. Jika $\\tan\\theta$ dapat dinyatakan sebagai $\\tan\\theta = \\beta^2$ dengan $\\beta$ suatu bilangan positif, maka nilai $\\beta$ sama dengan ... (tanpa satuan).',
    unit: 'bilangan',
    stimulusDiagramId: 'gambar-30',
    stimulusCaption: 'Gambar no 30 (Batang L dengan lengan 10a dan 7a ditarik ke kanan)',
    diagramSpeechNote:
      'Pada Gambar nomor 30, batang siku huruf L memiliki lengan atas sepanjang 10 a dan lengan bawah sepanjang 7 a yang saling tegak lurus. Benang menarik titik siku ke arah kanan mendatar, dan sudut teta terbentuk antara lengan 10 a dengan arah kiri mendatar.',
    answerValue: 0.7,
    answerDisplay: '0,7',
    solution: {
      A_memahamiFenomena:
        'Batang homogen berbentuk huruf $L$ bergerak translasi dengan kecepatan konstan di atas lantai datar kasar akibat tarikan tali pada titik sikunya. Karena kecepatan konstan dan orientasi tidak berputar, gaya total maupun torka total terhadap titik siku harus nol.',
      B_pengetahuanDasar:
        'Karena batang homogen (rapat massa linear $\\lambda$ seragam), setiap lengan mengalami gaya gesek kinetik yang terdistribusi merata sepanjang lengan tersebut, arahnya berlawanan dengan arah kecepatan (ke kiri). Resultan gaya gesek pada masing-masing lengan bekerja tepat di titik tengah (pusat massa) lengan tersebut.',
      C_analisisFisis:
        'Ambil titik siku $O$ sebagai poros torka sehingga gaya tarikan tali di $O$ tidak menghasilkan torka. Lengan $L_1 = 10a$ miring ke kiri-atas bersudut $\\theta$ terhadap garis horizontal ke kiri, sehingga jarak tegak lurus gaya geseknya ($f_1 = \\mu \\lambda L_1 g$) terhadap garis tarik horizontal adalah $\\frac{L_1}{2}\\sin\\theta$ (torka berlawanan jarum jam). Lengan $L_2 = 7a$ tegak lurus $L_1$ menuju kanan-bawah pada sudut $90^\\circ - \\theta$ di bawah garis tarik, sehingga lengan torkanya adalah $\\frac{L_2}{2}\\sin(90^\\circ - \\theta) = \\frac{L_2}{2}\\cos\\theta$ (torka searah jarum jam).',
      D_fbd: {
        title: 'Diagram Gaya Gesek dan Torka pada Batang Berbentuk L',
        diagramId: 'fbd-L-rod-friction',
        description:
          'Gaya tarik T di titik siku O diarahkan ke kanan. Gaya gesek f₁ pada lengan 10a dan f₂ pada lengan 7a keduanya mengarah ke kiri di titik tengah masing-masing lengan.',
        vectors: [
          { label: 'T', direction: 'Ke kanan di titik siku O', note: 'Lengan torka terhadap O bernilai nol' },
          { label: 'f₁ = μλ(10a)g', direction: 'Ke kiri di tengah lengan 10a', note: 'Lengan momen = 5a sin θ' },
          { label: 'f₂ = μλ(7a)g', direction: 'Ke kiri di tengah lengan 7a', note: 'Lengan momen = 3,5a cos θ' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kesetimbangan Torka Terhadap Titik Siku O',
          formula: 'f_1 \\left(\\frac{L_1}{2}\\sin\\theta\\right) = f_2 \\left(\\frac{L_2}{2}\\cos\\theta\\right)',
          meaning: 'Karena $f_1 \\propto L_1$ dan $f_2 \\propto L_2$, persamaan menjadi $L_1^2 \\sin\\theta = L_2^2 \\cos\\theta$.',
        },
        {
          label: 'Sudut Kesetimbangan',
          formula: '\\tan\\theta = \\left(\\frac{L_2}{L_1}\\right)^2 = \\beta^2 \\implies \\beta = \\frac{L_2}{L_1}',
          meaning: 'Koefisien gesek $\\mu$ dan panjang dasar $a$ saling meniadakan.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusikan rasio panjang kedua lengan',
          detail: 'Dengan $L_1 = 10a$ dan $L_2 = 7a$, tentukan nilai $\\tan\\theta$.',
          math: '\\tan\\theta = \\left(\\frac{7a}{10a}\\right)^2 = (0{,}7)^2',
        },
        {
          stepTitle: 'Tentukan nilai β',
          detail: 'Karena $\\tan\\theta = \\beta^2$ dan $\\beta > 0$.',
          math: '\\beta = 0{,}7',
        },
      ],
      G_interpretasiFisika:
        'Lengan yang lebih panjang ($10a$) bukan hanya lebih berat (gaya gesek lebih besar) melainkan juga punya lengan torka lebih panjang, sehingga pengaruh panjang muncul secara kuadratik ($L^2$).',
      H_kesalahanUmum: [
        'Menganggap gaya gesek kedua lengan sama besar dan hanya menulis $L_1 \\sin\\theta = L_2 \\cos\\theta$ (lupa bahwa $f \\propto L$ juga!).',
        'Menukar posisi $L_1$ dan $L_2$ pada pembilang dan penyebut.',
      ],
      I_intiPembelajaran:
        'Pada benda tegar homogen yang meluncur di bidang kasar, torka gaya gesek tiap segmen terhadap poros sebanding dengan kuadrat panjang segmen tersebut.',
    },
  },
];
