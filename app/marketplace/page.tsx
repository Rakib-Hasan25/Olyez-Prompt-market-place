import React from 'react'
import { getUser } from "@/actions/user/getUser";
import MarketPlaceRouter from './_page';
async function page() {
    const data =await getUser()
  return (
    <div>
    <MarketPlaceRouter
      user={data?.user}
      isSellerExist={data?.shop ? true : false}
    />
  </div>
  )
}

export default page