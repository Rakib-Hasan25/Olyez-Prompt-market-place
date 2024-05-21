import React from 'react'
import RoutePage from './_page'
import { getUser } from '@/actions/user/getUser'
import getAllPrompts from '@/actions/prompt/getAllPrompts'
type Props = {}

 async function page({}: Props) {
  const data =await getUser()
  const pageNumber = 1
  const prompts= await getAllPrompts(pageNumber)
  // console.log(prompts)
  return (
    <div>
      <RoutePage user ={data?.user}  isSellerExist ={data?.shop?true:false} prompts={prompts}  />
      </div>
  )
}
export default page