"use client"
import React from 'react'
import ShopSidebar from "@/components/Shop/ShopSidebar";
import UploadPrompt from '@/components/Shop/UploadPrompt';

type Props = {}

export default function shop({}: Props) {
  return (
    <div className="flex w-full">
    <div className="h-screen flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
      <ShopSidebar active={0} />
    </div>
    
  </div>
  )
}