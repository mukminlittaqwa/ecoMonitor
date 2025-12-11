"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/badge/Badge";
import Image from "next/image";

interface Species {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  observedCount: number;
  iucnStatus: "CR" | "EN" | "VU" | "NT" | "LC";
}

const biodiversityData: Species[] = [
  {
    id: 1,
    name: "Orangutan Kalimantan",
    scientificName: "Pongo pygmaeus",
    image: "/images/animal/orang-utan.jpeg",
    observedCount: 87,
    iucnStatus: "CR",
  },
  {
    id: 2,
    name: "Harimau Sumatera",
    scientificName: "Panthera tigris sumatrae",
    image: "/images/animal/harimau.jpeg",
    observedCount: 42,
    iucnStatus: "CR",
  },
  {
    id: 3,
    name: "Badak Jawa",
    scientificName: "Rhinoceros sondaicus",
    image: "/images/animal/badak-jawa.jpeg",
    observedCount: 72,
    iucnStatus: "CR",
  },
  {
    id: 4,
    name: "Gajah Sumatera",
    scientificName: "Elephas maximus sumatranus",
    image: "/images/animal/gajah.jpeg",
    observedCount: 1928,
    iucnStatus: "EN",
  },
  {
    id: 5,
    name: "Bekantan",
    scientificName: "Nasalis larvatus",
    image: "/images/species/bekantan.jpg",
    observedCount: 5421,
    iucnStatus: "EN",
  },
  {
    id: 6,
    name: "Dugong",
    scientificName: "Dugong dugon",
    image: "/images/species/dugong.jpg",
    observedCount: 189,
    iucnStatus: "VU",
  },
  {
    id: 7,
    name: "Elang Jawa",
    scientificName: "Nisaetus bartelsi",
    image: "/images/species/elang-jawa.jpg",
    observedCount: 324,
    iucnStatus: "EN",
  },
  {
    id: 8,
    name: "Pesut Mahakam",
    scientificName: "Orcaella brevirostris",
    image: "/images/species/pesut.jpg",
    observedCount: 91,
    iucnStatus: "CR",
  },
];

const getIUCNColor = (status: Species["iucnStatus"]) => {
  switch (status) {
    case "CR": return "error";
    case "EN": return "dark";
    case "VU": return "warning";
    case "NT": return "primary";
    case "LC": return "success";
  }
};

const getIUCNLabel = (status: Species["iucnStatus"]) => {
  switch (status) {
    case "CR": return "CRITICALLY ENDANGERED";
    case "EN": return "ENDANGERED";
    case "VU": return "VULNERABLE";
    case "NT": return "NEAR THREATENED";
    case "LC": return "LEAST CONCERN";
  }
};

export default function BiodiversityTable() {
  return (    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 px-6 py-5 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
          Indeks Biodiversitas (Key Species)
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          Spesies prioritas nasional yang terus dipantau
        </p>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] md:min-w-0">
          <Table>
            {/* Desktop View - Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow>
                    <TableCell isHeader className="px-8 py-5 text-left">
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                        SPESIES
                      </span>
                    </TableCell>
                    <TableCell isHeader className="px-8 py-5 text-left">
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                        JUMLAH TERPANTAU
                      </span>
                    </TableCell>
                    <TableCell isHeader className="px-8 py-5 text-left">
                      <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">
                        STATUS IUCN
                      </span>
                    </TableCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {biodiversityData.map((species) => (
                    <TableRow
                      key={species.id}
                      className="hover:bg-white/5 transition-colors duration-200"
                    >
                      <TableCell className="px-8 py-6">
                        <div className="flex items-center gap-5">
                          <div className="relative w-16 h-16 overflow-hidden rounded-xl ring-2 ring-white/20">
                            <Image
                              src={species.image}
                              alt={species.name}
                              width={200}
                              height={200}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-white text-lg">
                              {species.name}
                            </p>
                            <p className="text-sm text-gray-400 italic">
                              {species.scientificName}
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="px-8 py-6">
                        <div
                          className={`inline-flex items-center px-5 py-2.5 rounded-full text-lg font-bold
                            ${species.observedCount < 100
                              ? "bg-red-500/20 text-red-300 border border-red-500/50"
                              : species.observedCount < 1000
                              ? "bg-orange-500/20 text-orange-300 border border-orange-500/50"
                              : "bg-green-500/20 text-green-300 border border-green-500/50"
                            }`}
                        >
                          {species.observedCount.toLocaleString("id-ID")}
                          <span className="ml-2 text-sm font-normal opacity-80">ekor</span>
                        </div>
                      </TableCell>

                      <TableCell className="px-8 py-6">
                        <Badge size="md" color={getIUCNColor(species.iucnStatus)}>
                          {getIUCNLabel(species.iucnStatus)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile View - Card Style */}
            <div className="md:hidden divide-y divide-white/10">
              {biodiversityData.map((species) => (
                <div key={species.id} className="p-6 hover:bg-white/5 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 overflow-hidden rounded-xl ring-2 ring-white/20 flex-shrink-0">
                      <Image
                        src={species.image}
                        alt={species.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-lg truncate">
                        {species.name}
                      </h4>
                      <p className="text-sm text-gray-400 italic mb-3">
                        {species.scientificName}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <div
                          className={`px-4 py-2 rounded-full text-sm font-bold
                            ${species.observedCount < 100
                              ? "bg-red-500/20 text-red-300"
                              : species.observedCount < 1000
                              ? "bg-orange-500/20 text-orange-300"
                              : "bg-green-500/20 text-green-300"
                            }`}
                        >
                          {species.observedCount.toLocaleString("id-ID")} ekor
                        </div>
                        <Badge size="sm" color={getIUCNColor(species.iucnStatus)}>
                          {getIUCNLabel(species.iucnStatus)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Table>
        </div>
      </div>
    </div>
  );
}