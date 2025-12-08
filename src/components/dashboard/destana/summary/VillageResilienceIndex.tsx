"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { BicepsFlexed } from "lucide-react"

export const VillageResilienceIndex = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <BicepsFlexed className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Village Resilience Index</span>
            </div>
            <div className="flex flex-col gap-1">
               <div className="flex flex-row justify-between">
                  <span className="text-white">Dasar : 30</span>
                  <span className="text-white">Madya : 30</span>
               </div>
               <div className="flex flex-row justify-between">
                  <span className="text-white">Utama : 30</span>
                  <span className="text-white">Mandiri : 30</span>
               </div>
               <span className="text-white"></span>
            </div>
         </div>
      </Card>
   )
}