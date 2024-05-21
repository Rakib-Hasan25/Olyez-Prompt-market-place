// 'use client'
import { getUser } from '@/actions/user/getUser'
import React from 'react'
import RoutePage from './_page'
import { getPromptById } from '@/actions/prompt/getPromptById'

const Page = async({params}:{params:any}) => {
  console.log(params)
    const data =await getUser()
    const promptData = await getPromptById(params.id)
  //  console.log(promptData)
  return (
    <div>
        < RoutePage user={data?.user} isSellerExist={data?.shop ?true:false} promptData={promptData} />
    </div>
  )
}

export default Page