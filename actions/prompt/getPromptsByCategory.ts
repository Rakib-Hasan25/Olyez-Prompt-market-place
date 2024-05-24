"use server";
import prisma from "@/lib/prismaDb"


export async function getPromptByCategory(promptCategories:string){
    // const firstPart = promptId.split('%')[0];
    // console.log(firstPart);
    const prompt = await prisma.prompts.findMany({
        include:{
            orders:true,
            images:true,
            reviews:true,
            promptUrl:true
       },
        where: {
           category:promptCategories
          },
    })
    // console.log(prompt,"sdf")

    return prompt
}