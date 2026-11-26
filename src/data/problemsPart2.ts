import type { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_2: PhysicsProblem[] = [
  {
    id: 11,
    topic: 'Kinematika',
    title: 'Kecepatan Atlet Loncat Indah Saat Menyentuh Air',
    questionText:
      'Seorang atlit perenang loncat indah Olimpiade dengan massa $m = 68\\text{ kg}$ mulai lompat turun dari papan loncat setinggi $12\\text{ m}$ dengan kecepatan awal $2{,}4\\text{ m/s}$. Kecepatan perenang saat mengenai air ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seorang atlet loncat indah bermassa 68 kilogram melompat vertikal ke bawah dari papan setinggi 12 meter di atas permukaan kolam dengan laju awal 2 koma 4 meter per sekon.',
    answerValue: 15.5,
    answerDisplay: '15,5',
    solution: {
      A_memahamiFenomena:
        'Atlet mengalami gerak jatuh vertikal ke bawah dengan kecepatan awal $v_0 = 2{,}4\\text{ m/s}$ dari ketinggian $h = 12\\text{ m}$. Selama di udara, hambatan udara diabaikan sehingga atlet mengalami percepatan konstan ke bawah sebesar $g = 9{,}8\\text{ m/s}^2$.',
      B_pengetahuanDasar:
        'Gerak vertikal ke bawah termasuk GLBB dengan percepatan searah gerak awal ($a = +g$ jika arah bawah dipilih positif), atau dapat diselesaikan menggunakan kekekalan energi mekanik $\\Delta E_k + \\Delta E_p = 0$.',
      C_analisisFisis:
        'Pilih arah vertikal ke bawah sebagai arah positif agar $v_0$, $g$, dan perpindahan $h = +12\\text{ m}$ seluruhnya bertanda positif. Massa $m = 68\\text{ kg}$ tidak memengaruhi kecepatan akhir karena percepatan gravitasi sama bagi semua massa.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Atlet Saat Melayang',
        diagramId: 'fbd-diving-freefall',
        description:
          'Selama berada di udara antara papan loncat dan permukaan air, hanya gaya berat w = mg yang bekerja vertikal ke bawah.',
        vectors: [
          { label: 'w = mg', direction: 'Vertikal ke bawah', note: 'Gaya berat sebesar 666,4 N menyebabkan percepatan g = 9,8 m/s²' },
          { label: 'v', direction: 'Vertikal ke bawah', note: 'Laju bertambah dari 2,4 m/s menjadi 15,5 m/s' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Persamaan GLBB Tanpa Waktu',
          formula: 'v^2 = v_0^2 + 2 g h',
          meaning: 'Ekivalen dengan kekekalan energi $\\frac{1}{2}m v^2 = \\frac{1}{2}m v_0^2 + m g h$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi kecepatan awal dan ketinggian',
          detail: 'Masukkan $v_0 = 2{,}4\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$, dan $h = 12\\text{ m}$.',
          math: 'v^2 = (2{,}4)^2 + 2(9{,}8)(12) = 5{,}76 + 235{,}2 = 240{,}96',
        },
        {
          stepTitle: 'Hitung nilai kecepatan dan bulatkan',
          detail: 'Akar kuadrat dari $240{,}96$ dibulatkan ke satu angka di belakang koma.',
          math: 'v = \\sqrt{240{,}96} \\approx 15{,}5229\\text{ m/s} \\approx 15{,}5\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Kecepatan sentuh air sebesar $15{,}5\\text{ m/s}$ (sekitar $55{,}8\\text{ km/jam}$) menjelaskan mengapa atlet loncat indah perlu teknik masuk air vertikal agar gaya benturan minimal.',
      H_kesalahanUmum: [
        'Menggunakan tanda minus ($v_0^2 - 2gh$) sehingga tidak bisa ditarik akar.',
        'Menganggap kecepatan awal $v_0 = 0$ dan mengabaikan informasi $2{,}4\\text{ m/s}$.',
      ],
      I_intiPembelajaran:
        'Saat benda dilempar atau melompat ke bawah, energi kinetik awal langsung dijumlahkan dengan energi potensial gravitasi untuk memperoleh kecepatan akhir.',
    },
  },
  {
    id: 12,
    topic: 'Kinematika',
    title: 'Saat Mobil Mulai Bergerak ke Arah Positif',
    questionText:
      'Tinjau sebuah mobil bergerak di jalan tol lurus dengan persamaan geraknya berbentuk $x(t) = 3t^2 - 27t + 42$. Mobil akan mulai bergerak ke kanan (sumbu $x$ positif) setelah ia bergerak selama ... $\\text{s}$.',
    unit: 's',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah mobil bergerak sepanjang garis lurus mengikuti fungsi posisi x terhadap t sama dengan 3 t kuadrat dikurangi 27 t ditambah 42.',
    answerValue: 4.5,
    answerDisplay: '4,5',
    solution: {
      A_memahamiFenomena:
        'Posisi mobil diberikan sebagai fungsi kuadrat waktu $x(t) = 3t^2 - 27t + 42$. Pada saat awal ($t = 0$), turunan pertamanya bernilai negatif sehingga mobil mula-mula bergerak ke kiri (sumbu $x$ negatif) sambil diperlambat hingga berhenti sesaat, lalu berbalik arah bergerak ke kanan.',
      B_pengetahuanDasar:
        'Kecepatan sesaat adalah turunan pertama fungsi posisi terhadap waktu: $v(t) = \\frac{dx}{dt}$. Benda bergerak ke kanan apabila $v(t) > 0$, dan tepat saat berbalik arah berlaku $v(t) = 0$.',
      C_analisisFisis:
        'Kita mencari waktu $t$ saat kecepatan berubah tanda dari negatif menjadi positif, yaitu titik stasioner $v(t) = 0$. Setelah melewati waktu ini, nilai $v(t)$ menjadi positif sehingga mobil bergerak ke arah sumbu $x$ positif.',
      D_fbd: {
        title: 'Sketsa Kurva Posisi x(t) dan Titik Balik Arah',
        diagramId: 'fbd-parabolic-x-t',
        description:
          'Kurva x(t) berbentuk parabola terbuka ke atas. Gradien garis singgung (kecepatan) negatif untuk t < 4,5 s, bernilai nol tepat di titik minimum t = 4,5 s, lalu positif untuk t > 4,5 s.',
        vectors: [
          { label: 'v(0) = -27 m/s', direction: 'Ke kiri (-x)', note: 'Gerak awal pada t = 0 s' },
          { label: 'v(4,5) = 0', direction: 'Titik balik arah', note: 'Berhenti sesaat di titik minimum parabola' },
          { label: 'a = +6 m/s²', direction: 'Ke kanan (+x)', note: 'Percepatan konstan positif' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kecepatan Sesaat',
          formula: 'v(t) = \\frac{dx(t)}{dt}',
          meaning: 'Turunan fungsi posisi terhadap waktu menunjukkan arah dan laju gerak.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Turunkan persamaan posisi x(t) terhadap t',
          detail: 'Hitung fungsi kecepatan $v(t)$.',
          math: 'v(t) = \\frac{d}{dt}(3t^2 - 27t + 42) = 6t - 27',
        },
        {
          stepTitle: 'Tentukan waktu saat mobil berbalik ke kanan (v = 0)',
          detail: 'Syarat mobil mulai bergerak ke kanan adalah $v(t) > 0$, dimulai tepat setelah $v(t) = 0$.',
          math: '6t - 27 = 0 \\implies t = \\frac{27}{6} = 4{,}5\\text{ s}',
        },
      ],
      G_interpretasiFisika:
        'Sebelum $t = 4{,}5\\text{ s}$, mobil bergerak mundur ke kiri dengan perlambatan konstan $6\\text{ m/s}^2$. Tepat setelah $t = 4{,}5\\text{ s}$, kecepatannya positif dan mobil melaju ke kanan.',
      H_kesalahanUmum: [
        'Mencari akar persamaan $x(t) = 0$ ($t = 2\\text{ s}$ atau $t = 7\\text{ s}$), padahal $x = 0$ adalah saat melewati titik asal koordinat, bukan saat berbalik arah.',
      ],
      I_intiPembelajaran:
        'Titik balik arah gerak 1D selalu ditentukan oleh syarat kecepatan sesaat nol ($dx/dt = 0$), bukan oleh posisi nol ($x = 0$).',
    },
  },
  {
    id: 13,
    topic: 'Kinematika',
    title: 'Komponen Vertikal Kecepatan Peluru Saat Tiba di Tanah',
    questionText:
      'Sebuah peluru ditembakkan dari suatu ketinggian tertentu terhadap permukaan tanah ($y = 0$) dengan laju awal $30\\text{ m/s}$ dan sudut pelemparan (elevasi) $\\alpha$ terhadap horizontal ($\\tan\\alpha = 3/4$). Grafik no 13 di bawah menunjukkan lintasan yang ditempuh oleh peluru sejak ditembakkan. Abaikan hambatan udara. Komponen vertikal dari kecepatan peluru saat tiba di permukaan tanah adalah ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'grafik-13',
    stimulusCaption: 'Grafik no 13 (Lintasan parabola y vs x dengan ketinggian awal 20 m)',
    diagramSpeechNote:
      'Pada Grafik nomor 13, sumbu mendatar adalah posisi x dalam meter dan sumbu tegak adalah ketinggian y dalam meter. Lintasan peluru berawal dari x sama dengan 0 dan y sama dengan 20 meter, naik melengkung hingga ketinggian sekitar 36 koma 5 meter, lalu turun dan menyentuh tanah y sama dengan 0 di sekitar x sama dengan 109 koma 6 meter.',
    answerValue: -26.8,
    answerDisplay: '-26,8',
    solution: {
      A_memahamiFenomena:
        'Gerak parabola dimulai dari ketinggian awal $y_0 = 20\\text{ m}$ (dibaca dari Grafik no 13 pada $x = 0$) dengan kelajuan awal $v_0 = 30\\text{ m/s}$ dan sudut elevasi $\\tan\\alpha = 3/4$. Yang ditanyakan adalah komponen vertikal kecepatan $v_y$ saat peluru menyentuh tanah ($y = 0$).',
      B_pengetahuanDasar:
        'Gerak peluru diuraikan menjadi GLB pada sumbu $x$ ($v_x = v_0\\cos\\alpha$) dan GLBB vertikal pada sumbu $y$ ($a_y = -g$). Karena sumbu $y$ positif mengarah ke atas, saat tiba di tanah peluru sedang bergerak turun sehingga komponen vertikal kecepatannya $v_y$ bertanda negatif.',
      C_analisisFisis:
        'Dari $\\tan\\alpha = 3/4$ (segitiga siku-siku 3-4-5), diperoleh $\\sin\\alpha = 3/5 = 0{,}6$. Komponen awal vertikal adalah $v_{0y} = v_0 \\sin\\alpha = 30 \\times 0{,}6 = +18\\text{ m/s}$. Perpindahan vertikal dari titik tembak ke tanah adalah $\\Delta y = 0 - 20 = -20\\text{ m}$.',
      D_fbd: {
        title: 'Diagram Vektor Kecepatan dan Percepatan Peluru',
        diagramId: 'fbd-projectile-cliff',
        description:
          'Selama terbang hanya gaya gravitasi mg yang bekerja ke bawah. Komponen vy berubah dari +18 m/s di awal menjadi negatif saat menumbuk permukaan y = 0.',
        vectors: [
          { label: 'v₀y = +18 m/s', direction: 'Vertikal ke atas di x = 0', note: 'Pada ketinggian awal y₀ = 20 m' },
          { label: 'g = 9,8 m/s²', direction: 'Vertikal ke bawah', note: 'Bekerja sepanjang seluruh lintasan' },
          { label: 'vy = -26,8 m/s', direction: 'Vertikal ke bawah di y = 0', note: 'Arah ke bawah sehingga bertanda negatif' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'GLBB Arah Vertikal Tanpa Waktu',
          formula: 'v_y^2 = v_{0y}^2 + 2 (-g) \\Delta y = v_{0y}^2 + 2 g y_0',
          meaning: 'Karena $\\Delta y = -y_0$ dan $a_y = -g$, perkalian $2(-g)(-y_0)$ menjadi $+2 g y_0$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Tentukan ketinggian awal dan komponen v₀y',
          detail: 'Dari Grafik no 13, pada $x = 0$ terbaca $y_0 = 20\\text{ m}$. Dengan $\\tan\\alpha = 3/4$, maka $\\sin\\alpha = 3/5$.',
          math: 'v_{0y} = 30 \\times \\frac{3}{5} = 18\\text{ m/s}',
        },
        {
          stepTitle: 'Hitung kuadrat kecepatan vertikal di tanah',
          detail: 'Substitusikan $v_{0y} = 18\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$, dan $y_0 = 20\\text{ m}$.',
          math: 'v_y^2 = 18^2 + 2(9{,}8)(20) = 324 + 392 = 716',
        },
        {
          stepTitle: 'Ambil akar negatif sesuai arah ke bawah',
          detail: 'Saat tiba di tanah peluru bergerak turun searah sumbu $y$ negatif.',
          math: 'v_y = -\\sqrt{716} \\approx -26{,}7582\\text{ m/s} \\approx -26{,}8\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Komponen vertikal bernilai $-26{,}8\\text{ m/s}$: besarnya lebih cepat daripada $18\\text{ m/s}$ karena selain kembali ke ketinggian $20\\text{ m}$, peluru masih jatuh tambahan $20\\text{ m}$ lagi menuju permukaan tanah.',
      H_kesalahanUmum: [
        'Lupa menyertakan tanda negatif padahal ditanyakan "komponen vertikal kecepatan" pada sumbu $y$ positif ke atas.',
        'Menggunakan $v_0 = 30\\text{ m/s}$ langsung sebagai $v_{0y}$ tanpa mengalikannya dengan $\\sin\\alpha$.',
      ],
      I_intiPembelajaran:
        'Gunakan grafik stimulus untuk membaca nilai kondisi batas ($y_0 = 20\\text{ m}$), dan perhatikan konvensi tanda komponen vektor pada sumbu koordinat.',
    },
  },
  {
    id: 14,
    topic: 'Usaha, Energi & Momentum',
    title: 'Gaya Total Saat Mendarat dengan Lutut Lurus',
    questionText:
      'Seseorang bermassa $72\\text{ kg}$ melompat dari ketinggian $1{,}2\\text{ m}$ dan ia lupa menekuk lututnya saat mendarat di lantai. Oleh karenanya pusat massa tubuhnya mengalami perlambatan hanya sejauh $1{,}5\\text{ cm}$. Besarnya gaya total pada kakinya selama perlambatan tersebut adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seseorang bermassa 72 kilogram melompat dari ketinggian 1 koma 2 meter dan berhenti dalam jarak perlambatan pusat massa hanya 1 koma 5 sentimeter saat menyentuh lantai.',
    answerValue: 56448.0,
    answerDisplay: '56448,0',
    solution: {
      A_memahamiFenomena:
        'Orang bermassa $m = 72\\text{ kg}$ jatuh bebas dari ketinggian $h = 1{,}2\\text{ m}$, lalu dihentikan secara mendadak oleh lantai dalam jarak henti $d = 1{,}5\\text{ cm} = 0{,}015\\text{ m}$. Ditanyakan besarnya gaya total (resultan gaya) yang bekerja selama perlambatan tersebut.',
      B_pengetahuanDasar:
        'Berdasarkan teorema usaha-energi, usaha oleh gaya total selama proses perlambatan sama dengan perubahan energi kinetiknya: $W_{\\text{total}} = \\Delta E_k$. Karena sebelum menyentuh lantai benda memperoleh energi kinetik sebesar $E_k = m g h$, maka $F_{\\text{total}} \\cdot d = m g h$.',
      C_analisisFisis:
        'Proses dibagi dua tahap: (1) Jatuh bebas sejauh $h = 1{,}2\\text{ m}$ hingga sesaat menyentuh lantai dengan $v^2 = 2 g h$. (2) Perlambatan konstan sejauh $d = 0{,}015\\text{ m}$ hingga berhenti ($v_{\\text{akhir}} = 0$). Besar perlambatan adalah $a = v^2 / (2d) = g h / d$.',
      D_fbd: {
        title: 'Diagram Gaya Selama Perlambatan Pendaratan',
        diagramId: 'fbd-landing-impulse',
        description:
          'Selama perlambatan, lantai memberikan gaya normal N sangat besar ke atas sementara berat mg tetap ke bawah. Resultan gaya total F_total = N - mg mengarah ke atas.',
        vectors: [
          { label: 'N', direction: 'Vertikal ke atas', note: 'Gaya reaksi lantai jauh melampaui berat tubuh' },
          { label: 'mg', direction: 'Vertikal ke bawah', note: 'Gaya berat sebesar 705,6 N' },
          { label: 'F_total = ma', direction: 'Resultan vertikal ke atas', note: 'Menghentikan gerak jatuh dalam jarak 1,5 cm' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Teorema Usaha-Energi / GLBB',
          formula: 'F_{\\text{total}} = m a = m \\frac{v^2}{2d} = \\frac{m g h}{d}',
          meaning: 'Semakin kecil jarak perlambatan $d$, semakin besar gaya total secara berbanding terbalik.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Konversi jarak perlambatan ke satuan meter',
          detail: 'Ubah $d = 1{,}5\\text{ cm}$ ke meter.',
          math: 'd = 1{,}5\\text{ cm} = 0{,}015\\text{ m}',
        },
        {
          stepTitle: 'Hitung gaya total selama perlambatan',
          detail: 'Masukkan $m = 72\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$, $h = 1{,}2\\text{ m}$, dan $d = 0{,}015\\text{ m}$.',
          math: 'F_{\\text{total}} = \\frac{72 \\times 9{,}8 \\times 1{,}2}{0{,}015} = 72 \\times 784 = 56448{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Gaya total mencapai $56{,}4\\text{ kN}$ (sekitar 80 kali berat tubuhnya!), yang sangat berisiko menyebabkan cedera tulang jika lutut tidak ditekuk untuk memperbesar jarak henti $d$.',
      H_kesalahanUmum: [
        'Lupa mengubah $1{,}5\\text{ cm}$ menjadi $0{,}015\\text{ m}$, sehingga hasilnya lebih kecil 100 kali lipat.',
        'Mencampuradukkan gaya total ($\\Sigma F = mgh/d$) dengan gaya normal lantai ($N = mg + mgh/d$); perhatikan soal secara eksplisit menanyakan "gaya total".',
      ],
      I_intiPembelajaran:
        'Menekuk lutut saat mendarat memperbesar jarak perlambatan $d$ sehingga gaya total $F = mgh/d$ turun drastis.',
    },
  },
  {
    id: 15,
    topic: 'Usaha, Energi & Momentum',
    title: 'Energi Kinetik Balok Setelah Didorong Gaya Konstan',
    questionText:
      'Tinjaulah sebuah balok bermassa $12\\text{ kg}$ awalnya bergerak dengan kecepatan $15\\text{ m/s}$ dan kemudian didorong horizontal oleh gaya $180\\text{ N}$. Jika diketahui lantai licin maka energi kinetik sistem $2\\text{ s}$ setelah bergerak adalah ... $\\text{J}$.',
    unit: 'J',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah balok bermassa 12 kilogram yang sedang meluncur di lantai licin dengan kecepatan awal 15 meter per sekon didorong searah geraknya oleh gaya konstan 180 newton selama 2 sekon.',
    answerValue: 12150.0,
    answerDisplay: '12150,0',
    solution: {
      A_memahamiFenomena:
        'Balok $m = 12\\text{ kg}$ memiliki kecepatan awal $v_0 = 15\\text{ m/s}$ di atas lantai datar licin, kemudian menerima gaya konstan searah $F = 180\\text{ N}$ selama $t = 2\\text{ s}$. Dicari energi kinetik akhir pada $t = 2\\text{ s}$.',
      B_pengetahuanDasar:
        'Gaya konstan pada massa konstan menghasilkan percepatan tetap $a = F/m$. Setelah selang waktu $t$, kecepatan menjadi $v = v_0 + a t$, dan energi kinetiknya adalah $E_k = \\frac{1}{2} m v^2$.',
      C_analisisFisis:
        'Karena lantai licin, tidak ada gaya gesek. Gaya normal dan berat saling meniadakan dalam arah vertikal, sehingga gaya horizontal total hanyalah $F = 180\\text{ N}$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Balok pada Lantai Licin',
        diagramId: 'fbd-horizontal-push',
        description:
          'Gaya dorong F = 180 N mengarah ke kanan searah kecepatan awal v₀, sementara N dan mg seimbang pada arah vertikal.',
        vectors: [
          { label: 'F = 180 N', direction: 'Horizontal ke kanan', note: 'Memberikan percepatan a = 15 m/s²' },
          { label: 'N & mg', direction: 'Vertikal atas & bawah', note: 'Saling meniadakan (117,6 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Percepatan & Kecepatan GLBB',
          formula: 'a = \\frac{F}{m}, \\qquad v(t) = v_0 + a t',
          meaning: 'Menentukan kelajuan akhir balok setelah $t$ sekon.',
        },
        {
          label: 'Energi Kinetik',
          formula: 'E_k = \\frac{1}{2} m v^2',
          meaning: 'Energi gerak translasi benda pada saat $t = 2\\text{ s}$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung percepatan balok',
          detail: 'Bagi gaya dorong dengan massa balok.',
          math: 'a = \\frac{180}{12} = 15\\text{ m/s}^2',
        },
        {
          stepTitle: 'Hitung kecepatan setelah 2 sekon',
          detail: 'Tambahkan perubahan kecepatan $a t$ ke kecepatan awal.',
          math: 'v = 15 + 15(2) = 45\\text{ m/s}',
        },
        {
          stepTitle: 'Hitung energi kinetik akhir',
          detail: 'Substitusikan $m = 12\\text{ kg}$ dan $v = 45\\text{ m/s}$.',
          math: 'E_k = \\frac{1}{2}(12)(45)^2 = 6 \\times 2025 = 12150{,}0\\text{ J}',
        },
      ],
      G_interpretasiFisika:
        'Energi kinetik awal balok adalah $\\frac{1}{2}(12)(15^2) = 1350\\text{ J}$. Usaha gaya dorong sejauh $s = 15(2) + \\frac{1}{2}(15)(4) = 60\\text{ m}$ menambah energi sebesar $180 \\times 60 = 10800\\text{ J}$, sehingga totalnya tepat $12150{,}0\\text{ J}$.',
      H_kesalahanUmum: [
        'Menganggap kecepatan awal nol dan langsung memakai $v = a t = 30\\text{ m/s}$.',
        'Menghitung perubahan energi kinetik saja ($10800\\text{ J}$), bukan energi kinetik total sistem.',
      ],
      I_intiPembelajaran:
        'Energi kinetik akhir dapat dihitung melalui kinematika ($v = v_0 + at$) maupun teorema usaha-energi ($E_k = E_{k0} + F s$).',
    },
  },
  {
    id: 16,
    topic: 'Usaha, Energi & Momentum',
    title: 'Pembacaan Timbangan Saat Pasir Dituangkan ke Ember',
    questionText:
      'Ember bermassa $0{,}8\\text{ kg}$ berada di atas timbangan. Seseorang menuangkan pasir ke dalam ember dengan debit $80\\text{ g/s}$. Jika pasir jatuh ke dalam ember dengan kecepatan sekitar $5\\text{ m/s}$, pembacaan timbangan saat terdapat $1{,}2\\text{ kg}$ pasir di dalam ember adalah ... $\\text{N}$ (ambil harga mutlaknya).',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah ember bermassa 0 koma 8 kilogram diletakkan di atas timbangan, lalu pasir dituangkan ke dalamnya dengan debit 80 gram per sekon dan kecepatan jatuh 5 meter per sekon.',
    answerValue: 20.0,
    answerDisplay: '20,0',
    solution: {
      A_memahamiFenomena:
        'Ini adalah fenomena sistem bermassa variabel (aliran massa). Selain menopang berat total ember dan pasir yang sudah terkumpul, timbangan juga harus memberikan gaya impulsif untuk menghentikan aliran pasir yang jatuh menumbuk dasar ember.',
      B_pengetahuanDasar:
        'Menurut Hukum II Newton dalam bentuk momentum: $F_{\\text{eksternal}} = \\frac{dp}{dt}$. Ketika aliran pasir bermassa $dm$ bergerak turun dengan laju $v$ dan berhenti seketika saat mengenai ember dalam waktu $dt$, laju perubahan momentum aliran pasir menghasilkan gaya dorong tambahan ke bawah sebesar $v \\frac{dm}{dt}$.',
      C_analisisFisis:
        'Pada saat terdapat $m_{\\text{pasir}} = 1{,}2\\text{ kg}$ di dalam ember, massa total diam di atas timbangan adalah $M_{\\text{tot}} = 0{,}8 + 1{,}2 = 2{,}0\\text{ kg}$. Debit aliran massa $\\frac{dm}{dt} = 80\\text{ g/s} = 0{,}08\\text{ kg/s}$. Gaya normal timbangan $N$ harus menopang berat $M_{\\text{tot}} g$ ditambah gaya henti aliran pasir $v \\frac{dm}{dt}$.',
      D_fbd: {
        title: 'Diagram Gaya pada Sistem Ember dan Aliran Pasir',
        diagramId: 'fbd-sand-bucket',
        description:
          'Timbangan menekan ke atas sebesar N. Gaya ke bawah berasal dari berat ember dan pasir (M_tot g) serta gaya tumbukan kontinu aliran pasir (v dm/dt).',
        vectors: [
          { label: 'N', direction: 'Vertikal ke atas', note: 'Pembacaan timbangan sebesar 20,0 N' },
          { label: 'M_tot g', direction: 'Vertikal ke bawah', note: 'Berat statis ember + pasir (19,6 N)' },
          { label: 'v (dm/dt)', direction: 'Gaya impuls efektif ke bawah', note: 'Akibat menghentikan pasir (0,4 N)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Gaya Normal Timbangan pada Sistem Aliran Pasir',
          formula: 'N = (m_{\\text{ember}} + m_{\\text{pasir}})g + v\\frac{dm}{dt}',
          meaning: 'Penjumlahan berat statis saat itu dengan gaya tumbukan momentum per satuan waktu.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Konversi debit massa ke kg/s',
          detail: 'Ubah $80\\text{ g/s}$ menjadi kilogram per sekon.',
          math: '\\frac{dm}{dt} = 80\\text{ g/s} = 0{,}08\\text{ kg/s}',
        },
        {
          stepTitle: 'Hitung berat total statis dan gaya tumbukan pasir',
          detail: 'Jumlahkan massa ember dan pasir, lalu tambahkan suku impuls aliran.',
          math: 'W_{\\text{tot}} = (0{,}8 + 1{,}2) \\times 9{,}8 = 2{,}0 \\times 9{,}8 = 19{,}6\\text{ N}',
        },
        {
          stepTitle: 'Jumlahkan untuk memperoleh pembacaan timbangan',
          detail: 'Hitung $v \\frac{dm}{dt}$ dan jumlahkan.',
          math: 'N = 19{,}6 + (5 \\times 0{,}08) = 19{,}6 + 0{,}4 = 20{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Pembacaan timbangan ($20{,}0\\text{ N}$) sedikit lebih besar daripada berat statis ember dan pasir ($19{,}6\\text{ N}$) akibat gaya tumbukan kontinu $0{,}4\\text{ N}$ dari pasir yang jatuh.',
      H_kesalahanUmum: [
        'Mengabaikan suku momentum aliran $v \\frac{dm}{dt}$ dan hanya menghitung berat statis $19{,}6\\text{ N}$.',
        'Lupa mengonversi satuan debit $80\\text{ g/s}$ ke $0{,}08\\text{ kg/s}$.',
      ],
      I_intiPembelajaran:
        'Untuk sistem massa kontinu yang menumbuk permukaan, selalu tambahkan suku gaya aliran momentum $v_{\\text{rel}} \\frac{dm}{dt}$ pada gaya normal penopang.',
    },
  },
  {
    id: 17,
    topic: 'Dinamika & Gaya',
    title: 'Gaya Dorong pada Sistem Tiga Massa Tanpa Gerak Relatif',
    questionText:
      'Pada Gambar no 17 di bawah ini, seluruh permukaan bersifat licin, sedangkan massa tali dan katrol dapat diabaikan. Gaya $F$ diberikan pada massa $m$ sedemikian sehingga sistem ketiga massa bergerak terhadap lantai, sedangkan antara ketiga massa tidak ada gerakan relatif satu sama lain. Jika $m_1 = 25\\text{ kg}$, $m_2 = 15\\text{ kg}$, dan $m = 40\\text{ kg}$, besar gaya sama dengan ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'gambar-17',
    stimulusCaption: 'Gambar no 17 (Sistem tiga massa dengan seluruh permukaan licin)',
    diagramSpeechNote:
      'Pada Gambar nomor 17, balok besar bermassa m berada di atas lantai datar licin dan didorong dari kiri ke kanan oleh gaya F. Di atas balok m terdapat balok m satu yang terhubung tali melewati katrol di sudut kanan atas balok m menuju balok m dua yang menggantung di sisi kanan balok m.',
    answerValue: 470.4,
    answerDisplay: '470,4',
    solution: {
      A_memahamiFenomena:
        'Seluruh sistem ($m$, $m_1$, dan $m_2$) bergerak bersama dengan percepatan horizontal $a$ tanpa adanya pergeseran relatif antara $m_1$, $m_2$, maupun $m$. Karena tidak ada gerak relatif, $m_2$ tidak turun dan $m_1$ tidak bergeser di atas $m$.',
      B_pengetahuanDasar:
        'Jika seluruh bagian sistem tidak bergerak relatif satu sama lain, seluruh benda memiliki percepatan vektor yang identik $\\vec{a} = a\\hat{i}$. Gaya kontak internal antara balok dan tegangan tali memindahkan percepatan tersebut ke setiap massa.',
      C_analisisFisis:
        'Pada $m_2$: tidak ada percepatan vertikal, sehingga $T = m_2 g$. Pada $m_1$: satu-satunya gaya horizontal yang mendorong $m_1$ maju (karena permukaan licin) adalah tegangan tali $T$, sehingga $T = m_1 a$. Dengan menyamakan keduanya diperoleh $a = \\frac{m_2}{m_1} g$. Untuk mendorong seluruh sistem bermassa total $(m + m_1 + m_2)$ dengan percepatan $a$, diperlukan gaya $F = (m + m_1 + m_2) a$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas m₁, m₂, dan Sistem Total',
        diagramId: 'fbd-three-block-cart',
        description:
          'Pada m₂, tegangan tali T ke atas tepat mengimbangi berat m₂g ke bawah, sementara sisi kanan kereta m mendorong m₂ dengan gaya normal N₂ ke kanan. Pada m₁, tegangan tali T ke kanan mempercepat m₁.',
        vectors: [
          { label: 'T = m₂g', direction: 'Ke kanan pada m₁ / ke atas pada m₂', note: 'Menjaga m₂ tidak jatuh sekaligus menarik m₁' },
          { label: 'N₂ = m₂a', direction: 'Ke kanan pada m₂ oleh m', note: 'Gaya dorong dinding kereta m terhadap m₂' },
          { label: 'F', direction: 'Horizontal ke kanan pada m', note: 'Mempercepat massa total 80 kg dengan a = 5,88 m/s²' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Syarat Tidak Ada Gerak Relatif',
          formula: 'T = m_2 g \\quad \\text{dan} \\quad T = m_1 a \\implies a = \\frac{m_2}{m_1} g',
          meaning: 'Percepatan sistem terkunci pada perbandingan massa $m_2 / m_1$.',
        },
        {
          label: 'Gaya Total Sistem',
          formula: 'F = (m + m_1 + m_2) a = (m + m_1 + m_2) \\frac{m_2}{m_1} g',
          meaning: 'Hukum II Newton untuk keseluruhan sistem yang bergerak serempak.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Hitung percepatan sistem a',
          detail: 'Masukkan $m_1 = 25\\text{ kg}$, $m_2 = 15\\text{ kg}$, dan $g = 9{,}8\\text{ m/s}^2$.',
          math: 'a = \\frac{15}{25} \\times 9{,}8 = 0{,}6 \\times 9{,}8 = 5{,}88\\text{ m/s}^2',
        },
        {
          stepTitle: 'Hitung total massa dan gaya F',
          detail: 'Total massa $M_{\\text{tot}} = 40 + 25 + 15 = 80\\text{ kg}$.',
          math: 'F = 80 \\times 5{,}88 = 470{,}4\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Jika $F$ lebih kecil dari $470{,}4\\text{ N}$, $m_2$ akan turun menarik $m_1$ ke kanan relatif terhadap kereta $m$. Jika $F$ lebih besar, $m_1$ akan tertinggal ke kiri dan menarik $m_2$ naik.',
      H_kesalahanUmum: [
        'Lupa menyertakan $m_1$ dan $m_2$ dalam massa total saat menghitung $F$.',
        'Menganggap ada gaya fiktif di kerangka lab, padahal di kerangka inersia cukup gunakan Hukum II Newton pada $m_1$ dan $m_2$.',
      ],
      I_intiPembelajaran:
        'Dalam soal sistem benda terhubung tanpa gerak relatif, cari dahulu percepatan unik sistem dari benda yang ditopang tali ($m_1$ dan $m_2$), lalu kalikan dengan total seluruh massa.',
    },
  },
  {
    id: 18,
    topic: 'Usaha, Energi & Momentum',
    title: 'Gaya Pengereman untuk Menghentikan Gerbong Kereta',
    questionText:
      'Gerbong kereta bermassa $25\\text{ ton}$ sedang bergerak dengan kecepatan $24\\text{ m/s}$. Besarnya gaya pengereman yang dibutuhkan untuk menghentikan gerbong tersebut dalam jarak $60\\text{ m}$ adalah ... $\\text{N}$.',
    unit: 'N',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Sebuah gerbong kereta bermassa 25 ton bergerak lurus dengan kelajuan 24 meter per sekon dan direm hingga berhenti tepat setelah menempuh jarak 60 meter.',
    answerValue: 120000.0,
    answerDisplay: '120000,0',
    solution: {
      A_memahamiFenomena:
        'Gerbong kereta bermassa besar ($m = 25\\text{ ton} = 25000\\text{ kg}$) memiliki energi kinetik awal yang besar dan harus dihentikan ($v_{\\text{akhir}} = 0$) oleh gaya pengereman konstan dalam jarak tempuh $s = 60\\text{ m}$.',
      B_pengetahuanDasar:
        'Teorema usaha-energi menyatakan bahwa usaha gaya pengereman yang berlawanan arah gerak ($W = -F s$) sama dengan perubahan energi kinetik ($\\Delta E_k = 0 - \\frac{1}{2} m v_0^2$).',
      C_analisisFisis:
        'Dengan mengonversi satuan massa dari ton ke kilogram ($1\\text{ ton} = 1000\\text{ kg}$), kita peroleh besar gaya pengereman $F = \\frac{m v_0^2}{2s}$.',
      D_fbd: {
        title: 'Diagram Gaya Bebas Gerbong Saat Pengereman',
        diagramId: 'fbd-train-braking',
        description:
          'Gaya pengereman F mengarah berlawanan dengan arah kecepatan awal v₀ (ke kiri), sedangkan gaya berat dan gaya normal seimbang secara vertikal.',
        vectors: [
          { label: 'F_rem', direction: 'Berlawanan arah gerak', note: 'Melakukan usaha negatif untuk menghabiskan Ek' },
          { label: 'v₀ = 24 m/s', direction: 'Arah gerak awal ke kanan', note: 'Berkurang menjadi nol pada jarak 60 m' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Teorema Usaha-Energi Pengereman',
          formula: 'F s = \\frac{1}{2} m v_0^2 \\implies F = \\frac{m v_0^2}{2 s}',
          meaning: 'Energi kinetik awal diserap seluruhnya oleh usaha gaya pengereman sejauh $s$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Konversi massa ke kilogram',
          detail: 'Ubah $25\\text{ ton}$ menjadi kilogram.',
          math: 'm = 25 \\times 1000 = 25000\\text{ kg}',
        },
        {
          stepTitle: 'Hitung gaya pengereman',
          detail: 'Masukkan $m = 25000\\text{ kg}$, $v_0 = 24\\text{ m/s}$, dan $s = 60\\text{ m}$.',
          math: 'F = \\frac{25000 \\times 24^2}{2 \\times 60} = \\frac{25000 \\times 576}{120} = 25000 \\times 4{,}8 = 120000{,}0\\text{ N}',
        },
      ],
      G_interpretasiFisika:
        'Dibutuhkan gaya pengereman sebesar $120\\text{ kN}$ (perlambatan $4{,}8\\text{ m/s}^2$) agar gerbong $25\\text{ ton}$ berhenti dalam jarak $60\\text{ m}$.',
      H_kesalahanUmum: [
        'Lupa mengonversi $25\\text{ ton}$ menjadi $25000\\text{ kg}$.',
        'Lupa angka faktor $2$ pada penyebut $2s$ (atau pada $\\frac{1}{2} m v_0^2$).',
      ],
      I_intiPembelajaran:
        'Teorema usaha-energi ($F s = \\frac{1}{2} m v_0^2$) menghubungkan gaya, jarak henti, dan kelajuan dalam satu langkah tanpa perlu menghitung waktu.',
    },
  },
  {
    id: 19,
    topic: 'Usaha, Energi & Momentum',
    title: 'Kecepatan Relatif Orang Berlari di Atas Batang Kayu Terapung',
    questionText:
      'Seseorang dengan massa $80\\text{ kg}$ berada di salah satu batang kayu bermassa $320\\text{ kg}$ (keduanya awalnya diam). Batang kayu tersebut sedang terapung di atas sebuah danau yang tenang. Jika orang tersebut berlari ke ujung batang kayu lainnya dengan kecepatan $3{,}5\\text{ m/s}$ relatif terhadap batang kayu, maka kecepatannya relatif terhadap daratan adalah ... $\\text{m/s}$.',
    unit: 'm/s',
    stimulusDiagramId: 'none',
    diagramSpeechNote:
      'Seseorang bermassa 80 kilogram berdiri di atas batang kayu bermassa 320 kilogram yang terapung diam di atas danau tenang, lalu berlari dengan kelajuan relatif 3 koma 5 meter per sekon terhadap batang kayu.',
    answerValue: 2.8,
    answerDisplay: '2,8',
    solution: {
      A_memahamiFenomena:
        'Orang ($m_1 = 80\\text{ kg}$) dan batang kayu ($m_2 = 320\\text{ kg}$) awalnya diam di atas air danau tanpa gesekan. Saat orang berlari ke satu arah, gaya dorong kaki mendorong batang kayu ke arah berlawanan sehingga kecepatan orang terhadap daratan lebih kecil daripada kecepatan relatifnya terhadap kayu.',
      B_pengetahuanDasar:
        'Karena tidak ada gaya luar horizontal (air danau tenang dianggap licin), berlaku kekekalan momentum linear total sistem: $p_{\\text{awal}} = p_{\\text{akhir}} = 0$.',
      C_analisisFisis:
        'Misalkan kecepatan orang terhadap daratan adalah $v_1$ (positif ke kanan) dan kecepatan batang kayu terhadap daratan adalah $v_2$. Kecepatan orang relatif terhadap batang kayu adalah $v_{\\text{rel}} = v_1 - v_2 = 3{,}5\\text{ m/s}$, sehingga $v_2 = v_1 - v_{\\text{rel}}$.',
      D_fbd: {
        title: 'Diagram Momentum Sistem Orang dan Batang Kayu',
        diagramId: 'fbd-boat-log-com',
        description:
          'Momentum orang ke kanan (+m₁v₁) tepat diimbangi momentum batang kayu ke kiri (m₂v₂) karena pusat massa sistem tetap diam.',
        vectors: [
          { label: 'v₁', direction: 'Ke kanan relatif daratan', note: 'Kecepatan orang (2,8 m/s)' },
          { label: 'v₂', direction: 'Ke kiri relatif daratan', note: 'Kecepatan mundur batang kayu (-0,7 m/s)' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Kekekalan Momentum & Kecepatan Relatif',
          formula: 'm_1 v_1 + m_2 v_2 = 0, \\qquad v_1 - v_2 = v_{\\text{rel}}',
          meaning: 'Substitusi $v_2 = v_1 - v_{\\text{rel}}$ menghasilkan rumus langsung untuk $v_1$.',
        },
        {
          label: 'Kecepatan Orang Terhadap Daratan',
          formula: 'v_1 = \\frac{m_2}{m_1 + m_2} v_{\\text{rel}}',
          meaning: 'Makin besar massa kayu $m_2$, makin kecil gerak mundur kayu sehingga $v_1$ mendekati $v_{\\text{rel}}$.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi massa dan kecepatan relatif',
          detail: 'Masukkan $m_1 = 80\\text{ kg}$, $m_2 = 320\\text{ kg}$, dan $v_{\\text{rel}} = 3{,}5\\text{ m/s}$.',
          math: 'v_1 = \\frac{320}{80 + 320} \\times 3{,}5 = \\frac{320}{400} \\times 3{,}5 = 0{,}8 \\times 3{,}5 = 2{,}8\\text{ m/s}',
        },
      ],
      G_interpretasiFisika:
        'Saat orang melaju $2{,}8\\text{ m/s}$ ke kanan terhadap daratan, batang kayu terdorong mundur $0{,}7\\text{ m/s}$ ke kiri. Selisih kecepatannya tepat $2{,}8 - (-0{,}7) = 3{,}5\\text{ m/s}$.',
      H_kesalahanUmum: [
        'Menganggap $v_1 = 3{,}5\\text{ m/s}$ dan langsung menghitung $v_2 = -(80/320) \\times 3{,}5$, yang berarti mencampurkan kerangka kayu dengan kerangka daratan.',
      ],
      I_intiPembelajaran:
        'Pada masalah gerak relatif di atas perahu atau kayu yang awalnya diam, selalu tulis $v_{\\text{rel}} = v_{\\text{orang}} - v_{\\text{kayu}}$ dalam kerangka daratan sebelum menerapkan kekekalan momentum.',
    },
  },
  {
    id: 20,
    topic: 'Usaha, Energi & Momentum',
    title: 'Ketinggian Minimum pada Lintasan Lingkaran (Loop)',
    questionText:
      'Suatu lintasan licin berbentuk lingkaran dengan jari-jari $R = 3{,}0\\text{ m}$ seperti diperlihatkan pada Gambar no 20. Ketinggian minimum ($h_{\\min}$) suatu benda agar bisa melewati lintasan tersebut adalah ... $\\text{m}$.',
    unit: 'm',
    stimulusDiagramId: 'gambar-20',
    stimulusCaption: 'Gambar no 20 (Lintasan melingkar licin berjari-jari R = 3,0 m)',
    diagramSpeechNote:
      'Pada Gambar nomor 20 terdapat lintasan peluncuran setinggi h yang menurun licin dan membelok membentuk lingkaran vertikal berjari-jari R sama dengan 3 koma 0 meter.',
    answerValue: 7.5,
    answerDisplay: '7,5',
    solution: {
      A_memahamiFenomena:
        'Benda dilepaskan tanpa kecepatan awal dari ketinggian $h_{\\min}$ dan meluncur masuk ke lintasan lingkaran vertikal berjari-jari $R = 3{,}0\\text{ m}$. Agar benda tidak jatuh sebelum melewati titik puncak lingkaran (ketinggian $2R$), gaya normal di titik puncak tidak boleh bernilai negatif.',
      B_pengetahuanDasar:
        'Di titik puncak lingkaran vertikal, gaya berat $m g$ dan gaya normal $N$ sama-sama mengarah ke bawah menuju pusat lingkaran sehingga menjadi gaya sentripetal: $N + m g = \\frac{m v_{\\text{atas}}^2}{R}$. Syarat batas kritis tepat saat akan lepas kontak adalah $N = 0$.',
      C_analisisFisis:
        'Dari syarat batas $N = 0$ di puncak ($y = 2R$), diperoleh $v_{\\text{atas}}^2 = g R$. Selanjutnya gunakan kekekalan energi mekanik antara titik awal ($y = h_{\\min}, v = 0$) dan titik puncak lingkaran ($y = 2R, v = v_{\\text{atas}}$).',
      D_fbd: {
        title: 'Diagram Gaya di Titik Puncak Lintasan Lingkaran',
        diagramId: 'fbd-loop-the-loop',
        description:
          'Di titik tertinggi lintasan (ketinggian 2R), gaya berat mg dan gaya normal N mengarah ke bawah menuju pusat lingkaran. Pada kondisi minimum, N tepat nol.',
        vectors: [
          { label: 'mg', direction: 'Vertikal ke bawah (ke pusat)', note: 'Menjadi satu-satunya gaya sentripetal saat N = 0' },
          { label: 'N → 0', direction: 'Vertikal ke bawah', note: 'Syarat batas agar lintasan penuh tetap terlewati' },
        ],
      },
      E_persamaanRumus: [
        {
          label: 'Syarat Kecepatan Minimum di Puncak',
          formula: 'm g = \\frac{m v_{\\text{atas}}^2}{R} \\implies v_{\\text{atas}}^2 = g R',
          meaning: 'Kecepatan minimal di puncak agar tidak jatuh meninggalkan rel.',
        },
        {
          label: 'Kekekalan Energi Mekanik',
          formula: 'm g h_{\\min} = m g (2R) + \\frac{1}{2} m v_{\\text{atas}}^2 \\implies h_{\\min} = \\frac{5}{2} R',
          meaning: 'Ketinggian minimum selalu $2{,}5$ kali jari-jari loop pada lintasan licin.',
        },
      ],
      F_penyelesaianLangkah: [
        {
          stepTitle: 'Substitusi jari-jari lintasan R',
          detail: 'Gunakan rumus $h_{\\min} = 2{,}5 R$ dengan $R = 3{,}0\\text{ m}$.',
          math: 'h_{\\min} = \\frac{5}{2} \\times 3{,}0 = 7{,}5\\text{ m}',
        },
      ],
      G_interpretasiFisika:
        'Benda harus dilepas dari ketinggian $7{,}5\\text{ m}$, yaitu $1{,}5\\text{ m}$ lebih tinggi daripada puncak lingkaran ($6{,}0\\text{ m}$), karena sisa energi potensial $1{,}5\\text{ m}$ tersebut diperlukan sebagai energi kinetik agar benda tetap menempel di puncak.',
      H_kesalahanUmum: [
        'Menganggap $h_{\\min} = 2R = 6{,}0\\text{ m}$ dengan asumsi $v_{\\text{atas}} = 0$, padahal jika $v_{\\text{atas}} = 0$ benda sudah jatuh sebelum mencapai puncak.',
      ],
      I_intiPembelajaran:
        'Untuk melewati loop vertikal licin berjari-jari $R$, kecepatan kritis di puncak adalah $\\sqrt{gR}$ sehingga ketinggian lepas minimum selalu $\\frac{5}{2}R$.',
    },
  },
];
