import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import pinkBox from '../Wishlist/images/pinkBox.png';
import StarsWish from './StarsWish';
import {WishData} from './DataWishlist.jsx'

const WishList = ({wishlist,setWishList,setCart}) => {
    const Delete=(i)=>{
     setWishList((product)=>product.filter((x)=>x.id!==i))
    }

    const carting=(item)=>{
      console.log(item.id)
      setCart((product)=>{
      const filteredProduct=product.filter((val)=>val.id!==item.id)
      return [...filteredProduct,item]
    }
      )
    }

  return (
    <div className='container mx-auto'>
        <div className='px-[6%] flex flex-col gap-16 mt-16'>

    <div className='flex justify-between items-center'>
        <p className='text-xl font-sans font-normal'>Wishlist ({wishlist.length})</p>
        <div className='flex items-center justify-center rounded border border-gray-400 w-[223px] h-14'>
            <p className='text-[16px] font-sans font-medium'>Move All To Bag</p>
        </div>
    </div>
    <div className='grid grid-cols-4 gap-7 items-center'>
      {wishlist.map((x,i)=>(
          <div className='relative' key={i}>
        <div className={`${x.discount ? " justify-between" : "justify-end"} absolute top-3  w-full flex  px-3 items-center`}>
            <div className={`${x.discount ? "block" : "hidden"}  bg-[#db4444] flex items-center py-1 px-3 rounded`}>
                <p className='text-white '>{x.discount}%</p>
            </div>
            <div>
                <button className='p-1 bg-white rounded-full'>
                <RiDeleteBin5Line onClick={()=>Delete(x.id)} className='w-8 h-6 '/>
                </button>
            </div>
        </div>
        <div className="flex justify-center h-64 bg-[#f5f5f5]">
       <img src={x.img} className='object-contain px-10' alt={x.title} />
        </div>
       <div onClick={()=>carting(x)} className='flex items-center justify-center gap-2 py-2 mb-4 bg-black text-white cursor-pointer'>
            <IoCartOutline className='w-6 h-6'/>  
        <button className='text-xs'>
        Add To Cart
        </button>
        </div>
        <div className="detail">
            <p className='text-[16px] font-sans'>{x.title}</p>
            <div className='flex gap-4'>
             <p className='text-[#db4444] font-medium'>${x.actualPrice}</p>      
             <p className={`${x.currentPrice ? "block" : "hidden" } text-[#808080] line-through font-medium`}>${x.currentPrice}</p>          
            </div>
        </div>
      </div>
    ))
}
    </div>
      <div className='wishlist second-part'>
       <div className='flex justify-between items-center pb-16'>
         <div className='flex items-center gap-5'>
            <img src={pinkBox} alt="pinkbox" />
            <p className='text-[20px] font-normal font-sans '>Just For You</p>
         </div>
         <div className='border border-gray-400 rounded w-[150px] h-14 flex items-center justify-center'>
            <p className='text-[16px]'>See All</p>
         </div>
       </div>
       <div className='grid grid-cols-4 gap-7 pb-24'>
        {
          WishData.map((data,index)=>(
         <div className='relative' key={index}>
          <div className={` absolute top-4 w-full flex px-3    ${data.discount!==null || data.new !==null ? "justify-between" : " justify-end "}`}>
            {data.discount!=null ? <div className="bg-[#db4444] flex items-center py-1 px-3 rounded">
              <p className='text-white'>{data.discount}%</p>
            </div>: null}
           {data.new !=null ?  <div className="bg-[#00ff66] flex items-center py-1 px-3 rounded">
              <p className='text-white'>{data.new}</p>
            </div>: null}
            <button className='p-1 bg-white rounded-full'>
            <IoEyeOutline className='w-6 h-6'/>
            </button>
          </div>
           <div className='flex justify-center items-center h-64 bg-[#f5f5f5] rounded'>
            <img src={data.img} alt={data.title} />
           </div>
           <div onClick={()=>carting(data)} className='flex items-center justify-center gap-2 py-2 mb-4 bg-black text-white cursor-pointer'>
            <IoCartOutline className='w-6 h-6'/>  
        <button className='text-xs'>
        Add To Cart
        </button>
        </div>
        <div>
          <p className='text-[16px] font-sans font-semibold'>{data.title}</p>
          <div className='flex gap-4'>
            <p className='text-[#db4444] font-medium'>${data.currentPrice}</p>
            <p className=' text-[#808080] line-through font-medium'>${data.actualPrice}</p>
          </div>
          <div className='flex gap-4 items-center'> 
            <StarsWish starRate={data.starRate} />
            <div>
              <p className='text-[#808080] font-medium'>({data.reviews})</p>
            </div>
          </div>
        </div>
         </div>
        ))
      }
       </div>
      </div>
        </div>
    </div>
  )
}

export default WishList
