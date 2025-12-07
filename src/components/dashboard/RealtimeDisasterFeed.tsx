"use client";

import React, { useState } from "react";
import { AlertTriangle, Flame, Waves, Mountain, Tornado, ChevronDown } from "lucide-react";

const disasterFeed = [
  {
    id: 1,
    type: "earthquake",
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Gempa M5.1",
    location: "Pangandaran, Jawa Barat",
    time: new Date(Date.now() - 3 * 60 * 1000),
    risk: "medium",
    magnitude: 5.1,
    depth: "10 km",
    description: "Gempa bumi dangkal yang menyebabkan getaran kuat di wilayah pesisir. Potensi tsunami rendah, namun diimbau waspada longsor.",
    affected: "Estimasi 50.000 penduduk terdampak",
    status: "Sedang dipantau",
  },
  {
    id: 2,
    type: "fire",
    icon: <Flame className="w-5 h-5" />,
    title: "Kebakaran Hutan",
    location: "Riau",
    time: new Date(Date.now() - 12 * 60 * 1000),
    risk: "high",
    area: "500 hektar",
    description: "Kebakaran lahan gambut yang menyebar cepat akibat angin kencang. Asap tebal mengganggu lalu lintas udara.",
    affected: "Evakuasi 200 keluarga",
    status: "Pemadaman ongoing",
  },
  {
    id: 3,
    type: "flood",
    icon: <Waves className="w-5 h-5" />,
    title: "Banjir Bandang",
    location: "Manado, Sulawesi Utara",
    time: new Date(Date.now() - 45 * 60 * 1000),
    risk: "high",
    height: "2-3 meter",
    description: "Banjir akibat hujan deras dan jebolnya bendungan. Jalan utama terputus, listrik padam di beberapa kecamatan.",
    affected: "1.500 rumah terendam",
    status: "Evakuasi darurat",
  },
  {
    id: 4,
    type: "landslide",
    icon: <Mountain className="w-5 h-5" />,
    title: "Longsor",
    location: "Bogor, Jawa Barat",
    time: new Date(Date.now() - 78 * 60 * 1000),
    risk: "medium",
    description: "Longsor tebing di daerah pegunungan akibat curah hujan tinggi. Menutup akses jalan ke desa terpencil.",
    affected: "100 penduduk mengungsi",
    status: "Pembersihan jalan",
  },
  {
    id: 5,
    type: "tornado",
    icon: <Tornado className="w-5 h-5" />,
    title: "Angin Puting Beliung",
    location: "Sidoarjo, Jawa Timur",
    time: new Date(Date.now() - 120 * 60 * 1000),
    risk: "low",
    speed: "80 km/jam",
    description: "Angin kencang merusak atap rumah dan pohon tumbang. Kerusakan ringan, tidak ada korban jiwa.",
    affected: "20 rumah rusak ringan",
    status: "Pemulihan selesai",
  },
  {
    id: 6,
    type: "earthquake",
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Gempa M4.2",
    location: "Yogyakarta",
    time: new Date(Date.now() - 150 * 60 * 1000),
    risk: "low",
    magnitude: 4.2,
    depth: "15 km",
    description: "Getaran ringan dirasakan di pusat kota. Tidak ada laporan kerusakan signifikan.",
    affected: "Minimal dampak",
    status: "Normal",
  },
  {
    id: 7,
    type: "fire",
    icon: <Flame className="w-5 h-5" />,
    title: "Kebakaran Lahan",
    location: "Kalimantan Barat",
    time: new Date(Date.now() - 200 * 60 * 1000),
    risk: "medium",
    area: "300 hektar",
    description: "Kebakaran di lahan pertanian, diduga akibat pembakaran sengaja. Tim pemadam sedang menangani.",
    affected: "Petani kehilangan lahan",
    status: "Kontrol 70%",
  },
  {
    id: 8,
    type: "flood",
    icon: <Waves className="w-5 h-5" />,
    title: "Genangan Air",
    location: "Jakarta Selatan",
    time: new Date(Date.now() - 300 * 60 * 1000),
    risk: "low",
    height: "50 cm",
    description: "Genangan akibat drainase tersumbat setelah hujan lebat. Lalu lintas terganggu di beberapa titik.",
    affected: "Kendaraan mogok",
    status: "Surut perlahan",
  },
  {
    id: 9,
    type: "earthquake",
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Gempa M3.8",
    location: "Malang, Jawa Timur",
    time: new Date(Date.now() - 400 * 60 * 1000),
    risk: "low",
    magnitude: 3.8,
    depth: "8 km",
    description: "Gempa kecil, hanya dirasakan di sekitar episentrum. Tidak ada alarm tsunami.",
    affected: "Tidak ada",
    status: "Selesai",
  },
  {
    id: 10,
    type: "landslide",
    icon: <Mountain className="w-5 h-5" />,
    title: "Longsor Jalan Trans",
    location: "Puncak, Jawa Barat",
    time: new Date(Date.now() - 500 * 60 * 1000),
    risk: "medium",
    description: "Longsor menutup jalan utama ke kawasan wisata. Kendaraan dialihkan rute alternatif.",
    affected: "Wisatawan terjebak",
    status: "Pembersihan 50%",
  },
];

const timeAgo = (date: Date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const key in intervals) {
    const interval = Math.floor(seconds / intervals[key]);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
};

export default function RealtimeDisasterFeed() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "medium":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "low":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "earthquake":
        return "text-orange-600 bg-orange-100 dark:bg-orange-900/40";
      case "fire":
        return "text-red-600 bg-red-100 dark:bg-red-900/40";
      case "flood":
        return "text-blue-600 bg-blue-100 dark:bg-blue-900/40";
      case "landslide":
        return "text-amber-600 bg-amber-100 dark:bg-amber-900/40";
      case "tornado":
        return "text-purple-600 bg-purple-100 dark:bg-purple-900/40";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-800";
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-white/[0.03] dark:shadow-2xl sm:p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Aktivitas Bencana Terkini
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update real-time dari BMKG & BNPB dengan detail lengkap
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-600 dark:text-green-400">
            Live
          </span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto space-y-3 pr-2 -mr-2 custom-scrollbar">
        {disasterFeed.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-md"
          >
            <div
              className="flex items-start gap-3"
              onClick={() => toggleExpand(item.id)}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(
                  item.type
                )} transition-transform duration-300 hover:scale-110`}
              >
                {item.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800 dark:text-white/90 truncate">
                    {item.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      expandedItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  <span>{timeAgo(item.time)}</span>
                  <span>•</span>
                  <span className="truncate">{item.location}</span>
                </div>
              </div>

              <span
                className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${getRiskColor(
                  item.risk
                )}`}
              >
                {item.risk.toUpperCase()}
              </span>
            </div>

            {expandedItems.includes(item.id) && (
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 animate-fadeIn">
                <p className="mb-2">{item.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {item.magnitude && (
                    <div>
                      <span className="font-medium">Magnitudo:</span> {item.magnitude}
                    </div>
                  )}
                  {item.depth && (
                    <div>
                      <span className="font-medium">Kedalaman:</span> {item.depth}
                    </div>
                  )}
                  {item.area && (
                    <div>
                      <span className="font-medium">Luas Area:</span> {item.area}
                    </div>
                  )}
                  {item.height && (
                    <div>
                      <span className="font-medium">Ketinggian:</span> {item.height}
                    </div>
                  )}
                  {item.speed && (
                    <div>
                      <span className="font-medium">Kecepatan:</span> {item.speed}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Dampak:</span> {item.affected}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span> {item.status}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <button className="w-full text-center text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 transition-colors">
          Lihat Semua Aktivitas →
        </button>
      </div>
    </div>
  );
}