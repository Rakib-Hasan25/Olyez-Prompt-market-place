import prisma from "@/lib/prismaDb";
import { clerkClient } from "@clerk/nextjs/server";

export const getShopOrders = async ({ sellerId }: { sellerId: string }) => {
  try {
    const orders: any = await prisma.orders.findMany({
      where: {
        prompt: {
          sellerId,
        },
      },
      include: {
        prompt: true,
      },
      orderBy:{
        createdAt: 'desc'
      }
    });

    for (const order of orders) {
      const userId = order?.userId;
      if (userId) {
        const user = await clerkClient.users.getUser(userId);
        order.user = user;
      }
    }
    const  plainOrders= JSON.parse(JSON.stringify(orders));
    return plainOrders;
  } catch (error) {
    console.log(error);
  }
};