import React from 'react'
import StarSales from '../SalesTimer/StarSales.jsx';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {FlashSaleData} from '../SalesTimer/SalesData.jsx';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,FreeMode} from 'swiper/modules';

const SliderProduct = ({setCart,setWishList}) => {
    const wishing=(value)=>{
        setWishList((val)=>{
          const filteredData=val.filter((val)=>val.id!==value.id)
          return [...filteredData,value]
        });
      }
      const carting=(value)=>{
      setCart((val)=>{
        const filteredData=val.filter((val)=>val.id!==value.id);
        return [...filteredData,value];
      })
      } 
  return (
    <div>
      <div className=' flex  justify-between mb-5'>
      <Swiper slidesPerView={4} 
          loop={true}
          modules={[Navigation,FreeMode]}
          navigation={{prevEl:'.navigateArrowLeft',nextEl:'.navigateArrowRight'}}
          >

      {FlashSaleData.map((value,index)=>(
        <SwiperSlide key={index}>

        <div  className='box   relative  w-[270px]  mt-12' >
          <div className='bg-[#f5f5f5] h-[250px]'>
                <p className='text-xs w-14 h-6 rounded-md pt-1 text-white text-center font-sans font-[400] bg-[#db4444]'>{value.discount}%</p>
                <img src={value.img} className='mx-auto  h-44 pt-9 ' alt={value.title|| 'productImage'} />
               <div className='  bg-[#f5f5f5] text-[#f5f5f5] hover:bg-black   text-center py-2 mt-2 cursor-pointer'><button onClick={()=>carting(value)} className='text-[16px] font-[500] text-white'>Add to cart</button></div>
          </div>
                <p className='text-[16px] font-sans font-[600] pt-10 leading-6'>{value.title}</p>
                <div className='flex gap-3 leading-6'>
                     <span className='text-[16px] font-[500] text-[#DB4444]'>${value.currentPrice}</span> 
                    <span className='line-through text-[#808080] text-[16px] font-[500]'>${value.actualPrice}</span>
                    </div>
                    <div className='flex gap-4 items-center leading-6'>
                 <StarSales star={value.starRate} />
                 <span className='text-[#808080] text-[14px] font-[500]'>({value.reviews})</span>
                    </div>
                    <div className='absolute top-0 right-0'>
                        <div className='flex flex-col gap-2'>
                   <button onClick={()=>wishing(value)}>
                     <CiHeart className='w-8 h-8 cursor-pointer' />
                    </button>
                    <MdOutlineRemoveRedEye  className='w-8 h-8 cursor-pointer'/>
                        </div>
                    </div>
        </div>
        </SwiperSlide>
      ))
      }
      </Swiper>
      </div>
    </div>
  )
}

export default SliderProduct
