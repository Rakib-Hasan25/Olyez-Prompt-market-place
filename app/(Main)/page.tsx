//shortcut : trfce
'use client'
import React from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import { styles } from "@/utils/styles";
import Image from "next/image";
import About from '@/components/Route/About'
import PromptCard from "@/components/Prompts/PromptCard";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
type Props = {

}

function Page({}: Props) {
  return (
    <div>

      <div className='banner'>
      <Header activeItem={0} />
     <Hero />
      </div>
      <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt=""
          className="absolute right-[-30px]"
        />
       <br />
       <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
           <About />


           <div>
           <h1 className={`${styles.heading} p-2 font-Monserrat`}>
              Latest Prompts
            </h1>
            


            <div className='flex flex-wrap'>
              <PromptCard />
              <PromptCard />
              <PromptCard />
              <PromptCard />
              <PromptCard />

            </div>
           </div>



           <br />
            <br />
            <Divider className="bg-[#ffffff23]" />
            <Footer />
       </div>


      
     
      
      </div>
  )
}

export default Page