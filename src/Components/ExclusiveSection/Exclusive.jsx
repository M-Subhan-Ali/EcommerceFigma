import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import line from '../ExclusiveSection/Images/UnderLine.png';
import { Link } from 'react-router-dom';

const Exclusive = ({operation1,wishlist,cart}) => {
  const [active,setActive]=useState(0);
  const [dropdown,setDropdown]=useState(false);
  const HandleItem=(i)=>{
     setActive(i);
  }
  const setCheck=()=>{
    setDropdown(!dropdown);
  }
  
  return (
    <div className='border border-b-gray-300'>

    <div className='container mt-10 mx-auto '>
      <div className='lg:h-[50px]   '>
       <div className='relative  '>
       <div className='px-[6%] mx-auto flex items-center justify-between '>

        <p className='text-[24px] font-[700] cursor-pointer'>Exclusive</p>
        <div className='ul'>
           <div className='relative'>
         <ul className='flex text-[16px] lg:gap-12 font-[400] cursor-pointer font-sans'>
            <li onClick={()=>(HandleItem(0))}><Link to="/">Home</Link></li>
            <img src={line} alt="line" style={{left: `${active * 105}px` }}  className='absolute bottom-0  ' />
            <li onClick={()=>(HandleItem(1))}><Link to="/contact">Contact</Link></li>
            <li onClick={()=>(HandleItem(2))}><Link to='/about'>About</Link></li>
            <li onClick={()=>(HandleItem(3))}><Link to='/signup'>Sign Up</Link></li>
         </ul>
            </div> 
        </div>
        <div className='relative flex gap-10 items-center '>
            <div className='lg:w-[243px] bg-[#f5f5f5] flex  justify-between'>
                <input type="text" className='outline-none w-full text-[#7b7b7b]' placeholder='What are You looking for?' />
                < CiSearch className="w-[24px] h-[24px] cursor-pointer" />
            </div> 
            <div className=' flex items-center justify-between gap-5'>
            <div className="relative">
              <Link to="/wishlist">  
                <CiHeart className='w-[24px] h-[24px] cursor-pointer'/>
                </Link>
                {operation1 !== "" && <div className={`${wishlist.length===0 ? "hidden" :"block" } absolute  -top-1 -right-1 bg-[#db4444] px-1 rounded-full`}>
                  <p className='text-white text-xs'>{wishlist.length}</p>
                  </div> }
                </div>
                
                <div className="relative">
                <Link to='/cart'><IoCartOutline className='w-[24px] h-[24px] cursor-pointer'/></Link>
                {<div className={`${cart.length===0 ? "hidden" :"block" } absolute  -top-1 -right-1 bg-[#db4444] px-1 rounded-full`}>
                  <p className='text-white text-xs'>{cart.length}</p>
                  </div> }
                </div>
              {operation1 !== "" &&  <div className=' hover:rounded-full hover:bg-[#db4444] '>
                <FiUser onClick={setCheck} className={` p-2 w-[35px] h-[35px]   hover:text-white cursor-pointer ${dropdown===true ? "bg-[#db4444] rounded-full text-white":""}`}/>
                </div>}
            </div>
            {dropdown &&
              <div className="absolute right-0 top-full py-4 px-5 rounded backdrop-filter backdrop-blur-3xl    z-40 ">
                  <div className="sub-icon-main flex  z-50 flex-col gap-3 text-white cursor-pointer">
                    <div className='flex  gap-3 items-center '>
                      <FiUser className='w-8 h-6 '/>
                       <p>Manage My Account</p>
                    </div>
                    <div className='flex  gap-3 items-center'>
                      <FiShoppingBag className='w-8 h-6 '/>
                       <p>My Order</p>
                    </div>
                    <div className='flex  gap-3 items-center'>
                      <MdOutlineCancel className='w-8 h-6 '/>
                       <p>My Cancellations</p>
                    </div>
                    <div className='flex  gap-3 items-center'>
                      <FaRegStar className='w-8 h-6 '/>
                       <p>My Reviews</p>
                    </div>
                    <div className='flex  gap-3 items-center'>
                      <CiLogout className='w-8 h-6 '/>
                       <p>Logout</p>
                    </div>
                  </div>
                </div>}
        </div>
       </div>
       </div>

      </div>
    </div>
    </div>
  )
}

export default Exclusive
