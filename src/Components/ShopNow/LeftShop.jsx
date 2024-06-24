import React from 'react'
import arrow from '../ShopNow/imagesShop/arrow.png';
const LeftShop = () => {
  return (
    <div>
      <ul className='lg:w-[217px]   font-sans font-[400]'>
       <div className='flex pb-4 items-center justify-between'>
        <li>Woman’s Fashion</li>
        <img src={arrow} className='w-2 h-3' alt="arrow" />
        </div> 
        <div className='flex pb-4 items-center justify-between'>
        <li>Men’s Fashion</li>
        <img src={arrow} className='w-2 h-3' alt="arrow" />
        </div>
        <li className='pb-4'>Electronics</li>
        <li className='pb-4'>Home & Lifestyle</li>
        <li className='pb-4'>Medicine</li>
        <li className='pb-4'>Sports & Outdoor</li>
        <li className='pb-4'>Baby’s & Toys</li>
        <li className='pb-4'>Groceries & Pets</li>
        <li className=''>Health & Beauty</li>
      </ul>
    </div>
  )
}

export default LeftShop
