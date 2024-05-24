'use client'
import { stripePaymentIntent } from '@/actions/payment/paymentAction'
import Header from '@/components/Layout/Header'
import PromptDetails from '@/components/Prompts/PromptDetails/PromptDetails'
import ShopBanner from '@/components/Shop/ShopBanner'

import {User} from "@clerk/nextjs/server"
import React, { useEffect, useState } from 'react'
import {loadStripe} from "@stripe/stripe-js"
type Props = {
    user : User| undefined,
    isSellerExist : boolean|undefined,
    promptData:any,
    relatedData: any,
    publishableKey:string
    
    }



function PromptDetailsPage
({user,isSellerExist,promptData,relatedData,publishableKey}:Props) {
    
const[isMounted,setIsMounted] = useState(false)
const [stripePromise, setStripePromise] = useState<any>();
const [clientSecret,setClientSecret] = useState("");
useEffect(() =>{
    if(!isMounted){
        setIsMounted(true)
    }
},[isMounted])

useEffect((
) =>{
    if(publishableKey){
        const amount = Math.round(promptData.price*100)
        console.log(amount)
        newPaymentIntent({amount})
        setStripePromise(loadStripe(publishableKey))

    }
},[publishableKey,promptData])


const newPaymentIntent= async({amount}:{amount:Number})=>{
   const paymentIntent= await stripePaymentIntent({amount})
   console.log(paymentIntent?.client_secret)
   setClientSecret(paymentIntent?.client_secret)

   
}


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
<div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
<PromptDetails promptData={promptData} relatedData={relatedData} stripePromise={stripePromise} clientSecret={clientSecret}/>

</div>


</div>
  )
}

export default PromptDetailsPage
