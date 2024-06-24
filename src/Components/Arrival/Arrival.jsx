import React from 'react'
import pinkbox from '../Arrival/Images/pinkbox.png';
import ps5 from '../Arrival/Images/ps5.png';
import line from '../Arrival/Images/line.png';
import girl from '../Arrival/Images/girl.png';
import speaker from '../Arrival/Images/speaker.png';
import gucci from '../Arrival/Images/gucci.png';
const Arrival = () => {
  return (
    <div className='container mx-auto mt-32'>
      <div className="px-[6%]">
      <div className='arrival-section py-8'>
      <div className='flex items-center gap-4'>
        <img src={pinkbox} alt="pink-Box-Image" />
        <p className='text-[16px] font-sans font-[600] text-[#db4444]'>Featured</p>
      </div>
      <div className='flex justify-between items-center pt-8'>
       <p className='text-4xl font-sans font-[600]'>New Arrival</p>
      </div>
      </div>
      <div className="arrival-details grid grid-cols-2 gap-7">
       <div className="left-arrival relative bg-black">
       <div className=' flex items-end justify-center '>
        <img src={ps5} className='object-contain w-auto pt-14' alt="ps5" />
        </div> 
        <div className="text-arrival absolute bottom-0 text-white flex flex-col pb-7 gap-6 px-8">
          <h1 className='text-[24px] font-[600] font-sans'>PlayStation 5</h1>
          <p>Black and White version of the PS5 <br></br> coming out on sale.</p>
          <div>
          <button className='relative'>Shop Now
          <img src={line} className='absolute' alt="line" />
          </button>
          </div>
        </div>
       </div>
       <div className="right-arrival">
        <div className="h-full upper-part flex flex-col gap-7">
          <div className="flex relative justify-end  bg-[#0d0d0d] text-white">
            <div className='text-content-arrival absolute bottom-9 left-4 '>
             <div className="flex flex-col gap-4">
               <h1 className='text-[24px] font-[600] font-sans'>Women’s Collections</h1>
              <p>Featured woman collections that <br></br> give you another vibe.</p>
              <div>
                <button className='relative'>Shop Now 
                   <img src={line} className='absolute' alt="line" />
                    </button>
              </div>
              </div>
            </div>
            <div className='image-content-arrival'>
              <img src={girl} className='object-contain w-auto ' alt="girl" />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-7'>
            <div className="left-col-arrival relative text-white bg-[#1a1a1a]">
              <div>
                <img src={speaker}  className='mx-auto pt-9' alt="speakers" />
              </div>
              <div className='absolute bottom-5 left-6'>
              <div className="flex flex-col gap-2">
               <h1 className='text-[24px] font-[600] font-sans'>Speakers</h1>
              <p>Amazon wireless speakers</p>
              <div>
                <button className='relative'>Shop Now 
                   <img src={line} className='absolute' alt="line" />
                    </button>
              </div>
              </div>
              </div>
              </div>  
              <div className="right-col-arrival relative text-white bg-[#1a1a1a]">
              <div>
                <img src={gucci}  className='mx-auto pt-9' alt="speakers" />
              </div>
              <div className='absolute bottom-5 left-6'>
              <div className="flex flex-col gap-2">
               <h1 className='text-[24px] font-[600] font-sans'>Perfume</h1>
              <p>GUCCI INTENSE OUD EDP</p>
              <div>
                <button className='relative'>Shop Now 
                   <img src={line} className='absolute' alt="line" />
                    </button>
              </div>
              </div>
              </div>
              </div>   
          </div>
        </div>
       </div>
      </div>
      </div>
      
    </div>
  )
}

export default Arrival
