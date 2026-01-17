/**
 * NorthIndianChart Component - Phase 2: Indian Visual Identity
 * 
 * Renders an SVG representation of a North Indian style Lagna chart.
 * The chart is a square divided into 12 triangular houses.
 * 
 * Layout (North Indian):
 * House numbers are fixed, Lagna (1st house) is always at top-center.
 * 
 *       ╔═══╦═══╦═══╗
 *       ║12 ║ 1 ║ 2 ║
 *       ╠═══╬═══╬═══╣
 *       ║11 ║   ║ 3 ║
 *       ╠═══╬═══╬═══╣
 *       ║10 ║ 7 ║ 4 ║
 *       ╠═══╬═══╬═══╣
 *       ║ 9 ║ 8 ║ 5 ║
 *       ╚═══╩═══╩═══╝
 *             ║ 6 ║
 */

import { cn } from "@/lib/utils";

interface Planet {
  house: number;
  label: string; // Short label: Su, Mo, Ma, Me, Ju, Ve, Sa, Ra, Ke
  isRetrograde?: boolean;
}

interface NorthIndianChartProps {
  planets?: Planet[];
  className?: string;
  size?: number;
  showHouseNumbers?: boolean;
  title?: string;
}

// Planet abbreviations mapping
const PLANET_COLORS: Record<string, string> = {
  Su: "#D4AF37", // Sun - Gold
  Mo: "#C0C0C0", // Moon - Silver
  Ma: "#FF6B6B", // Mars - Red
  Me: "#4ECDC4", // Mercury - Teal
  Ju: "#FFD93D", // Jupiter - Yellow
  Ve: "#FF69B4", // Venus - Pink
  Sa: "#6C5CE7", // Saturn - Purple
  Ra: "#2C3E50", // Rahu - Dark
  Ke: "#95A5A6", // Ketu - Gray
  As: "#D4AF37", // Ascendant - Gold
};

// House positions in the North Indian chart grid
// Center of each triangular section for placing planets
const HOUSE_POSITIONS: Record<number, { x: number; y: number }> = {
  1: { x: 150, y: 45 },    // Top center
  2: { x: 255, y: 45 },    // Top right
  3: { x: 255, y: 120 },   // Right upper
  4: { x: 255, y: 195 },   // Right middle
  5: { x: 255, y: 270 },   // Bottom right
  6: { x: 150, y: 270 },   // Bottom center
  7: { x: 45, y: 270 },    // Bottom left
  8: { x: 45, y: 195 },    // Left middle
  9: { x: 45, y: 120 },    // Left upper
  10: { x: 45, y: 45 },    // Top left
  11: { x: 120, y: 120 },  // Inner left
  12: { x: 180, y: 120 },  // Inner right
};

const NorthIndianChart = ({
  planets = [],
  className,
  size = 300,
  showHouseNumbers = true,
  title = "Lagna Chart",
}: NorthIndianChartProps) => {
  // Group planets by house
  const planetsByHouse: Record<number, Planet[]> = {};
  planets.forEach((planet) => {
    if (!planetsByHouse[planet.house]) {
      planetsByHouse[planet.house] = [];
    }
    planetsByHouse[planet.house].push(planet);
  });

  // Calculate viewBox based on size
  const viewBoxSize = 300;
  const scale = size / viewBoxSize;

  return (
    <div className={cn("north-indian-chart", className)}>
      {title && (
        <h3 className="text-center text-lg font-semibold text-foreground mb-3">
          {title}
        </h3>
      )}
      
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="mx-auto"
        role="img"
        aria-label="North Indian Astrological Chart"
      >
        {/* Background */}
        <rect
          x="0"
          y="0"
          width={viewBoxSize}
          height={viewBoxSize}
          fill="hsl(var(--card))"
          rx="8"
        />

        {/* Outer border */}
        <rect
          x="10"
          y="10"
          width="280"
          height="280"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          rx="4"
        />

        {/* Inner diamond (connecting midpoints) */}
        <polygon
          points="150,10 290,150 150,290 10,150"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />

        {/* Diagonal lines for triangular houses */}
        {/* Top-left to bottom-right */}
        <line x1="10" y1="10" x2="290" y2="290" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
        {/* Top-right to bottom-left */}
        <line x1="290" y1="10" x2="10" y2="290" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />

        {/* House numbers and content */}
        {Array.from({ length: 12 }, (_, i) => i + 1).map((houseNum) => {
          const pos = HOUSE_POSITIONS[houseNum];
          const housePlanets = planetsByHouse[houseNum] || [];

          return (
            <g key={houseNum}>
              {/* House number */}
              {showHouseNumbers && (
                <text
                  x={pos.x}
                  y={pos.y - 15}
                  textAnchor="middle"
                  fill="hsl(var(--muted-foreground))"
                  fontSize="10"
                  fontWeight="500"
                >
                  {houseNum}
                </text>
              )}

              {/* Planets in this house */}
              {housePlanets.map((planet, idx) => (
                <g key={`${houseNum}-${planet.label}`}>
                  <text
                    x={pos.x + (idx % 2 === 0 ? -15 : 15)}
                    y={pos.y + Math.floor(idx / 2) * 18}
                    textAnchor="middle"
                    fill={PLANET_COLORS[planet.label] || "hsl(var(--foreground))"}
                    fontSize="12"
                    fontWeight="600"
                  >
                    {planet.label}
                    {planet.isRetrograde && (
                      <tspan fontSize="8" dy="-4">R</tspan>
                    )}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        {/* Lagna marker (Ascendant indicator) */}
        <g transform="translate(150, 25)">
          <polygon
            points="0,-8 6,4 -6,4"
            fill="hsl(var(--primary))"
          />
        </g>

        {/* Decorative corner elements */}
        {[
          { x: 15, y: 15, rotate: 0 },
          { x: 285, y: 15, rotate: 90 },
          { x: 285, y: 285, rotate: 180 },
          { x: 15, y: 285, rotate: 270 },
        ].map((corner, i) => (
          <g key={i} transform={`translate(${corner.x}, ${corner.y}) rotate(${corner.rotate})`}>
            <circle r="3" fill="hsl(var(--primary) / 0.5)" />
          </g>
        ))}
      </svg>

      {/* Legend */}
      {planets.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs">
          {planets.map((planet) => (
            <span
              key={planet.label}
              className="px-2 py-1 rounded-full bg-muted"
              style={{ color: PLANET_COLORS[planet.label] }}
            >
              {planet.label}
              {planet.isRetrograde && " ®"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NorthIndianChart;