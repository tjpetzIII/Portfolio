"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { travelLocations } from "@/lib/data";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function Travel() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <section id="travel" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number="05" title="Travel" />
        <p className="mt-6 text-muted leading-relaxed max-w-xl">
          Places I&apos;ve been lucky enough to explore. Always planning the next trip.
        </p>

        <div className="mt-8 bg-card border border-border rounded-xl overflow-hidden">
          <ComposableMap
            projectionConfig={{ scale: 147, center: [0, 10] }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "var(--border)",
                        stroke: "var(--card)",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "var(--muted)",
                        stroke: "var(--card)",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {/* Pass 1: all dots */}
            {travelLocations.map((loc) => (
              <Marker key={loc.name} coordinates={loc.coordinates}>
                <circle
                  r={hoveredName === loc.name ? 7 : 5}
                  fill="var(--accent-secondary)"
                  stroke="var(--card)"
                  strokeWidth={1.5}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredName(loc.name)}
                  onMouseLeave={() => setHoveredName(null)}
                />
              </Marker>
            ))}
            {/* Pass 2: hovered label rendered last so it's always on top */}
            {travelLocations.map((loc) => {
              if (hoveredName !== loc.name) return null;
              return (
                <Marker key={`label-${loc.name}`} coordinates={loc.coordinates}>
                  <g transform="translate(-30, -28)">
                    <rect width={60} height={18} rx={4} fill="var(--foreground)" />
                    <text
                      x={30}
                      y={12}
                      textAnchor="middle"
                      style={{
                        fontSize: "8px",
                        fill: "var(--background)",
                        fontFamily: "inherit",
                        fontWeight: 600,
                        pointerEvents: "none",
                      }}
                    >
                      {loc.name}
                    </text>
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {travelLocations.map((loc) => (
            <div
              key={loc.name}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent-secondary/50 transition-colors cursor-default"
              onMouseEnter={() => setHoveredName(loc.name)}
              onMouseLeave={() => setHoveredName(null)}
            >
              <svg
                className="w-4 h-4 text-accent-secondary shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <p className="font-semibold text-sm">{loc.name}</p>
                <p className="text-muted text-xs">{loc.country}</p>
                {loc.note && (
                  <p className="text-muted text-xs mt-1 leading-relaxed">{loc.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-accent-secondary text-sm">{number}.</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
