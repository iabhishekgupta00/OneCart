import React, { useContext } from 'react'
import Logo from "../assets/log.png"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.jpg'
import { FaRegEye } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { useState } from 'react';
import { authDataContext } from '../context/authContext';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth , provider } from '../../utils/Firebase';
import { UserDataContext } from '../context/UserContext';
function Registration() {

    let [show , setshow] = useState(false)
    let {serverUrl} = useContext(authDataContext)

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let {userdata , getCurrentUser} = useContext(UserDataContext)

       let navigate = useNavigate()

       const handleSignup = async(e) => {
        e.preventDefault()
        try {
            const result = await axios.post(serverUrl + '/api/auth/registration',{
                name,email,password
            },{withCredentials:true})
            getCurrentUser()
            navigate("/")
            console.log(result.data)
            
        } catch (error) {
            console.log(error)
            
        }
       }

       const googleSignup = async () => {
        try {
            const response = await signInWithPopup(auth , provider)
            let user = response.user
            let name = user.displayName;
            let email = user.email

            const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{
                name, email
            },{withCredentials:true})
            console.log(result.data)
            getCurrentUser()
            navigate("/")
        } catch (error) {
            console.log(error)
            
        }
       }
    return (
        <div className='w-[100vw] h-[400vh] bg-gradient-to-l from-[#141414] 
        to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
            
            <div className="w-[85%] h-[90px] flex items-center justify-start
             px-[30]px gap-[10px] cursor-pointer" onClick={()=>navigate("/")}>
                <img className='w-[55px]' src={Logo} alt="" />
                <h1 className='text-[28px] font-sans'>OneCart</h1>
             </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center 
            flex-col gap-[10px]'>
                <span className='text-[25px] font-semibold'>📝 Registration Form</span>
                <span className='text-[20px]'>Welcome To OneCart Complete Your Registration</span>
            </div>
            <div className='max-w-[500px] w-[100%] h-[500px] bg-[#00000025] border-[1px] 
            border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg 
            flex items-center justify-center'>
                <form action="" onSubmit={handleSignup} className='w-[90%] h-[90%] flex flex-col items-center
                justify-start gap-[20px]'>
                    <div className='w-[80%] h-[50px] bg-[#42656cae] rounded-lg flex items-center
                    justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
                        <img src={google} alt="" className='w-[20px]' /> Registration With Google
                    </div>
                    <div className='w-[100%] h-[20px] flex items-center 
                    justify-center gap-[10px]'>
                        <div className='w-[40%] h-[1px] bg-[#96969635]'></div> & <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                    </div>
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center
                    gap-[15px] relative'>
                        <input type="text" className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Username' required onChange={(e) => setName(e.target.value)} 
                        value={name}/>

                        <input type="text" className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Email' required onChange={(e) => setEmail(e.target.value)} 
                        value={email} />

                        <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Password' required onChange={(e) => setPassword(e.target.value)} 
                        value={password} />
                        {!show && <FaRegEye className='w-[30px] h-[20px] cursor-pointer absolute
                         mt-[17px] right-[5%]' onClick={()=>setshow(prev => !prev)} />}
                        {show && <IoIosEye className='w-[50px] h-[30px] cursor-pointer 
                        absolute mt-[17px] right-[1%]' onClick={()=>setshow(prev => !prev)}  />}

                        <button className='w-[100%] h-[38px] bg-[#6060f5] rounded-lg flex
                        items-center justify-center mt-[17px] text-[20px] font-semibold '>Create an Account</button>

                        <p className='flex gap-[10px]'>Already have Account? <span className='
                        text-[blue] text-[17px] font-semibold cursor-pointer
                        ' onClick={()=>navigate("/login")} >Log in</span></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Registration