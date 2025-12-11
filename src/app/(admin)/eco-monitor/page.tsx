"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import {
  TreePine,
  Wind,
  Leaf,
  Droplets,
  AlertTriangle,
   Activity,
  MapPin
} from "lucide-react";

import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import type { ApexOptions } from "apexcharts";

import Card from "@/components/ui/card/Card";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import BiodiversityTable from "@/components/ecoMonitor/BiodiversityTable";
import EarlyWarningLogCard from "@/components/ecoMonitor/EarlyWarningLogCard";

const provinces = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau",
  "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Bangka Belitung",
  "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur",
  "Banten", "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Kalimantan Barat",
  "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara",
  "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara",
  "Gorontalo", "Sulawesi Barat", "Maluku", "Maluku Utara",
  "Papua", "Papua Barat", "Papua Tengah", "Papua Pegunungan", "Papua Selatan", "Papua Barat Daya"
];

export default function EcoMonitor() {
   const [selectedProvince, setSelectedProvince] = useState("Nasional");

  const summaryCards = [
    {
      title: "LUAS TUTUPAN HIJAU",
      value: "449.890,79",
      unit: "Ha",
      desc: "Area hutan aktif menyerap karbon",
      icon: TreePine,
      color: "text-green-400",
      bgGradient: "from-green-600/20 to-emerald-600/10",
    },
    {
      title: "PRODUKSI OKSIGEN",
      value: "12.499,68",
      unit: "Ton/hari",
      desc: "Estimasi O₂ dari fotosintesis",
      icon: Wind,
      color: "text-cyan-400",
      bgGradient: "from-cyan-600/20 to-blue-600/10",
    },
    {
      title: "CARBON CAPTURE",
      value: "8.404,55",
      unit: "Ton CO₂eq/hari",
      desc: "Karbon terserap harian",
      icon: Leaf,
      color: "text-emerald-400",
      bgGradient: "from-emerald-600/20 to-teal-600/10",
    },
    {
      title: "PRESERVASI AIR",
      value: "2.449.499",
      unit: "Liter/hari",
      desc: "Daya tampung air tanah & pemukiman",
      icon: Droplets,
      color: "text-blue-400",
      bgGradient: "from-blue-600/20 to-indigo-600/10",
    },
    {
      title: "INDEKS KUALITAS UDARA",
      value: "68",
      unit: "AQI",
      desc: "Rata-rata hari ini",
      icon: Activity,
      color: "text-yellow-400",
      bgGradient: "from-yellow-600/20 to-orange-600/10",
      badge: "Sedang",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    },
    {
      title: "LAHAN KRITIS",
      value: "127.340",
      unit: "Ha",
      desc: "Perlu prioritas rehabilitasi",
      icon: AlertTriangle,
      color: "text-red-400",
      bgGradient: "from-red-600/20 to-rose-600/10",
      badge: "Peringatan",
      badgeColor: "bg-red-500/20 text-red-300 border border-red-500/30",
    },
  ];

  const temperatureData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
  });

  const series = [
    {
      name: "Area Hutan",
      data: [28.5, 29.1, 28.8, 30.2, 31.5, 32.1, 31.8, 30.9, 29.7, 28.9, 28.4, 29.0, 29.8, 30.5, 31.2, 32.0, 32.8, 33.1, 32.5, 31.7, 30.8, 29.9, 29.2, 28.7, 28.3, 28.6, 29.3, 30.1, 30.8, 31.4],
    },
    {
      name: "Area Terbuka",
      data: [30.2, 31.0, 30.8, 32.5, 34.1, 35.3, 35.8, 34.9, 33.5, 32.1, 31.0, 30.7, 31.5, 32.8, 34.0, 35.2, 36.5, 37.1, 36.8, 35.5, 34.2, 32.8, 31.9, 31.2, 30.8, 30.5, 31.1, 32.0, 33.2, 34.1],
    },
  ];

  const options = {
    chart: {
      type: "area" as const,
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#9ca3af",
      fontFamily: "Inter, sans-serif",
      stacked: true,
      animations: { enabled: true },
    },
    stroke: { curve: "smooth" as const, width: 3 },
    colors: ["#22c55e", "#fb923c"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    dataLabels: { enabled: false },
    grid: { borderColor: "#374151", strokeDashArray: 5 },
    xaxis: {
      categories: Array.from({ length: 30 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (29 - i));
        return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
      }),
      labels: { style: { colors: "#9ca3af" } },
      axisBorder: { show: false },
    },
    yaxis: {
      title: { text: "Suhu (°C)", style: { color: "#9ca3af", fontWeight: 600 } },
      labels: {
        style: { colors: "#9ca3af" },
        formatter: (val: number) => `${val.toFixed(1)}°C`,
      },
    },
    legend: {
      position: "top" as const,
      horizontalAlign: "left" as const,
      markers: {
      width: 12,
      height: 12,
      radius: 12,
    } as any,
      labels: { colors: "#e5e7eb" },
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val: number) => `${val.toFixed(1)} °C` },
    },
   };
   
   // cahrt pie
   const vegetationSeries = [28.4, 22.1, 18.7, 15.3, 9.8, 5.7];

   const vegetationOptions = {
    chart: {
      type: "donut" as const,
      foreColor: "#e5e7eb",
    },
    labels: [
      "Hutan Primer",
      "Hutan Sekunder",
      "Mangrove",
      "Sabana & Padang Rumput",
      "Lahan Pertanian",
      "Perkebunan",
    ],
    colors: [
      "#166534",
      "#22c55e",
      "#0891b2",
      "#84cc16",
      "#eab308",
      "#f97316",
    ],
    legend: {
      position: "bottom" as const,
      horizontalAlign: "center" as const,
      labels: { colors: "#e5e7eb" },
      markers: { width: 12, height: 12, radius: 12 } as any,
      itemMargin: { horizontal: 10, vertical: 6 },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      style: { fontSize: "14px", colors: ["#fff"] },
      dropShadow: { enabled: false },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: { show: true, fontSize: "16px", color: "#e5e7eb" },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: "bold",
              color: "#fff",
              formatter: (val: any) => `${Number(val).toFixed(1)}%`,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "14px",
              color: "#9ca3af",
              formatter: () => "100%",
            },
          },
        },
      },
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val: number) => `${val.toFixed(1)} %` },
    },
    responsive: [
      {
        breakpoint: 640,
        options: { legend: { position: "bottom" } },
      },
    ],
   } satisfies ApexOptions;;
   
   

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className=" mx-auto px-4 py-8 md:px-6 lg:px-8">

        <div className="text-center md:text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            EcoMonitor Nusantara
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            Pantau kesehatan ekosistem dan ketahanan bencana secara real-time
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <div className="relative w-full max-w-md">
               <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none z-10" />
               
               <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium 
                           focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 
                           hover:bg-white/20 hover:border-white/30 transition-all duration-300
                           appearance-none cursor-pointer"
                  style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.2em"
                  }}
               >
                  <option value="Nasional" className="bg-gray-900 text-white">
                  Nasional
                  </option>
                  {provinces.map((prov) => (
                  <option 
                     key={prov} 
                     value={prov} 
                     className="bg-gray-900 text-white hover:bg-cyan-600"
                  >
                     {prov}
                  </option>
                  ))}
               </select>

               <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
               </div>
            </div>
            </div>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {summaryCards.map((card, i) => (
            <Card
              key={i}
              className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-400 rounded-2xl"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${card.bgGradient} opacity-50`} />
              <div className="relative z-10 p-6 flex justify-between items-start">
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {card.title}
                  </p>
                  <div className="flex items-end gap-2 mt-3">
                    <span className="text-4xl font-bold text-white">{card.value}</span>
                    <span className="text-sm text-gray-400 mb-1">{card.unit}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{card.desc}</p>
                  {card.badge && (
                    <span className={`inline-flex mt-3 px-3 py-1 rounded-full text-xs font-medium ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 bg-white/10 rounded-2xl">
                  <card.icon className={`w-9 h-9 ${card.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">Dinamika Suhu Mikro (°C)</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {selectedProvince === "Nasional" ? "Rata-rata nasional" : selectedProvince} – 30 hari terakhir
                </p>
              </div>
              <div className="p-6">
                <ReactApexChart options={options} series={series} type="area" height={420} />
              </div>
            </Card>
          </div>

          {/* Vegetasi */}
          <div>
            <Card className="bg-white/5 border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">Keragaman Vegetasi</h3>
                <p className="text-sm text-gray-400 mt-1">Persentase tutupan ekosistem</p>
                <div className="mt-6">
                  <ReactApexChart options={vegetationOptions} series={vegetationSeries} type="donut" height={360} />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* TABLE + LOG SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BiodiversityTable />
          </div>
          <div className="lg:col-span-1">
            <EarlyWarningLogCard />
          </div>
        </div>

      </div>
    </div>
  );
}