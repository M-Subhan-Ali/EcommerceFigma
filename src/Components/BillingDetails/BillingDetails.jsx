import React from 'react'
import img1 from "../BillingDetails/images/img1.png"
import img2 from "../BillingDetails/images/img2.png"
import img3 from "../BillingDetails/images/img3.png"
import img4 from "../BillingDetails/images/img4.png"

const BillingDetails = ({cart}) => {
  return (
    <div className='container mx-auto'>
      <div className="px-[6%]">
        <h1 className='text-3xl font-semibold font-sans mt-28'>Billing Details</h1>
        <div className='grid grid-cols-2 gap-[15%]'>
            <div>
              <form>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>First Name<span className='text-[#db4444] opacity-50'>*</span></p>
                <input type="text" required className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Company Name</p>
                <input type="text" className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Street Address</p>
                <input type="text" className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Apartment, floor, etc. (optional)</p>
                <input type="text" className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Town/City<span className='text-[#db4444] opacity-50'>*</span></p>
                <input type="text" required className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Phone Number<span className='text-[#db4444] opacity-50'>*</span></p>
                <input type="text" required className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className="inputsBillings pt-9">
                <p className='text-[#999999] pb-1'>Email Address<span className='text-[#db4444] opacity-50'>*</span></p>
                <input type="text" required  className='ps-4 bg-[#f5f5f5] h-12 w-full rounded' />
                </div>
                <div className='flex items-center gap-8 pt-7'>
                  <button type='submit'>
                    <input type="checkbox"  className=' text-white w-5 h-5 accent-[#db4444] cursor-pointer rounded p-1 ' />
                    </button>
                  <p className='text-[#16px] font-sans font-normal'>Save this information for faster check-out next time</p>
                </div>
                </form>
            </div>
            <div>
            {cart.map((product,index)=>(
              <div key={index} className='flex justify-between items-center pb-10' >
              <div className='flex gap-5 items-center'><img src={product.img} className='w-11 h-11' alt={product.title} />
              <p className='text-[#16px] font-medium font-sans'>{product.title}</p></div>
              <p className='text-[#16px] font-medium font-sans'>${product.currentPrice}</p>
             </div>
            ))
          }
             <div className='flex justify-between border border-b-gray-600 py-4'>
              <p className='text-[#16px] font-medium font-sans'>Subtotal:</p>
              <p className='text-[#16px] font-medium font-sans'>$1900</p>
             </div>
             <div className='flex justify-between border border-b-gray-600 py-4'>
              <p className='text-[#16px] font-medium font-sans'>Shipping</p>
              <p className='text-[#16px] font-medium font-sans'>Free</p>
             </div>
             <div className='flex justify-between  py-4'>
              <p className='text-[#16px] font-medium font-sans'>Total:</p>
              <p className='text-[#16px] font-medium font-sans'>$19000</p>
             </div>
              <form>
             <div className="grid grid-cols-1 gap-6">
                <div className='flex justify-between'>
               <div className="flex gap-3">
                <input type="radio" className='w-5 h-5 accent-black'/>
                <p>Bank</p>
                </div> 
                <div className='flex items-center gap-3'>
                  <img src={img3} alt="img3" />
                  <img src={img1} alt="img1" />
                  <img src={img4} alt="img4" />
                  <img src={img2} alt="img2" />
                </div>
                </div>
                <div className='flex gap-3 justify-start'>
              <input type="radio"  className='w-5 h-5 accent-black'/>
              <p className='text-[#16px] font-medium font-sans'>Cash on delivery</p>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-full '>
                    <input type="text" placeholder='Coupon Code'  className='py-4 border w-full border-black rounded '/>
                  </div>
                  <div className='flex justify-center '>
                  <button className='w-[211px]  h-14 py-4 px-4 bg-[#db4444] text-white rounded'>Apply Coupon</button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className='w-[180px]  h-14 py-4 px-4 bg-[#db4444] text-white rounded'>Place Order</button>
                </div>
             </div>
              </form>
             
            </div>
        </div>
      </div>
    </div>
  )
}

export default BillingDetails