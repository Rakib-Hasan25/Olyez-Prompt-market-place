'use server'
import prisma from "@/lib/prismaDb";

async function getAllPrompts(pageNumber=1,pageSize=8){

    try{
        const prompts = await prisma.prompts.findMany({
            // Using the include option in Prisma allows you to fetch related data along with the main record 
            // in a single query. This is useful for getting comprehensive data in a single operation, optimizing performance, and simplifying your code
            // . In your case, including orders, images, reviews, and promptUrl ensures that all related data for a shop is retrieved together.
           include:{
                orders:true,
                images:true,
                reviews:true,
                promptUrl:true
           },
            where:{
                status: "Live"
            },
            take:pageSize,//how many prompts take 
            skip:(pageNumber-1)*pageSize
        }
            
        )
        // console.log(prompts)
        return prompts
    }catch(e){
        console.log('get all prompts error', e)
    }

}
export default getAllPrompts