import { useState } from "react";
import { motion } from "framer-motion";
import { ZODIAC_SIGNS } from "@/components/ui/planetary-icons";

interface BirthDetails {
  name: string;
  date: string;
  time: string;
  place: string;
}

interface BirthChartWheelProps {
  details: BirthDetails;
}

interface Planet {
  name: string;
  symbol: string;
  house: number;
  degree: number;
  color: string;
}

const generatePlanetPositions = (details: BirthDetails): Planet[] => {
  const date = new Date(details.date);
  const day = date.getDate();
  const month = date.getMonth();
  
  return [
    { name: "Sun", symbol: "☉", house: (month + 1) % 12, degree: day * 30 / 31, color: "#F59E0B" },
    { name: "Moon", symbol: "☽", house: (month + day) % 12, degree: (day * 2) % 30, color: "#94A3B8" },
    { name: "Mars", symbol: "♂", house: (month + 3) % 12, degree: (day * 3) % 30, color: "#EF4444" },
    { name: "Mercury", symbol: "☿", house: (month + 2) % 12, degree: (day * 4) % 30, color: "#22C55E" },
    { name: "Jupiter", symbol: "♃", house: (month + 5) % 12, degree: (day * 5) % 30, color: "#EAB308" },
    { name: "Venus", symbol: "♀", house: (month + 4) % 12, degree: (day * 6) % 30, color: "#EC4899" },
    { name: "Saturn", symbol: "♄", house: (month + 6) % 12, degree: (day * 7) % 30, color: "#6366F1" },
    { name: "Rahu", symbol: "☊", house: (month + 7) % 12, degree: (day * 8) % 30, color: "#8B5CF6" },
    { name: "Ketu", symbol: "☋", house: (month + 1) % 12, degree: (day * 9) % 30, color: "#A855F7" },
  ];
};

const BirthChartWheel = ({ details }: BirthChartWheelProps) => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [hoveredHouse, setHoveredHouse] = useState<number | null>(null);
  
  const planets = generatePlanetPositions(details);
  const centerX = 200;
  const centerY = 200;
  const outerRadius = 180;
  const innerRadius = 100;
  const planetRadius = 140;

  // Generate house paths for the wheel
  const generateHousePath = (houseIndex: number) => {
    const startAngle = (houseIndex * 30 - 90) * (Math.PI / 180);
    const endAngle = ((houseIndex + 1) * 30 - 90) * (Math.PI / 180);
    
    const outerStartX = centerX + outerRadius * Math.cos(startAngle);
    const outerStartY = centerY + outerRadius * Math.sin(startAngle);
    const outerEndX = centerX + outerRadius * Math.cos(endAngle);
    const outerEndY = centerY + outerRadius * Math.sin(endAngle);
    const innerStartX = centerX + innerRadius * Math.cos(startAngle);
    const innerStartY = centerY + innerRadius * Math.sin(startAngle);
    const innerEndX = centerX + innerRadius * Math.cos(endAngle);
    const innerEndY = centerY + innerRadius * Math.sin(endAngle);

    return `M ${outerStartX} ${outerStartY} 
            A ${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY} 
            L ${innerEndX} ${innerEndY} 
            A ${innerRadius} ${innerRadius} 0 0 0 ${innerStartX} ${innerStartY} 
            Z`;
  };

  // Get planet position on the wheel
  const getPlanetPosition = (house: number, offset: number = 0) => {
    const angle = ((house * 30 + 15 + offset * 10) - 90) * (Math.PI / 180);
    return {
      x: centerX + planetRadius * Math.cos(angle),
      y: centerY + planetRadius * Math.sin(angle),
    };
  };

  // Get zodiac symbol position
  const getZodiacPosition = (index: number) => {
    const angle = ((index * 30 + 15) - 90) * (Math.PI / 180);
    const radius = outerRadius + 20;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  // Group planets by house
  const planetsByHouse: { [key: number]: Planet[] } = {};
  planets.forEach((planet) => {
    if (!planetsByHouse[planet.house]) {
      planetsByHouse[planet.house] = [];
    }
    planetsByHouse[planet.house].push(planet);
  });

  return (
    <div className="relative">
      <svg 
        viewBox="0 0 400 400" 
        className="w-full max-w-md mx-auto"
        style={{ filter: "drop-shadow(0 0 20px hsl(var(--gold) / 0.2))" }}
      >
        <defs>
          <radialGradient id="wheelGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--cosmic-light))" />
            <stop offset="100%" stopColor="hsl(var(--cosmic-dark))" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={outerRadius}
          fill="url(#wheelGradient)"
          stroke="hsl(var(--gold) / 0.3)"
          strokeWidth="2"
        />

        {/* House Segments */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.path
            key={i}
            d={generateHousePath(i)}
            fill={hoveredHouse === i ? "hsl(var(--gold) / 0.15)" : "transparent"}
            stroke="hsl(var(--gold) / 0.4)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            onMouseEnter={() => setHoveredHouse(i)}
            onMouseLeave={() => setHoveredHouse(null)}
            style={{ cursor: "pointer" }}
          />
        ))}

        {/* Inner Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="hsl(var(--cosmic-dark))"
          stroke="hsl(var(--gold) / 0.5)"
          strokeWidth="2"
        />

        {/* Center Design */}
        <circle
          cx={centerX}
          cy={centerY}
          r={40}
          fill="hsl(var(--cosmic-purple) / 0.3)"
          stroke="hsl(var(--gold) / 0.6)"
          strokeWidth="1"
        />
        <text
          x={centerX}
          y={centerY - 8}
          textAnchor="middle"
          fill="hsl(var(--gold))"
          fontSize="10"
          fontFamily="Playfair Display"
        >
          Lagna
        </text>
        <text
          x={centerX}
          y={centerY + 8}
          textAnchor="middle"
          fill="hsl(var(--foreground))"
          fontSize="10"
          fontWeight="bold"
        >
          {ZODIAC_SIGNS[(new Date(details.date).getMonth() + 3) % 12].symbol}
        </text>

        {/* House Numbers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = ((i * 30 + 15) - 90) * (Math.PI / 180);
          const labelRadius = innerRadius - 25;
          const x = centerX + labelRadius * Math.cos(angle);
          const y = centerY + labelRadius * Math.sin(angle);
          return (
            <text
              key={`house-${i}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(var(--muted-foreground))"
              fontSize="11"
              fontWeight="500"
            >
              {i + 1}
            </text>
          );
        })}

        {/* Zodiac Symbols on Outer Ring */}
        {ZODIAC_SIGNS.map((sign, i) => {
          const pos = getZodiacPosition(i);
          return (
            <text
              key={`zodiac-${i}`}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={hoveredHouse === i ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))"}
              fontSize="14"
              style={{ transition: "fill 0.2s" }}
            >
              {sign.symbol}
            </text>
          );
        })}

        {/* Planets */}
        {Object.entries(planetsByHouse).map(([house, housePlanets]) =>
          housePlanets.map((planet, offset) => {
            const pos = getPlanetPosition(parseInt(house), offset - (housePlanets.length - 1) / 2);
            return (
              <motion.g
                key={planet.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + planets.indexOf(planet) * 0.1, type: "spring" }}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedPlanet(selectedPlanet?.name === planet.name ? null : planet)}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={14}
                  fill={selectedPlanet?.name === planet.name ? planet.color : "hsl(var(--cosmic-dark))"}
                  stroke={planet.color}
                  strokeWidth="2"
                  filter="url(#glow)"
                />
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={selectedPlanet?.name === planet.name ? "white" : planet.color}
                  fontSize="14"
                  fontWeight="bold"
                >
                  {planet.symbol}
                </text>
              </motion.g>
            );
          })
        )}
      </svg>

      {/* Planet Info Tooltip */}
      {selectedPlanet && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-glass-premium border border-border/30 text-center min-w-[200px]"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl" style={{ color: selectedPlanet.color }}>
              {selectedPlanet.symbol}
            </span>
            <span className="font-display font-semibold">{selectedPlanet.name}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            House {selectedPlanet.house + 1} • {ZODIAC_SIGNS[selectedPlanet.house].name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {selectedPlanet.degree.toFixed(1)}° {ZODIAC_SIGNS[selectedPlanet.house].symbol}
          </p>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {planets.slice(0, 5).map((planet) => (
          <div
            key={planet.name}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs cursor-pointer transition-all ${
              selectedPlanet?.name === planet.name 
                ? "bg-muted/50 ring-1 ring-primary/50" 
                : "hover:bg-muted/30"
            }`}
            onClick={() => setSelectedPlanet(selectedPlanet?.name === planet.name ? null : planet)}
          >
            <span style={{ color: planet.color }}>{planet.symbol}</span>
            <span className="text-muted-foreground">{planet.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthChartWheel;
