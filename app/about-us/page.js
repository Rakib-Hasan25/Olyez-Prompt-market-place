'use client'
import Accordion from "@/components/Forms/accordion"
import Header from '@/components/Layout/Header'
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import { useState } from "react";

export default function About_us(){

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }

    const accordionData = [
        {   id : 1,
            title : "What is Olyez?",
            description : "Olyez is a marketplace for buying and selling prompts for DALL·E, GPT, Stable Diffusion + Midjourney. Prompts are sentences of text that are fed into complex AI models to get a desired output, for example and image of a certain object in a certain style.",
        },
        {   
            id : 2,
            title : "What is a Prompt Engineer?",
            description : "A Prompt Engineer is a new kind of technician, skilled at crafting the text prompts required for an AI model to produce consistent outputs (e.g. images, text or code).",
        },
        {   
            id : 3,
            title : "What is the revenue split?",
            description : "Prompt sellers keep 80% of every sale of their prompt, and on custom prompt jobs. Olyez takes a 20% fee which helps run our platform and offer services like support.",
        },
        {   
            id : 4,
            title : "How do I get paid?",
            description : "Olyez uses Stripe to send out payments to you.",
        },
        {   
            id : 5,
            title : "How will I know how many sales I've made?",
            description : "Within your account page, you'll have access to an internal Stripe dashboard for viewing sales of your prompts.",
        },
        {   
            id : 6,
            title : "My country is not appearing when trying to sell my prompt?",
            description : "We use Stripe as our payments provider for sending payments to our Prompt Sellers. Unfortunately, for certain countries this is not yet supported. We are working hard to find a solution - check out our X page for the latest updates. You can also enter your country on this page to receive notifications when Stripe becomes available. Some know countries affected like Bangladesh, Brazil, Thailand, Russia, Serbia, Ukrain etc.",
        },
        {   
            id : 7,
            title : "How do I start accepting custom prompt payments?",
            description : "To become eligible to accept custom prompt payments, you must have made 25 sales from submitted prompts on the marketplace.",
        },
        {   
            id : 8,
            title : "My sale is flagged as Fraudulent. What does this mean?",
            description : "If your sale was marked as Fraudulent, this unfortunately means it was refunded due to being a fraudulent payment. Olyez sometimes attracts customers testing stolen credits to see if they work. When our systems detect this, we will automatically refund the payment so that PromptBase doesn't get hit with chargeback fees/fines from credit card companies. It is super annoying for us and you as a creator. However, it had nothing to do with your prompt, or a dissatisfied customer - and only happens to around 0.1% of transactions.",
        },
        {   
            id : 9,
            title : "How long does it take for my prompt to be approved?",
            description : "We aim to review and approve a prompt within 1-3 working days.",
        },
        {   
            id : 10,
            title : "Do I still own my prompt if I list it?",
            description : "Yes. You retain all rights to your prompt, and are welcome to remove it from PromptBase at any point.",
        },
        {   
            id : 11,
            title : "How does a prompt get featured?",
            description : "The featured section is handpicked from some of the best submissions to PromptBase. Generally these prompts demonstrate a unique original idea, and work extremely consistently. To increase your chances of getting featured, make sure to upload 9 1:1 square images alongside your prompt, as we post featured prompt collages on our Instagram and Twitter pages.",
        },
        {   
            id : 12,
            title : "How are thumbnail images selected?",
            description : "When you upload your prompt, a random thumbnail will be generated for it. However, our review team will alter this thumbnail to select three images that we think will make it the most marketable.",
        },
        {   
            id : 13,
            title : "How are trending prompts determined?",
            description : "Trending prompts are determined by considering sales, views and the time they were uploaded.",
        },
        {   
            id : 14,
            title : "How are most popular prompts determined?",
            description : "Most popular prompts are determined purely on their sales and views.",
        },
        {   
            id : 15,
            title : "I can't find my Midjourney profile link?",
            description : "You'll need an active Midjourney subscription in order to get a verification link to your profile. Watch our video during the sign up flow in order to locate your profile link.",
        },
        {   
            id : 16,
            title : "Why are my prompt views / sales / favorites not appearing on my profile?",
            description : "Profile views, favorites and sales are calculated from across all your prompts. We periodically update this every 12 hours, so there will be a delay in updating the numbers.",
        },
        {   
            id : 17,
            title : "What is Olyez rank?",
            description : "Olyez rank is your rank as a seller on the site. It is displayed on your profile if you are within the top 500 sellers. We take into account views, sales and favorites to determine this. Rank #1 is the top seller on the site.",
        },
        {   
            id : 18,
            title : "How do I get category skill badges on my profile?",
            description : "To get emoji badges for a model (like Midjourney) on your profile, you need to get 2 sales using that model. To get category emoji badges (e.g. 3D, Fantasy, Graphic Design), you need 5 sales in that category. If you have achieved 5 sales in more than 5 categories, we'll only show the top 5 categories you have sales in.",
        },
        {   
            id : 19,
            title : "Do you offer a bug bounty program?",
            description : "At PromptBase, we take the security of our platform very seriously! As such, we offer small awards for confidentially disclosing exploits discovered through our marketplace. To disclose an exploit, send us an email clearly explaining how the exploit is carried out. If we deem the exploit severe enough, we will payout a reward and add you to our bug bounty hall of fame.",
        }
    ]



    return (
        <>
        <Header activeItem={1} />

        <div className=" p-4 max-w-xl mx-auto">
            <h1 className=" text-3xl font-bold"> Frequently Asked Questions </h1>
        </div>

        <section className=" grid place-items-center px-40 py-8">
            <div className=" px-[40px]">

            {accordionData.map((data, index) => {
                return (
                    <>
                    {data.id == 1 ? <h1 className=" text-2xl font-semibold px-4 pb-2 pt-8"> General </h1>: null}
                    {data.id == 3 ? <h1 className=" text-2xl font-semibold px-4 pb-2 pt-8"> Payments </h1>: null}
                    {data.id == 9 ? <h1 className=" text-2xl font-semibold px-4 pb-2 pt-8"> Prompts </h1>: null}
                    {data.id == 16 ? <h1 className=" text-2xl font-semibold px-4 pb-2 pt-8"> Profiles </h1>: null}
                    {data.id == 19 ? <h1 className=" text-2xl font-semibold px-4 pb-2 pt-8"> Misc. </h1>: null}
            
                    <Accordion 
                        key={index} 
                        open={index === open}
                        id={data.id}
                        title={data.title} 
                        desc={data.description} 
                        toggle = {() => toggle(index)}
                    />
                    </>
                );
            })}

            </div>
        </section>

        <br />
        <Divider className="bg-[#ffffff23]" />
        <Footer />
        </>
    );
}