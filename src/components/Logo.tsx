import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md'
}) => {
  // Size variables
  const dimensions = {
    sm: { width: 140, height: 42, circleSize: 28, fontSize: 16, subSize: 8, letterSpacing: '0.45em' },
    md: { width: 220, height: 68, circleSize: 44, fontSize: 24, subSize: 11, letterSpacing: '0.46em' },
    lg: { width: 320, height: 98, circleSize: 64, fontSize: 36, subSize: 15, letterSpacing: '0.48em' },
    xl: { width: 440, height: 135, circleSize: 88, fontSize: 50, subSize: 20, letterSpacing: '0.5em' }
  };

  const d = dimensions[size];

  // Calculations for layout
  // 4 circles, spacing between them
  const gap = d.circleSize * 0.18;
  const startX = d.circleSize / 2;
  const cy = d.circleSize / 2 + 2;

  // Colors
  const navy = '#17106B';
  const purple = '#5D12B8';
  const lavender = '#A582D9';
  const royal = '#2816C8';

  return (
    <div id="cmac-logo" className={`flex flex-col items-center select-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${d.width} ${showSubtitle ? d.height : d.circleSize + 4}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full"
      >
        {/* Circle 1: C - Navy */}
        <g id="circle-c1">
          <circle cx={startX} cy={cy} r={d.circleSize / 2} fill={navy} />
          <text
            x={startX}
            y={cy + d.fontSize * 0.35}
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize={d.fontSize}
            textAnchor="middle"
          >
            C
          </text>
        </g>

        {/* Circle 2: M - Purple */}
        <g id="circle-m">
          <circle cx={startX + d.circleSize + gap} cy={cy} r={d.circleSize / 2} fill={purple} />
          <text
            x={startX + d.circleSize + gap}
            y={cy + d.fontSize * 0.35}
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize={d.fontSize}
            textAnchor="middle"
          >
            M
          </text>
        </g>

        {/* Circle 3: A - Lavender with stylized Pencil Tip */}
        <g id="circle-a">
          <circle cx={startX + (d.circleSize + gap) * 2} cy={cy} r={d.circleSize / 2} fill={lavender} />
          
          {/* Main A Character Shape */}
          <path
            d={`
              M ${startX + (d.circleSize + gap) * 2} ${cy - d.circleSize * 0.38}
              L ${startX + (d.circleSize + gap) * 2 + d.circleSize * 0.26} ${cy + d.circleSize * 0.36}
              L ${startX + (d.circleSize + gap) * 2 + d.circleSize * 0.12} ${cy + d.circleSize * 0.36}
              L ${startX + (d.circleSize + gap) * 2 + d.circleSize * 0.05} ${cy + d.circleSize * 0.12}
              L ${startX + (d.circleSize + gap) * 2 - d.circleSize * 0.05} ${cy + d.circleSize * 0.12}
              L ${startX + (d.circleSize + gap) * 2 - d.circleSize * 0.12} ${cy + d.circleSize * 0.36}
              L ${startX + (d.circleSize + gap) * 2 - d.circleSize * 0.26} ${cy + d.circleSize * 0.36}
              Z
            `}
            fill="#FFFFFF"
          />
          {/* Inside triangle of A */}
          <polygon
            points={`
              ${startX + (d.circleSize + gap) * 2},${cy - d.circleSize * 0.15}
              ${startX + (d.circleSize + gap) * 2 - d.circleSize * 0.08},${cy + d.circleSize * 0.04}
              ${startX + (d.circleSize + gap) * 2 + d.circleSize * 0.08},${cy + d.circleSize * 0.04}
            `}
            fill={lavender}
          />
          
          {/* Stylized pencil tip/comb stripes in the center base of A */}
          <g transform={`translate(${startX + (d.circleSize + gap) * 2 - d.circleSize * 0.10}, ${cy + d.circleSize * 0.12})`}>
            {/* Outline shape */}
            <path
              d={`M 0,0 L ${d.circleSize * 0.20},0 L ${d.circleSize * 0.17},${d.circleSize * 0.24} L ${d.circleSize * 0.03},${d.circleSize * 0.24} Z`}
              fill={navy}
            />
            {/* Fine white lines inside representing the pencil design details */}
            <line x1={d.circleSize * 0.04} y1="0" x2={d.circleSize * 0.04} y2={d.circleSize * 0.24} stroke="#FFFFFF" strokeWidth={d.circleSize * 0.02} />
            <line x1={d.circleSize * 0.08} y1="0" x2={d.circleSize * 0.08} y2={d.circleSize * 0.24} stroke="#FFFFFF" strokeWidth={d.circleSize * 0.02} />
            <line x1={d.circleSize * 0.12} y1="0" x2={d.circleSize * 0.12} y2={d.circleSize * 0.24} stroke="#FFFFFF" strokeWidth={d.circleSize * 0.02} />
            <line x1={d.circleSize * 0.16} y1="0" x2={d.circleSize * 0.16} y2={d.circleSize * 0.24} stroke="#FFFFFF" strokeWidth={d.circleSize * 0.02} />
          </g>
        </g>

        {/* Circle 4: C - Royal Blue */}
        <g id="circle-c2">
          <circle cx={startX + (d.circleSize + gap) * 3} cy={cy} r={d.circleSize / 2} fill={royal} />
          <text
            x={startX + (d.circleSize + gap) * 3}
            y={cy + d.fontSize * 0.35}
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize={d.fontSize}
            textAnchor="middle"
          >
            C
          </text>
        </g>

        {/* Subtitle: DESIGNS */}
        {showSubtitle && (
          <text
            x={d.width / 2}
            y={d.circleSize + d.subSize * 1.6}
            fill={navy}
            fontFamily="'Poppins', sans-serif"
            fontWeight="500"
            fontSize={d.subSize}
            letterSpacing={d.letterSpacing}
            textAnchor="middle"
          >
            DESIGNS
          </text>
        )}
      </svg>
    </div>
  );
};
