import React from 'react'
import girls from './image/girls.png';
const About = () => {
  return (
    <div className='OurStory-Section'>
      <div className="ps-[6%] py-24">
        <div className="grid grid-cols-2">
            <div className='flex flex-col justify-center'>
                <p className='text-6xl font-semibold tracking-wide pb-[7%]  '>Our Story</p>
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
      <div className="container mx-auto">
      <div className="px-[6%]">
        <div className="grid grid-cols-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default About
