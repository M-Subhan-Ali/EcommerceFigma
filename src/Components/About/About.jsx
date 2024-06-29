import React, { useState } from 'react'
import girls from './image/girls.png';
import s1 from './image/service1.png';
import s2 from './image/service2.png';
import s3 from './image/service4.png';
import s4 from './image/service3.png';
import p1 from './image/person.png';
import p2 from './image/person1.png';
import p3 from './image/person2.png';
import frame from './image/frame.png';
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
 
  const [selected,setSelected]=useState(2)

  const HandleColor=(index)=>{
    setSelected(index)
  }

  return (
    <div className='OurStory-Section'>
      <div className="ps-[6%] py-24">
        <div className="grid grid-cols-2">
            <div className='flex flex-col justify-center'>
                <p className='text-6xl font-semibold tracking-wide pb-[7%]'>Our Story</p>
                <div className='w-[480px] flex flex-col items-start '>
                <p className='text-[16px] font-medium '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.  
                </p>
                <p className='text-[16px] font-medium pt-[3%] '>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </p>
                </div>
            </div>
            <div>
                <img src={girls} className='rounded' alt="girls" />
            </div>
        </div>
      </div>
      <div className="container mx-auto pt-16">
      <div className="px-[6%]">
        <div className="grid grid-cols-4 gap-8">
            <div onClick={()=>HandleColor(1)} className={`${selected===1?"bg-[#db4444] text-white":""}  flex flex-col gap-4 items-center border border-gray-300 rounded justify-center py-5 px-3 cursor-pointer`}>
             <img src={s1} className='w-20' alt="service1" />
             <p className='text-3xl font-semibold'>10.5K</p>
             <p className='text-[16px] font-medium font-sans'>Sallers active our site</p>
            </div>
            <div onClick={()=>HandleColor(2)} className={`${selected===2?"bg-[#db4444] text-white":""}  flex flex-col gap-4 items-center border border-gray-300  rounded justify-center py-5 px-3 cursor-pointer`}>
             <img src={s2} className='w-20' alt="service1" />
             <p className='text-3xl font-semibold'>33K</p>
             <p className='text-[16px] font-medium font-sans'>Sallers active our site</p>
            </div>
            <div onClick={()=>HandleColor(3)} className={`${selected===3?"bg-[#db4444] text-white":""}  flex flex-col gap-4 items-center border border-gray-300 rounded justify-center py-5 px-3 cursor-pointer`}>
             <img src={s3} className='w-20' alt="service1" />
             <p className='text-3xl font-semibold'>45.5K</p>
             <p className='text-[16px] font-medium font-sans'>Sallers active our site</p>
            </div>
            <div onClick={()=>HandleColor(4)} className={`${selected===4?"bg-[#db4444] text-white":""}  flex flex-col gap-4 items-center border border-gray-300 rounded justify-center py-5 px-3 cursor-pointer`}>
             <img src={s4} className='w-20' alt="service1" />
             <p className='text-3xl font-semibold'>25K</p>
             <p className='text-[16px] font-medium font-sans'>Sallers active our site</p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-32">
          <div className="flex flex-col gap-3 ">
            <div className='flex justify-center items-center px-3 pt-7 bg-[#f5f5f5] rounded'>
             <img src={p1} className='object-contain' alt="person1" />
            </div>
            <p className='text-3xl font-medium'>Tom Cruise</p>
            <p className='text-[16px] font-medium'>Founder & Chairman</p>
            <div className="persons-icons flex gap-6 ">
              <FiTwitter className='text-xl cursor-pointer'/>
              <IoLogoInstagram className='text-xl cursor-pointer'/>
              <FaLinkedinIn className='text-xl cursor-pointer'/>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className='flex justify-center items-center px-3 pt-7 bg-[#f5f5f5] rounded'>
             <img src={p2} className='object-contain' alt="person1" />
            </div>
            <p className='text-3xl font-medium'>Emma Watson</p>
            <p className='text-[16px] font-medium'>Managing Director</p>
            <div className="persons-icons flex gap-6 ">
              <FiTwitter className='text-xl cursor-pointer'/>
              <IoLogoInstagram className='text-xl cursor-pointer'/>
              <FaLinkedinIn className='text-xl cursor-pointer'/>
            </div>
          </div>
          <div className="flex flex-col  gap-3 ">
            <div className='flex justify-center items-center px-3 pt-7 bg-[#f5f5f5] rounded'>
             <img src={p3} className='object-contain' alt="person1" />
            </div>
            <p className='text-3xl font-medium'>Will Smith</p>
            <p className='text-[16px] font-medium'>Product Designer</p>
            <div className="persons-icons flex gap-6 ">
              <FiTwitter className='text-xl cursor-pointer'/>
              <IoLogoInstagram className='text-xl cursor-pointer'/>
              <FaLinkedinIn className='text-xl cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-16 cursor-pointer'>
          <img src={frame} alt="frame" />
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default About
