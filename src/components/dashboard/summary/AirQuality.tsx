"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { TriangleAlert, Wind } from "lucide-react"

export const AirQuality = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <Wind className="text-blue-600 size-5 dark:text-blue-600" />
            <span className="font-normal text-gray-200">Air Quality</span>
            </div>
            <span className="font-black text-2xl text-blue-300">72 (Sedang)</span>
            <span className="font-normal text-white">PM25: 23 • PM10: 41</span>
         </div>
         
      </Card>
   )
}