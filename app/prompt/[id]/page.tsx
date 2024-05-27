// 'use client'
import { getUser } from '@/actions/user/getUser'
import React from 'react'
import RoutePage from './_page'
import { getPromptById } from '@/actions/prompt/getPromptById'
import { getPromptByCategory } from '@/actions/prompt/getPromptsByCategory'
import { stripePublishableKey } from '@/actions/payment/paymentAction'

const Page = async({params}:{params:any}) => {
  console.log(params)
    const data =await getUser()
    const promptData = await getPromptById(params.id)
    const relatedData = await getPromptByCategory(promptData? promptData.category:"")
  //  console.log(promptData)
   const relatedfilteredPrompts = relatedData && relatedData.filter((prompt)=>prompt.id !== promptData?.id)

   const publishAbleKey= await stripePublishableKey();
   console.log(publishAbleKey)
  return (
    <div>
        < RoutePage user={data?.user} isSellerExist={data?.shop ?true:false} promptData={promptData} relatedData={relatedfilteredPrompts} publishableKey={`${publishAbleKey}`}/>
    </div>
  )
}

export default Page