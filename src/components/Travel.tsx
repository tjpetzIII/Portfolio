"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { travelLocations } from "@/lib/data";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric codes used by world-atlas topojson
const COUNTRY_ISO: Record<string, string> = {
  "united states": "840",
  france: "250",
  netherlands: "528",
  italy: "380",
  canada: "124",
  "united kingdom": "826",
  germany: "276",
  spain: "724",
  japan: "392",
  australia: "036",
  brazil: "076",
  mexico: "484",
};

function getCountryId(country: string): string | undefined {
  return COUNTRY_ISO[country.toLowerCase().trim()];
}

export default function Travel() {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const hoveredLoc = travelLocations.find((l) => l.name === hoveredName);
  const highlightedId = hoveredLoc
    ? getCountryId(hoveredLoc.country)
    : undefined;

  return (
    <section id="travel" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Travel" />
        <p className="mt-6 text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>
          Places I&apos;ve been lucky enough to explore. Always planning the
          next trip.
        </p>

        <div className="mt-8 bg-card border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <ComposableMap
            projectionConfig={{ scale: 147, center: [0, 10] }}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted =
                    highlightedId !== undefined &&
                    String(geo.id) === highlightedId;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isHighlighted
                            ? "var(--accent-secondary)"
                            : "var(--border)",
                          stroke: "var(--card)",
                          strokeWidth: 0.5,
                          outline: "none",
                          transition: "fill 0.2s ease",
                        },
                        hover: {
                          fill: isHighlighted
                            ? "var(--accent-secondary)"
                            : "var(--muted)",
                          stroke: "var(--card)",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
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
                    <rect
                      width={60}
                      height={18}
                      rx={4}
                      fill="var(--foreground)"
                    />
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
              className="flex items-start gap-3 bg-card border p-4 cursor-default card-gradient-hover"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={() => setHoveredName(loc.name)}
              onMouseLeave={() => setHoveredName(null)}
            >
              <svg
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: "var(--accent-secondary)" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <p className="font-bold text-sm">{loc.name}</p>
                <p className="text-muted text-xs font-mono">{loc.country}</p>
                {loc.note && (
                  <p className="text-muted text-xs mt-1 leading-relaxed">
                    {loc.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2
        className="text-xl font-black mb-1"
        style={{ color: "var(--accent)", fontFamily: "Arial Black, Arial, sans-serif" }}
      >
        {title}
      </h2>
      <hr style={{ borderColor: "var(--accent)", borderTopWidth: "2px" }} />
    </div>
  );
}
