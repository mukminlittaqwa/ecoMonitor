"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { TriangleAlert } from "lucide-react"

export const AlertLevel = () => {
   return (
      <Card className=" border-red-500 dark:border-red-800">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <TriangleAlert className="text-red-600 size-5 dark:text-red-600" />
            <span className="font-normal text-gray-200">Alert Level</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">WASPADA</span>
            <span className="font-normal text-white">Last Update: 15:00 WIB</span>
         </div>
         
      </Card>
   )
}