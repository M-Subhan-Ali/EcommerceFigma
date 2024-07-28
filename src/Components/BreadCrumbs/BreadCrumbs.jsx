import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({breadcrumb}) => {
  return (
    <div className="crumbs pt-20">
          <ul className='flex gap-3 text-gray-400'>
            <Link to="/" className='cursor-pointer text-[#808080]'>Home</Link>
            <li className='text-[#808080]'>/</li>
            <li className="text-black font-semibold cursor-pointer">{breadcrumb}</li>
          </ul>
        </div>
  )
}

export default BreadCrumbs
