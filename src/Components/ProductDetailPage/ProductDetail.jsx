import React, { useState } from 'react'
import c1 from './Images/c1.png';
import c2 from './Images/c2.png';
import c3 from './Images/c3.png';
import c4 from './Images/c4.png';
import mainC from './Images/mainC.png';
import pinkBox from './Images/pinkBox.png';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import SliderProduct from './SliderProduct';
import { Link } from 'react-router-dom';
import BreadCrumbs2 from '../BreadCrumbs/BreadCrumbs2';





const ProductDetail = ({setCart,setWishList}) => {
  const [selected,setSelected]=useState(null);
  const [counter,setCounter]=useState(1);
  const [colorCounter,setColorCounter]=useState('plus')
  const [size,setSize]=useState("M");
  const breadCrumb=["Gaming","Electronics","Havic HV G-92 Gamepad"]

  const HandleClick=(index)=>{
   setSelected(index);
  }
  const HandleSize=(value)=>{
    setSize(value);
  }

  const minus=(value)=>{
    if(counter>1){
    setCounter(counter-1);
  }
  setColorCounter(value)
  }
  const plus=(value)=>{
    setCounter(counter+1);
    setColorCounter(value);
  }
  return (
    <div className='container mx-auto'>
      <div className="px-[6%]">
        <div>
          <BreadCrumbs2 breadcrumb={breadCrumb}/>
        </div>
        <div className="flex">
          <div className="w-[60%] ">
              <div className="flex  gap-7">
                <div className="img-controllers grid grid-flow-row gap-4">
                  <div className="w-[170px] h-[138px] bg-[#f5f5f5] flex items-center justify-center py-3 px-1 rounded">
                    <img src={c1} className='transform scale-x-[-1] ' alt="c1" />
                  </div>
                  <div className="w-[170px] h-[138px] bg-[#f5f5f5] flex items-center justify-center py-3 px-1 rounded">
                    <img src={c4} className='transform scale-x-[-1] ' alt="c4" />
                  </div>
                  <div className="w-[170px] h-[138px] bg-[#f5f5f5] flex items-center justify-center py-3 px-1 rounded">
                    <img src={c3} className=' ' alt="c3" />
                  </div>
                  <div className="w-[170px] h-[138px] bg-[#f5f5f5] flex items-center justify-center py-3 px-1 rounded">
                    <img src={c2} className=' ' alt="c2" />
                  </div>
                </div>
                <div className='flex justify-center items-center rounded bg-[#f5f5f5]'>
                  <img src={mainC} className='w-full' alt="mainc" />
                </div>
              </div>
          </div>
          <div className='w-[40%] ps-[71px]'>
            <div>
              <h1 className='text-2xl font-semibold pb-4'>Havic HV G-92 Gamepad</h1>
              <div className="reviewing-stock-star pb-4 flex gap-4 items-center">
               <div className='flex gap-1'>
                {Array.from({length:4},(_,i)=>{
                  return (<FaStar className='text-[#ffad33]'/>)
                })}
                <FaStar className='text-[#bfbfbf]'/>
               </div>
               <h1 className='text-[#bfbfbf]'>(150 Reviews)</h1>
               <h1 className='w-[1px] text-black'>I</h1>
               <h1 className='text-[#50df50]'>In Stock</h1>
              </div>
              <h1 className='text-2xl font-medium pb-6'>$192.00</h1>
              <div className='pb-5'>
              <p className='font-normal text-[14px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess<br></br> free removal Pressure sensitive.
              </p>
              </div>
              <hr className='border border-gray-400'/>
              <div className="flex gap-6 py-5">
                <h1 className='text-xl font-medium'>Colors:</h1>
                <div className="flex gap-3 items-center">
                  <button onClick={()=>HandleClick(0)} className={`${selected===0 ? "outline outline-black" : " "} w-5 h-5 flex justify-center items-center   rounded-full `}>
                    <p className='bg-[#a0bce0] text-[#a0bce0] w-4 h-4 rounded-full '></p>
                    </button>
                  <button onClick={()=>HandleClick(1)} className={`${selected===1 ? "outline outline-black" : ""} w-5 h-5 flex justify-center items-center  rounded-full `}>
                  <p className='bg-[#e07575] text-[#e07575] w-4 h-4   rounded-full '></p>
                  </button>
                </div>
              </div>
              <div className='flex gap-6 items-center pb-6'>
                <h1 className='text-xl'>Size :</h1>
                <div className='flex gap-4 items-center justify-center '>
                  <button onClick={()=>HandleSize("XS")} className={` ${size==="XS" ? "bg-[#db4444] text-white border-[#db4444]" : ""} text-[14px] w-8 h-8 text-center   font-semibold border border-gray-400 rounded`}>XS</button>
                  <button onClick={()=>HandleSize("S")} className={` ${size==="S" ? "bg-[#db4444] text-white border-[#db4444]" : ""} text-[14px]  w-8 h-8 text-center  font-semibold border border-gray-400 rounded`}>S</button>
                  <button onClick={()=>HandleSize("M")} className={` ${size==="M" ? "bg-[#db4444] text-white border-[#db4444]" : ""} text-[14px] w-8 h-8 text-center   font-semibold border border-gray-400 rounded`}>M</button>
                  <button onClick={()=>HandleSize("L")} className={` ${size==="L" ? "bg-[#db4444] text-white border-[#db4444]" : ""} text-[14px] w-8 h-8 text-center   font-semibold border border-gray-400 rounded`}>L</button>
                  <button onClick={()=>HandleSize("XL")} className={` ${size==="XL" ? "bg-[#db4444] text-white border-[#db4444]" : ""} text-[14px] w-8 h-8 text-center   font-semibold border border-gray-400 rounded`}>XL</button>
                </div>
              </div>
              <div className="flex gap-4 pb-6">
                <div className="counter h-11 flex gap-8 border p-0 border-gray-600 rounded">
                  <button onClick={()=>minus("Minus")} className={`${colorCounter==="Minus"?"bg-[#db4444] text-white border-none":""} w-full h-full  text-2xl p-2  border border-e-gray-600 border-t-0 border-b-0 border-s-0 rounded-s-sm`}><FaMinus className={`${colorCounter==="Minus"?"bg-[#db4444] text-white": " "} w-full h-full`}/></button>
                  <button className='text-xl font-semibold'>{counter}</button>
                  <button onClick={()=>plus("Plus")} className={`${colorCounter==="Plus"?"bg-[#db4444] text-white border-none":""} w-full h-full text-xl p-2 border border-s-gray-600 border-t-0 border-b-0 border-e-0 rounded-e-sm `}><FaPlus className={`${colorCounter==="Plus"?"bg-[#db4444] text-white": " "}  w-full h-full`}/></button>
                </div>
                <div className="buynow w-40">
                  <Link  to="/billing">
                  <button className='text-[14px] h-11 px-10 font-sans tracking-wider bg-[#db4444] text-white rounded'>Buy Now</button>
                  </Link>
                </div>
                <div className="hearticon">
                  <button className='flex justify-center items-center border border-gray-500 rounded py-4 px-2 h-11 hover:bg-[#db4444] hover:text-white '>
                   <IoIosHeartEmpty className='w-7 h-7'/>
                  </button>
                </div>
              </div>
              <div className="return border border-gray-400">
                <div className="flex gap-4  px-5 py-6">
                 <div className=''><TbTruckDelivery className='w-10 h-10'/></div>
                 <div className="flex flex-col gap-1">
                  <h1 className='text-[16px] font-semibold'>Free Delivery</h1>
                  <p className='text-xs font-semibold underline'>Enter your postal code for Delivery Availability</p>
                 </div>
                </div>
                <hr className=' border border-gray-400' />
                <div className="flex gap-4  px-5 py-6">
                 <div className=''><GrPowerCycle className='w-10 h-10'/></div>
                 <div className="flex flex-col gap-1">
                  <h1 className='text-[16px] font-semibold'>Return Delivery</h1>
                  <p className='text-xs font-semibold'>Free 30 Days Delivery Returns.<span className='underline'>Details</span></p>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className='py-36'>
        <div className='flex items-center gap-4 '>
            <img src={pinkBox} className='w-5 h-10' alt="pinkBox" />
            <p className='text-[16px] text-[#db4444] font-sans font-[600]'>Related Item</p>
        </div>
          <SliderProduct setCart={setCart} setWishList={setWishList}/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
