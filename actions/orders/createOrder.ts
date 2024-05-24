'use server'
import prisma from "@/lib/prismaDb"

export const newOrder=async({userId,promptId,payment_method, payment_id}:{userId:string,promptId:string,payment_method:string, payment_id:string})=>{
    try{
       
        const newOrderData={
            userId,
            promptId,
            payment_id,
            payment_method
        }
        const order= await prisma.orders.create({
            data:newOrderData
        })
        return order;
    }
    catch(err){
        console.log(err)

    }

}