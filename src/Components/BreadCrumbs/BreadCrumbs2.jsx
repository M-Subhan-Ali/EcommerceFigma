import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs2 = ({breadcrumb}) => {
    const GetLinkRoute=(path)=>{
        switch(path){
            case "Gaming"||"Electronics":
            return '/gameelectronic';
            default:return "/error404"; 
        }
    }
  return (
    <div className="crumbs py-20">
          <ul className='flex gap-3 text-gray-400'>
            <Link to="/account" className='cursor-pointer text-[#808080]'>Account</Link>
            <li className='text-[#808080]'>/</li>
            {breadcrumb.map((value,index)=>{
                return(<React.Fragment key={index}>
                    <Link to={GetLinkRoute(value)} className={`${value==="Havic HV G-92 Gamepad" && "text-black font-semibold" } text-[#808080]  cursor-pointer`}>{value}</Link>
           {index < breadcrumb.length-1 && (<li className='text-[#808080]'>/</li>)
}                </React.Fragment>)
            
        })           
          }

          </ul>
        </div>
  )
}

export default BreadCrumbs2
