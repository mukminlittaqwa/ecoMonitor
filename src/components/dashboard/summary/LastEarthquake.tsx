"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { Activity } from "lucide-react"

export const LastEarthquake = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <Activity className="text-red-600 size-5 dark:text-red-600" />
            <span className="font-normal text-gray-200">Last Eartquake</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">5.2M • 10km</span>
            <span className="font-normal text-white">7/Des/25 11:58:20 - Bantul</span>
         </div>
      </Card>
   )
}