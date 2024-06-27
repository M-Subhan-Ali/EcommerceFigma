import React from 'react'

const Account = () => {
  return (
    <div className='container mx-auto mt-7'>
        <div className="px-[6%]">
            <div className="flex gap-[15%]">
            <div className=' cursor-pointer'>
                <div className='inner-account'>
            <h1 className='text-[16px] font-semibold pb-2 '>Manage My Account</h1>
            <p className=' text-[16px] font-sans pb-2 text-[#db4444] ps-5 cursor-pointer'>My Profile</p>
            <p className=' text-[16px] font-sans pb-2 text-[#808080] ps-5 cursor-pointer'>Address Book</p>
            <p className=' text-[16px] font-sans pb-2 text-[#808080] ps-5 cursor-pointer'>My Payment Options</p>
            <div>
            <h1 className='text-[16px] font-semibold pb-2 '>My Orders</h1>
             <p className=' text-[16px] font-sans pb-2 text-[#808080] ps-5 cursor-pointer'>My Returns</p>
             <p className=' text-[16px] font-sans pb-2 text-[#808080] ps-5 cursor-pointer'>My Cancellations</p>
            </div>
            <div>
            <h1 className='text-[16px] font-semibold pb-2 '>My WishList</h1>
            </div>
                </div>
            </div>
            <div className='w-full'>
                <div className="inneraccount-details border border-gray-200 ">
                    <h1 className='text-xl font-medium'>Edit Your Profile</h1>
                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className='font-medium pb-2'>Name</h1>
                            <input type="text" className='bg-[#f5f5f5] py-2 px-3' />
                        </div>
                        <div>
                        <h1 className='font-medium pb-2'>Last Name</h1>
                        <input type="text" className='bg-[#f5f5f5] py-2 px-3' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Account
