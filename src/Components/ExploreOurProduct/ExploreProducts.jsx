import React from 'react'
import PinkBox from '../ExploreOurProduct/Images/pinkBox.png';
import Left from '../ExploreOurProduct/Images/left.png';
import Right from '../ExploreOurProduct/Images/right.png';
import OurProductsExplore from '../ExploreOurProduct/OurProductsExplore.jsx';
const ExploreProducts = ({setWishList}) => {
  return (
    <div className='container mx-auto mt-32'>
      <div className='px-[6%] '>
      <div className='Best-selling-Product-section'>
      <div className='flex items-center gap-4'>
        <img src={PinkBox} alt="pink-Box-Image" />
        <p className='text-[16px] font-sans font-[600] text-[#db4444]'>Our Products</p>
      </div>
      <div className='flex justify-between items-center pt-8'>
       <p className='text-4xl font-sans font-[600]'>Explore Our Products</p>
       <div className='flex gap-10'>
        <button><img src={Left} className='Explore-Left' alt="Explore-Left" /></button>
        <button><img src={Right} className='Explore-Right' alt="Explore-Right" /></button>
        </div>
      </div>
      </div>
      <div>
        <OurProductsExplore setWishList={setWishList}/>
      </div>
      <div className='w-[234px] h-14 flex items-center justify-center bg-[#db4444] rounded mt-16 mx-auto'>
        <p className='text-white cursor-pointer'>View All Products</p>
      </div>
      </div>
    </div>
  )
}

export default ExploreProducts
