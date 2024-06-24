import React from 'react'
import PinkBox from '../BestSellingProducts/SellingImages/PinkBox.png';
import SellingProducts from '../BestSellingProducts/SellingProducts.jsx';
const Selling = ({setWishList}) => {
  return (
    <div className='container mx-auto mt-32'>
        <div className='px-[6%]'>  
      <div className='Best-selling-Product-section'>
      <div className='flex items-center gap-4'>
        <img src={PinkBox} alt="pink-Box-Image" />
        <p className='text-[16px] font-sans font-[600] text-[#db4444]'>This Month</p>
      </div>
      <div className='flex justify-between items-center pt-8'>
       <p className='text-4xl font-sans font-[600]'>Best Selling Products</p>
       <button className='bg-[#db4444] text-white text-[16px] w-40 h-14 rounded'>View All</button>
      </div>
      </div>
      <div className='products-section pt-16'>
        <SellingProducts setWishList={setWishList}/>
      </div>
        </div>
    </div>
  )
}

export default Selling
