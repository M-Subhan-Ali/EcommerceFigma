import React from 'react'
import arrow from '../Footer/images/inputarrow.png';
import qrcode from '../Footer/images/qrcode.png';
import google from '../Footer/images/google.png';
import appstore from '../Footer/images/appstore.png';
import line from '../Footer/images/line.png';
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-black">
    <div className='container mx-auto'>
      <div className="px-[6%]">
        <div className="grid grid-cols-5 gap-14 pt-20">
            <div className='flex flex-col gap-6 text-white'>
            <h1 className='text-[24px]  font-[700]'>Exclusive</h1>
            <h2 className='text-[16px] font-sans font-[400]'>Subscribe</h2>
            <p>Get 10% off your first order</p>
            <div className='relative  py-1 px-2 items-center border  border-gray-400 rounded'>
                <input type="text" className='bg-transparent outline-none p-1 text-[16px] ' placeholder='Enter your Email' />
                <img src={arrow} className='absolute right-1 top-3 cursor-pointer ' alt="arrow" />
            </div>
            </div>
            <div className='flex flex-col gap-4 text-white'>
            <h1 className='text-[24px]  font-[600]'>Support</h1>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
            </div>
            <div className="text-white">
            <h1 className='text-[24px]  font-[600]'>Account</h1>
            <div className='flex flex-col gap-4 pt-6 cursor-pointer' >
                <p>My Account</p>
                <p>Login / Registert</p>
                <p>Cart</p>
                <Link to="/wishlist">Wishlist</Link>
                <p>Shop</p>
            </div>
            </div>
            <div className="text-white">
            <h1 className='text-[24px]  font-[500]'>Quick Link</h1>
            <div className='flex flex-col gap-4 pt-6 cursor-pointer' >
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            </div>
            <div className="text-white">
            <h1 className='text-[24px]  font-[500]'>Download App</h1>
            <p className='pt-4 text-[12px]'>Save $3 with App New User Only</p>
            <div className="flex gap-3 pt-2">
                <div>
                    <img src={qrcode} className='w-[75px] h-[75px]' alt="qrcode" />
                </div>
                <div className='flex flex-col gap-3'>
                    <img src={google} className='' alt="google" />
                    <img src={appstore} className='' alt="appstore" />
                </div>
            </div>
                <div className='flex gap-6 mt-5'>
                    <FaInstagram className='w-6 h-6 cursor-pointer' />
                    <CiTwitter className='w-6 h-6 cursor-pointer'  />
                    <TiSocialFacebook className='w-6 h-6 cursor-pointer'  />
                    <FaLinkedinIn className='w-6 h-6 cursor-pointer'  />
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className='relative pt-11'>
      <img src={line} className='absolute top-7 opacity-20' alt="line" />
      <div className='flex items-center gap-3 justify-center pb-5'>
      <div className='text-[#3d3d3d]'>
         <p className=' text-[20px]'>
            ©
            </p> 
        </div> 
      <p className='text-[#3d3d3d] text-[16px]  font-[400] cursor-not-allowed'>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
