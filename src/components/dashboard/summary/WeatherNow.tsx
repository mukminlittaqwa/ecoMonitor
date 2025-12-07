"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { Cloud } from "lucide-react"

export const WeatherNow = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <Cloud className="text-blue-600 size-5 dark:text-blue-600" />
            <span className="font-normal text-gray-200">Active Disaster</span>
            </div>
            <span className="font-black text-2xl text-blue-300">29°C Hujan Ringan</span>
            <span className="font-normal text-white">H 85% • W 5 km/h</span>
         </div>
         
      </Card>
   )
}

