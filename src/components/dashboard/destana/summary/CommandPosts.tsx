"use client";
import React from "react";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import { HouseHeart } from "lucide-react"

export const CommandPosts = () => {
   return (
      <Card className="">
         <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row gap-1 items-center">
            <HouseHeart className="text-green-600 size-5 dark:text-green-600" />
            <span className="font-normal text-gray-200">Command Posts</span>
            </div>
            <span className="font-black text-2xl text-yellow-500">20 Posts</span>
            <span className="font-normal text-white">Ready : <span className="font-black text-green-200">20 </span> </span>
         </div>
      </Card>
   )
}