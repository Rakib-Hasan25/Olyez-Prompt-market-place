import prisma from "@/lib/prismaDb"

import { NextRequest,NextResponse } from "next/server"


export async function POST(req:NextRequest){
    try{
        const data = await req.json();

        const userId= data.userId;

        //check if userid is already existing shop is already created
        const user= await prisma.shops.findUnique(
            {
                where:{
                    userId
                }
            }
        )


        if(user){
            return new NextResponse("you already have one shop with this accout!",{status:400})
        }

        const shop= await prisma.shops.create({data})

        return NextResponse.json(shop)
    
    }
    catch(err){
        console.log("create shop request failed",err);
        return new NextResponse("Internal error",{status: 500})
    }
}