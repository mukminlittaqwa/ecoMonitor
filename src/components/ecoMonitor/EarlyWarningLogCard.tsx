"use client";

import React from "react";
import { AlertTriangle, Siren, Trees, Waves } from "lucide-react";
import Card from "@/components/ui/card/Card";

interface LogEntry {
  id: number;
  timestamp: Date;
  title: string;
  description: string;
  riskLevel: "critical" | "high" | "medium" | "low";
  icon: React.ReactNode;
}

const logs: LogEntry[] = [
  {
    id: 1,
    timestamp: new Date(),
    title: "Pergerakan Gajah Liar Terdeteksi",
    description: "Kelompok gajah (5 ekor) memasuki area pemukiman Desa Sukamaju",
    riskLevel: "high",
    icon: <Trees className="w-5 h-5" />,
  },
  {
    id: 2,
    timestamp: new Date(Date.now() - 1000 * 60 * 35),
    title: "Kebakaran Hutan Sektor 7",
    description: "Titik panas terdeteksi. Api masih kecil namun perlu penanganan cepat.",
    riskLevel: "critical",
    icon: <Siren className="w-5 h-5" />,
  },
  {
    id: 3,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    title: "Kenaikan Muka Air Sungai Mahakam",
    description: "Ketinggian air naik 1.2 meter dalam 3 jam terakhir",
    riskLevel: "medium",
    icon: <Waves className="w-5 h-5" />,
  },
  {
    id: 4,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    title: "Harimau Sumatera Terpantau Kamera Trap",
    description: "Individu jantan dewasa terdeteksi di koridor hutan lindung",
    riskLevel: "low",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    id: 5,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
    title: "Longsor Kecil di Jalan Trans Kalimantan",
    description: "Material longsor menutupi 70% badan jalan",
    riskLevel: "high",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
];

const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) {
    return `${diffMins} menit yang lalu`;
  } else if (diffHours < 24) {
    return `${diffHours} jam yang lalu`;
  } else if (diffDays < 7) {
    return `${diffDays} hari yang lalu`;
  } else {
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }) + " WIB";
  }
};

const getRiskColor = (level: LogEntry["riskLevel"]) => {
  switch (level) {
    case "critical": return "border-l-red-500 bg-red-500/10";
    case "high":     return "border-l-orange-500 bg-orange-500/10";
    case "medium":   return "border-l-yellow-500 bg-yellow-500/10";
    case "low":      return "border-l-green-500 bg-green-500/10";
  }
};

const getRiskBadge = (level: LogEntry["riskLevel"]) => {
  switch (level) {
    case "critical": return "Kritis";
    case "high":     return "Tinggi";
    case "medium":   return "Sedang";
    case "low":      return "Rendah";
  }
};

const getRiskBadgeColor = (level: LogEntry["riskLevel"]) => {
  switch (level) {
    case "critical": return "bg-red-500/20 text-red-300";
    case "high":     return "bg-orange-500/20 text-orange-300";
    case "medium":   return "bg-yellow-500/20 text-yellow-300";
    case "low":      return "bg-green-500/20 text-green-300";
  }
};

export default function EarlyWarningLogCard() {
  return (
    <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md flex flex-col rounded-2xl overflow-hidden">
      <div className="border-b border-white/10 px-6 py-5">
        <h3 className="text-xl font-bold text-white flex items-center gap-3">
          <Siren className="w-6 h-6 text-red-400 animate-pulse" />
          Peringatan Dini & Log
        </h3>
        <p className="text-sm text-gray-400 mt-1">Update kejadian real-time dari lapangan</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
        <div className="divide-y divide-white/5">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`border-l-4 ${getRiskColor(log.riskLevel)} px-6 py-4 hover:bg-white/5 transition-all duration-200 mt-2`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-2.5 bg-white/10 rounded-xl">
                    {log.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-white text-base">
                      {log.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {log.description}
                    </p>
                  </div>
                </div>

                <span className={`ml-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getRiskBadgeColor(log.riskLevel)}`}>
                  {getRiskBadge(log.riskLevel)}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {formatTimestamp(log.timestamp)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-3 bg-white/5">
        <p className="text-center text-xs text-gray-400">
          {logs.length} peringatan aktif • Update otomatis setiap menit
        </p>
      </div>
    </Card>
  );
}