'use client'
import ContactForm from "@/components/Forms/contact_form"
import Header from '@/components/Layout/Header'
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";

export default function contact_us(){
    return (
        <>
        <Header />
        <div className=" p-4 max-w-xl mx-auto">
            <h1 className=" text-3xl font-bold"> Contact Us </h1>
            <p> Please fill in the form below </p>
            <ContactForm/>
        </div>
        <br />
        <Divider className="bg-[#ffffff23]" />
        <Footer />
        </>
    );
}