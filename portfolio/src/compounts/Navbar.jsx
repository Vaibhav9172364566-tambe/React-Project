import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItem = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Portfolio",
        },
        {
            id: 4,
            text: "Experience", // Corrected here
        },
        {
            id: 5,
            text: "Contacts",
        },
    ];
    

  return (
    <>

    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16  shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
    {/* image name title */}
    <div className="flex justify-between items-center  h-16">
        <div className="flex ">
        <img src="/public/img/vaibhav.jpg" className="h-12 w-12 rounded-full" alt="Description" />

            <h1 className="font-semibold text-xl cursor-pointer ">Vaibhav<p className="text-sm">Web Developer</p>
            </h1>
        </div>
        {/* dektop navbar */}
        <div>
            <ul className=" hidden md:flex space-x-8">
                {
                    navItem.map(({
                        id,text })=>(
                        <li className="hover scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
                    ))
                }
            </ul>

           <div onClick={()=>setMenu(!menu)} className="md:hidden"> {menu ?<IoMenu size={24} /> :           <RxCross2 size={24} />
           } 



           </div>
          
        </div>
    </div>
{/* mobile navbar */}
{
    menu && <div className="">
    <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
    {
                    navItem.map(({
                        id,text })=>(
                        <li className="hover scale-105 font-semibold duration-200 cursor-pointer " key={id}>{text}</li>
                    ))
                }
            </ul>
    </div>
}
    

    </div>
    </>
  )
}

export default Navbar