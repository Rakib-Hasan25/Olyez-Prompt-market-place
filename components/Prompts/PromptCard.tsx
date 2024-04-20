import { Card } from '@nextui-org/react'
import React from 'react'
import Image from "next/image";

type Props = {}

const PromptCard = (props: Props) => {
  return (
    <Card radius='lg' className='w-full md:w-[31%] 2xl:w-[23%]  p-4 bg-[#130f23] m-3'> 
    <div className="relative">
    <Image
          src={"https://pixner.net/aikeu/assets/images/banner/small-slider/two.png"}
          alt=""
          className="w-full !max-h-[200px] object-cover"
          width={300}
          height={300}
        />


    </div>
    
    
    </Card>
  )
}

export default PromptCard