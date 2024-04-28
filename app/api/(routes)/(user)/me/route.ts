import {User,currentUser} from "@clerk/nextjs/server"
import { NextRequest,NextResponse } from "next/server"
import prisma from "@/lib/prismaDb";

export async function GET(req:NextRequest){
    try{
        const user:User |  null = await currentUser()
        if(!user){
            return new NextResponse("Please login to access this resources",{status:400})
        }
        // todo : check if the user has shop or not

        const shop = await prisma.shops.findUnique({
            where: {
              userId: user.id,
            },
          });
      

        return NextResponse.json({user, shop})
    }
    catch(err){
        console.log("load user error",err);
        return new NextResponse("Internal Error",{status:500})
    }
}