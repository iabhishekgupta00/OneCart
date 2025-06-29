import React, { useContext, useState } from 'react'
import Logo from "../assets/log.png"
import { FaRegEye } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext.jsx';
import { adminDataContext } from '../context/AdminContext.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
    let [show , setshow] = useState(false)
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let {serverUrl} = useContext(authDataContext)
    let {adminData, getAdminData} = useContext(adminDataContext)
    let navigate = useNavigate()

    const AdminLogin = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post(serverUrl +  '/api/auth/adminlogin', {
                email,password
            },{withCredentials: true})
            console.log(result.data)
            getAdminData()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className='w-[100vw] h-[400vh] bg-gradient-to-l from-[#141414] 
        to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
            
            <div className="w-[85%] h-[90px] flex items-center justify-start
             px-[30]px gap-[10px] cursor-pointer" >
                <img className='w-[55px]' src={Logo} alt="" />
                <h1 className='text-[28px] font-sans'>OneCart</h1>
             </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center 
            flex-col gap-[10px]'>
                <span className='text-[25px] font-semibold'>👨🏻‍💼 Login Page</span>
                <span className='text-[20px]'>  Welcome To OneCart </span>
            </div>
            <div className='max-w-[500px] w-[100%] h-[500px] bg-[#00000025] border-[1px] 
            border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg 
            flex items-center justify-center'>
                <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center
                justify-start gap-[20px]'>
                    
    
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center
                    gap-[15px] relative'>
                        

                        <input type="text" className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Email' required onChange={(e) => setEmail(e.target.value)} 
                        value={email} />

                        <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Password' required onChange={(e) =>setPassword(e.target.value)} 
                        value={password} />
                        {!show && <FaRegEye className='w-[30px] h-[20px] cursor-pointer absolute
                         mt-[25px] right-[3%] bottom-[49%]' onClick={()=>setshow(prev => !prev)} />}
                        {show && <IoIosEye className='w-[50px] h-[30px] cursor-pointer 
                        absolute mt-[25px] right-[2%] bottom-[48%]' onClick={()=>setshow(prev => !prev)}  />}

                        <button className='w-[100%] h-[38px] bg-[#6060f5] rounded-lg flex
                        items-center justify-center mt-[17px] text-[20px] font-semibold '>Log in</button>

                       
                    </div>
                </form>
            </div>

        </div>
    )

}
export default Login