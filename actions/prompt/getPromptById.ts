'use server'
import prisma from "@/lib/prismaDb";



export const getPromptById = async(promptId:string)=>{
    // console.log(promptId);
    const firstPart = promptId.split('%')[0];
    // console.log(firstPart);
    const prompt = await prisma.prompts.findUnique({
        include:{
            orders:true,
            images:true,
            reviews:true,
            promptUrl:true
       },
        where: {
            id:firstPart
          },
    })
    // console.log(prompt,"sdf")

    return prompt

}