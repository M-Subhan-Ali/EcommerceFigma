import phone from '../Signup/image/phone.png';
import line from '../Signup/image/line.png';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = ({data1,setData1,operation,setOpeartion1}) => {
  const navigate=useNavigate();
    
    const Handler=(e)=>{
        const {name,value}=e.target;
        setData1((val)=>{return {...val,[name]:value}})
    }

    const HandleSubmit=(e)=>{
      e.preventDefault();
      const match=operation.filter((x)=>x.email===data1.Email && x.password===data1.Password)
     if(match.length>0){
       setOpeartion1((val)=>{return [...val,match[0]]})
       toast.success("Successfully Login",{
        position:"top-center",
        onClose:()=>{
          navigate('/')
        },
        theme:"dark"
       })
    }else{
     toast.error("Unsuccessful",{
      position:"top-center",
      theme:"dark"
     })
     }
     setData1({
      Email:"",
      Password:""
    })
      // if(data1.Email !== operation.email && data1.Password !== operation.password ){return alert("User not Found Try Again")}
      // else{
      //   alert("Login Succesfully")
      // }
    }

   
  return (
    <div className='container my-24 2xl:mx-auto'>
    <div className="flex gap-20 items-center ">
      <div className='left-signup '>
       <img src={phone} className='w-auto h-auto' alt="side" />
      </div>
      <div className='right-signup '>
        <form onSubmit={HandleSubmit}>
          <h1 className='text-[36px] font-sans font-medium '>Log in to Exclusive</h1>
          <p className='text-[16px] pt-2 font-medium'>Enter your details below</p>
          <div className='flex flex-col gap-4 py-6'> 
              <div className='relative'>
              <input name="Email" onChange={Handler} value={data1.Email}  required type="text" className='outline-none p-2 border-none' placeholder='Email or Phone Number' />
              <img src={line} className='absolute ' alt="line" />
              </div>
              <div className='relative'>
              <input name="Password" onChange={Handler} value={data1.Password} required  type="password"className='outline-none p-2 border-none'  placeholder='Password' />
              <img src={line} className='absolute ' alt="line" />
              </div>
          </div>
          <div className="flex justify-between items-center gap-4 pt-3">
          <div className='bg-[#db4444] text-center py-4 px-12 rounded font-sans font-medium'><button type='submit'  className='text-white text-[16px]'>Log In</button></div>
          <div><button className='text-[#db4444]'>Forget Password?</button></div>
        </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
  </div>
  )
}

export default Login
