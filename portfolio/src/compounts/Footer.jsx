import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
    <hr></hr>
     <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-2 '>
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <CiFacebook size={24}></CiFacebook>
                <FaLinkedin size={24}></FaLinkedin>
                <FaInstagram size={24}></FaInstagram>
            </div>
            <div className=' mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p>
                    2024 your company.
                    All Rights reserved.
                </p>
                <p className='text-sm'> Supportive Partner ❤️ Vaibhav Tambe</p>
            </div>
        </div>


        </div>
     </footer>

    </>
  )
}

export default Footer