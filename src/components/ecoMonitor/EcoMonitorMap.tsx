"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Card from "@/components/ui/card/Card";
import { Flame } from "lucide-react";

const MapContainer = dynamic(() => import("./LeafletMapContent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-white/5 rounded-xl">
      <p className="text-gray-400">Memuat peta hotspot...</p>
    </div>
  ),
});

export default function EcoMonitorMap({ height = "h-96" }) {
  return (
    <Card className="overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur-md">
      <div className="p-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <Flame className="w-6 h-6 text-orange-400 animate-pulse" />
          Peta Hotspot Kebakaran Aktif
        </h3>
        <p className="text-sm text-gray-400">NASA FIRMS • Real-time 24 jam</p>
      </div>

      <div className={`relative ${height}`}>
        <MapContainer />
      </div>

      <div className="px-6 py-3 border-t border-white/10 bg-white/5 text-xs text-gray-400">
        <div className="flex flex-wrap gap-3">
          <span>• NASA FIRMS (VIIRS)</span>
          <span>• Update otomatis</span>
          <span>• Klik marker untuk detail</span>
        </div>
      </div>
    </Card>
  );
}