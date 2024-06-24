import React from 'react'
import dropdown from '../TopHeader/images/DropDown.png';
const TopHeader = () => {
  return (
    <div className='w-full font-sans'>
      <div className=' lg:h-12 bg-[#000000]'>
        <div className='relative flex lg:h-12 gap-3 justify-center items-center text-center  text-white'>
         <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
         <button className='underline font-[600]'>ShopNow</button>
        <div className='absolute lg:flex lg:right-[6%] cursor-pointer text-white'>
         <p>English</p>
         <img src={dropdown} alt="dropdown" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
