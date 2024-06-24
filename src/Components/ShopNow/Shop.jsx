import React from 'react'
import LeftShop from './LeftShop'
import RightShop from './RightShop'
import line from '../ShopNow/imagesShop/line1.png';
const Shop = () => {
  return (
        <div className='container  mx-auto'>
    <div className='w-full px-[6%]  mx-auto'>
   
      <div className='relative pt-10 gap-9 lg:flex lg:justify-between  mx-auto'>
        <LeftShop/>
        <RightShop/>
        <img src={line} className='absolute top-0 left-56 ' alt="line" />
      </div>
   
    </div>
        </div>
  )
}

export default Shop
