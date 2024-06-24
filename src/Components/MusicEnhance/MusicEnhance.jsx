import React from 'react'
import MusicTimer from '../MusicEnhance/MusicTimer.jsx';
import jbl from '../MusicEnhance/image/jblframe.png';
import jbl2 from '../MusicEnhance/image/jbl2.png';
const MusicEnhance = () => {
  return (
    <div className='container px-[6%] mt-40 mx-auto'>
      <div className="flex items-center justify-around bg-black">
       <div className='ps-10'>
        <p className='text-[16px] pt-[69px] leading-5 text-[#00ff66]  font-[600] font-sans '>Categories</p>
       <p className='text-5xl pt-12 font-[600] font-sans text-white leading-[60px]'>Enhance Your <br></br> Music Experience</p>
       <MusicTimer duration={6*24*60*60*1000} />
       <button className='text-[16px] font-sans font-[500] mt-14 w-44 h-14 text-white rounded bg-[#00ff66] mb-20'>
       Buy Now!
       </button>
       </div>
       <div className='relative'>
        <div className='w-full h-full p-20 blur-[90px] bg-[#454444] text-[#454444] absolute '></div>
       <img src={jbl2} className='relative z-40 ' alt="jbl" />
       </div>
      </div>
    </div>
  )
}

export default MusicEnhance
