import React from 'react';
import type { StimulusDiagramId } from '../types/physics';

interface StimulusDiagramProps {
  diagramId: StimulusDiagramId;
  caption?: string;
}

export const StimulusDiagram: React.FC<StimulusDiagramProps> = ({ diagramId, caption }) => {
  if (diagramId === 'none') return null;

  return (
    <figure className="my-4 rounded-xl border border-blue-200 bg-slate-50/70 p-4">
      <div className="flex justify-center overflow-x-auto">
        {renderStimulusSvg(diagramId)}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs font-medium text-slate-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

function renderStimulusSvg(id: StimulusDiagramId): React.ReactNode {
  switch (id) {
    case 'gambar-2':
      return (
        <svg viewBox="0 0 380 210" className="w-full max-w-md" role="img" aria-label="Diagram dua benda dihubungkan tali lewat katrol di puncak bidang miring 45 derajat">
          <defs>
            <marker id="arrowBlue2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#1e3a8a" />
            </marker>
          </defs>
          {/* Wedge platform */}
          <polygon points="75,65 185,65 320,180 75,180" fill="#cbd5e1" stroke="#1e293b" strokeWidth="2" />
          {/* Gravity vector on left */}
          <line x1="42" y1="68" x2="42" y2="118" stroke="#1e3a8a" strokeWidth="2" markerEnd="url(#arrowBlue2)" />
          <text x="50" y="96" fontSize="14" fontStyle="italic" fontWeight="600" fill="#1e3a8a">g</text>
          {/* Block m1 */}
          <rect x="92" y="37" width="44" height="28" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <text x="114" y="56" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#0f172a">m₁</text>
          {/* Pulley */}
          <line x1="185" y1="65" x2="195" y2="55" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="195" cy="55" r="10" fill="#e2e8f0" stroke="#1e293b" strokeWidth="2" />
          <circle cx="195" cy="55" r="2.2" fill="#1e293b" />
          {/* String */}
          <line x1="136" y1="45" x2="195" y2="45" stroke="#334155" strokeWidth="1.8" />
          <line x1="202" y1="48" x2="265" y2="102" stroke="#334155" strokeWidth="1.8" />
          {/* Block m2 rotated ~40 deg along slope */}
          <g transform="translate(268,118) rotate(40.4)">
            <rect x="-22" y="-28" width="44" height="28" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
            <text x="0" y="-10" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#0f172a">m₂</text>
          </g>
          {/* Angle arc */}
          <path d="M 285,180 A 35,35 0 0,1 294,158" fill="none" stroke="#1d4ed8" strokeWidth="1.8" />
          <text x="272" y="172" fontSize="12" fontWeight="600" fill="#1d4ed8">45°</text>
        </svg>
      );

    case 'grafik-6':
      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-md" role="img" aria-label="Grafik kecepatan terhadap waktu dengan kecepatan naik ke 54 km/jam pada menit ke-20 lalu konstan hingga menit ke-80">
          <defs>
            <marker id="axisArrow6" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#0f172a" />
            </marker>
          </defs>
          {/* Grid */}
          {[40, 80, 120, 160].map((y) => (
            <line key={y} x1="65" y1={y} x2="325" y2={y} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />
          ))}
          {[125, 185, 245, 305].map((x) => (
            <line key={x} x1={x} y1="35" x2={x} y2="170" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />
          ))}
          {/* Axes */}
          <line x1="65" y1="170" x2="342" y2="170" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#axisArrow6)" />
          <line x1="65" y1="170" x2="65" y2="25" stroke="#0f172a" strokeWidth="1.8" markerEnd="url(#axisArrow6)" />
          {/* Curve: (0,0)->(65,170), (20,54)->(125,62), (80,54)->(305,62) */}
          <polyline points="65,170 125,62 305,62" fill="none" stroke="#2563eb" strokeWidth="2.8" strokeLinejoin="round" />
          {/* Tick labels */}
          <text x="58" y="174" textAnchor="end" fontSize="11" fill="#334155">0</text>
          <text x="58" y="138" textAnchor="end" fontSize="11" fill="#334155">18</text>
          <text x="58" y="102" textAnchor="end" fontSize="11" fill="#334155">36</text>
          <text x="58" y="66" textAnchor="end" fontSize="11" fontWeight="700" fill="#1d4ed8">54</text>
          <text x="65" y="187" textAnchor="middle" fontSize="11" fill="#334155">0</text>
          <text x="125" y="187" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">20</text>
          <text x="185" y="187" textAnchor="middle" fontSize="11" fill="#334155">40</text>
          <text x="245" y="187" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">60</text>
          <text x="305" y="187" textAnchor="middle" fontSize="11" fill="#334155">80</text>
          {/* Axis labels */}
          <text x="65" y="15" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0f172a">v (km/jam)</text>
          <text x="348" y="174" fontSize="12" fontWeight="600" fill="#0f172a">t (menit)</text>
        </svg>
      );

    case 'gambar-7':
      return (
        <svg viewBox="0 0 420 155" className="w-full max-w-lg" role="img" aria-label="Garis bilangan gerak 1D dari t=0 di 2m hingga t=4s di -2m">
          <defs>
            <marker id="pathArrow7" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#1d4ed8" />
            </marker>
          </defs>
          {/* Number line x from -3 to 7: map x -> 45 + (x + 3) * 33 */}
          <line x1="25" y1="115" x2="395" y2="115" stroke="#0f172a" strokeWidth="1.8" />
          {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map((val) => {
            const cx = 45 + (val + 3) * 33;
            return (
              <g key={val}>
                <line x1={cx} y1="110" x2={cx} y2="120" stroke="#0f172a" strokeWidth="1.4" />
                <text x={cx} y="136" textAnchor="middle" fontSize="11" fontWeight="600" fill="#334155">
                  {val === 0 ? '0' : `${val}m`}
                </text>
              </g>
            );
          })}
          {/* Trajectory curve: t=0 at x=2 (210), t=1 at x=5 (309), turns at x=6 (342), t=3 at x=3 (243), t=4 at x=-2 (78) */}
          <path
            d="M 210,88 L 325,88 C 352,88 352,42 325,42 L 78,42"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="2"
            markerEnd="url(#pathArrow7)"
          />
          {/* Red points */}
          <circle cx="210" cy="88" r="4.5" fill="#ea580c" />
          <text x="210" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">t=0</text>
          <circle cx="309" cy="88" r="4.5" fill="#ea580c" />
          <text x="309" y="76" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">1s</text>
          <circle cx="345" cy="65" r="4.5" fill="#ea580c" />
          <text x="361" y="69" fontSize="11" fontWeight="700" fill="#0f172a">2s</text>
          <circle cx="243" cy="42" r="4.5" fill="#ea580c" />
          <text x="243" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">3s</text>
          <circle cx="78" cy="42" r="4.5" fill="#ea580c" />
          <text x="78" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">4s</text>
        </svg>
      );

    case 'gambar-9':
      return (
        <svg viewBox="0 0 280 210" className="w-full max-w-xs" role="img" aria-label="Ayunan kerucut dengan panjang tali a dan sudut alfa">
          {/* Pivot O */}
          <circle cx="140" cy="24" r="3.5" fill="#0f172a" />
          <text x="130" y="22" fontSize="12" fontWeight="700" fill="#0f172a">O</text>
          {/* Vertical dashed line OC */}
          <line x1="140" y1="24" x2="140" y2="185" stroke="#475569" strokeWidth="1.5" strokeDasharray="5,4" />
          {/* Horizontal ellipse */}
          <ellipse cx="140" cy="145" rx="82" ry="30" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeDasharray="4,3" />
          <circle cx="140" cy="145" r="3" fill="#0f172a" />
          <text x="128" y="149" fontSize="12" fontWeight="600" fill="#0f172a">C</text>
          {/* Dashed radius CP */}
          <line x1="140" y1="145" x2="210" y2="160" stroke="#475569" strokeWidth="1.4" strokeDasharray="4,3" />
          {/* String OP */}
          <line x1="140" y1="24" x2="210" y2="160" stroke="#0f172a" strokeWidth="2.2" />
          <text x="184" y="92" fontSize="13" fontStyle="italic" fontWeight="600" fill="#0f172a">a</text>
          {/* Angle arc */}
          <path d="M 140,60 A 36,36 0 0,0 156,56" fill="none" stroke="#ea580c" strokeWidth="1.8" />
          <text x="150" y="72" fontSize="12" fontStyle="italic" fontWeight="700" fill="#ea580c">α</text>
          {/* Mass P */}
          <circle cx="210" cy="160" r="8" fill="#ea580c" stroke="#0f172a" strokeWidth="1.8" />
          <text x="223" y="158" fontSize="12" fontWeight="700" fill="#0f172a">P</text>
          <text x="210" y="182" textAnchor="middle" fontSize="12" fontStyle="italic" fontWeight="600" fill="#0f172a">m</text>
        </svg>
      );

    case 'grafik-13': {
      // Exact trajectory y(x) = 20 + 0.75 x - (9.8 / (2 * 24^2)) x^2, x in [0, 109.6]
      const pts: string[] = [];
      for (let x = 0; x <= 110; x += 2) {
        const y = Math.max(0, 20 + 0.75 * x - (9.8 / (2 * 576)) * x * x);
        const sx = 55 + (x / 120) * 290;
        const sy = 175 - (y / 40) * 140;
        pts.push(`${sx.toFixed(1)},${sy.toFixed(1)}`);
      }
      // Exact landing x = 109.61
      const endSx = 55 + (109.61 / 120) * 290;
      pts.push(`${endSx.toFixed(1)},175.0`);

      return (
        <svg viewBox="0 0 380 220" className="w-full max-w-md" role="img" aria-label="Grafik lintasan parabola peluru dari y0 = 20 m hingga menyentuh y = 0">
          {/* Grid */}
          {[10, 20, 30, 40].map((yv) => {
            const sy = 175 - (yv / 40) * 140;
            return <line key={yv} x1="55" y1={sy} x2="345" y2={sy} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />;
          })}
          {[20, 40, 60, 80, 100, 120].map((xv) => {
            const sx = 55 + (xv / 120) * 290;
            return <line key={xv} x1={sx} y1="35" x2={sx} y2="175" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />;
          })}
          {/* Axes */}
          <line x1="55" y1="175" x2="352" y2="175" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="55" y1="175" x2="55" y2="25" stroke="#0f172a" strokeWidth="1.8" />
          {/* Curve */}
          <polyline points={pts.join(' ')} fill="none" stroke="#2563eb" strokeWidth="2.6" />
          {/* Start dot at y0 = 20 */}
          <circle cx="55" cy={175 - (20 / 40) * 140} r="4" fill="#ea580c" />
          {/* Y ticks */}
          {[0, 10, 20, 30, 40].map((yv) => {
            const sy = 175 - (yv / 40) * 140;
            return (
              <text key={yv} x="48" y={sy + 4} textAnchor="end" fontSize="10.5" fontWeight={yv === 20 ? '700' : '500'} fill={yv === 20 ? '#ea580c' : '#334155'}>
                {yv}
              </text>
            );
          })}
          {/* X ticks */}
          {[0, 20, 40, 60, 80, 100, 120].map((xv) => {
            const sx = 55 + (xv / 120) * 290;
            return (
              <text key={xv} x={sx} y="191" textAnchor="middle" fontSize="10.5" fill="#334155">
                {xv}
              </text>
            );
          })}
          <text x="18" y="105" textAnchor="middle" transform="rotate(-90 18 105)" fontSize="11.5" fontWeight="600" fill="#0f172a">y (meter)</text>
          <text x="200" y="210" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0f172a">x (meter)</text>
        </svg>
      );
    }

    case 'gambar-17':
      return (
        <svg viewBox="0 0 360 190" className="w-full max-w-sm" role="img" aria-label="Sistem tiga massa m1, m2, dan m dengan lantai licin dan gaya F">
          <defs>
            <marker id="arrowF17" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#ea580c" />
            </marker>
          </defs>
          {/* Floor */}
          <rect x="20" y="152" width="320" height="10" fill="#cbd5e1" />
          <line x1="20" y1="152" x2="340" y2="152" stroke="#0f172a" strokeWidth="2" />
          {/* Large cart m */}
          <rect x="115" y="64" width="135" height="88" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.2" />
          <text x="182" y="114" textAnchor="middle" fontSize="16" fontStyle="italic" fontWeight="700" fill="#0f172a">m</text>
          {/* Block m1 on top */}
          <rect x="135" y="28" width="52" height="36" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <text x="161" y="51" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#0f172a">m₁</text>
          {/* Pulley at top right of m */}
          <line x1="250" y1="64" x2="262" y2="52" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="262" cy="52" r="9" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
          {/* String */}
          <line x1="187" y1="43" x2="262" y2="43" stroke="#334155" strokeWidth="1.8" />
          <line x1="271" y1="52" x2="271" y2="95" stroke="#334155" strokeWidth="1.8" />
          {/* Hanging block m2 */}
          <rect x="251" y="95" width="40" height="40" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <text x="271" y="120" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#0f172a">m₂</text>
          {/* Applied Force F */}
          <line x1="56" y1="110" x2="108" y2="110" stroke="#ea580c" strokeWidth="2.6" markerEnd="url(#arrowF17)" />
          <text x="45" y="115" fontSize="15" fontStyle="italic" fontWeight="700" fill="#ea580c">F</text>
        </svg>
      );

    case 'gambar-20':
      return (
        <svg viewBox="0 0 360 190" className="w-full max-w-sm" role="img" aria-label="Lintasan licin melingkar vertikal berjari-jari R dari ketinggian h">
          <defs>
            <marker id="arrowR20" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#1d4ed8" />
            </marker>
          </defs>
          {/* Base line */}
          <line x1="30" y1="165" x2="330" y2="165" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Height indicator h */}
          <line x1="48" y1="26" x2="48" y2="165" stroke="#0f172a" strokeWidth="1.5" />
          <line x1="42" y1="26" x2="68" y2="26" stroke="#0f172a" strokeWidth="1.5" />
          <text x="34" y="100" fontSize="13" fontStyle="italic" fontWeight="700" fill="#0f172a">h</text>
          {/* Track */}
          <path
            d="M 70,26 C 95,120 135,165 215,165 A 48,48 0 1,0 167,117 A 48,48 0 0,0 215,165 L 295,165"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 70,26 C 95,120 135,165 215,165 A 48,48 0 1,0 167,117 A 48,48 0 0,0 215,165 L 295,165"
            fill="none"
            stroke="#0f172a"
            strokeWidth="1.5"
          />
          {/* Radius R */}
          <circle cx="215" cy="117" r="2.5" fill="#1d4ed8" />
          <line x1="215" y1="117" x2="249" y2="83" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrowR20)" />
          <text x="236" y="114" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">R</text>
        </svg>
      );

    case 'gambar-23':
      return (
        <svg viewBox="0 0 380 180" className="w-full max-w-md" role="img" aria-label="Bidang miring licin dari A ke B dengan tinggi 3,6 m dan bidang datar kasar BC">
          <defs>
            <marker id="arrowG23" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#1e3a8a" />
            </marker>
          </defs>
          {/* Vertical height reference */}
          <line x1="72" y1="45" x2="72" y2="145" stroke="#475569" strokeWidth="1.4" strokeDasharray="4,3" />
          <text x="52" y="100" textAnchor="end" fontSize="12" fontWeight="700" fill="#1d4ed8">3,6 m</text>
          {/* Ramp AB + Flat BC */}
          <polyline points="72,45 142,145 340,145" fill="none" stroke="#0f172a" strokeWidth="2.5" />
          {/* Rough floor hatch under BC */}
          <line x1="142" y1="149" x2="340" y2="149" stroke="#94a3b8" strokeWidth="4" strokeDasharray="4,3" />
          {/* Mass at A */}
          <circle cx="72" cy="45" r="7" fill="#ea580c" stroke="#0f172a" strokeWidth="1.5" />
          <text x="58" y="37" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
          <text x="84" y="38" fontSize="12" fontStyle="italic" fontWeight="600" fill="#0f172a">m</text>
          <text x="142" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
          <text x="340" y="166" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f172a">C</text>
          <text x="240" y="135" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#1d4ed8">μₖ = 0,30</text>
          {/* Gravity */}
          <line x1="275" y1="42" x2="275" y2="85" stroke="#1e3a8a" strokeWidth="2" markerEnd="url(#arrowG23)" />
          <text x="284" y="68" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1e3a8a">g</text>
        </svg>
      );

    case 'gambar-24':
      return (
        <svg viewBox="0 0 340 190" className="w-full max-w-sm" role="img" aria-label="Segitiga siku-siku TAB dengan sisi 3s, 4s, dan 5s">
          <defs>
            <marker id="arrowMove24" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#ea580c" />
            </marker>
          </defs>
          {/* Triangle T(75,35), A(75,155), B(265,155) */}
          <polygon points="75,35 75,155 265,155" fill="#eff6ff" stroke="#0f172a" strokeWidth="2" />
          {/* Right angle at A */}
          <polyline points="75,141 89,141 89,155" fill="none" stroke="#0f172a" strokeWidth="1.4" />
          {/* Velocity arrows toward T */}
          <line x1="75" y1="145" x2="75" y2="112" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#arrowMove24)" />
          <line x1="255" y1="149" x2="215" y2="123" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#arrowMove24)" />
          {/* Particles */}
          <circle cx="75" cy="155" r="6" fill="#1d4ed8" stroke="#0f172a" strokeWidth="1.5" />
          <circle cx="265" cy="155" r="6" fill="#64748b" stroke="#0f172a" strokeWidth="1.5" />
          {/* Labels */}
          <text x="64" y="30" fontSize="13" fontStyle="italic" fontWeight="700" fill="#0f172a">T</text>
          <text x="56" y="160" fontSize="13" fontWeight="700" fill="#0f172a">A</text>
          <text x="276" y="160" fontSize="13" fontWeight="700" fill="#0f172a">B</text>
          <text x="58" y="96" textAnchor="end" fontSize="13" fontStyle="italic" fontWeight="600" fill="#1d4ed8">3s</text>
          <text x="170" y="173" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="600" fill="#1d4ed8">4s</text>
          <text x="180" y="86" fontSize="13" fontStyle="italic" fontWeight="600" fill="#1d4ed8">5s</text>
        </svg>
      );

    case 'gambar-29':
      return (
        <svg viewBox="0 0 340 190" className="w-full max-w-sm" role="img" aria-label="Dua batang A dan B bertemu pada permukaan setengah lingkaran berjari-jari R">
          {/* Semicircle center (170, 62), R = 85 */}
          <line x1="85" y1="62" x2="255" y2="62" stroke="#475569" strokeWidth="1.5" />
          <path d="M 85,62 A 85,85 0 0,0 255,62" fill="none" stroke="#0f172a" strokeWidth="2.2" />
          <text x="170" y="54" textAnchor="middle" fontSize="12" fontStyle="italic" fontWeight="600" fill="#0f172a">2R</text>
          {/* Contact point P on semicircle for tan theta = 3/4 -> theta=36.87 deg: chord from right rim (255,62) */}
          {/* P = (170 - 85*cos(2*36.87)=170 - 85*0.28 = 146.2, 62 + 85*sin(73.74) = 62 + 81.6 = 143.6) */}
          {/* Rod B from P(146.2, 143.6) through left rim (85, 62) and extending up-left */}
          <line x1="146.2" y1="143.6" x2="40" y2="2" stroke="#1d4ed8" strokeWidth="3.2" strokeLinecap="round" />
          <text x="104" y="114" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">B</text>
          {/* Rod A from P(146.2, 143.6) through right rim (255, 62) and extending up-right */}
          <line x1="146.2" y1="143.6" x2="310" y2="21" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
          <text x="208" y="114" fontSize="13" fontStyle="italic" fontWeight="700" fill="#ea580c">A</text>
          {/* Angle theta */}
          <path d="M 225,62 A 30,30 0 0,0 231,80" fill="none" stroke="#ea580c" strokeWidth="1.6" />
          <text x="234" y="55" fontSize="12" fontStyle="italic" fontWeight="700" fill="#ea580c">θ</text>
          <circle cx="146.2" cy="143.6" r="3.5" fill="#0f172a" />
        </svg>
      );

    case 'gambar-30':
      return (
        <svg viewBox="0 0 360 190" className="w-full max-w-md" role="img" aria-label="Batang L dengan lengan 10a dan 7a ditarik ke kanan">
          <defs>
            <marker id="arrowPull30" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#ea580c" />
            </marker>
          </defs>
          {/* Horizontal reference line */}
          <line x1="60" y1="75" x2="295" y2="75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Elbow at (180, 75). theta ~ 26 deg: arm 10a up-left, arm 7a down-right */}
          <polyline points="72,28 180,75 148,149" fill="none" stroke="#1d4ed8" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          {/* Pull arrow to right */}
          <line x1="180" y1="75" x2="275" y2="75" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#arrowPull30)" />
          {/* Angle theta */}
          <path d="M 140,75 A 40,40 0 0,1 144,59" fill="none" stroke="#0f172a" strokeWidth="1.5" />
          <text x="128" y="68" fontSize="12" fontStyle="italic" fontWeight="700" fill="#0f172a">θ</text>
          {/* Labels */}
          <text x="128" y="42" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">10a</text>
          <text x="172" y="128" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">7a</text>
        </svg>
      );

    case 'gambar-31':
      return (
        <svg viewBox="0 0 280 210" className="w-full max-w-xs" role="img" aria-label="Katrol dengan dua pegas 6k dan 3k menopang batang 5m">
          {/* Ceiling */}
          <line x1="100" y1="16" x2="180" y2="16" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="140" y1="16" x2="140" y2="48" stroke="#0f172a" strokeWidth="2.2" />
          {/* Pulley */}
          <circle cx="140" cy="48" r="18" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2.2" />
          <circle cx="140" cy="48" r="3" fill="#0f172a" />
          {/* Rope down to springs */}
          <line x1="122" y1="48" x2="122" y2="85" stroke="#334155" strokeWidth="1.8" />
          <line x1="158" y1="48" x2="158" y2="85" stroke="#334155" strokeWidth="1.8" />
          {/* Left spring 6k */}
          <polyline
            points="122,85 114,91 130,97 114,103 130,109 114,115 130,121 122,127 122,145"
            fill="none"
            stroke="#1d4ed8"
            strokeWidth="2.2"
          />
          <text x="103" y="112" textAnchor="end" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">6k</text>
          {/* Right spring 3k */}
          <polyline
            points="158,85 150,91 166,97 150,103 166,109 150,115 166,121 158,127 158,145"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2.2"
          />
          <text x="176" y="112" fontSize="13" fontStyle="italic" fontWeight="700" fill="#ea580c">3k</text>
          {/* Horizontal bar 5m */}
          <rect x="85" y="145" width="110" height="16" fill="#ffffff" stroke="#0f172a" strokeWidth="2.2" />
          <text x="140" y="178" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="700" fill="#0f172a">5m</text>
        </svg>
      );

    case 'gambar-33':
      return (
        <svg viewBox="0 0 340 190" className="w-full max-w-sm" role="img" aria-label="Sistem koordinat xyz dengan batang di sumbu x negatif dan cakram di (a,0,0)">
          <defs>
            <marker id="axis33" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#0f172a" />
            </marker>
          </defs>
          {/* Axes: O at (150, 95) */}
          <line x1="150" y1="95" x2="150" y2="20" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#axis33)" />
          <text x="150" y="13" textAnchor="middle" fontSize="12" fontStyle="italic" fontWeight="700" fill="#0f172a">y</text>
          <line x1="40" y1="95" x2="295" y2="95" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#axis33)" />
          <text x="304" y="99" fontSize="12" fontStyle="italic" fontWeight="700" fill="#0f172a">x</text>
          <line x1="150" y1="95" x2="88" y2="155" stroke="#0f172a" strokeWidth="1.6" markerEnd="url(#axis33)" />
          <text x="77" y="162" fontSize="12" fontStyle="italic" fontWeight="700" fill="#0f172a">z</text>
          {/* Disc centered at (190, 95) radius 40 */}
          <ellipse cx="190" cy="95" rx="40" ry="34" fill="#cbd5e1" fillOpacity="0.85" stroke="#0f172a" strokeWidth="2" />
          <text x="190" y="99" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="700" fill="#0f172a">m</text>
          {/* Rod along -x from (70, 95) to O (150, 95) */}
          <line x1="70" y1="95" x2="150" y2="95" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
          <text x="110" y="83" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">m</text>
          <text x="70" y="112" textAnchor="middle" fontSize="11" fill="#475569">(-2a,0,0)</text>
          <text x="142" y="111" fontSize="11" fontWeight="700" fill="#0f172a">O</text>
        </svg>
      );

    case 'gambar-35':
      return (
        <svg viewBox="0 0 360 165" className="w-full max-w-md" role="img" aria-label="Tiga kotak berderet 2,20 kg, 3,80 kg, dan 6,00 kg didorong gaya 18,0 N">
          <defs>
            <marker id="arrowF35" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#ea580c" />
            </marker>
          </defs>
          {/* Floor */}
          <rect x="30" y="128" width="300" height="8" fill="#cbd5e1" />
          <line x1="30" y1="128" x2="330" y2="128" stroke="#0f172a" strokeWidth="2" />
          {/* Box 1 */}
          <rect x="110" y="82" width="54" height="46" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <text x="137" y="75" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">1</text>
          <text x="137" y="109" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#1d4ed8">2,20 kg</text>
          {/* Box 2 */}
          <rect x="164" y="42" width="76" height="86" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <text x="202" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">2</text>
          <text x="202" y="89" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1d4ed8">3,80 kg</text>
          {/* Box 3 */}
          <rect x="240" y="64" width="66" height="64" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
          <text x="273" y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">3</text>
          <text x="273" y="100" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1d4ed8">6,00 kg</text>
          {/* Push force */}
          <line x1="68" y1="105" x2="104" y2="105" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#arrowF35)" />
          <text x="64" y="109" textAnchor="end" fontSize="12.5" fontWeight="700" fill="#ea580c">18,0 N</text>
        </svg>
      );

    case 'gambar-36':
      return (
        <svg viewBox="0 0 300 185" className="w-full max-w-xs" role="img" aria-label="Tongkat panjang L bersandar di dinding vertikal licin dan lantai licin dengan sudut 60 derajat">
          {/* Wall & Floor */}
          <rect x="48" y="20" width="16" height="140" fill="#e2e8f0" />
          <polyline points="64,20 64,160 250,160" fill="none" stroke="#0f172a" strokeWidth="2.2" />
          {/* Rod at ~60 deg: bottom (140, 160), top (64, 28) -> dx=76, dy=132 -> atan2=60 deg! */}
          <line x1="64" y1="28" x2="140" y2="160" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
          {/* Angle arc at (140, 160) */}
          <path d="M 110,160 A 30,30 0 0,1 125,134" fill="none" stroke="#ea580c" strokeWidth="1.8" />
          <text x="98" y="150" fontSize="12" fontStyle="italic" fontWeight="700" fill="#ea580c">θ₀ = 60°</text>
          <text x="114" y="88" fontSize="13" fontStyle="italic" fontWeight="700" fill="#1d4ed8">L</text>
        </svg>
      );

    case 'gambar-37':
      return (
        <svg viewBox="0 0 340 140" className="w-full max-w-sm" role="img" aria-label="Partikel m1 di dalam kotak licin berongga m2 dengan kecepatan awal ke kanan">
          <defs>
            <marker id="arrowV37" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#ea580c" />
            </marker>
          </defs>
          {/* Floor */}
          <line x1="30" y1="102" x2="310" y2="102" stroke="#0f172a" strokeWidth="2.2" />
          {/* Hollow box m2 */}
          <rect x="75" y="42" width="185" height="58" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2.5" />
          <rect x="81" y="48" width="173" height="46" fill="#e2e8f0" />
          {/* Particle m1 on left */}
          <circle cx="99" cy="71" r="17" fill="#475569" stroke="#0f172a" strokeWidth="2" />
          <text x="99" y="75" textAnchor="middle" fontSize="12" fontStyle="italic" fontWeight="700" fill="#ffffff">m₁</text>
          {/* Velocity arrow */}
          <line x1="118" y1="71" x2="162" y2="71" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#arrowV37)" />
          <text x="206" y="75" textAnchor="middle" fontSize="13" fontStyle="italic" fontWeight="700" fill="#0f172a">m₂</text>
        </svg>
      );

    default:
      return null;
  }
}
