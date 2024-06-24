import google from '../Signup/image/google.png';
import phone from '../Signup/image/phone.png';
import line from '../Signup/image/line.png';
import linesm from '../Signup/image/linesm.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = ({data,setData,setOpeartion}) => {

   const navigate=useNavigate();

    const Handler=(e)=>{
        const {name,value}=e.target;
        setData((val)=>{ return {...val,[name]:value}})
    }

    const HandleSubmit=(e)=>{
     e.preventDefault();
       setOpeartion((val)=>{return [...val,data]})
       navigate('/login')

     setData({
      name:'',
      email:'',
      password:''
  })
    }
  return (
    <div className='container my-24 2xl:mx-auto'>
      <div className="flex gap-20 items-center ">
        <div className='left-signup '>
         <img src={phone} className='w-auto h-auto' alt="side" />
        </div>
        <div className='right-signup '>
          
            <h1 className='text-[36px] font-sans font-medium '>Create an account</h1>
            <p className='text-[16px] font-medium'>Enter your details below</p>
        <form onSubmit={HandleSubmit}>
            <div className='flex flex-col gap-4 py-6'>
              <div className='relative'>
                 <input name="name" value={data.name} required onChange={Handler}  type="text" className='outline-none p-2 border-none' placeholder='Name' />
                 <img src={line} className='absolute ' alt="line" />
                </div> 
                <div className='relative'>
                <input name="email" value={data.email} required onChange={Handler}  type={"email"||"phone"} className='outline-none p-2 border-none' placeholder='Email or Phone Number' />
                <img src={line} className='absolute ' alt="line" />
                </div>
                <div className='relative'>
                <input name="password" value={data.password} required  onChange={Handler} type="password"className='outline-none p-2 border-none'  placeholder='Password' />
                <img src={line} className='absolute ' alt="line" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
            <div className='bg-[#db4444] text-center py-4 rounded font-sans font-medium'><button type='submit' className='text-white text-[16px]'>Create Account</button></div>
           <div className='flex gap-3 justify-center border border-gray-400 py-4 rounded cursor-pointer'><img src={google} alt="google" /><p className='text-[16px] font-normal'>Sign up with Google</p></div>
           <div className='flex gap-3 justify-center'><p>Already have account?</p> <Link to="/login">Log in <img src={linesm} className='absolute opacity-75' alt="line" /></Link> </div>
            </div>
                </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
