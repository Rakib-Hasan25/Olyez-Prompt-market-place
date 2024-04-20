import Link from "next/link";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineSearch } from "react-icons/ai"; //for icons
import { CgProfile } from "react-icons/cg"; // for icon
import { FaBars } from "react-icons/fa";

type Props = {
  activeItem: number;
};






const Header = ({ activeItem }: Props) => {
  const [active, setactive] = useState(false);
  const [Open, setOpen] = useState(false);



  const handleClose= (e:React.MouseEvent)=>{
    const target =e.target as HTMLElement;
    if(target.id ==="screen"){
      setOpen(!Open)
    }
  
  }

  if (typeof window != "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setactive(true);
      } else {
        setactive(false);
      }
    });
  }
  return (
    <div
      className={`w-full p-5 min-h-[60px] border-b border-b-[#ffffff32] transition-opacity
    ${active && "fixed top-0 left-0 bg-[#000] z-[9999]"}
    
    `}
    >
      {/* =>transition-opacity: class to an element, it sets up a transition effect for changes to the opacity property of that element. 
           => z-[9999]: This class sets the z-index property of the element to 9999.The value 9999 is just a numerical value chosen 
           to ensure that the element appears above most other elements on the page.
       
       
       */}

      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className=" text-[#64ff4c]">Ol</span>yez
            </h1>
          </Link>
        </div>

        <div className="flex">
          <Navigation activeItem={activeItem}></Navigation>
          <div className="flex items-center ml-10">
            <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer"></AiOutlineSearch>

            <Link href="/sign-in">
              <CgProfile className="text-[25px] cursor-pointer"></CgProfile>
            </Link>
          </div>
        </div>
      </div>

      {/* for mobile screen  */}

      <div className="w-full md:hidden flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className=" text-[#64ff4c]">Ol</span>yez
            </h1>
          </Link>
        </div>

        <div>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(!Open)}
          >
          </FaBars>
        </div>
        {
          Open && <div className=" fixed md:hidden w-full h-screen top-0 left-0 z-[9999] bg-unset"
          
          onClick={
            handleClose
          }
          id="screen"
          >


            <div className="fixed bg-black h-screen top-0 w-[60%] right-0 z-[9999]">
                <div className="mt-20 p-5">
                  <Navigation activeItem={activeItem}></Navigation>

                </div>


            </div>

          </div>
        }
        
        
      </div>
    </div>
  );
};

export default Header;
