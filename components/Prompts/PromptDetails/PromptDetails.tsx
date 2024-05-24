import SellersBanner from '@/components/Shop/SellerBanner'
import { styles } from '@/utils/styles'
import React from 'react'
import PromptDetailsCard from './PromptDetailsCard'
import PromptInformation from './PromptInformation'
import PromptCard from '../PromptCard'

type Props = {
    promptData:any
    relatedData:any
    stripePromise:any
    clientSecret:string
    
}

export default function PromptDetails({promptData,relatedData,stripePromise,clientSecret}: Props) {
  return (
    <div>
        <PromptDetailsCard promptData={promptData} stripePromise={stripePromise} clientSecret={clientSecret}/>
        <br />
        <br />
        <PromptInformation promptData={promptData} />
       <br />
        <h1 className={`${styles.heading} px-2 pb-2 `  }>Related Prompt</h1>
        <div className='flex flex-wrap'>
            {/* promptcard */}
            {
              relatedData && relatedData.map((prompt:any)=>{
                <PromptCard prompt={prompt} key={prompt}/>
              })
            }
            
        </div>
           {
              relatedData ?.length === 0 && (
                <p className={`${styles.label}`}>
                  No prompt found with this category
                </p>
              )
              
            }

        <br />
        <br />
            
        <SellersBanner />
        <br />
    </div>
  )
}