import {PrismaClient} from '@prisma/client';

const prisma = global.prismadb || new PrismaClient();
/*
Here we are try to access a prisma client access , if there is already an
Instance then we will hold it in prisma variable other wise we will create 
A new instance
*/

//here we are having an typescript error for "global.prismadb"
//to solve : we create a global variable in global.d.ts file

if(process.env.NODE_ENV === "production") global.prismadb = prisma;

export default prisma;