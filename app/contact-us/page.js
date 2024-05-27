'use client'
import ContactForm from "@/components/Forms/contact_form"
import Header from '@/components/Layout/Header'
import Footer from "@/components/Layout/Footer";

export default function Contact_us(){
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