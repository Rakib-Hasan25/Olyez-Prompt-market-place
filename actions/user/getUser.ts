"use server";
import {User,currentUser} from "@clerk/nextjs/server"
import prisma from "@/lib/prismaDb";

export async function getUser(){
    try{
        const user:User |  null = await currentUser()
        if(!user){
            return null;
        }

        // todo : check if the user has shop or not

        const shop = await prisma.shops.findUnique({
            
            where: {
              userId: user.id,
            },
          });
      
          const plainUser = JSON.parse(JSON.stringify(user));
          const plainShop = shop ? JSON.parse(JSON.stringify(shop)) : null;
  
          return { user: plainUser, shop: plainShop };
    }
    catch(err){
        console.log("load user error",err);
    }
}