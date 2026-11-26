import React from 'react';
import type { FbdDiagramId } from '../types/physics';

interface FbdDiagramProps {
  diagramId: FbdDiagramId;
  title: string;
}

/**
 * Renders scientifically accurate Free Body Diagrams (FBD) and physics vector diagrams
 * for Section D of the systematic solution.
 */
export const FbdDiagram: React.FC<FbdDiagramProps> = ({ diagramId, title }) => {
  return (
    <div className="rounded-xl border border-blue-200 bg-white p-4">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
        {title}
      </div>
      <div className="flex justify-center overflow-x-auto">
        <svg
          viewBox="0 0 360 195"
          className="w-full max-w-sm"
          role="img"
          aria-label={title}
        >
          <defs>
            <marker id="fbdArrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#1d4ed8" />
            </marker>
            <marker id="fbdArrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#ea580c" />
            </marker>
            <marker id="fbdArrowSlate" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#334155" />
            </marker>
            <marker id="fbdArrowEmerald" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#059669" />
            </marker>
          </defs>
          {renderFbdScene(diagramId)}
        </svg>
      </div>
    </div>
  );
};

function renderFbdScene(id: FbdDiagramId): React.ReactNode {
  switch (id) {
    case 'fbd-flat-hill':
    case 'fbd-horizontal-push':
    case 'fbd-static-friction':
    case 'fbd-train-braking': {
      const hasRight = id === 'fbd-horizontal-push' || id === 'fbd-static-friction';
      const hasLeft = id === 'fbd-static-friction' || id === 'fbd-train-braking';
      const rightLabel = id === 'fbd-horizontal-push' ? 'F = 180 N' : 'F = 185 N';
      const leftLabel = id === 'fbd-static-friction' ? 'fₛ = 185 N' : 'F_rem';
      return (
        <g>
          <line x1="40" y1="125" x2="320" y2="125" stroke="#94a3b8" strokeWidth="2" />
          <rect x="145" y="75" width="70" height="50" rx="4" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <circle cx="180" cy="100" r="3" fill="#0f172a" />
          {/* Normal N */}
          <line x1="180" y1="100" x2="180" y2="30" stroke="#1d4ed8" strokeWidth="2.4" markerEnd="url(#fbdArrowBlue)" />
          <text x="190" y="40" fontSize="12" fontWeight="700" fill="#1d4ed8">N</text>
          {/* Weight mg */}
          <line x1="180" y1="100" x2="180" y2="175" stroke="#334155" strokeWidth="2.4" markerEnd="url(#fbdArrowSlate)" />
          <text x="190" y="170" fontSize="12" fontWeight="700" fill="#334155">w = mg</text>
          {hasRight && (
            <>
              <line x1="180" y1="100" x2="285" y2="100" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#fbdArrowOrange)" />
              <text x="275" y="90" fontSize="12" fontWeight="700" fill="#ea580c">{rightLabel}</text>
            </>
          )}
          {hasLeft && (
            <>
              <line x1="180" y1="100" x2="75" y2="100" stroke="#059669" strokeWidth="2.4" markerEnd="url(#fbdArrowEmerald)" />
              <text x="65" y="90" fontSize="12" fontWeight="700" fill="#059669">{leftLabel}</text>
            </>
          )}
        </g>
      );
    }

    case 'fbd-two-block-incline':
      return (
        <g>
          {/* Left FBD m1 */}
          <rect x="45" y="72" width="54" height="36" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="72" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">m₁</text>
          <line x1="72" y1="90" x2="72" y2="32" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#fbdArrowBlue)" />
          <text x="78" y="38" fontSize="11" fontWeight="700" fill="#1d4ed8">N₁</text>
          <line x1="72" y1="90" x2="72" y2="152" stroke="#334155" strokeWidth="2" markerEnd="url(#fbdArrowSlate)" />
          <text x="78" y="152" fontSize="11" fontWeight="700" fill="#334155">m₁g</text>
          <line x1="72" y1="90" x2="18" y2="90" stroke="#ea580c" strokeWidth="2.2" markerEnd="url(#fbdArrowOrange)" />
          <text x="15" y="80" fontSize="11" fontWeight="700" fill="#ea580c">F</text>
          <line x1="72" y1="90" x2="128" y2="90" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="122" y="80" fontSize="11" fontWeight="700" fill="#059669">T</text>
          {/* Divider */}
          <line x1="165" y1="20" x2="165" y2="175" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Right FBD m2 on 45 deg incline */}
          <g transform="translate(260,100)">
            <line x1="-60" y1="60" x2="60" y2="-60" stroke="#cbd5e1" strokeWidth="2" transform="rotate(90)" />
            <g transform="rotate(45)">
              <rect x="-24" y="-18" width="48" height="36" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
              <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">m₂</text>
              <line x1="0" y1="0" x2="0" y2="-60" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#fbdArrowBlue)" />
              <text x="8" y="-50" fontSize="11" fontWeight="700" fill="#1d4ed8">N₂</text>
              <line x1="0" y1="0" x2="-60" y2="0" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
              <text x="-58" y="-10" fontSize="11" fontWeight="700" fill="#059669">T</text>
            </g>
            <line x1="0" y1="0" x2="0" y2="66" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
            <text x="8" y="66" fontSize="11" fontWeight="700" fill="#334155">m₂g</text>
          </g>
        </g>
      );

    case 'fbd-atwood':
      return (
        <g>
          {/* m1 */}
          <rect x="75" y="75" width="52" height="44" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="101" y="102" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">13 kg</text>
          <line x1="101" y1="75" x2="101" y2="28" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="110" y="38" fontSize="12" fontWeight="700" fill="#059669">T</text>
          <line x1="101" y1="119" x2="101" y2="178" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#fbdArrowOrange)" />
          <text x="110" y="172" fontSize="12" fontWeight="700" fill="#ea580c">m₁g</text>
          {/* m2 */}
          <rect x="230" y="75" width="52" height="44" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="256" y="102" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">7 kg</text>
          <line x1="256" y1="75" x2="256" y2="20" stroke="#059669" strokeWidth="2.4" markerEnd="url(#fbdArrowEmerald)" />
          <text x="265" y="30" fontSize="12" fontWeight="700" fill="#059669">T</text>
          <line x1="256" y1="119" x2="256" y2="162" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
          <text x="265" y="160" fontSize="12" fontWeight="700" fill="#334155">m₂g</text>
        </g>
      );

    case 'fbd-push-incline':
    case 'fbd-rolling-sphere':
    case 'fbd-brick-up-down': {
      const isPush = id === 'fbd-push-incline';
      const isSphere = id === 'fbd-rolling-sphere';
      return (
        <g transform="translate(180,105)">
          <line x1="-110" y1="55" x2="110" y2="-55" stroke="#94a3b8" strokeWidth="2" />
          <g transform="rotate(-26.5)">
            {isSphere ? (
              <circle cx="0" cy="-22" r="22" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
            ) : (
              <rect x="-26" y="-36" width="52" height="36" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
            )}
            {/* Normal N */}
            <line x1="0" y1="-18" x2="0" y2="-82" stroke="#1d4ed8" strokeWidth="2.3" markerEnd="url(#fbdArrowBlue)" />
            <text x="8" y="-74" fontSize="12" fontWeight="700" fill="#1d4ed8">N</text>
            {/* Friction */}
            {isPush ? (
              <>
                <line x1="0" y1="-18" x2="72" y2="-18" stroke="#ea580c" strokeWidth="2.3" markerEnd="url(#fbdArrowOrange)" />
                <text x="62" y="-26" fontSize="11.5" fontWeight="700" fill="#ea580c">F</text>
                <line x1="0" y1="-18" x2="-58" y2="-18" stroke="#059669" strokeWidth="2" markerEnd="url(#fbdArrowEmerald)" />
                <text x="-66" y="-26" fontSize="11.5" fontWeight="700" fill="#059669">fₖ</text>
              </>
            ) : (
              <>
                <line x1="0" y1="-6" x2="58" y2="-6" stroke="#059669" strokeWidth="2" markerEnd="url(#fbdArrowEmerald)" />
                <text x="58" y="-14" fontSize="11.5" fontWeight="700" fill="#059669">f</text>
              </>
            )}
          </g>
          {/* Weight straight down */}
          <line x1="0" y1="-16" x2="0" y2="62" stroke="#334155" strokeWidth="2.3" markerEnd="url(#fbdArrowSlate)" />
          <text x="8" y="60" fontSize="12" fontWeight="700" fill="#334155">mg</text>
        </g>
      );
    }

    case 'fbd-elevator':
    case 'fbd-landing-impulse':
    case 'fbd-elevator-ladder':
    case 'fbd-sand-bucket':
    case 'fbd-viscous-dive': {
      const upLabel =
        id === 'fbd-viscous-dive'
          ? 'F_apung + bv²'
          : id === 'fbd-sand-bucket'
          ? 'N = 20,0 N'
          : 'N';
      const downLabel = id === 'fbd-sand-bucket' ? 'M_tot g + v(dm/dt)' : 'mg';
      return (
        <g>
          <rect x="150" y="75" width="60" height="46" rx="6" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <circle cx="180" cy="98" r="3" fill="#0f172a" />
          <line x1="180" y1="98" x2="180" y2="22" stroke="#ea580c" strokeWidth="2.6" markerEnd="url(#fbdArrowOrange)" />
          <text x="190" y="34" fontSize="12" fontWeight="700" fill="#ea580c">{upLabel}</text>
          <line x1="180" y1="98" x2="180" y2="174" stroke="#1d4ed8" strokeWidth="2.3" markerEnd="url(#fbdArrowBlue)" />
          <text x="190" y="168" fontSize="12" fontWeight="700" fill="#1d4ed8">{downLabel}</text>
          {id !== 'fbd-sand-bucket' && (
            <text x="65" y="102" fontSize="11.5" fontWeight="600" fill="#059669">
              {id === 'fbd-viscous-dive' ? 'a_neto ke atas' : 'a ke atas'}
            </text>
          )}
        </g>
      );
    }

    case 'fbd-conical-pendulum':
      return (
        <g>
          <line x1="180" y1="20" x2="180" y2="170" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
          <line x1="85" y1="105" x2="275" y2="105" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,3" />
          <circle cx="180" cy="105" r="10" fill="#ea580c" stroke="#0f172a" strokeWidth="1.8" />
          {/* Tension T */}
          <line x1="180" y1="105" x2="120" y2="25" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#fbdArrowBlue)" />
          <text x="108" y="38" fontSize="12" fontWeight="700" fill="#1d4ed8">T</text>
          {/* Components */}
          <line x1="180" y1="105" x2="180" y2="32" stroke="#059669" strokeWidth="1.8" strokeDasharray="3,2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="188" y="42" fontSize="11" fontWeight="700" fill="#059669">T cos α</text>
          <line x1="180" y1="105" x2="112" y2="105" stroke="#ea580c" strokeWidth="1.8" strokeDasharray="3,2" markerEnd="url(#fbdArrowOrange)" />
          <text x="100" y="122" fontSize="11" fontWeight="700" fill="#ea580c">T sin α</text>
          {/* Weight */}
          <line x1="180" y1="105" x2="180" y2="176" stroke="#334155" strokeWidth="2.3" markerEnd="url(#fbdArrowSlate)" />
          <text x="188" y="172" fontSize="12" fontWeight="700" fill="#334155">mg</text>
        </g>
      );

    case 'fbd-loop-the-loop':
      return (
        <g>
          <circle cx="180" cy="100" r="64" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,3" />
          <circle cx="180" cy="36" r="10" fill="#ea580c" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="175" y1="36" x2="175" y2="96" stroke="#1d4ed8" strokeWidth="2.4" markerEnd="url(#fbdArrowBlue)" />
          <text x="148" y="88" fontSize="12" fontWeight="700" fill="#1d4ed8">mg</text>
          <line x1="185" y1="36" x2="185" y2="75" stroke="#059669" strokeWidth="2" strokeDasharray="3,2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="192" y="72" fontSize="11.5" fontWeight="700" fill="#059669">N → 0</text>
        </g>
      );

    case 'fbd-rotating-disc':
      return (
        <g>
          <ellipse cx="180" cy="128" rx="125" ry="28" fill="#f1f5f9" stroke="#1e293b" strokeWidth="2" />
          <line x1="180" y1="30" x2="180" y2="165" stroke="#94a3b8" strokeWidth="1.6" strokeDasharray="4,3" />
          <rect x="240" y="96" width="32" height="28" rx="3" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <line x1="256" y1="110" x2="256" y2="55" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#fbdArrowBlue)" />
          <text x="264" y="65" fontSize="11.5" fontWeight="700" fill="#1d4ed8">N</text>
          <line x1="256" y1="110" x2="256" y2="165" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
          <text x="264" y="165" fontSize="11.5" fontWeight="700" fill="#334155">mg</text>
          <line x1="256" y1="110" x2="194" y2="110" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#fbdArrowOrange)" />
          <text x="200" y="102" fontSize="11.5" fontWeight="700" fill="#ea580c">fₛ = mω²R</text>
        </g>
      );

    case 'fbd-explosion-3way':
      return (
        <g>
          <circle cx="180" cy="98" r="5" fill="#0f172a" />
          <line x1="180" y1="98" x2="90" y2="98" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#fbdArrowOrange)" />
          <text x="72" y="92" fontSize="12" fontWeight="700" fill="#ea580c">p₁ (6 kg)</text>
          <line x1="180" y1="98" x2="225" y2="25" stroke="#1d4ed8" strokeWidth="2.3" markerEnd="url(#fbdArrowBlue)" />
          <text x="232" y="34" fontSize="12" fontWeight="700" fill="#1d4ed8">p₂ (3 kg)</text>
          <line x1="180" y1="98" x2="225" y2="171" stroke="#059669" strokeWidth="2.3" markerEnd="url(#fbdArrowEmerald)" />
          <text x="232" y="168" fontSize="12" fontWeight="700" fill="#059669">p₃ (3 kg)</text>
          <path d="M 200,66 A 36,36 0 0,1 200,130" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <text x="218" y="102" fontSize="11.5" fontWeight="700" fill="#475569">120°</text>
        </g>
      );

    case 'fbd-three-block-cart':
      return (
        <g>
          {/* FBD m2 on left */}
          <rect x="55" y="75" width="44" height="44" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="77" y="102" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">m₂</text>
          <line x1="77" y1="75" x2="77" y2="25" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="84" y="36" fontSize="11.5" fontWeight="700" fill="#059669">T</text>
          <line x1="77" y1="119" x2="77" y2="168" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
          <text x="84" y="166" fontSize="11.5" fontWeight="700" fill="#334155">m₂g</text>
          <line x1="99" y1="97" x2="148" y2="97" stroke="#ea580c" strokeWidth="2.2" markerEnd="url(#fbdArrowOrange)" />
          <text x="115" y="88" fontSize="11.5" fontWeight="700" fill="#ea580c">N₂ = m₂a</text>
          {/* FBD m1 on right */}
          <rect x="225" y="75" width="48" height="44" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="249" y="102" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">m₁</text>
          <line x1="273" y1="97" x2="325" y2="97" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="285" y="88" fontSize="11.5" fontWeight="700" fill="#059669">T = m₁a</text>
          <line x1="249" y1="75" x2="249" y2="28" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#fbdArrowBlue)" />
          <text x="256" y="38" fontSize="11" fontWeight="700" fill="#1d4ed8">N₁</text>
          <line x1="249" y1="119" x2="249" y2="166" stroke="#334155" strokeWidth="2" markerEnd="url(#fbdArrowSlate)" />
          <text x="256" y="164" fontSize="11" fontWeight="700" fill="#334155">m₁g</text>
        </g>
      );

    case 'fbd-sliding-ladder':
      return (
        <g>
          <polyline points="80,22 80,158 280,158" fill="none" stroke="#94a3b8" strokeWidth="2" />
          <line x1="80" y1="36" x2="180" y2="158" stroke="#1e293b" strokeWidth="4.5" strokeLinecap="round" />
          {/* N_wall */}
          <line x1="80" y1="36" x2="132" y2="36" stroke="#ea580c" strokeWidth="2.2" markerEnd="url(#fbdArrowOrange)" />
          <text x="136" y="40" fontSize="11.5" fontWeight="700" fill="#ea580c">N_d → 0</text>
          {/* N_floor */}
          <line x1="180" y1="158" x2="180" y2="104" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#fbdArrowBlue)" />
          <text x="188" y="114" fontSize="11.5" fontWeight="700" fill="#1d4ed8">N_L</text>
          {/* Mg at midpoint (130, 97) */}
          <circle cx="130" cy="97" r="3.5" fill="#0f172a" />
          <line x1="130" y1="97" x2="130" y2="152" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
          <text x="110" y="148" fontSize="11.5" fontWeight="700" fill="#334155">Mg</text>
        </g>
      );

    case 'fbd-three-boxes-contact':
      return (
        <g>
          <line x1="60" y1="130" x2="300" y2="130" stroke="#94a3b8" strokeWidth="2" />
          <rect x="150" y="75" width="65" height="55" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="182" y="107" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">Kotak 3</text>
          <line x1="92" y1="102" x2="146" y2="102" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#fbdArrowOrange)" />
          <text x="86" y="96" textAnchor="end" fontSize="11.5" fontWeight="700" fill="#ea580c">F₂₃ = 9,0 N</text>
          <line x1="182" y1="75" x2="182" y2="25" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#fbdArrowBlue)" />
          <text x="190" y="36" fontSize="11.5" fontWeight="700" fill="#1d4ed8">N₃</text>
          <line x1="182" y1="130" x2="182" y2="176" stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdArrowSlate)" />
          <text x="190" y="174" fontSize="11.5" fontWeight="700" fill="#334155">m₃g</text>
        </g>
      );

    case 'fbd-L-rod-friction':
      return (
        <g>
          <polyline points="85,35 180,82 150,152" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinejoin="round" />
          <line x1="180" y1="82" x2="265" y2="82" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#fbdArrowOrange)" />
          <text x="272" y="86" fontSize="12" fontWeight="700" fill="#ea580c">T</text>
          <line x1="132" y1="58" x2="65" y2="58" stroke="#1d4ed8" strokeWidth="2.2" markerEnd="url(#fbdArrowBlue)" />
          <text x="48" y="62" fontSize="11.5" fontWeight="700" fill="#1d4ed8">f₁</text>
          <line x1="165" y1="117" x2="105" y2="117" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="88" y="121" fontSize="11.5" fontWeight="700" fill="#059669">f₂</text>
          <text x="188" y="72" fontSize="11" fontWeight="700" fill="#0f172a">O</text>
        </g>
      );

    case 'fbd-pulley-two-springs':
      return (
        <g>
          <rect x="95" y="105" width="170" height="22" fill="#eff6ff" stroke="#1e293b" strokeWidth="2" />
          <text x="180" y="120" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0f172a">Batang 5m</text>
          <line x1="125" y1="105" x2="125" y2="42" stroke="#1d4ed8" strokeWidth="2.4" markerEnd="url(#fbdArrowBlue)" />
          <text x="132" y="52" fontSize="11.5" fontWeight="700" fill="#1d4ed8">T = 6k Δy₁</text>
          <line x1="235" y1="105" x2="235" y2="42" stroke="#ea580c" strokeWidth="2.4" markerEnd="url(#fbdArrowOrange)" />
          <text x="242" y="52" fontSize="11.5" fontWeight="700" fill="#ea580c">T = 3k Δy₂</text>
          <line x1="180" y1="127" x2="180" y2="178" stroke="#334155" strokeWidth="2.4" markerEnd="url(#fbdArrowSlate)" />
          <text x="188" y="174" fontSize="11.5" fontWeight="700" fill="#334155">5mg</text>
        </g>
      );

    case 'fbd-projectile-cliff':
    case 'fbd-soccer-goal':
    case 'fbd-vertical-throw':
    case 'fbd-diving-freefall':
    case 'fbd-two-bullets':
      return (
        <g>
          <circle cx="180" cy="88" r="11" fill="#ea580c" stroke="#0f172a" strokeWidth="2" />
          <line x1="180" y1="88" x2="180" y2="162" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#fbdArrowBlue)" />
          <text x="190" y="156" fontSize="12" fontWeight="700" fill="#1d4ed8">w = mg</text>
          <line x1="180" y1="88" x2="245" y2="45" stroke="#059669" strokeWidth="2.2" strokeDasharray="4,2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="250" y="48" fontSize="11.5" fontWeight="700" fill="#059669">v (arah gerak)</text>
          <text x="180" y="182" textAnchor="middle" fontSize="11" fill="#475569">Hambatan udara diabaikan: hanya gaya berat</text>
        </g>
      );

    default:
      // Clean schematic physics vector diagram for kinematics/energy/geometry problems
      return (
        <g>
          <line x1="45" y1="145" x2="315" y2="145" stroke="#cbd5e1" strokeWidth="1.8" />
          <line x1="75" y1="165" x2="75" y2="25" stroke="#cbd5e1" strokeWidth="1.8" />
          <circle cx="155" cy="95" r="9" fill="#1d4ed8" stroke="#0f172a" strokeWidth="1.8" />
          <line x1="155" y1="95" x2="265" y2="95" stroke="#ea580c" strokeWidth="2.5" markerEnd="url(#fbdArrowOrange)" />
          <text x="225" y="84" fontSize="12" fontWeight="700" fill="#ea580c">Vektor Utama</text>
          <line x1="155" y1="95" x2="155" y2="35" stroke="#059669" strokeWidth="2.2" markerEnd="url(#fbdArrowEmerald)" />
          <text x="165" y="45" fontSize="12" fontWeight="700" fill="#059669">Komponen Tegak Lurus</text>
          <text x="195" y="172" textAnchor="middle" fontSize="11" fill="#475569">Kerangka acuan analisis vektor &amp; energi</text>
        </g>
      );
  }
}
