import type { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_4: PhysicsProblem[] = [
  {
    id: 31,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Frekuensi Sudut Osilasi Batang pada Katrol dan Dua Pegas',
    questionText:
      'Sebuah batang dengan massa $5m$ tergantung pada dua pegas masing-masing dengan konstanta pegas $6k$ dan $3k$ seperti pada Gambar no 31. Selama gerakan osilasi vertikal sistem pegas dan batang, batang selalu dalam posisi horisontal. Abaikan massa tali dan katrol. Jika kecepatan sudut osilasi $\\omega$ dapat dituliskan sebagai $\\omega^2 = \\alpha \\frac{k}{m}$, maka nilai $\\alpha$ sama dengan ... (tanpa satuan).',
    unit: 'bilangan',
    stimulusDiagramId: 'gambar-31',
    stimulusCaption: 'Gambar no 31 (Katrol tergantung, tali menghubungkan pegas 6k dan 3k ke batang 5m)',
    diagramSpeechNote:
      'Pada Gambar nomor 31, sebuah katrol digantung tetap di langit-langit. Seutas tali melewati katrol tersebut; ujung kiri tali terhubung ke pegas 6 k dan ujung kanan ke pegas 3 k, sementara bagian bawah kedua pegas menggantung batang horizontal bermassa 5 m.',
    answerValue: 1.6,
    answerDisplay: '1,6',
    solution: {
      A_memahamiFenomena:
        'Batang bermassa $M = 5m$ berosilasi vertikal dalam posisi selalu horizontal. Kedua pegas ($k_1 = 6k$ dan $k_2 = 3k$) dihubungkan di bagian atasnya oleh seutas tali yang melewati katrol licin tak bermassa. Karena katrol bebas berputar, tali dapat bergeser sehingga pertambahan panjang kedua pegas tidak harus sama, melainkan tegangan talinya yang selalu sama.',
      B_pengetahuanDasar:
        'Untuk sistem osilasi harmonik sederhana dengan massa $M$ dan konstanta pegas efektif $k_{\\text{eff}}$, berlaku $\\omega^2 = \\frac{k_{\\text{eff}}}{M}$. Karena tali dan katrol tak bermassa serta licin, tegangan tali $T$ di sisi kiri dan sisi kanan katrol sama besar setiap saat.',
      C_analisisFisis:
        'Misalkan batang turun sejauh $y$ dari posisi setimbang dan tali di sisi kiri turun sejauh $z$ (sehingga tali di sisi kanan naik sejauh $z$). Pertambahan panjang pegas kiri adalah $\\Delta y_1 = y - z$, dan pegas kanan $\\Delta y_2 = y + z$. Jumlah pertambahan panjang kedua pegas adalah $\\Delta y_1 + \\Delta y_2 = 2y$. Di sisi lain, keseimbangan tegangan tali menuntut $T = k_1 \\Delta y_1 = k_2 \\Delta y_2$, dan gaya pemulih total ke atas pada batang adalah $F_{\\text{tot}} = k_1 \\Delta y_1 + k_2 \\Delta y_2 = 2T$.',
      D_fbd: {
        title: 'Diagram Gaya Pemulih pada Batang dan Pegas Terkopel Katrol',
        diagramId: 'fbd-pulley-two-springs',
        description:
          'Kedua pegas menarik batang ke atas dengan gaya yang sama besar T karena terhubung oleh satu tali melalui katrol licin, sehingga total gaya pemulih ke atas adalah 2T.',
        vectors: [
          { label: 'T = 6k Δy₁', direction: 'Ke atas pada ujung kiri batang', note: 'Sama besar dengan tegangan sisi kanan' },
          { label: 'T = 3k Δy₂', direction: 'Ke atas pada ujung kanan batang', note: 'Pegas 3k meregang dua kali lebih panjang' },
          { label: 'F_tot = 2T', direction: 'Gaya pemulih total ke atas', note: 'Menghasilkan k_eff = 8k' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Hubungan Regangan dan Tegangan Tali',
          formula: '\\Delta y_1 + \\Delta y_2 = 2y \\implies T\\left(\\frac{1}{k_1} + \\frac{1}{k_2}\\right) = 2y',
          meaning: 'Menghasilkan $T = \\frac{2 k_1 k_2}{k_1 + k_2} y$.',
        },
        {
          label: 'Konstanta Pegas Efektif dan Frekuensi Sudut',
          formula: 'k_{\\text{eff}} = \\frac{F_{\\text{tot}}}{y} = \\frac{2T}{y} = \\frac{4 k_1 k_2}{k_1 + k_2}, \\qquad \\omega^2 = \\frac{k_{\\text{eff}}}{5m}',
          meaning: 'Perhatikan faktor $4$ pada pembilang (bukan $1$ seperti pegas seri biasa).',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung konstanta pegas efektif k_eff',
          detail: 'Substitusikan $k_1 = 6k$ dan $k_2 = 3k$.',
          math: 'k_{\\text{eff}} = \\frac{4 (6k)(3k)}{6k + 3k} = \\frac{72 k^2}{9k} = 8k',
        },
        {
          stepTitle: 'Tentukan nilai α',
          detail: 'Bagi $k_{\\text{eff}}$ dengan massa batang $M = 5m$.',
          math: '\\omega^2 = \\frac{8k}{5m} = 1{,}6 \\frac{k}{m} \\implies \\alpha = 1{,}6',
        },
      ],
      G_interpretasiFisika:
        'Sebagai uji konsistensi: jika kedua pegas identik ($k_1 = k_2 = k$), rumus ini memberi $k_{\\text{eff}} = 4k^2 / (2k) = 2k$, sama persis seperti dua pegas paralel karena katrol tidak perlu berputar.',
      H_kesalahanUmum: [
        'Langsung menjumlahkan paralel ($6k + 3k = 9k$), mengabaikan kenyataan bahwa tali bisa bergeser di atas katrol.',
        'Langsung memakai rumus seri biasa $\\frac{k_1 k_2}{k_1 + k_2} = 2k$ tanpa memperhitungkan bahwa batang menarik kedua sisi tali secara bersamaan (faktor 4).',
      ],
      I_intiPembelajaran:
        'Ketika dua pegas terhubung ke satu beban dan saling terikat melalui katrol licin, gaya pada keduanya sama ($T$) dan total gaya pada beban adalah $2T$, menghasilkan $k_{\\text{eff}} = \\frac{4 k_1 k_2}{k_1 + k_2}$.',
    },
  },
  {
    id: 32,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Perubahan Energi Potensial Bola Pejal Menggelinding Tanpa Selip',
    questionText:
      'Sebuah bola pejal bermassa $m = 50\\text{ g}$ bergerak tanpa tergelincir menuruni suatu bidang miring kasar tanpa kecepatan awal. Diketahui sudut kemiringan bidang miring terhadap horisontal adalah $\\alpha$ dengan $\\sin\\alpha = 4/5$. Setelah bola pejal tersebut bergerak menuruni bidang miring selama $5\\text{ s}$, besarnya energi potensial gravitasi yang berubah menjadi energi kinetik adalah ... $\\text{J}$.',
    unit: 'J',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah bola pejal bermassa 50 gram menggelinding murni tanpa selip menuruni bidang miring kasar dengan sinus alfa sama dengan 4 per 5 selama 5 sekon dari keadaan diam.',
    answerValue: 27.4,
    answerDisplay: '27,4',
    solution: {
      A_memahamiFenomena:
        'Bola pejal bermassa $m = 50\\text{ g} = 0{,}05\\text{ kg}$ menggelinding murni (tanpa tergelincir) menuruni bidang miring dari keadaan diam. Karena tidak ada selip, gaya gesek statis tidak melakukan usaha disipatif sehingga seluruh penurunan energi potensial gravitasi berubah menjadi energi kinetik total (translasi + rotasi).',
      B_pengetahuanDasar:
        'Momen inersia bola pejal terhadap pusatnya adalah $I = \\frac{2}{5} m R^2$. Percepatan pusat massa benda yang menggelinding murni menuruni bidang miring sudut $\\alpha$ adalah $a = \\frac{g\\sin\\alpha}{1 + I/(m R^2)}$.',
      C_analisisFisis:
        'Untuk bola pejal, $I/(m R^2) = 2/5$, sehingga $a = \\frac{5}{7} g \\sin\\alpha$. Setelah bergerak selama $t = 5\\text{ s}$ dari diam, jarak tempuh sepanjang bidang miring adalah $s = \\frac{1}{2} a t^2$, dan penurunan ketinggian vertikal adalah $\\Delta h = s \\sin\\alpha$. Perubahan energi potensial menjadi energi kinetik total adalah $\\Delta E_k = m g \\Delta h$.',
      D_fbd: {
        title: 'Diagram Gaya Bola Pejal Menggelinding Menuruni Bidang Miring',
        diagramId: 'fbd-rolling-sphere',
        description:
          'Gaya berat mg diuraikan menjadi mg sin α dan mg cos α, gaya normal N mengimbangi mg cos α, dan gaya gesek statis fs mengarah ke atas bidang untuk menghasilkan torka rotasi.',
        vectors: [
          { label: 'mg sin α', direction: 'Sejajar bidang ke bawah', note: 'Menarik pusat massa turun' },
          { label: 'f_s', direction: 'Sejajar bidang ke atas', note: 'Menghasilkan torka f_s R = I α tanpa disipasi energi' },
          { label: 'N', direction: 'Tegak lurus bidang ke atas', note: 'Mengimbangi mg cos α' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Percepatan Menggelinding Bola Pejal',
          formula: 'a = \\frac{g\\sin\\alpha}{1 + \\frac{2}{5}} = \\frac{5}{7} g \\sin\\alpha',
          meaning: 'Sebagian energi dipakai untuk rotasi sehingga percepatan lebih kecil dari $g\\sin\\alpha$.',
        },
        {
          label: 'Perubahan Energi Potensial Menjadi Energi Kinetik',
          formula: '\\Delta E_k = m g \\Delta h = m g \\left(\\frac{1}{2} a t^2 \\sin\\alpha\\right)',
          meaning: 'Seluruh penurunan $E_p$ berubah menjadi $E_{k,\\text{translasi}} + E_{k,\\text{rotasi}}$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Konversi massa dan hitung percepatan bola',
          detail: 'Ubah $m = 50\\text{ g} = 0{,}05\\text{ kg}$ dan hitung $a$ dengan $\\sin\\alpha = 4/5 = 0{,}8$.',
          math: 'a = \\frac{5}{7} \\times 9{,}8 \\times 0{,}8 = 1{,}4 \\times 4 = 5{,}6\\text{ m/s}^2',
        },
        {
          stepTitle: 'Hitung jarak tempuh dan penurunan ketinggian',
          detail: 'Untuk $t = 5\\text{ s}$, hitung $s$ lalu $\\Delta h = s \\sin\\alpha$.',
          math: 's = \\frac{1}{2}(5{,}6)(5^2) = 70\\text{ m}, \\qquad \\Delta h = 70 \\times 0{,}8 = 56\\text{ m}',
        },
        {
          stepTitle: 'Hitung energi potensial yang berubah menjadi energi kinetik',
          detail: 'Substitusikan ke $m g \\Delta h$ dan bulatkan ke 1 angka di belakang koma.',
          math: '\\Delta E_k = 0{,}05 \\times 9{,}8 \\times 56 = 27{,}44\\text{ J} \\approx 27{,}4\\text{ J}',
        },
      ],
      G_interpretasiFisika:
        'Dari $27{,}44\\text{ J}$ energi kinetik total tersebut, sebesar $\\frac{5}{7}$ ($19{,}6\\text{ J}$) berupa energi kinetik translasi dan $\\frac{2}{7}$ ($7{,}84\\text{ J}$) berupa energi kinetik rotasi.',
      H_kesalahanUmum: [
        'Lupa mengonversi $50\\text{ g}$ menjadi $0{,}05\\text{ kg}$.',
        'Menggunakan $a = g \\sin\\alpha$ (benda meluncur licin) atau hanya menghitung energi kinetik translasi $\\frac{1}{2}m v^2$ tanpa energi rotasi.',
      ],
      I_intiPembelajaran:
        'Pada gerak menggelinding tanpa selip di bidang miring kasar, gaya gesek statis tidak melesapkan energi mekanik; ia hanya menyalurkan sebagian energi ke gerak rotasi.',
    },
  },
  {
    id: 33,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Energi Kinetik Rotasi Sistem Cakram dan Batang',
    questionText:
      'Sebuah cakram bermassa $m$ dengan jari-jari $a$ disambungkan dengan batang bermassa $m$ dan panjang $2a$. Titik hubung kedua benda terletak di $O$ (Lihat Gambar no 33). Cakram tersebut terletak pada bidang $xy$ dengan titik pusat cakram berada di koordinat $(a, 0, 0)$. Batang tersebut terletak sepanjang sumbu $x$ dengan ujung kiri batang berada pada koordinat $(-2a, 0, 0)$. Sistem cakram-batang diputar dengan kecepatan sudut $\\omega$ terhadap sumbu $z$. Jika $m = 18\\text{ kg}$, $a = 1{,}5\\text{ m}$, dan $\\omega = 2\\text{ rad/s}$, maka tenaga kinetik rotasi sistem cakram-batang sama dengan ... $\\text{J}$.',
    unit: 'J',
    stimulusDiagramId: 'gambar-33',
    stimulusCaption: 'Gambar no 33 (Batang di sumbu x negatif tersambung di O ke cakram berpusat di (a, 0, 0))',
    diagramSpeechNote:
      'Pada Gambar nomor 33 terlihat sistem koordinat x y z dengan sumbu z sebagai sumbu putar. Batang bermassa m dan panjang 2 a terletak sepanjang sumbu x dari minus 2 a sampai titik asal O, sementara cakram bermassa m berjari-jari a berada di kanan titik O dengan pusatnya di a koma 0 koma 0.',
    answerValue: 229.5,
    answerDisplay: '229,5',
    solution: {
      A_memahamiFenomena:
        'Sistem kaku terdiri atas cakram tipis dan batang homogen yang keduanya bermassa sama $m = 18\\text{ kg}$ dan diputar bersama mengelilingi sumbu $z$ yang melewati titik sambung $O(0,0,0)$ dengan kecepatan sudut $\\omega = 2\\text{ rad/s}$.',
      B_pengetahuanDasar:
        'Energi kinetik rotasi benda tegar terhadap poros tetap adalah $E_{k,\\text{rot}} = \\frac{1}{2} I_{\\text{tot}} \\omega^2$. Untuk mencari momen inersia terhadap sumbu yang tidak melewati pusat massa, gunakan Teorema Sumbu Sejajar: $I = I_{\\text{pm}} + m d^2$.',
      C_analisisFisis:
        'Hitung momen inersia terhadap sumbu $z$ (di titik $O$) secara terpisah: (1) Cakram berjari-jari $a$ memiliki $I_{\\text{pm}} = \\frac{1}{2} m a^2$ terhadap sumbu tegak lurus bidangnya, dan pusatnya berjarak $d = a$ dari $O$, sehingga $I_{\\text{cakram}} = \\frac{1}{2} m a^2 + m a^2 = \\frac{3}{2} m a^2$. (2) Batang panjang $L = 2a$ berputar di salah satu ujungnya ($O$), sehingga $I_{\\text{batang}} = \\frac{1}{3} m (2a)^2 = \\frac{4}{3} m a^2$.',
      D_fbd: {
        title: 'Geometri Sumbu Putar dan Pusat Massa Sistem Cakram-Batang',
        diagramId: 'fbd-disc-rod-rotation',
        description:
          'Sumbu putar z melewati titik O(0,0,0). Pusat massa batang berada di (-a, 0, 0) berjarak a dari O, dan pusat massa cakram berada di (+a, 0, 0) juga berjarak a dari O.',
        vectors: [
          { label: 'I_cakram = 3/2 ma²', direction: 'Pusat di (a, 0, 0)', note: 'Teorema sumbu sejajar: 1/2 ma² + ma²' },
          { label: 'I_batang = 4/3 ma²', direction: 'Berujung di O(0, 0, 0)', note: 'Poros di ujung batang panjang 2a: 1/3 m(2a)²' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Momen Inersia Total Terhadap Sumbu z',
          formula: 'I_{\\text{tot}} = \\frac{3}{2} m a^2 + \\frac{4}{3} m a^2 = \\frac{17}{6} m a^2',
          meaning: 'Penjumlahan skalar momen inersia cakram dan batang terhadap poros yang sama.',
        },
        {
          label: 'Tenaga Kinetik Rotasi',
          formula: 'E_{k,\\text{rot}} = \\frac{1}{2} I_{\\text{tot}} \\omega^2 = \\frac{17}{12} m a^2 \\omega^2',
          meaning: 'Energi rotasi total sistem.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung momen inersia total',
          detail: 'Masukkan $m = 18\\text{ kg}$ dan $a = 1{,}5\\text{ m}$ ($a^2 = 2{,}25\\text{ m}^2$).',
          math: 'I_{\\text{tot}} = \\frac{17}{6} \\times 18 \\times (1{,}5)^2 = 51 \\times 2{,}25 = 114{,}75\\text{ kg m}^2',
        },
        {
          stepTitle: 'Hitung tenaga kinetik rotasi',
          detail: 'Kalikan $\\frac{1}{2} I_{\\text{tot}}$ dengan $\\omega^2 = 2^2 = 4$.',
          math: 'E_{k,\\text{rot}} = \\frac{1}{2} \\times 114{,}75 \\times 4 = 229{,}5\\text{ J}',
        },
      ],
      G_interpretasiFisika:
        'Baik cakram maupun batang memiliki pusat massa berjarak $a$ dari poros $O$, namun cakram memiliki momen inersia sedikit lebih besar ($1{,}5 m a^2$ vs $1{,}33 m a^2$) karena distribusi massanya lebih lebar terhadap sumbu $z$.',
      H_kesalahanUmum: [
        'Lupa menerapkan Teorema Sumbu Sejajar pada cakram (hanya memakai $\\frac{1}{2} m a^2$).',
        'Memasukkan panjang batang $a$ bukan $2a$ saat memakai $\\frac{1}{3} m L^2$.',
      ],
      I_intiPembelajaran:
        'Pastikan momen inersia setiap komponen sistem sudah digeser ke poros rotasi yang sama (sumbu $z$ di $O$) sebelum dijumlahkan.',
    },
  },
  {
    id: 34,
    topic: 'Dinamika & Gaya',
    title: 'Kedalaman Penyelam dengan Gaya Hambat Viskos Kuadratik',
    questionText:
      'Seorang atlit perenang lompat indah Olimpiade dengan massa $m = 60\\text{ kg}$ memulai lompat turun dari papan loncat setinggi $15\\text{ m}$ dengan kecepatan awal nol. Anggap gaya apung air menyeimbangkan gaya gravitasi pada penyelam, dan gaya viskos pada penyelam adalah $b v^2$. Tinjau kecepatan perenang selama menyelam $v$ adalah fungsi dari kedalaman $x$ dan berlaku syarat batas $v = v_0$ pada saat $x = 0$ ($v_0$ adalah kecepatan perenang saat menyentuh permukaan air). Jika nilai $b = 30\\text{ kg/m}$, maka kedalaman perenang dari permukaan air pada saat kecepatannya $v = 6\\text{ m/s}$ adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seorang atlet lompat indah bermassa 60 kilogram jatuh bebas dari ketinggian 15 meter lalu masuk ke air. Di dalam air gaya apung mengimbangi berat, sehingga ia hanya diperlambat oleh gaya viskos b v kuadrat.',
    answerValue: 2.1,
    answerDisplay: '2,1',
    solution: {
      A_memahamiFenomena:
        'Gerak terdiri atas dua fase: (1) Jatuh bebas dari ketinggian $h = 15\\text{ m}$ sehingga menyentuh permukaan air ($x = 0$) dengan laju $v_0$. (2) Menyelam ke dalam air sejauh kedalaman $x$; karena gaya apung tepat meniadakan berat, satu-satunya gaya total pada penyelam adalah gaya hambat air $F_v = -b v^2$.',
      B_pengetahuanDasar:
        'Saat percepatan merupakan fungsi kecepatan sedangkan hubungan yang dicari adalah kecepatan sebagai fungsi posisi $v(x)$, gunakan aturan rantai: $a = \\frac{dv}{dt} = \\frac{dv}{dx}\\frac{dx}{dt} = v \\frac{dv}{dx}$.',
      C_analisisFisis:
        'Hukum II Newton di dalam air memberikan $m v \\frac{dv}{dx} = -b v^2$. Karena $v > 0$, kita dapat menyederhanakan menjadi $\\frac{dv}{v} = -\\frac{b}{m} dx$ lalu mengintegralkan dari $(x=0, v=v_0)$ hingga $(x, v)$.',
      D_fbd: {
        title: 'Diagram Gaya pada Penyelam di Dalam Air',
        diagramId: 'fbd-viscous-dive',
        description:
          'Gaya apung F_apung ke atas tepat sama besar dengan gaya berat mg ke bawah. Gaya hambat viskos bv² mengarah ke atas melawan arah menyelam ke bawah.',
        vectors: [
          { label: 'F_apung = mg', direction: 'Vertikal ke atas', note: 'Menyeimbangkan berat penyelam' },
          { label: 'mg', direction: 'Vertikal ke bawah', note: 'Saling meniadakan dengan gaya apung' },
          { label: 'F_v = bv²', direction: 'Vertikal ke atas', note: 'Satu-satunya gaya neto yang memperlambat' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kecepatan Masuk Air (Jatuh Bebas)',
          formula: 'v_0 = \\sqrt{2 g h}',
          meaning: 'Kecepatan syarat batas pada $x = 0$.',
        },
        {
          label: 'Persamaan Diferensial dan Solusi Kedalaman',
          formula: 'm v \\frac{dv}{dx} = -b v^2 \\implies \\ln\\left(\\frac{v_0}{v}\\right) = \\frac{b}{m} x \\implies x = \\frac{m}{b} \\ln\\left(\\frac{v_0}{v}\\right)',
          meaning: 'Penurunan kecepatan terhadap kedalaman bersifat eksponensial.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung kecepatan saat menyentuh air v₀',
          detail: 'Dengan $g = 9{,}8\\text{ m/s}^2$ dan $h = 15\\text{ m}$.',
          math: 'v_0 = \\sqrt{2 \\times 9{,}8 \\times 15} = \\sqrt{294} \\approx 17{,}146428\\text{ m/s}',
        },
        {
          stepTitle: 'Hitung kedalaman x saat v = 6 m/s',
          detail: 'Masukkan $m = 60\\text{ kg}$, $b = 30\\text{ kg/m}$, $v_0 = \\sqrt{294}$, dan $v = 6\\text{ m/s}$.',
          math: 'x = \\frac{60}{30} \\ln\\left(\\frac{17{,}146428}{6}\\right) = 2 \\ln(2{,}857738) = 2 \\times 1{,}05003 = 2{,}1001\\text{ m} \\approx 2{,}1\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Hanya dalam kedalaman $2{,}1\\text{ m}$ di bawah permukaan air, gaya hambat kuadratik sudah memangkas kelajuan atlet dari $17{,}1\\text{ m/s}$ menjadi $6{,}0\\text{ m/s}$.',
      H_kesalahanUmum: [
        'Menggunakan $\\log_{10}$ alih-alih logaritma natural ($\\ln$).',
        'Menganggap perlambatan di dalam air konstan dan memakai rumus GLBB $v^2 = v_0^2 - 2ax$.',
      ],
      I_intiPembelajaran:
        'Gunakan substitusi $a = v\\frac{dv}{dx}$ setiap kali gaya hambat bergantung pada kecepatan dan pertanyaan menanyakan jarak atau kedalaman.',
    },
  },
  {
    id: 35,
    topic: 'Dinamika & Gaya',
    title: 'Gaya Kontak Antara Tiga Kotak di Lantai Licin',
    questionText:
      'Gambar no 35 menunjukkan Anda sedang mendorong tiga buah kotak ($m_1 = 2{,}20\\text{ kg}$; $m_2 = 3{,}80\\text{ kg}$; dan $m_3 = 6{,}00\\text{ kg}$) yang tersusun seperti itu dengan menggunakan gaya $18{,}0\\text{ N}$. Jika permukaan lantainya licin, maka besarnya gaya kontak pada kotak 3 akibat kotak 2 adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'gambar-35',
    stimulusCaption: 'Gambar no 35 (Tiga kotak berderet didorong dari kiri sebesar 18,0 N)',
    diagramSpeechNote:
      'Pada Gambar nomor 35, tiga buah kotak disusun berderet saling bersentuhan di atas lantai datar licin dari kiri ke kanan, masing-masing kotak 1 bermassa 2 koma 20 kilogram, kotak 2 bermassa 3 koma 80 kilogram, dan kotak 3 bermassa 6 koma 00 kilogram. Gaya 18 koma 0 newton mendorong kotak 1 ke kanan.',
    answerValue: 9.0,
    answerDisplay: '9,0',
    solution: {
      A_memahamiFenomena:
        'Tiga kotak saling bersentuhan di atas lantai datar licin dan didorong dari kiri pada kotak 1 dengan gaya $F = 18{,}0\\text{ N}$. Ketiga kotak bergerak bersama dengan percepatan yang sama, dan kita mencari gaya aksi-reaksi kontak antara kotak 2 dan kotak 3.',
      B_pengetahuanDasar:
        'Untuk sistem benda bersentuhan yang bergerak bersama: pertama cari percepatan sistem menggunakan total massa seluruh kotak, lalu tinjau kotak yang paling depan (kotak 3) karena gaya horizontal yang bekerja padanya hanyalah gaya kontak $N_{23}$ dari kotak 2.',
      C_analisisFisis:
        'Total massa sistem adalah $M_{\\text{tot}} = m_1 + m_2 + m_3 = 2{,}20 + 3{,}80 + 6{,}00 = 12{,}00\\text{ kg}$. Percepatan bersama adalah $a = F / M_{\\text{tot}}$. Pada kotak 3, satu-satunya gaya horizontal adalah dorongan dari kotak 2 sebesar $F_{23} = m_3 a$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Kotak 3',
        diagramId: 'fbd-three-boxes-contact',
        description:
          'Pada kotak 3 bekerja berat m₃g ke bawah, gaya normal lantai N₃ ke atas, dan gaya dorong kontak dari kotak 2 sebesar F₂₃ ke kanan.',
        vectors: [
          { label: 'F₂₃ = 9,0 N', direction: 'Horizontal ke kanan pada kotak 3', note: 'Mempercepat massa 6,00 kg sebesar 1,5 m/s²' },
          { label: 'N₃ & m₃g', direction: 'Vertikal atas & bawah', note: 'Saling meniadakan (58,8 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Percepatan Bersama',
          formula: 'a = \\frac{F}{m_1 + m_2 + m_3}',
          meaning: 'Seluruh benda memiliki percepatan sama.',
        },
        {
          label: 'Gaya Kontak pada Kotak 3',
          formula: 'F_{23} = m_3 a = \\left(\\frac{m_3}{m_1 + m_2 + m_3}\\right) F',
          meaning: 'Gaya kontak sebanding dengan fraksi massa yang didorong di depan bidang kontak tersebut.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung percepatan seluruh kotak',
          detail: 'Jumlahkan massa ketiga kotak: $2{,}20 + 3{,}80 + 6{,}00 = 12{,}00\\text{ kg}$.',
          math: 'a = \\frac{18{,}0}{12{,}00} = 1{,}5\\text{ m/s}^2',
        },
        {
          stepTitle: 'Hitung gaya kontak pada kotak 3',
          detail: 'Kalikan massa kotak 3 dengan percepatan sistem.',
          math: 'F_{23} = 6{,}00 \\times 1{,}5 = 9{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Karena kotak 3 menyumbang tepat setengah dari total massa sistem ($6{,}00\\text{ kg}$ dari $12{,}00\\text{ kg}$), gaya kontak yang diterimanya tepat setengah dari gaya dorong total ($9{,}0\\text{ N}$ dari $18{,}0\\text{ N}$).',
      H_kesalahanUmum: [
        'Menghitung gaya kontak antara kotak 1 dan kotak 2, yaitu $(m_2 + m_3)a = 14{,}7\\text{ N}$.',
        'Menganggap gaya $18{,}0\\text{ N}$ diteruskan utuh tanpa berkurang ke kotak 3.',
      ],
      I_intiPembelajaran:
        'Gaya kontak di antara kotak-kotak yang didorong selalu hanya menanggung massa di depannya saja: semakin ke depan, gaya kontaknya semakin kecil.',
    },
  },
  {
    id: 36,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Kecepatan Sudut Tongkat Meluncur Saat Lepas Kontak dengan Dinding',
    questionText:
      'Sebuah tongkat bermassa $M$ dengan panjang $L$ tersandar di dinding licin di atas lantai licin dengan sudut awal $\\theta_0 = 60^\\circ$ seperti pada Gambar no 36. Apabila tongkat dilepaskan dari keadaan tersebut tanpa kecepatan awal dan $L/g = 0{,}10\\text{ s}^2$, maka kecepatan sudut tongkat ketika lepas kontak dengan dinding adalah ... $\\text{rad/s}$.',
    unit: 'rad/s',
    stimulusDiagramId: 'gambar-36',
    stimulusCaption: 'Gambar no 36 (Tongkat tersandar di dinding dan lantai licin bersudut awal θ₀ = 60°)',
    diagramSpeechNote:
      'Pada Gambar nomor 36 terlihat dinding vertikal licin di sebelah kiri dan lantai horizontal licin di bawah. Sebuah tongkat panjang L tersandar membentuk sudut teta terhadap lantai horizontal.',
    answerValue: 2.9,
    answerDisplay: '2,9',
    solution: {
      A_memahamiFenomena:
        'Tongkat seragam meluncur turun di sudut dinding dan lantai yang keduanya licin. Awalnya dinding mendorong tongkat ke kanan ($N_d > 0$), sehingga pusat massa tongkat dipercepat ke kanan. Pada sudut tertentu, pusat massa mencapai kecepatan horizontal maksimum sehingga percepatan horizontalnya menjadi nol dan tongkat lepas kontak dari dinding ($N_d = 0$).',
      B_pengetahuanDasar:
        'Selama masih menempel pada dinding dan lantai, koordinat pusat massa tongkat pada sudut $\\theta$ terhadap lantai adalah $x_{\\text{pm}} = \\frac{L}{2}\\cos\\theta$ dan $y_{\\text{pm}} = \\frac{L}{2}\\sin\\theta$. Energi kinetik total merupakan jumlah energi translasi pusat massa dan energi rotasi terhadap pusat massa ($I_{\\text{pm}} = \\frac{1}{12} M L^2$).',
      C_analisisFisis:
        'Hitung laju pusat massa: $v_{\\text{pm}}^2 = \\dot{x}_{\\text{pm}}^2 + \\dot{y}_{\\text{pm}}^2 = \\frac{L^2}{4}\\dot{\\theta}^2$, sehingga energi kinetik total adalah $E_k = \\frac{1}{2}M\\left(\\frac{L^2}{4}\\right)\\dot{\\theta}^2 + \\frac{1}{2}\\left(\\frac{1}{12}M L^2\\right)\\dot{\\theta}^2 = \\frac{1}{6} M L^2 \\dot{\\theta}^2$. Dari kekekalan energi: $\\dot{\\theta}^2 = \\frac{3g}{L}(\\sin\\theta_0 - \\sin\\theta)$. Syarat lepas kontak dinding adalah $\\ddot{x}_{\\text{pm}} = 0$, yang berarti $\\dot{x}_{\\text{pm}} = -\\frac{L}{2}\\sin\\theta\\,\\dot{\\theta}$ mencapai nilai ekstrem, sehingga $\\frac{d}{d\\theta}\\left[\\sin^2\\theta(\\sin\\theta_0 - \\sin\\theta)\\right] = 0$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Tongkat Sebelum Lepas Kontak',
        diagramId: 'fbd-sliding-ladder',
        description:
          'Bekerja tiga gaya: gaya berat Mg ke bawah di pusat massa, gaya normal lantai N_L vertikal ke atas di ujung bawah, dan gaya normal dinding N_d horizontal ke kanan di ujung atas. Saat lepas kontak, N_d = 0.',
        vectors: [
          { label: 'Mg', direction: 'Vertikal ke bawah di pusat massa', note: 'Ketinggian pusat massa (L/2) sin θ' },
          { label: 'N_L', direction: 'Vertikal ke atas di ujung lantai', note: 'Menopang bagian bawah tongkat' },
          { label: 'N_d → 0', direction: 'Horizontal ke kanan di ujung dinding', note: 'Menjadi nol saat lepas kontak' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kekekalan Energi Selama Kontak',
          formula: '\\frac{1}{6} M L^2 \\omega^2 = M g \\frac{L}{2}(\\sin\\theta_0 - \\sin\\theta) \\implies \\omega^2 = \\frac{3g}{L}(\\sin\\theta_0 - \\sin\\theta)',
          meaning: 'Menghubungkan kecepatan sudut $\\omega = |\\dot{\\theta}|$ dengan sudut $\\theta$.',
        },
        {
          label: 'Sudut dan Kecepatan Sudut Saat Lepas Kontak',
          formula: '\\sin\\theta = \\frac{2}{3}\\sin\\theta_0 \\implies \\omega = \\sqrt{\\frac{g}{L}\\sin\\theta_0}',
          meaning: 'Syarat $N_d = M \\ddot{x}_{\\text{pm}} = 0$ tepat terjadi ketika $\\sin\\theta = \\frac{2}{3}\\sin\\theta_0$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Tentukan nilai g/L dan sin θ₀',
          detail: 'Dari $L/g = 0{,}10\\text{ s}^2$, diperoleh $g/L = 10\\text{ s}^{-2}$, dan $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.',
        },
        {
          stepTitle: 'Hitung kecepatan sudut saat lepas kontak',
          detail: 'Substitusikan ke $\\omega = \\sqrt{\\frac{g}{L}\\sin\\theta_0}$ dan bulatkan.',
          math: '\\omega = \\sqrt{10 \\times \\frac{\\sqrt{3}}{2}} = \\sqrt{5\\sqrt{3}} = \\sqrt{8{,}660254} \\approx 2{,}9428\\text{ rad/s} \\approx 2{,}9\\text{ rad/s}',
        },
      ],
      G_interpretasiFisika:
        'Tongkat selalu lepas kontak dari dinding ketika ketinggian pusat massanya turun menjadi $2/3$ dari ketinggian awalnya ($\\sin\\theta = \\frac{2}{3}\\sin\\theta_0$), dan setelah itu pusat massa meluncur horizontal dengan kecepatan konstan.',
      H_kesalahanUmum: [
        'Lupa memasukkan energi kinetik rotasi $\\frac{1}{2} I_{\\text{pm}} \\omega^2$ atau memakai $I = \\frac{1}{3} M L^2$ padahal ujung bawah tidak diam.',
        'Mengira lepas kontak terjadi saat $\\theta = 0^\\circ$ (menyentuh lantai).',
      ],
      I_intiPembelajaran:
        'Pada gerak benda tegar bersandar di sudut licin, syarat lepas kontak dinding adalah $\\ddot{x}_{\\text{pm}} = 0$, yang setara dengan memaksimumkan kecepatan horizontal pusat massa $\\dot{x}_{\\text{pm}}^2$.',
    },
  },
  {
    id: 37,
    topic: 'Usaha, Energi & Momentum',
    title: 'Perbandingan Perpindahan Partikel dan Kotak Setelah Tumbukan ke-n',
    questionText:
      'Sebuah partikel bermassa $m_1 = 300\\text{ g}$ diletakkan di dalam kotak licin berongga bermassa $m_2 = 420\\text{ g}$ dan memiliki panjang tertentu seperti pada Gambar no 37. Awalnya partikel berada di ujung kiri kotak dan memiliki kecepatan awal ke kanan, sedangkan kotak diam, akibatnya akan ada tumbukan-tumbukan yang terjadi antara kedua benda tersebut. Tepat saat tumbukan ke-$n$ (ambil $n = 7$), perpindahan total yang sudah dialami oleh partikel dan kotak masing-masing adalah $x_1$ dan $x_2$. Jika semua tumbukan berlangsung secara elastis sempurna, maka nilai perbandingan $x_1 : x_2$ adalah ... (tanpa satuan).',
    unit: 'rasio',
    stimulusDiagramId: 'gambar-37',
    stimulusCaption: 'Gambar no 37 (Partikel m₁ di ujung kiri kotak licin m₂)',
    diagramSpeechNote:
      'Pada Gambar nomor 37, sebuah partikel bulat bermassa m satu berada di dalam kotak berongga bermassa m dua di atas lantai licin. Partikel mula-mula berada di dinding kiri kotak dengan panah kecepatan awal mengarah ke kanan.',
    answerValue: 1.4,
    answerDisplay: '1,4',
    solution: {
      A_memahamiFenomena:
        'Partikel $m_1$ memantul bolak-balik secara elastis sempurna di antara dinding kanan dan dinding kiri kotak bermassa $m_2$ di atas lantai licin. Pada tumbukan ke-$n$ ganjil ($n = 7$), partikel menumbuk dinding kanan kotak sehingga posisi partikel berada sejauh panjang dalam kotak $L$ di depan ujung kiri kotak ($x_1 - x_2 = L$).',
      B_pengetahuanDasar:
        'Ada dua sifat istimewa tumbukan elastis sempurna 1D: (1) Kecepatan pusat massa $v_{\\text{pm}} = \\frac{m_1 v_0}{m_1 + m_2}$ selalu konstan sepanjang waktu karena tidak ada gaya luar. (2) Besar kecepatan relatif antar kedua benda $|v_1 - v_2|$ selalu tetap sama dengan $v_0$ pada setiap tumbukan!',
      C_analisisFisis:
        'Karena kelajuan relatif selalu $v_0$, selang waktu antara dua tumbukan berturut-turut selalu sama yaitu $\\Delta t = L / v_0$. Jadi tumbukan ke-$n$ terjadi tepat pada waktu $t_n = n \\frac{L}{v_0}$. Pada saat tersebut, perpindahan pusat massa adalah $x_{\\text{pm}} = v_{\\text{pm}} t_n = \\frac{n m_1}{m_1 + m_2} L$. Dengan menggabungkan $m_1 x_1 + m_2 x_2 = (m_1 + m_2)x_{\\text{pm}} = n m_1 L$ dan kondisi posisi pada tumbukan ganjil ($x_1 - x_2 = L$), kita langsung memperoleh $x_1$ dan $x_2$ tanpa perlu melacak kecepatan tiap tumbukan!',
      D_fbd: {
        title: 'Diagram Tumbukan Berulang dan Gerak Pusat Massa',
        diagramId: 'fbd-particle-in-box',
        description:
          'Pada tumbukan ganjil (ke-1, ke-3, ke-5, ke-7), partikel berada di dinding kanan kotak sehingga x₁ = x₂ + L. Sementara pusat massa sistem terus melaju konstan.',
        vectors: [
          { label: 'v_pm = konstan', direction: 'Ke kanan tanpa henti', note: 'Karena lantai luar licin' },
          { label: '|v_rel| = v₀', direction: 'Berbalik arah tiap tumbukan', note: 'Waktu antar tumbukan selalu L / v₀' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Persamaan Pusat Massa pada Tumbukan ke-n',
          formula: 'm_1 x_1 + m_2 x_2 = n m_1 L',
          meaning: 'Didapat dari $x_{\\text{pm}}(t_n) = \\frac{m_1 v_0}{m_1 + m_2} \\cdot \\frac{n L}{v_0}$.',
        },
        {
          label: 'Rasio Perpindahan untuk n Ganjil (n = 7)',
          formula: 'x_1 - x_2 = L \\implies \\frac{x_1}{x_2} = \\frac{n m_1 + m_2}{(n - 1) m_1}',
          meaning: 'Panjang kotak $L$ dan kecepatan awal $v_0$ saling meniadakan.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusikan x₁ = x₂ + L ke persamaan pusat massa',
          detail: 'Selesaikan untuk $x_2$ dan $x_1$.',
          math: 'm_1(x_2 + L) + m_2 x_2 = n m_1 L \\implies x_2 = \\frac{(n - 1) m_1}{m_1 + m_2} L, \\quad x_1 = \\frac{n m_1 + m_2}{m_1 + m_2} L',
        },
        {
          stepTitle: 'Hitung perbandingan x₁ : x₂ dengan m₁ = 300 g, m₂ = 420 g, n = 7',
          detail: 'Masukkan seluruh angka ke rumus rasio.',
          math: '\\frac{x_1}{x_2} = \\frac{7(300) + 420}{6(300)} = \\frac{2100 + 420}{1800} = \\frac{2520}{1800} = 1{,}4',
        },
      ],
      G_interpretasiFisika:
        'Metode pusat massa dan kecepatan relatif menyelesaikan 7 tumbukan sekaligus dalam 2 baris aljabar! Perhatikan juga jika $n$ genap, partikel menumbuk dinding kiri sehingga $x_1 = x_2$ (perbandingan $1{,}0$).',
      H_kesalahanUmum: [
        'Menghitung kecepatan setelah tumbukan ke-1 sampai ke-7 satu per satu secara manual yang sangat rawan salah hitung.',
        'Lupa bahwa pada tumbukan ganjil partikel berada di dinding kanan ($x_1 = x_2 + L$), bukan di titik yang sama dengan $x_2$.',
      ],
      I_intiPembelajaran:
        'Pada tumbukan elastis berulang 1D, kekekalan kelajuan relatif ($|v_{\\text{rel}}| = \\text{konstan}$) membuat waktu tumbukan ke-$n$ langsung diketahui tanpa melacak riwayat tumbukan.',
    },
  },
  {
    id: 38,
    topic: 'Dinamika & Gaya',
    title: 'Jarak Batu Bata Mendaki dan Berbalik Turun di Bidang Miring Kasar',
    questionText:
      'Sebuah batu bata tengah mendaki sebuah bidang miring (dengan sudut miring $30^\\circ$ terhadap bidang horizontal) dengan kecepatan awal $2{,}94\\text{ m/s}$. Koefisien gesek statis antara batu bata dan lantainya adalah $\\mu_s = \\sqrt{3}/6$. Setelah $0{,}8\\text{ s}$, jarak yang ditempuh batu bata dari posisi awalnya adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah batu bata meluncur naik di bidang miring 30 derajat dengan kelajuan awal 2 koma 94 meter per sekon dan koefisien gesek akar 3 per 6, lalu diamati pada t sama dengan 0 koma 8 sekon.',
    answerValue: 0.4,
    answerDisplay: '0,4',
    solution: {
      A_memahamiFenomena:
        'Batu bata meluncur naik di bidang miring kasar bersudut $\\theta = 30^\\circ$. Kita wajib memeriksa apakah pada $t = 0{,}8\\text{ s}$ batu bata masih bergerak naik, sudah berhenti diam di puncak, atau sudah berbalik meluncur turun kembali!',
      B_pengetahuanDasar:
        'Saat bergerak naik, gaya berat komponen sejajar bidang ($m g \\sin\\theta$) dan gaya gesek ($\\mu m g \\cos\\theta$) sama-sama menghambat gerak ke arah bawah bidang, sehingga $a_{\\text{naik}} = g(\\sin\\theta + \\mu\\cos\\theta)$. Ketika benda berhenti sesaat di titik tertinggi, benda akan meluncur turun kembali jika $\\tan\\theta > \\mu_s$, dengan percepatan turun $a_{\\text{turun}} = g(\\sin\\theta - \\mu\\cos\\theta)$.',
      C_analisisFisis:
        'Pertama hitung perlambatan saat naik: $a_{\\text{naik}} = 9{,}8\\left(\\frac{1}{2} + \\frac{\\sqrt{3}}{6}\\cdot\\frac{\\sqrt{3}}{2}\\right) = 9{,}8(0{,}5 + 0{,}25) = 7{,}35\\text{ m/s}^2$. Waktu berhenti di titik tertinggi adalah $t_{\\text{henti}} = \\frac{2{,}94}{7{,}35} = 0{,}4\\text{ s} < 0{,}8\\text{ s}$! Kemudian cek syarat meluncur turun: $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3} = \\frac{2\\sqrt{3}}{6} > \\mu_s = \\frac{\\sqrt{3}}{6}$, jadi batu bata PASTI meluncur turun selama sisa waktu $0{,}8 - 0{,}4 = 0{,}4\\text{ s}$.',
      D_fbd: {
        title: 'Diagram Gaya Batu Bata Saat Naik vs Saat Turun',
        diagramId: 'fbd-brick-up-down',
        description:
          'Saat naik, gaya gesek mengarah ke bawah sejajar bidang membantu mg sin 30°. Setelah berhenti di t = 0,4 s dan mulai turun, gaya gesek berbalik mengarah ke atas bidang melawan mg sin 30°.',
        vectors: [
          { label: 'mg sin 30°', direction: 'Sejajar bidang ke bawah', note: 'Selalu ke bawah baik saat naik maupun turun' },
          { label: 'f (saat naik)', direction: 'Sejajar bidang ke bawah', note: 'Menghasilkan perlambatan 7,35 m/s²' },
          { label: 'f (saat turun)', direction: 'Sejajar bidang ke atas', note: 'Menghasilkan percepatan turun 2,45 m/s²' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Percepatan Naik dan Turun',
          formula: 'a_{\\text{naik}} = g(\\sin\\theta + \\mu\\cos\\theta), \\qquad a_{\\text{turun}} = g(\\sin\\theta - \\mu\\cos\\theta)',
          meaning: 'Arah gaya gesek berbalik ketika arah kecepatan berbalik.',
        },
        {
          label: 'Posisi Akhir dari Titik Awal',
          formula: 'x(t) = s_{\\text{naik}} - s_{\\text{turun}} = \\frac{v_0^2}{2 a_{\\text{naik}}} - \\frac{1}{2} a_{\\text{turun}} (t - t_{\\text{henti}})^2',
          meaning: 'Jarak posisi akhir batu bata diukur dari posisi awalnya.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung waktu dan jarak naik hingga berhenti',
          detail: 'Dengan $a_{\\text{naik}} = 7{,}35\\text{ m/s}^2$ dan $v_0 = 2{,}94\\text{ m/s}$.',
          math: 't_{\\text{henti}} = \\frac{2{,}94}{7{,}35} = 0{,}4\\text{ s}, \\qquad s_{\\text{naik}} = \\frac{1}{2}(2{,}94)(0{,}4) = 0{,}588\\text{ m}',
        },
        {
          stepTitle: 'Hitung jarak luncur turun selama sisa 0,4 s',
          detail: 'Karena $\\tan 30^\\circ > \\mu_s$, benda turun dengan $a_{\\text{turun}} = 9{,}8(0{,}5 - 0{,}25) = 2{,}45\\text{ m/s}^2$.',
          math: 's_{\\text{turun}} = \\frac{1}{2}(2{,}45)(0{,}4)^2 = 0{,}196\\text{ m}',
        },
        {
          stepTitle: 'Hitung jarak batu bata dari posisi awalnya',
          detail: 'Kurangkan jarak turun dari posisi puncaknya dan bulatkan ke 1 angka desimal.',
          math: 'x(0{,}8) = 0{,}588 - 0{,}196 = 0{,}392\\text{ m} \\approx 0{,}4\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Batu bata naik sejauh $0{,}588\\text{ m}$ dalam $0{,}4\\text{ s}$ pertama, lalu meluncur kembali sejauh $0{,}196\\text{ m}$ dalam $0{,}4\\text{ s}$ berikutnya sehingga berada $0{,}4\\text{ m}$ di atas titik awal.',
      H_kesalahanUmum: [
        'Langsung memasukkan $t = 0{,}8\\text{ s}$ ke rumus $v_0 t - \\frac{1}{2}a_{\\text{naik}}t^2 = 0{,}0\\text{ m}$ tanpa mengecek bahwa percepatannya berubah arah di $t = 0{,}4\\text{ s}$!',
        'Menganggap batu bata berhenti selamanya di puncak tanpa membandingkan $\\tan\\theta$ dengan $\\mu_s$.',
      ],
      I_intiPembelajaran:
        'Pada gerak benda naik bidang miring kasar, selalu hitung $t_{\\text{henti}}$ terlebih dahulu untuk mengetahui apakah benda sudah berbalik arah atau berhenti sebelum waktu yang ditanyakan.',
    },
  },
  {
    id: 39,
    topic: 'Kinematika',
    title: 'Ketinggian Bola Melewati Tiang Gawang',
    questionText:
      'Seorang pemain bola yang berada $35\\text{ m}$ dari tiang gawang menendang bola dengan kecepatan $25\\text{ m/s}$ dan sudut kemiringan $45^\\circ$ terhadap tanah. Ketinggian bola saat melewati tiang gawang adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seorang pemain sepak bola menendang bola dari jarak horizontal 35 meter di depan gawang dengan kecepatan awal 25 meter per sekon dan sudut elevasi 45 derajat terhadap tanah.',
    answerValue: 15.8,
    answerDisplay: '15,8',
    solution: {
      A_memahamiFenomena:
        'Bola bergerak mengikuti lintasan parabola di bawah pengaruh gravitasi (hambatan udara diabaikan). Diketahui jarak horizontal target $x = 35\\text{ m}$, kelajuan awal $v_0 = 25\\text{ m/s}$, dan sudut elevasi $\\theta = 45^\\circ$. Dicari koordinat vertikal $y$ saat bola berada di $x = 35\\text{ m}$.',
      B_pengetahuanDasar:
        'Pada gerak parabola dari tanah ($y_0 = 0$), komponen horizontal konstan ($x = v_0\\cos\\theta \\cdot t$) dan komponen vertikal mengalami percepatan $-g$ ($y = v_0\\sin\\theta \\cdot t - \\frac{1}{2}g t^2$). Mengeliminasi $t$ menghasilkan persamaan lintasan $y(x)$.',
      C_analisisFisis:
        'Jangkauan horizontal maksimum pada $v_0 = 25\\text{ m/s}$ dan $\\theta = 45^\\circ$ adalah $R = v_0^2 / g = 625/9{,}8 \\approx 63{,}8\\text{ m} > 35\\text{ m}$, sehingga bola dipastikan masih berada di udara saat melewati $x = 35\\text{ m}$.',
      D_fbd: {
        title: 'Diagram Lintasan dan Gaya pada Bola di Udara',
        diagramId: 'fbd-soccer-goal',
        description:
          'Selama bola melayang di udara, hanya gaya berat mg vertikal ke bawah yang bekerja, membentuk lintasan parabola dari x = 0 menuju gawang di x = 35 m.',
        vectors: [
          { label: 'v₀ = 25 m/s', direction: 'Membentuk sudut 45°', note: 'Komponen horizontal tetap sepanjang gerak' },
          { label: 'mg', direction: 'Vertikal ke bawah', note: 'Menghasilkan percepatan ay = -9,8 m/s²' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Persamaan Lintasan Parabola',
          formula: 'y = x\\tan\\theta - \\frac{g x^2}{2 v_0^2 \\cos^2\\theta}',
          meaning: 'Menentukan ketinggian $y$ langsung pada jarak horizontal $x$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi x, v₀, dan θ = 45° ke persamaan lintasan',
          detail: 'Gunakan $\\tan 45^\\circ = 1$ dan $\\cos^2 45^\\circ = 0{,}5$.',
          math: 'y = 35(1) - \\frac{9{,}8 \\times 35^2}{2 \\times 25^2 \\times 0{,}5} = 35 - \\frac{9{,}8 \\times 1225}{625}',
        },
        {
          stepTitle: 'Selesaikan perhitungan dan bulatkan',
          detail: 'Hitung suku kedua lalu kurangkan dari $35$.',
          math: 'y = 35 - 19{,}208 = 15{,}792\\text{ m} \\approx 15{,}8\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Pada jarak $35\\text{ m}$, bola masih berada di ketinggian $15{,}8\\text{ m}$ (jauh di atas mistar gawang sepak bola standar yang tingginya $2{,}44\\text{ m}$), karena tendangan berkecepatan $25\\text{ m/s}$ pada sudut $45^\\circ$ sanggup mencapai jarak $63{,}8\\text{ m}$.',
      H_kesalahanUmum: [
        'Lupa mengkuadratkan $\\cos\\theta$ pada penyebut persamaan lintasan.',
        'Memakai $g = 10\\text{ m/s}^2$ alih-alih $9{,}8\\text{ m/s}^2$.',
      ],
      I_intiPembelajaran:
        'Persamaan lintasan $y(x) = x\\tan\\theta - \\frac{g x^2}{2 v_0^2 \\cos^2\\theta}$ adalah rumus ringkas wajib dikuasai untuk soal target posisi parabola.',
    },
  },
  {
    id: 40,
    topic: 'Rotasi, Statika & Osilasi',
    title: 'Aljabar Vektor Torka, Usaha, dan Gaya Konstan 3D',
    questionText:
      'Diketahui suatu vektor posisi $\\vec{r} = 2\\hat{i} + \\hat{j} + 2\\hat{k}$ bersatuan $\\text{m}$ dan suatu gaya konstan $\\vec{F}$. Vektor torka yang dilakukan oleh gaya $\\vec{F}$ terhadap lengan $\\vec{r}$ adalah $\\vec{\\tau}$ sedemikian sehingga perkalian silang (Cross product) $\\vec{r} \\times \\vec{\\tau} = (a - 9)\\hat{i} + (a + 9)\\hat{j} - 9\\hat{k}$ bersatuan $\\text{Nm}^2$, dengan $a$ suatu konstanta. Sedangkan besar usaha yang dilakukan oleh $\\vec{F}$ sepanjang lintasan vektor $\\vec{r}$ adalah $W = 9\\text{ J}$. Jika besar $\\vec{F}$ adalah $b\\text{ N}$ maka nilai $b^2$ sama dengan ... (tanpa satuan).',
    unit: 'N²',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Diketahui vektor posisi r sama dengan 2 topi i ditambah topi j ditambah 2 topi k meter, hasil kali silang r dengan vektor torka tau mengandung konstanta a, dan usaha W sama dengan 9 joule. Ditanyakan kuadrat besar gaya F.',
    answerValue: 14.0,
    answerDisplay: '14,0',
    solution: {
      A_memahamiFenomena:
        'Soal ini menguji kemampuan aljabar vektor 3 dimensi yang menghubungkan torka $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ dan usaha $W = \\vec{F} \\cdot \\vec{r}$ untuk merekonstruksi vektor gaya $\\vec{F}$ secara utuh tanpa mengetahui komponen $\\vec{F}$ secara langsung.',
      B_pengetahuanDasar:
        'Gunakan dua identitas vektor fundamental: (1) Sifat ortogonalitas hasil kali silang: $\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0$, karena hasil kali silang dua vektor selalu tegak lurus terhadap kedua vektor pembentuknya. (2) Identitas BAC-CAB untuk perkalian silang rangkap tiga: $\\vec{A} \\times (\\vec{B} \\times \\vec{C}) = \\vec{B}(\\vec{A} \\cdot \\vec{C}) - \\vec{C}(\\vec{A} \\cdot \\vec{B})$.',
      C_analisisFisis:
        'Pertama, manfaatkan $\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0$ untuk menentukan nilai konstanta $a$. Kedua, terapkan identitas BAC-CAB pada $\\vec{r} \\times \\vec{\\tau} = \\vec{r} \\times (\\vec{r} \\times \\vec{F}) = (\\vec{r} \\cdot \\vec{F})\\vec{r} - r^2 \\vec{F} = W\\vec{r} - r^2 \\vec{F}$. Karena $W$, $\\vec{r}$, $r^2$, dan $\\vec{r} \\times \\vec{\\tau}$ sudah diketahui semua, $\\vec{F}$ dapat langsung dihitung!',
      D_fbd: {
        title: 'Geometri Vektor 3D r, F, τ, dan r × τ',
        diagramId: 'fbd-vector-torque',
        description:
          'Vektor torka τ tegak lurus bidang r dan F, sedangkan r × τ berada kembali di bidang r dan F serta tegak lurus terhadap r.',
        vectors: [
          { label: 'r = (2, 1, 2) m', direction: 'Vektor posisi panjang r = 3 m', note: 'r² = 9 m²' },
          { label: 'r × τ = (0, 18, -9)', direction: 'Tegak lurus terhadap r', note: 'Diperoleh setelah menemukan a = 9' },
          { label: 'F = (2, -1, 3) N', direction: 'Vektor gaya hasil rekonstruksi', note: 'Menghasilkan b² = |F|² = 14,0' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Syarat Ortogonalitas',
          formula: '\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0',
          meaning: 'Menentukan nilai konstanta $a$ secara unik.',
        },
        {
          label: 'Identitas BAC-CAB pada Torka',
          formula: '\\vec{r} \\times (\\vec{r} \\times \\vec{F}) = (\\vec{r} \\cdot \\vec{F})\\vec{r} - r^2 \\vec{F} = W\\vec{r} - r^2 \\vec{F}',
          meaning: 'Mengisolasi vektor gaya $\\vec{F} = \\frac{W\\vec{r} - (\\vec{r} \\times \\vec{\\tau})}{r^2}$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Cari nilai konstanta a lewat perkalian titik',
          detail: 'Hitung $\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0$.',
          math: '2(a - 9) + 1(a + 9) + 2(-9) = 0 \\implies 3a - 27 = 0 \\implies a = 9',
        },
        {
          stepTitle: 'Tentukan vektor r × τ dan r²',
          detail: 'Substitusikan $a = 9$, dan hitung $r^2 = 2^2 + 1^2 + 2^2 = 9\\text{ m}^2$.',
          math: '\\vec{r} \\times \\vec{\\tau} = 0\\hat{i} + 18\\hat{j} - 9\\hat{k}\\text{ Nm}^2',
        },
        {
          stepTitle: 'Rekonstruksi vektor F dan hitung b² = |F|²',
          detail: 'Gunakan $\\vec{F} = \\frac{W\\vec{r} - (\\vec{r} \\times \\vec{\\tau})}{r^2}$ dengan $W = 9\\text{ J}$.',
          math: '\\vec{F} = \\frac{9(2\\hat{i} + \\hat{j} + 2\\hat{k}) - (18\\hat{j} - 9\\hat{k})}{9} = \\frac{18\\hat{i} - 9\\hat{j} + 27\\hat{k}}{9} = 2\\hat{i} - \\hat{j} + 3\\hat{k}\\text{ N}',
        },
        {
          stepTitle: 'Hitung b²',
          detail: 'Kuadratkan besar vektor $\\vec{F}$.',
          math: 'b^2 = |\\vec{F}|^2 = 2^2 + (-1)^2 + 3^2 = 4 + 1 + 9 = 14{,}0',
        },
      ],
      G_interpretasiFisika:
        'Panjang proyeksi $\\vec{F}$ searah $\\vec{r}$ ditentukan oleh usaha $W$, sedangkan komponen $\\vec{F}$ yang tegak lurus $\\vec{r}$ ditentukan oleh $\\vec{r} \\times \\vec{\\tau}$, sehingga keduanya bersama-sama mendefinisikan $\\vec{F}$ secara lengkap.',
      H_kesalahanUmum: [
        'Salah menulis urutan tanda pada aturan BAC-CAB (menjadi $r^2\\vec{F} - W\\vec{r}$, yang membalik tanda komponen tegak lurus).',
        'Menghitung besar $b = \\sqrt{14} \\approx 3{,}7$, padahal soal menanyakan $b^2$.',
      ],
      I_intiPembelajaran:
        'Kombinasi perkalian titik ($\\vec{r}\\cdot\\vec{F}$) dan perkalian silang rangkap ($\\vec{r}\\times(\\vec{r}\\times\\vec{F})$) selalu cukup untuk merekonstruksi vektor $\\vec{F}$ dalam ruang 3D.',
    },
  },
];
