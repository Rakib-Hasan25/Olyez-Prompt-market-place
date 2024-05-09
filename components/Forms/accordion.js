import { BiSolidLeftArrow , BiSolidRightArrow    } from "react-icons/bi";
import {Collapse} from 'react-collapse'


const Accordion = ({open, toggle, id, title, desc}) => {
    return(
     <>
     <div className="pt-[10px]">
        <div className="bg-[#191925] border-slate-700 shadow-xl text-white py-[10px] px-[10px] flex justify-start items-center cursor-pointer"
            onClick={toggle}>
                <div className="text-[1rem]">
                    {open ? <BiSolidLeftArrow />: <BiSolidRightArrow />}
                </div>
                <p className="text-[1rem] text-white ml-2"> {title} </p>
        </div>

        <Collapse isOpened={open}> 
            <div className=" bg-[#3e3b3b22] text-white px-[50px] py-[20px] shadow-lg">
                {desc}
            </div>
        </Collapse>

     </div>
     </> 
    )
}

export default Accordion