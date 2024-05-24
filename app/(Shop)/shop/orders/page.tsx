import ShopSidebar from "@/components/Shop/ShopSidebar";

import { getUser } from "@/actions/user/getUser";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import { getAllPromptsByShop } from "@/actions/shop/getAllPromptsByShop";
import { getShopOrders } from "@/actions/orders/getShopOrder";

const Page = async () => {
  const sellerId: any = await getUser();
  const ordersData = await getShopOrders({ sellerId: sellerId?.user.id });
 
  console.log(ordersData);


  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={3} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        <ShopAllOrders isDashboard={false} ordersData={ordersData} />
      </div>
    </div>
  );
};

export default Page;

