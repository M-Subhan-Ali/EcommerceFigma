import React from 'react'

const Error = () => {
  return (
    <div className='container mx-auto py-20'>
        <div className="px-[6%]">
        <div className="content flex flex-col gap-20 items-center">
            <div className='text-center '>
            <h1 className='text-8xl font-semibold'>404 Not Found</h1>
            <p className='text-[16px] pt-10 font-medium'>Your visited page not found. You may go home page.</p>
            </div>
            <div className='w-64 flex justify-center py-3 px-5 bg-[#db4444] rounded'>
                <button className='text-[16px] text-white'>
                Back to home page
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Error
