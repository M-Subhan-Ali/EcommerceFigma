import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({breadcrumb}) => {
  return (
    <div className="crumbs pt-20">
          <ul className='flex gap-3 text-gray-400'>
            <Link to="/home" className='cursor-pointer'>Home</Link>
            <li>/</li>
            <li className="text-black font-semibold cursor-pointer">{breadcrumb}</li>
          </ul>
        </div>
  )
}

export default BreadCrumbs
