"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import ReactDOMServer from "react-dom/server";
import { MapPin, SquareActivity } from "lucide-react";
import { worldMill } from "@react-jvectormap/world";

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
  { ssr: false }
);

interface EarthquakeMarker {
  latLng: [number, number];
  name: string;
  magnitude: number;
  depth?: number;
  time: string;
}

const MapDisaster: React.FC = () => {
  const data: EarthquakeMarker[] = [
    { latLng: [-7.7973, 110.3679], name: "Yogyakarta", magnitude: 4.8, depth: 10, time: "07 Des 2025 06:30 WIB" },
    { latLng: [-8.63, 115.22], name: "Bali", magnitude: 5.2, depth: 120, time: "06 Des 2025 23:15 WITA" },
    { latLng: [-2.5, 118.0], name: "Laut Maluku", magnitude: 6.1, depth: 35, time: "06 Des 2025 18:45 WITA" },
    { latLng: [3.5, 96.0], name: "Aceh", magnitude: 4.5, depth: 15, time: "07 Des 2025 04:20 WIB" },
  ];

  const iconToSVG = (Icon: any, size = 20) =>
    ReactDOMServer.renderToStaticMarkup(<Icon size={size} strokeWidth={2.5} className="text-white" />);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".jvectormap-marker").forEach((el, i) => {
        const m = data[i];
        if (!m) return;

        const isJogja = m.name === "Yogyakarta";
        const color = isJogja
          ? "url(#grad)"
          : m.magnitude >= 6 ? "#ef4444" : m.magnitude >= 5 ? "#f97316" : "#facc15";

        const svg = isJogja
          ? `<svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <defs><linearGradient id="grad"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>
              <circle cx="22" cy="22" r="20" fill="${color}" stroke="#fff" stroke-width="3"/>
              <g transform="translate(11,11)">${iconToSVG(MapPin, 22)}</g>
              <circle cx="22" cy="22" r="20" fill="none" stroke="#818cf8" stroke-width="2" class="animate-ping"/>
            </svg>`
          : `<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" fill="${color}" stroke="#fff" stroke-width="3"/>
              <g transform="translate(9,9)">${iconToSVG(SquareActivity, 18)}</g>
            </svg>`;

        el.innerHTML = svg;
        el.style.pointerEvents = "all";
        el.style.cursor = "pointer";
      });

      const map = document.querySelector(".jvectormap-container") as any;
      if (map?.jvectormap) {
        map.jvectormap.setScale(7);
        map.jvectormap.setFocus({ lat: -2, lng: 118, animate: true });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <SquareActivity className="w-6 h-6 text-red-400 animate-pulse" />
          Gempa Terkini
        </h3>
        <p className="text-xs text-gray-300">Fokus: Yogyakarta & Sekitarnya</p>
      </div>

      {/* Legenda Kecil */}
      <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-white text-xs space-y-2">
        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white" /><span>Yogyakarta</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white" /><span>M ≥ 6.0</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white" /><span>M 5.0–5.9</span></div>
        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-yellow-500 border-2 border-white" /><span>M {"<"} 5.0</span></div>
      </div>

      {/* Map */}
      <VectorMap
        map={worldMill}
        backgroundColor="transparent"
        zoomOnScroll={true}
        zoomMax={20}
        zoomMin={3}
        regionStyle={{
          initial: { fill: "#1e293b", stroke: "#334155", strokeWidth: 0.8 },
          hover: { fill: "#475569" },
        }}
        markers={data.map(m => ({ latLng: m.latLng, name: m.name }))}
        markerStyle={{ initial: { fill: "transparent", r: 18 } }}
        onMarkerTipShow={(_e: any, label: any, code: string) => {
          const m = data.find(x => x.name === code);
          if (!m) return;
          const icon = m.name === "Yogyakarta" ? iconToSVG(MapPin, 28) : iconToSVG(SquareActivity, 28);
          label.html(`
            <div class="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl text-white text-sm min-w-[200px]">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 rounded-lg ${m.name === "Yogyakarta" ? 'bg-linear-to-br from-indigo-600 to-purple-600' : 'bg-red-600'}">
                  ${icon}
                </div>
                <div>
                  <div class="font-bold">${m.name}</div>
                  <div class="text-xs text-gray-400">${m.time}</div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-3">
                <div><span class="text-gray-400">Magnitudo</span><br/><span class="text-2xl font-bold text-yellow-400">M${m.magnitude}</span></div>
                <div><span class="text-gray-400">Kedalaman</span><br/><span class="font-medium">${m.depth ?? "-"} km</span></div>
              </div>
            </div>
          `);
        }}
      />
    </div>
  );
};

export default MapDisaster;