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

interface Village {
  id: number;
  village: {
    image: string;
    name: string;
    district: string; // Kecamatan
    regency: string;  // Kabupaten/Kota
    level: "Dasar" | "Madya" | "Utama" | "Mandiri";
  };
  population: number;
  vulnerableGroups: {
    elderly: number;
    disabled: number;
    pregnantWomen: number;
    infantsAndToddlers: number;
  };
  volunteerPosts: number;
  nearbyHospitals: number;
  activeVolunteers: number;
  sensors: { active: number; inactive: number };
  potentialDisasters: string[];
  activeDisasters: number;
  evacuationCenters: number;
  lastTrainingDate: string;
  earlyWarningSystems: number;
}

const tableData: Village[] = [
  {
    id: 1,
    village: {
      image: "/images/user/user-17.jpg",
      name: "Pentingsari",
      district: "Cangkringan",
      regency: "Sleman",
      level: "Madya",
    },
    population: 2850,
    vulnerableGroups: { elderly: 380, disabled: 95, pregnantWomen: 62, infantsAndToddlers: 240 },
    volunteerPosts: 6,
    nearbyHospitals: 3,
    activeVolunteers: 180,
    sensors: { active: 12, inactive: 2 },
    potentialDisasters: ["Landslide", "Volcanic Ash"],
    activeDisasters: 0,
    evacuationCenters: 4,
    lastTrainingDate: "2024-09-12",
    earlyWarningSystems: 9,
  },
  {
    id: 2,
    village: {
      image: "/images/user/user-18.jpg",
      name: "Nglanggeran",
      district: "Patuk",
      regency: "Gunungkidul",
      level: "Utama",
    },
    population: 3420,
    vulnerableGroups: { elderly: 510, disabled: 110, pregnantWomen: 78, infantsAndToddlers: 320 },
    volunteerPosts: 10,
    nearbyHospitals: 2,
    activeVolunteers: 420,
    sensors: { active: 22, inactive: 3 },
    potentialDisasters: ["Drought", "Landslide"],
    activeDisasters: 0,
    evacuationCenters: 7,
    lastTrainingDate: "2025-01-20",
    earlyWarningSystems: 18,
  },
  {
    id: 3,
    village: {
      image: "/images/user/user-19.jpg",
      name: "Bobung",
      district: "Pundong",
      regency: "Bantul",
      level: "Mandiri",
    },
    population: 4870,
    vulnerableGroups: { elderly: 720, disabled: 165, pregnantWomen: 98, infantsAndToddlers: 410 },
    volunteerPosts: 14,
    nearbyHospitals: 5,
    activeVolunteers: 580,
    sensors: { active: 28, inactive: 1 },
    potentialDisasters: ["Earthquake", "Flood"],
    activeDisasters: 0,
    evacuationCenters: 9,
    lastTrainingDate: "2025-03-05",
    earlyWarningSystems: 24,
  },
  {
    id: 4,
    village: {
      image: "/images/user/user-20.jpg",
      name: "Giriloyo",
      district: "Imogiri",
      regency: "Bantul",
      level: "Utama",
    },
    population: 3120,
    vulnerableGroups: { elderly: 460, disabled: 88, pregnantWomen: 70, infantsAndToddlers: 280 },
    volunteerPosts: 8,
    nearbyHospitals: 3,
    activeVolunteers: 310,
    sensors: { active: 17, inactive: 2 },
    potentialDisasters: ["Flood", "Landslide"],
    activeDisasters: 1,
    evacuationCenters: 5,
    lastTrainingDate: "2024-11-18",
    earlyWarningSystems: 12,
  },
  {
    id: 5,
    village: {
      image: "/images/user/user-21.jpg",
      name: "Wukirsari",
      district: "Imogiri",
      regency: "Bantul",
      level: "Dasar",
    },
    population: 1890,
    vulnerableGroups: { elderly: 290, disabled: 68, pregnantWomen: 45, infantsAndToddlers: 180 },
    volunteerPosts: 4,
    nearbyHospitals: 2,
    activeVolunteers: 95,
    sensors: { active: 8, inactive: 4 },
    potentialDisasters: ["Flood", "Strong Wind"],
    activeDisasters: 0,
    evacuationCenters: 3,
    lastTrainingDate: "2023-07-22",
    earlyWarningSystems: 6,
  },
];

export default function TableVillages() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900/50 shadow-sm">
      <div className="overflow-x-auto">
        <Table className="w-full">
          {/* Header */}
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-800/60">
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Village
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Population
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Vulnerable Groups
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Volunteer Posts
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Hospitals Nearby
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Active Volunteers
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Sensors (Active / Inactive)
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Potential Disasters
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Active Disasters
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Evacuation Centers
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Last Training
              </TableCell>
              <TableCell isHeader className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Early Warning Systems
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {tableData.map((village) => (
              <TableRow
                key={village.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all duration-200 border-b border-gray-200 dark:border-gray-700"
              >
                {/* Village Name + Location + Level */}
                <TableCell className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                      <Image
                        width={48}
                        height={48}
                        src={village.village.image}
                        alt={village.village.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {village.village.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {village.village.district}, {village.village.regency}
                      </div>
                      <Badge
                        size="sm"
                        color={
                          village.village.level === "Mandiri"
                            ? "success"
                            : village.village.level === "Utama"
                            ? "info"
                            : village.village.level === "Madya"
                            ? "warning"
                            : "info"
                        }
                      >
                        {village.village.level}
                      </Badge>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-5 font-medium text-green-400">
                  {village.population.toLocaleString()}
                </TableCell>

                <TableCell className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                  <div className="space-y-1">
                    <div>Elderly: <span className="font-medium">{village.vulnerableGroups.elderly}</span></div>
                    <div>Disabled: <span className="font-medium">{village.vulnerableGroups.disabled}</span></div>
                    <div>Pregnant: <span className="font-medium">{village.vulnerableGroups.pregnantWomen}</span></div>
                    <div>Infants & Toddlers: <span className="font-medium">{village.vulnerableGroups.infantsAndToddlers}</span></div>
                  </div>
                </TableCell>

                <TableCell className="px-6 py-5 text-center font-medium text-green-400">{village.volunteerPosts}</TableCell>
                <TableCell className="px-6 py-5 text-center font-medium text-green-400">{village.nearbyHospitals}</TableCell>
                <TableCell className="px-6 py-5 font-medium text-emerald-600 dark:text-emerald-400">
                  {village.activeVolunteers}
                </TableCell>

                <TableCell className="px-6 py-5">
                  <span className="font-medium text-green-600">{village.sensors.active}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="font-medium text-red-600">{village.sensors.inactive}</span>
                </TableCell>

                <TableCell className="px-6 py-5 text-sm text-red-500">
                  {village.potentialDisasters.join(", ")}
                </TableCell>

                <TableCell className="px-6 py-5 text-center">
                  <Badge
                    size="sm"
                    color={village.activeDisasters === 0 ? "success" : village.activeDisasters === 1 ? "warning" : "error"}
                  >
                    {village.activeDisasters}
                  </Badge>
                </TableCell>

                <TableCell className="px-6 py-5 text-center font-medium text-green-400">{village.evacuationCenters}</TableCell>
                <TableCell className="px-6 py-5 text-sm text-white">{village.lastTrainingDate}</TableCell>
                <TableCell className="px-6 py-5 text-center font-medium text-blue-600 dark:text-blue-400">
                  {village.earlyWarningSystems}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile-friendly hint */}
      <div className="md:hidden text-center py-3 text-sm text-gray-500 bg-gray-50 dark:bg-gray-800">
        ← Swipe to see more columns →
      </div>
    </div>
  );
}