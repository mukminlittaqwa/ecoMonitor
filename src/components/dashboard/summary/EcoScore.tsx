"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { Leaf } from "lucide-react"

export const EcoScore = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <Leaf className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Eco Score</span>
            </div>
            <span className="font-black text-2xl text-purple-300">64 (Moderate)</span>
            <span className="font-normal text-white">Vegetasi 0.42</span>
         </div>
         
      </Card>
   )
}