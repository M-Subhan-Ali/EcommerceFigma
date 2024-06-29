import React from 'react'
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='container mx-auto'>
        <div className="px-[6%] py-2">
        <div className="flex">
            <div className='shadow-xl'>
                <div className="border border-b-gray-400">

             <div className='flex items-center gap-4'>
                <div className='p-2 bg-[#db4444] text-white rounded-full'>
                <LuPhone className='text-xl'/>
                </div>
                <p className='text-[16px] font-semibold'>Call To Us</p>
             </div>
             <p className='text-[16px] font-medium pt-5 pb-2'>We are available 24/7, 7 days a week.</p>
             <p className='text-[16px] font-medium pb-7'>Phone: +8801611112222</p>
                </div>
                <div className='flex items-center gap-4 pt-7'>
                <div className='p-2 bg-[#db4444] text-white rounded-full'>
                <MdOutlineEmail className='text-xl'/>
                </div>
                <p className='text-[16px] font-semibold'>Write To US</p>
             </div>
             <p className='text-[16px] font-medium pt-5'>Fill out our form and we will contact<br></br> you within 24 hours.</p>
             <p className='text-[16px] font-medium pt-4'>Emails: customer@exclusive.com</p>
             <p className='text-[16px] font-medium pt-4'>Emails: support@exclusive.com</p>
            </div>
            <div></div>
        </div>
        </div>    
    </div>
  )
}

export default Contact
