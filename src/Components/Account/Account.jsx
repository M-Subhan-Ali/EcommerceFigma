import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
const Account = ({operation1}) => {
    const [data1,setData1]=useState({
        name:"",
        last:"",
        email:"",
        address:"",
        currentPass:"",
        newPass:"",
        confirmPass:""
    })

    const [storeData,setStoreData]=useState([])

    const onChangeHandler=(e)=>{
        const {name,value}=e.target;
        setData1((val)=>{
            return {...val,[name]:value}
        })
    }

    const HandleSubmit=(e)=>{
      e.preventDefault();
      setStoreData(data1)
      

      if(storeData.currentPass!==operation1.password){
          toast.error("Current Password Does Not Match",{
            position:"top-right",
            theme:"dark"
          })
      }else if(data1.newPass!==data1.confirmPass){
        toast.error("New Password Does not match to Confirm Password!",{
            position:"top-center",
            theme:"dark"
        })
      }else{
        toast.success("Account Updated Successfully",{
            position:"top-center",
            theme:"dark"
        })
        setData1({
            name:"",
            last:"",
            email:"",
            address:"",
            currentPass:"",
            newPass:"",
            confirmPass:""
        })
    }
  
    }
  return (
    <div className='container mx-auto mt-7'>
        <div className="px-[6%]">
            <div>
                <p className='font-medium pb-2'>Welcome! <span className='font-medium pb-2 text-[#db4444]'>{ storeData.name}</span>
               </p></div>
            <div className="flex gap-[15%]">
            <div className='w-[25%] cursor-pointer'>
                <div className='inner-account'>
            <h1 className='text-[16px] font-semibold pb-4 '>Manage My Account</h1>
            <p className=' text-[16px] font-sans pb-4 text-[#db4444] ps-5 cursor-pointer'>My Profile</p>
            <p className=' text-[16px] font-sans pb-4 text-[#808080] ps-5 cursor-pointer'>Address Book</p>
            <p className=' text-[16px] font-sans pb-4 text-[#808080] ps-5 cursor-pointer'>My Payment Options</p>
            <div>
            <h1 className='text-[16px] font-semibold pb-4 '>My Orders</h1>
             <p className=' text-[16px] font-sans pb-4 text-[#808080] ps-5 cursor-pointer'>My Returns</p>
             <p className=' text-[16px] font-sans pb-4 text-[#808080] ps-5 cursor-pointer'>My Cancellations</p>
            </div>
            <div>
            <h1 className='text-[16px] font-semibold pb-4 '>My WishList</h1>
            </div>
                </div>
            </div>
            <div className='w-full'>
                <div className="inneraccount-details px-5 py-5 border border-gray-200 rounded ">
                   <form onSubmit={HandleSubmit}>
                    <h1 className='text-xl font-medium pb-3 text-[#db4444]'>Edit Your Profile</h1>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h1 className='font-medium pb-2'>First Name</h1>
                            <input value={data1.name} onChange={onChangeHandler} name="name" required type="text" className='bg-[#f5f5f5] py-2 px-3 w-full' placeholder='name'/>
                        </div>
                        <div>
                        <h1 className='font-medium pb-2'>Last Name</h1>
                        <input value={data1.last} onChange={onChangeHandler} name="last" required type="text" className='bg-[#f5f5f5] py-2 px-3 w-full' placeholder='Last name' />
                        </div>
                        <div>
                            <h1 className='font-medium pb-2'>Email</h1>
                            <input value={data1.email} onChange={onChangeHandler} name="email" required type="email" className='bg-[#f5f5f5] py-2 px-3 w-full' placeholder='email' />
                        </div>
                        <div>
                        <h1 className='font-medium pb-2'>Address</h1>
                        <input value={data1.address} onChange={onChangeHandler} name="address" required type="text" className='bg-[#f5f5f5] py-2 px-3 w-full' placeholder='address'/>
                        </div>
                    </div>
                    <div className='py-5'>
                    <h1 className='font-medium pb-4'>Password Changes</h1>
                     <div className="grid gap-5">
                        <input value={data1.currentPass} onChange={onChangeHandler} name="currentPass" required type="password" className='py-2 px-3 bg-[#f5f5f5] ' placeholder='Current Passowrd' />
                        <input value={data1.newPass} onChange={onChangeHandler} name="newPass" required type="password" className='py-2 px-3 bg-[#f5f5f5] ' placeholder='New Passowrd' />
                        <input value={data1.confirmPass} onChange={onChangeHandler} name="confirmPass" required type="password" className='py-2 px-3 bg-[#f5f5f5] ' placeholder='Confirm Passowrd' />
                     </div>
                     <div className='flex justify-end py-5'>
                        <button className='py-3 px-7 font-sans font-medium'>Cancel</button>
                        <button className='py-3 px-7 font-sans font-medium bg-[#db4444] rounded text-white'>Save Changes</button>
                     </div>
                    </div>
                   </form>
                </div>
            </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Account
