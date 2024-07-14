import React from 'react'
import c1 from './Images/c1.png';
import c2 from './Images/c2.png';
import c3 from './Images/c3.png';
import c4 from './Images/c4.png';
import mainC from './Images/mainC.png';
import { FaStar } from "react-icons/fa6";

const ProductDetail = () => {
  return (
    <div className='container mx-auto'>
      <div className="px-[6%]">
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
          <div className='w-[40%]'>
            <div>
              <h1 className='text-2xl font-semibold'>Havic HV G-92 Gamepad</h1>
              <div className="reviewing-stock-star flex gap-4 items-center">
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
              <h1 className='text-2xl font-normal'>$192.00</h1>
              <div>
              <p className='font-normal text-[14px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
              </p>
              <hr/>
              </div>
              <div className="flex">
                <h1>Colors:</h1>
                <div className="flex">
                  <button className="outline outline-black rounded-full ">
                    <p className='bg-[#f5f5f5] text-[#f5f5f5] w-5 h-5 p-2 rounded-full '></p>
                    </button>
                  <button className="  p-[1px] hover:outline outline-[#544d4d] rounded-full ">
                  <p className='bg-[#e07575] text-[#e07575] w-5 h-5   rounded-full '></p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
