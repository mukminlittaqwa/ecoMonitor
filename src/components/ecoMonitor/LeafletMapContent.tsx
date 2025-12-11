"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Hotspot {
  latitude: number;
  longitude: number;
  brightness: number;
  confidence: string;
  acq_date: string;
  acq_time: string;
}

export default function LeafletMapContent() {
  useEffect(() => {
    const map = L.map("leaflet-map").setView([-2.5, 118], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    const legend = new L.Control({ position: "bottomright" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "bg-gray-900/90 backdrop-blur-md text-white rounded-lg p-4 shadow-2xl text-sm border border-white/20");
      div.innerHTML = `
        <div class="font-bold mb-3">Legenda Hotspot</div>
        <div class="space-y-2">
          <div class="flex items-center gap-3"><div class="w-4 h-4 bg-red-500 rounded-full"></div><span>Tinggi (>350K)</span></div>
          <div class="flex items-center gap-3"><div class="w-4 h-4 bg-orange-500 rounded-full"></div><span>Sedang (300–350K)</span></div>
          <div class="flex items-center gap-3"><div class="w-4 h-4 bg-yellow-500 rounded-full"></div><span>Rendah (<300K)</span></div>
        </div>
      `;
      return div;
    };
    legend.addTo(map);

    fetch("https://firms.modaps.eosdis.nasa.gov/api/area/csv/f921e9c14cf7f4a750867643a3ee80c2/VIIRS_SNPP_NRT/95,-11,141,6/1")
      .then(r => r.text())
      .then(text => {
        const lines = text.trim().split("\n").slice(1);
        const hotspots: Hotspot[] = [];

        lines.forEach(line => {
          const values = line.split(",").map(s => s.trim().replace(/"/g, ""));
          const lat = parseFloat(values[0]);
          const lon = parseFloat(values[1]);
          const bright = parseFloat(values[8] || values[9] || "0");
          
          if (!isNaN(lat) && !isNaN(lon)) {
            hotspots.push({
              latitude: lat,
              longitude: lon,
              brightness: bright,
              confidence: values[12] || "n/a",
              acq_date: values[5],
              acq_time: values[6],
            });
          }
        });

        const layer = L.layerGroup();
        const latLngs: [number, number][] = [];

        hotspots.forEach(h => {
          const color = h.brightness > 350 ? "#ef4444" : h.brightness > 300 ? "#fb923c" : "#fbbf24";

          L.circleMarker([h.latitude, h.longitude], {
            radius: 8,
            fillColor: color,
            color: "#000",
            weight: 2,
            fillOpacity: 0.9,
          })
            .bindPopup(`
              <div class="p-3 bg-white rounded-lg shadow-lg">
                <h4 class="font-bold text-gray-900">Hotspot Kebakaran</h4>
                <p><strong>Brightness:</strong> ${h.brightness.toFixed(1)} K</p>
                <p><strong>Confidence:</strong> ${h.confidence}</p>
                <p><strong>Waktu:</strong> ${h.acq_date} ${h.acq_time} UTC</p>
              </div>
            `)
            .addTo(layer);

          latLngs.push([h.latitude, h.longitude]);
        });

        layer.addTo(map);
        if (latLngs.length > 0) {
          const bounds = L.latLngBounds(latLngs);
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      })
      .catch(() => {
        L.circleMarker([-2, 118], { color: "red", radius: 12 })
          .bindPopup("Demo Hotspot (API gagal)")
          .addTo(map);
      });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="leaflet-map" className="w-full h-full rounded-b-2xl" />;
}