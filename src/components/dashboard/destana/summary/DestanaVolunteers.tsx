"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { LucideUserStar } from "lucide-react"

export const DestanaVolunteers = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <LucideUserStar className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Destana Volunteers</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">120 Volunteers</span>
            <span className="font-normal text-white">Volunteers Standby : <span className="font-black text-green-200">75 </span> </span>
         </div>
      </Card>
   )
}