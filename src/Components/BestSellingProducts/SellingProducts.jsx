import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import StarsProducts from '../BestSellingProducts/StarsProducts.jsx';
import {DataSelling} from '../BestSellingProducts/SellingData.jsx';

const SellingProducts = ({setWishList}) => {
  const wishing=(product)=>{
    setWishList((val)=>{return [...val,product]})
  }
  return (
    <div className='flex gap-6'>
        {
        DataSelling.map((product,index)=>(
            <div className='w-[270px]' key={index}>
       <div className='relative flex items-center justify-center bg-[#f5f5f5] h-56  pb-10'>
        <img src={product.img} className='mx-auto  pt-14 object-contain cursor-pointer' alt={product.title||"coat"} />
        <div className='absolute top-4  right-4 flex flex-col gap-5'>
        <FaRegHeart onClick={()=>wishing(product)} className='w-8 h-8 bg-white p-1 rounded-full cursor-pointer' />
        <IoEyeOutline className='w-9 h-9 bg-white p-1 rounded-full cursor-pointer' />
        </div>
       </div>
       <div className='pt-5'>
        <p className='text-[16px] font-sans font-[600] leading-8'>{product.title} </p>
        <div className="flex gap-3 text-[16px] font-sans font-[600] leading-8">
            <p className='text-[#db4444]'>${product.actualPrice}</p>
            <p className={`${product.currentPrice===null ? "hidden" : " " } line-through text-[#808080]`}>${product.currentPrice}</p>
        </div>
        <div className="flex items-center gap-3 leading-8 ">
            <StarsProducts star={product.starRate} />
            <p className='text-[#808080] text-[14px] font-sans font-[600'>({product.reviews})</p>
        </div>
       </div>
      </div>
       ))
      }
    </div>
  )
}

export default SellingProducts
