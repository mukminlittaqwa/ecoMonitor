"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { PersonStandingIcon } from "lucide-react"

export const NumberOfVillages = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <PersonStandingIcon className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Number of villages</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">30 villages</span>
            <span className="font-normal text-white">Population : <span className="font-black text-green-200">3000 </span> </span>
         </div>
      </Card>
   )
}