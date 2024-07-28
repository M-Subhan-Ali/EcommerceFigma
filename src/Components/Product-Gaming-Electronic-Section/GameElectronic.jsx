import React from 'react'
import pinkBox from '../ProductDetailPage/Images/pinkBox.png';
import {DataSelling} from '../BestSellingProducts/SellingData';
import { FlashSaleData } from '../SalesTimer/SalesData';
import { ExploreData } from '../ExploreOurProduct/ExploreProductData';
const  GameElectronic= () => {
  const datas=[DataSelling,FlashSaleData,ExploreData]
  const dataelectronic=DataSelling.filter(item=>item.categoryItem==="electronic")
  return (
    <div className='container'>
      <div className="px-[6%]">
      <div className='flex items-center gap-4 py-20'>
            <img src={pinkBox} className='w-5 h-10' alt="pinkBox" />
            <p className='text-[16px] text-[#db4444] font-sans font-[600]'>Item</p>
        </div>

            <div className="grid grid-cols-1 gap-5">
              
            {dataelectronic.map((value,i)=>{
              return(<React.Fragment key={i}>
                <div className='grid '> 
                  <div className="shadow-lg hover:shadow-2xl hover:bg-slate-300 mx-auto p-10 cursor-pointer">
                  <img src={value.img} alt={value.title} className='object-contain ' />
                  <p className='text-[16px] font-sans font-[600] leading-8'>Title</p>
                  <p className='text-[16px] font-medium font-sans'>{value.title}</p>
                  <p className='text-[16px] font-sans font-[600] leading-8'>Price</p>
                  <p>{value.currentPrice}$</p>
                    </div>                 
                </div>
              </React.Fragment>)
            })}
            </div>
      </div>
    </div>
  )
}

export default GameElectronic
