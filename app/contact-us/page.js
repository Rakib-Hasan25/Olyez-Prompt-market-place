'use client'
import ContactForm from "@/components/Forms/contact_form"
import Header from '@/components/Layout/Header'
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";

export default function contact_us(){
    return (
        <>
        <Header activeItem={3}/>
        <ContactForm/>
        <br />
        {/* <Divider className="bg-[#ffffff23]" /> */}
        <Footer />
        </>
    );
}