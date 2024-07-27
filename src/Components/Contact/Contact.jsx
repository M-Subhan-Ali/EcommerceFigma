import React from 'react'
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const Contact = () => {
  return (
    <div className='container mx-auto pb-20'>
        <div className="px-[6%] py-2">
         <div className="pb-16">
           <BreadCrumbs breadcrumb="Contact"/>
          </div>
        <div className="flex justify-between">
            <div className='shadow-xl pt-10 px-9'>
                <div className="border border-b-gray-400 border-t-0 border-x-0  ">

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
            <div>
              <div className="sub-min-contact-form w-full py-10 px-9 shadow-xl">
                <div className="grid grid-cols-3 gap-5">
                  <input type="text" placeholder='Your Name ' className='contact-input bg-[#f5f5f5] py-3 px-4 rounded' />
                  <input type="text" placeholder='Your Email' className='contact-input bg-[#f5f5f5] py-3 px-4 rounded' />
                  <input type="text" placeholder='Your Phone' className='contact-input bg-[#f5f5f5] py-3 px-4 rounded' />
                </div>
                <div className='w-full pt-4'>
              <textarea name="" id="" rows={8} placeholder='Your Message' className='contact-input-text-area w-full py-5 px-4 bg-[#f5f5f5] rounded'></textarea>
                </div>
                <div className="flex justify-end pt-7">
                <div className='flex  items-center justify-center rounded bg-[#db4444] w-[30%]'>
                  <button className='py-3 px-5  text-white '>Send Message</button>
                </div>
                </div>
              </div>
            </div>
        </div>
        </div>    
    </div>
  )
}

export default Contact
