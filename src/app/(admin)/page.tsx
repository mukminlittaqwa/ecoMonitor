import React from "react";
import type { Metadata } from "next";

// components
import { ActiveDisasters } from "@/components/dashboard/summary/ActiveDisasters";
import { AirQuality } from "@/components/dashboard/summary/AirQuality";
import { AlertLevel } from "@/components/dashboard/summary/AlertLevel";
import { EcoScore } from "@/components/dashboard/summary/EcoScore";
import { LastEarthquake } from "@/components/dashboard/summary/LastEarthquake";
import { WeatherNow } from "@/components/dashboard/summary/WeatherNow";
import MapDisaster from "@/components/dashboard/MapDisaster";
import RealtimeDisasterFeed from "@/components/dashboard/RealtimeDisasterFeed";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Nusantara Monitor - Dashboard Utama",
};

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2 p-4 md:p-2 lg:p-2 max-w-screen-1xl mx-auto w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="col-span-1">
          <AlertLevel />
        </div>
        <div className="col-span-1">
          <ActiveDisasters />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <WeatherNow />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <LastEarthquake />
        </div>
        <div className="col-span-1">
          <AirQuality />
        </div>
        <div className="col-span-1">
          <EcoScore />
        </div>
      </section>

      <section className="w-full">
        <div className="w-full bg-slate-900/50 rounded-2xl overflow-hidden shadow-xl">
          <MapDisaster />
        </div>
      </section>
      <section className="w-full">
        <div className="w-full bg-slate-900/50 rounded-2xl overflow-hidden shadow-xl">
          <RealtimeDisasterFeed />
        </div>
      </section>
    </div>
  );
}