import React from 'react'
import appleLogo from '../ShopNow/imagesShop/appleLogo.png';
import arrow1 from '../ShopNow/imagesShop/arrow1.png';
import line from '../ShopNow/imagesShop/line.png';
import iphone from "../ShopNow/imagesShop/iphone.png";
import pagination from '../ShopNow/imagesShop/pagination.png';
const RightShop = () => {
  return (
    <div className='bg-[#000000]  w-full'>
      <div className="flex justify-between">
      <div className='text-[#fafafa] font-sans lg:pt-14 lg:ps-16 '>
        <div className='flex items-center gap-6  '>
        <img src={appleLogo} className='w-10 h-12 ' alt="logo" /> 
        <p className='text-xs lg:leading-[60px]'>iPhone 14 Series</p>
        </div>
        <p className='font-[600] text-5xl lg:leading-[60px]'>Up to 10% <br></br> off Voucher</p>
        <div className='flex text-[16px] items-center gap-3  pt-6'>
        <div className='relative'>
            <button >Shop Now</button>
            <img src={line} className='absolute ' alt="line" />
            </div>
        <img src={arrow1} className='w-4 h-[14px]' alt="arrow1" />
        </div>
        </div>
      <div className='Left-iphone '>
        <img src={iphone} alt="iphone" />
         </div>
      </div>
         <img src={pagination} className='pb-2 cursor-pointer mx-auto' alt="pagination" />
    </div>
  )
}

export default RightShop
