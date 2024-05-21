'use client'
import Header from '@/components/Layout/Header'
import ShopBanner from '@/components/Shop/ShopBanner'

import {User} from "@clerk/nextjs/server"
import React, { useEffect, useState } from 'react'

type Props = {
    user : User| undefined,
    isSellerExist : boolean|undefined,
    promptData:any
    }



function RoutePage({user,isSellerExist,promptData}:Props) {
    
const[isMounted,setIsMounted] = useState(false)
useEffect(() =>{
    if(!isMounted){
        setIsMounted(true)
    }
},[isMounted])

if(!isMounted){
    return null;
}



  return (
    <div>
        <div className='shop-banner '>
    <Header activeItem={2} user={user} isSellerExist={isSellerExist} >
    </Header>
    <ShopBanner title={promptData?.name!} />
    
  
</div>


</div>
  )
}

export default RoutePage