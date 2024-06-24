import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import React from 'react'

const StarsWish = ({starRate}) => {
  const rating=Array.from({length:5},(_,i)=>{
    const number=i+0.4;
    return(
     <div>
      {
        starRate>=i+1? <FaStar className="text-[#ffad33]"/> : starRate>=number ? <FaStarHalfAlt className="text-[#ffad33]"/> : <FaRegStar className="text-[#bfbfbf]"/>
      }
     </div> 
    )
  })
  return (
    <div className="flex gap-1">
      {
        rating
      }
    </div>
  )
}

export default StarsWish
