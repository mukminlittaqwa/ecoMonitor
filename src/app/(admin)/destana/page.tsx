import React from "react";
import type { Metadata } from "next";

// components
import { ActiveDisasters } from "@/components/dashboard/summary/ActiveDisasters";
import { NumberOfVillages } from "@/components/dashboard/destana/summary/NumberOfVillages";
import { VillageResilienceIndex } from "@/components/dashboard/destana/summary/VillageResilienceIndex";
import { DestanaVolunteers } from "@/components/dashboard/destana/summary/DestanaVolunteers";
import { CommandPosts } from "@/components/dashboard/destana/summary/CommandPosts";
import { EwsSensor } from "@/components/dashboard/destana/summary/EwsCencor";
import TableVillages from "@/components/dashboard/destana/TableVillages";
import Card from "@/components/ui/card/Card";

export const metadata: Metadata = {
  title: "Destana (Desa Tangguh Bencana)",
  description: "Nusantara Monitor - Destana",
};

export default function Destana() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-2 lg:p-2 max-w-screen-1xl mx-auto w-full">
      {/* summary */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="col-span-1">
          <ActiveDisasters/>
        </div>
        <div className="col-span-1">
          <NumberOfVillages/>
        </div>
        <div className="col-span-1">
          <VillageResilienceIndex/>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <DestanaVolunteers/>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <CommandPosts/>
        </div>
        <div className="col-span-1">
          <EwsSensor/>
        </div>
      </section>

      {/* table destana */}
        <section className="w-full">
        <div className="w-full bg-slate-900/50 rounded-2xl overflow-hidden shadow-xl">
          <Card className="flex flex-col gap-1">
            <span className="font-black text-white pl-2">DESTANA (Desa tangguh bencana)</span>
            <span className="font-normal text-white pl-2">Fostering community self-reliance in managing resources and reducing risk through community-based disaster risk reduction (CBDRR) principles.</span>
            <TableVillages /></Card>
        </div>
      </section>
    </div>
  );
}