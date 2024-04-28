//shortcut : trfce
'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import { styles } from "@/utils/styles";
import Image from "next/image";
import About from '@/components/Route/About'
import PromptCard from "@/components/Prompts/PromptCard";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import BestSellers from "@/components/Shop/BestSellers"
import Future from "@/components/Route/Future"
import Partners from "@/components/Route/Partner"
import SellerBanner from "@/components/Shop/SellerBanner"
import axios from"axios";
import Loader from '@/utils/Loader';


type Props = {

}

function Page({}: Props) {
const [user,setUser]=useState(null);
const [loading, setloading] = useState(false)
const [isSellerExist, setisSellerExist] = useState(false)

useEffect(()=>{
setloading(true)
  axios.get("api/me").then((res)=>{
    console.log(res.data)
    setUser(res.data.user)
    setisSellerExist(res.data.shop?true:false)
    setloading(false)
  }).catch((err)=>{
    console.log(err)
    setloading(false)
  })
},[])


  return (
    
<>
{
  loading ? (
    <>
    <Loader />
    </>
  )
:
<div>

<div className='banner'>
<Header activeItem={0} user={user} isSellerExist ={isSellerExist}/>
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
        <PromptCard />


      </div>

      <br/>
      <BestSellers />
      <Future />
      <Partners />
      <SellerBanner  />




     </div>



     <br />
      <br />
      <Divider className="bg-[#ffffff23]" />
      <Footer />
 </div>





</div>

}
</>
    
  )
}

export default Page