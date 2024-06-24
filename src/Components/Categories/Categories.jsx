import React from 'react'
import pinkBox from '../Categories/imagesCategories/pinkBox.png';
import arrowRight from '../Categories/imagesCategories/arrow1.png';
import arrowLeft from '../Categories/imagesCategories/arrow2.png';
import SliderCategory from './SliderCategory';
const Categories = () => {
  return (
    <div className='container mx-auto mt-32'>
        <div className='px-[6%]'>

      <div className='Brwose-Category-Part flex flex-col gap-5'>
        <div className='flex items-center gap-4'>
            <img src={pinkBox} className='w-5 h-10' alt="pinkBox" />
            <p className='text-[16px] text-[#db4444] font-sans font-[600]'>Categories</p>
        </div>
        <div className='flex justify-between items-center'>
           <p className='text-4xl font-sans font-[600]'>Browse By Category</p>
           <div className="button-category flex gap-8">
            <button><img src={arrowLeft} className='arrowLeft' alt="arrowLeft" /></button>
            <button><img src={arrowRight} className='rightarrow' alt="rightarrow" /></button>
           </div>
        </div>
      </div>
      <div className='sliding-part'>
        <SliderCategory/>
      </div>

        </div>
    </div>
  )
}

export default Categories
