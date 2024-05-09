'use client'

import { useState } from "react";


export default function ContactForm(){

    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [success, setsuccess] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(fullname == '' || email == '' || message == ''){
            setsuccess(false);
        } else{
            setsuccess(true);
        }
    }


    return  <>
        <form onSubmit={handleSubmit} className=" py-4 mt-4 border-t flex flex-col gap-5">
            <div className=" flex flex-col gap-2 text-black">
                <label htmlFor="fullname"> Full Name </label>
                <input 
                    type="text"
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                    id="fullname" 
                    className=" shadow-md px-6 py-2 border border-slate-300" 
                    placeholder="Rakib Hasan" />
            </div>

            <div className=" flex flex-col gap-2 text-black">
                <label htmlFor="email"> Email </label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="email" 
                    className=" shadow-md px-6 py-2 border border-slate-300" 
                    placeholder="RakibHasan25@gamil.com" />
            </div>

            <div className=" flex flex-col gap-2 text-black">
                <label htmlFor="message"> Message </label>
                <textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    className=" shadow-md px-6 py-2 border border-slate-300 h-32" 
                    placeholder="Type your message here...">
                </textarea>
            </div>

            <button className=" bg-green-700 p-3 text-white font-bold" type="submit"> Send message </button>
        </form>

        <div className=" bg-slate-100 flex flex-col">
            <div className={success ? 'hidden' : 'text-red-600 px-5 py-2'}> Error Message </div>
        </div>
    </>;
}