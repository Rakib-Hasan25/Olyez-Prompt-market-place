'use server'
import prisma from "@/lib/prismaDb";



export const getShopById = async(sellerId:string)=>{
    const shop = await prisma.shops.findUnique({
        where: {
            userId: sellerId,
          },
    })
    // console.log(shop,"sdf")

    return shop

}