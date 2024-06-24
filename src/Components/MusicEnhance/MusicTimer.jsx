import React, { useEffect, useState } from 'react'

const MusicTimer = ({duration}) => {
  
    const [timer,setTimer]=useState(duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTimer(timer-1000)
    },1000);
    },[timer]);
    
    const MusicTime=(time)=>{
        
          const total_seconds=Math.floor(time/1000);
          const total_minutes=Math.floor(total_seconds/60);
          const total_hours = Math.floor(total_minutes/60);
         
          const days=Math.floor(total_hours/24);
      
          const seconds=total_seconds%60;
          const minutes=total_minutes%60;
          const hours=total_hours%24;
        return(
            <div className='flex gap-5 pt-10 '>
               <div className='w-16 h-16 flex flex-col items-center bg-white text-black rounded-full'>
                <p className='text-[16px] pt-3  font-sans font-[600]'>{hours}</p>
                <p className='text-[12px] pt-0 font-sans font-[500]'>Hours</p>
               </div>
               <div className='w-16 h-16 flex flex-col items-center bg-white text-black rounded-full'>
                <p className='text-[16px] pt-3  font-sans font-[600]'>0{days}</p>
                <p className='text-[12px] pt-0 font-sans font-[500]'>Days</p>
               </div>
               <div className='w-16 h-16 flex flex-col items-center bg-white text-black rounded-full'>
                <p className='text-[16px] pt-3  font-sans font-[600]'>{minutes}</p>
                <p className='text-[12px] pt-0 font-sans font-[500]'>Minutes</p>
               </div>
               <div className='w-16 h-16 flex flex-col items-center bg-white text-black rounded-full'>
                <p className='text-[16px] pt-3  font-sans font-[600]'>{seconds}</p>
                <p className='text-[12px] pt-0 font-sans font-[500]'>Seconds</p>
               </div>
            </div>
        )
    }

    



  return (
    <div>
      {MusicTime(timer)}
    </div>
  )
}

export default MusicTimer
