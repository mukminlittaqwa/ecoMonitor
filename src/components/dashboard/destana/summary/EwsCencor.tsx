"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { Antenna } from "lucide-react"

export const EwsSensor = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <Antenna className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Ews Sensor</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">55 Active</span>
            <span className="font-normal text-white">non-active : <span className="font-black text-red-200">20 </span> </span>
         </div>
      </Card>
   )
}