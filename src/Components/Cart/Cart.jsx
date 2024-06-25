import React, { useEffect, useState } from 'react'
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Cart = ({cart,setCart,billing,setBilling}) => {
 const [quantity,setQuantity]=useState(cart.map(()=>1));
 const [total,setTotal]=useState(0);
 useEffect(()=>{
   let totals=0;
   cart.map((product,index)=>{
    totals+=product.currentPrice*parseInt(quantity[index])
  })
  setTotal(totals)

 },[cart,quantity])
 
 const Handler=(e,index)=>{
   const ee=e.target.value;
   const newQuantity=[...quantity];
   if(newQuantity[index]<1){
    newQuantity[index]=1
   }else{
     newQuantity[index]=ee.padStart(2,"0");
   }
   setQuantity(newQuantity);
   setBilling(newQuantity);
 }

const Delete=(i)=>{
  setCart((val)=>{
    const filteredDelete=val.filter((x)=>x.id!==i.id)
   return filteredDelete
  })
}
 

  return (
    <div className='container mx-auto'>
      <div className="px-[6%]">
        <div className='px-10 py-6 mt-16'>
          <ul className='flex  items-center text-[16px] font-medium font-sans pb-10 '>
            <li className='w-[25%]'>
            Product
            </li>
            <li className='w-[25%] flex justify-center'>Price</li>
            <li className='w-[25%]  flex justify-center'>Quantity</li>
            <li className='w-[25%]  flex justify-end'>Subtotal</li>
          </ul>
          {cart.map((product,index)=>(
            <div key={index} className='semi-cart-product flex  items-center py-10 '>
            <div className='w-[25%]'>
              <div className='relative flex items-center gap-6'>
                <img src={product.img} className='w-[50px] h-10 cursor-pointer' alt="led" />
                <p>{product.title}</p>
                <button>
                <RxCrossCircled onClick={()=>Delete(product)} className='absolute top-0 -left-2 bg-[#db4444] text-white  text-xl rounded-full cursor-pointer'/>
                </button>
              </div>
            </div>
            <div className=' w-[25%]  flex justify-center '>
              <p>${product.currentPrice}</p>
            </div>
            <div className=' w-[25%]  flex justify-center'>
              <form >
                <input value={quantity[index]}  onChange={(e)=>Handler(e,index)} type="number"  className='w-16 text-black border border-gray-400 rounded px-2 py-2' />
              </form>
            </div>
            <div  className='w-[25%]  font-semibold flex justify-end'>${product.currentPrice*quantity[index]}</div>
          </div>
          ))
          }
          <div className='flex justify-between mt-7'>
           <Link to='/'>
            <button className='py-4 px-12 border border-gray-400 font-semibold text-[16px] font-sans'>Return To Shop</button>
           </Link>
            <button className='py-4 px-12 border border-gray-400 font-semibold text-[16px] font-sans'>Update Cart</button>
          </div>
          <div className='flex justify-between pt-20'>
            <div>
              <div className="flex gap-5">
                <input type="text" className='py-4 px-5  border border-gray-400 rounded w-[300px]'  placeholder='Coupon Code'/>
              <button className='py-4 px-12  border border-gray-400 rounded bg-[#db4444] text-white font-medium'>Apply Coupon</button>
              </div>
            </div>
            <div className='w-[470px] border border-black py-7 px-5 rounded'>
              <h1 className='text-xl font-semibold pb-5'>Cart Total</h1>
              <div className='flex justify-between items-center font-medium border border-b-gray-400 text-[#16px] pb-4'>
                <p>SubTotal:</p>
                <p>${total}</p>
              </div>
              
              <div className='flex justify-between items-center font-medium text-[#16px] border border-b-gray-400  py-4'>
              <p>Shipping</p>
              <p>Free</p>
              </div>
              <div className='flex justify-between items-center font-medium text-[#16px]   py-4'>
              <p>Total:</p>
              <p>${total}</p>
              </div>
              <div className='flex justify-center'>
               <Link to="/billing">
               <button  className='py-4 px-12  border border-gray-400 rounded bg-[#db4444] text-white font-medium'>
                  Procees to checkout</button>
               </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
