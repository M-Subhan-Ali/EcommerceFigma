import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StarExplore from './StarExplore';
import {ExploreData} from '../ExploreOurProduct/ExploreProductData.jsx';
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode, Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const OurProductsExplore = ({setWishList,setCart}) => {
  const wishing=(product)=>{
    setWishList((val)=>{
      const filteredData=val.filter((value)=>value.id!==product.id)
      return [...filteredData,product];
    })
  }
  const carting = (x)=>{
    setCart((val)=>{
      const filteredData=val.filter((value)=>value.id!==x.id)
      return [...filteredData,x];
    })
  }
  return (
    <div>
   <Swiper slidesPerView={4}
           modules={[Grid,Navigation]}
           grid={{
            rows:2,
            fill: 'row', 
           }}
           navigation={{prevEl:".Explore-Left",nextEl:'.Explore-Right'}}
        
           >
    {ExploreData.map((x,i)=>(
    <SwiperSlide  key={i} >
    <div className=' mt-12'>
        <div className='w-[270px] mt-4'>
        <div className='relative h-72 flex items-center  bg-[#f5f5f5]'>
        <img src={x.img} className='mx-auto cursor-pointer' alt="camera" />
        <div className="Explore-icons absolute flex flex-col gap-5 top-2 right-2">
            <FaRegHeart onClick={()=>wishing(x)} className='w-7 h-7 p-1 rounded-full cursor-pointer '/>
            <MdOutlineRemoveRedEye className='w-8 h-8 p-1 rounded-full cursor-pointer '/>
        </div>
        <div className={`${x.new===null ? "hidden" : "block"} w-[52px] h-5 absolute top-[20%] bg-[#00ff66]  flex items-center justify-center `}>
            <p className='text-white text-[12px]'>{x.new}</p>
        </div>
        <div className='hover:bg-black absolute w-full bottom-0 bg-white text-center cursor-pointer mt-3  '>
            <button onClick={()=>carting(x)} className='text-white py-2 text-[16px] font-sans font-[500] '>Add To Cart</button>
        </div>
        </div>
      <div className='detail-Explore pt-2'>
        <p className='text-[16px] font-sans font-[600] leading-6'>{x.title}</p>
        <div className="Sub-Details flex gap-3 py-2">
            <p className='text-[16px] font-[600] text-[#db4444]'>${x.currentPrice}</p>
            <div ><StarExplore stars={x.starRate}/></div> 
            <p className='text-[14px] font-[600] text-[#808080]'>({x.reviews})</p>
        </div>
        <div className={`${x.color==='' ? "hidden" : "block"} flex gap-2 `}>
        <button className={` w-5 h-5 border border-black rounded-full  cursor-pointer`}><p  style={{backgroundColor : x.color || "",color:x.color}} className={`rounded-full w-4 h-4 mx-auto `}></p></button> 
        <button className='w-5 h-5 bg-red-700 rounded-full cursor-pointer'><p></p></button> 
        </div>
      </div>
      </div>
    </div>
    </SwiperSlide>
))}
   </Swiper>
</div>
  )
}

export default OurProductsExplore
