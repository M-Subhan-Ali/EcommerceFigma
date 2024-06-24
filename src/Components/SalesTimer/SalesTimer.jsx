import React, { useState,useEffect } from 'react'
import top from '../SalesTimer/images/top.png';
import arrow1 from '../SalesTimer/images/arrow1.png';
import arrow2 from '../SalesTimer/images/arrow2.png';
import SliderSales from './SliderSales';
const SalesTimer = ({setWishList}) => {
    const duration=731*24*60*60*1000;
   const [time , setTime]=useState(duration);
   
 useEffect(()=>{
 const TimeSet=setInterval(() => {
       setTime((val)=>val-10) 
    }, 10);
    return ()=>clearInterval(TimeSet)
 },[])



    const Timer=(timex)=>{
       const MiliSeconds=Math.max(0,timex);
       const Total_seconds=Math.floor(MiliSeconds/1000);
       const Total_mints=Math.floor(Total_seconds/60);
       const Total_hours=Math.floor(Total_mints/60);
       const Total_Days=Math.floor(Total_hours/24);
       const Total_weeks=Math.floor(Total_Days/7); 
       const Total_months=Math.floor(Total_weeks/4);

       const years=Math.floor(Total_months/12);
       
       
       const milisec=Math.floor(MiliSeconds%1000);
       const seconds=Math.floor(Total_seconds%60);
       const mints=Math.floor(Total_mints%60);
       const hours=Math.floor(Total_hours%24);
       const days=Math.floor(Total_Days%7);
       const weeks=Math.floor(Total_weeks%4);
       const months=Math.floor(Total_months%12);



       return (
        <>
        <div className='flex gap-2'> 
        <div>
                <p className='font-sans font-[600] text-xs'>years</p>
                <p className='font-sans font-[600] text-4xl'>{years}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
        <div>
                <p className='font-sans font-[600] text-xs'>Months</p>
                <p className='font-sans font-[600] text-4xl'>{months}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
            <div>
                <p className='font-sans font-[600] text-xs'>weeks</p>
                <p className='font-sans font-[600] text-4xl'>{weeks}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
            <div>
                <p className='font-sans font-[600] text-xs'>Days</p>
                <p className='font-sans font-[600] text-4xl'>{days}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
            <div>
                <p className='font-sans font-[600] text-xs'>Hours</p>
                <p className='font-sans font-[600] text-4xl'>{hours}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
            <div>
                <p className='font-sans font-[600] text-xs'>Minutes</p>
                <p className='font-sans font-[600] text-4xl'>{mints}<span className='px-2 text-[#e07575]'>:</span></p>
            </div>
            <div>
                <p className='font-sans font-[600] text-xs'>Seconds</p>
                <p className='font-sans font-[600] text-4xl'>{seconds}</p>
            </div>
            {/* <div>
                <p className='font-sans font-[600] text-xs'>MiliSeconds</p>
                <p className='font-sans font-[600] text-4xl'>{milisec}</p>
            </div> */}
        </div>
        </>
       )
    
       
    }

  return (
    <div className='container mx-auto mt-36'>
      <div className='w-full px-[6%]'>
       <div className='flex items-center gap-4'>
        <img src={top} alt="top" />
        <p className='text-[#db4444] font-sans font-[600]'>Today’s</p>
       </div>
       <div className="flex justify-between items-center">

        <div className="flex items-center gap-24 left-timer-part pt-6">
            <p className='font-[600] text-4xl font-sans'>Flash Sales</p>
            {Timer(time)}
        </div>
        <div className="right-btns flex gap-8">
            <img src={arrow2} className='navigateArrowLeft  w-4 h-4' alt="arrow2" />
            <img src={arrow1} className='navigateArrowRight w-4 h-4' alt="arrow1" />
        </div>
       </div>
      </div>
      <div className='w-full px-[6%]'>
        <SliderSales setWishList={setWishList}/>
      </div>
    </div>
  )
}

export default SalesTimer
