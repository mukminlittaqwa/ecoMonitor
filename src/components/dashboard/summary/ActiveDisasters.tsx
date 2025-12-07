"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { ShieldAlert } from "lucide-react"

export const ActiveDisasters = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <ShieldAlert className="text-red-600 size-5 dark:text-red-600" />
            <span className="font-normal text-gray-200">Active Disaster</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">11 Disaster</span>
            <span className="font-normal text-white">Gempa 3 • Banjir 4 • Longsor 4</span>
         </div>
         
      </Card>
   )
}