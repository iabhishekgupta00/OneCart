import React, { useContext } from 'react'
import Logo from "../assets/log.png"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.jpg'
import { FaRegEye } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
import { useState } from 'react';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth , provider } from '../../utils/Firebase';
import { UserDataContext } from '../context/UserContext.jsx';
import { toast } from 'react-toastify';
function Login() {
    let [show , setshow] = useState(false)
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let {serverUrl} = useContext(authDataContext)
    let {getCurrentUser} = useContext(UserDataContext)
    

       let navigate = useNavigate()

       const handleLogin = async (e) => {
        e.preventDefault()
        console.log('Login attempt initiated for email:', email);
        try {
            console.log('Sending login request to:', serverUrl + '/api/auth/login');
            let result = await axios.post(serverUrl + '/api/auth/login',{
                email,password
            },{withCredentials:true})
            
            console.log('Login response received:', {
                status: result.status,
                hasToken: !!result.data?.token,
                userData: result.data?.user ? 'Present' : 'Missing'
            });

            // Save token to localStorage before anything else
            if (result.data && result.data.token) {
                localStorage.setItem("token", result.data.token);
                console.log('Token successfully stored in localStorage');
            } else {
                console.warn('No token received in login response');
            }
            toast.success("Login SuccessFully")
            console.log('Fetching current user data...');
            await getCurrentUser()
            console.log('Navigation to home page...');
            navigate("/")
            
        } catch (error) {
            console.error('Login Error:', {
                message: error.message,
                status: error.response?.status,
                statusText: error.response?.statusText,
                responseData: error.response?.data,
                requestURL: error.config?.url,
                requestData: error.config?.data
            });
            toast.error(`Login Failed: ${error.response?.data?.message || error.message}`)
        }

        
       }
       const googleLogin = async () => {
        try {
            console.log('Initiating Google login popup...');
            const response = await signInWithPopup(auth , provider)
            let user = response.user
            console.log('Google authentication successful:', {
                hasDisplayName: !!user.displayName,
                hasEmail: !!user.email,
                isEmailVerified: user.emailVerified
            });

            let name = user.displayName;
            let email = user.email

            console.log('Sending Google login data to backend:', {
                endpoint: serverUrl + "/api/auth/googleLogin",
                userData: { name, email }
            });

            const result = await axios.post(serverUrl + "/api/auth/googleLogin" ,{
                name, email
            },{withCredentials:true})
            
            console.log('Backend Google login response:', {
                status: result.status,
                hasToken: !!result.data?.token,
                userData: result.data?.user ? 'Present' : 'Missing'
            });

            // Save token to localStorage before anything else
            if (result.data && result.data.token) {
                localStorage.setItem("token", result.data.token);
                console.log('Google login token stored in localStorage');
            } else {
                console.warn('No token received from Google login response');
            }

            toast.success("Google Login SuccessFully")
            console.log('Fetching current user data after Google login...');
            await getCurrentUser()
            console.log('Navigating to home page after Google login...');
            navigate("/")
        } catch (error) {
            console.error('Google Login Error:', {
                message: error.message,
                isFirebaseError: error.code ? true : false,
                firebaseErrorCode: error.code,
                status: error.response?.status,
                responseData: error.response?.data,
                stack: error.stack
            });
            
            const errorMessage = error.code 
                ? `Google Login Failed: ${error.code}` 
                : `Google Login Failed: ${error.response?.data?.message || error.message}`;
            toast.error(errorMessage);
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
                <span className='text-[25px] font-semibold'>👨🏻‍💼 Login Page</span>
                <span className='text-[20px]'>  Welcome To OneCart </span>
            </div>
            <div className='max-w-[500px] w-[100%] h-[500px] bg-[#00000025] border-[1px] 
            border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg 
            flex items-center justify-center'>
                <form action="" onSubmit={handleLogin} className='w-[90%] h-[90%] flex flex-col items-center
                justify-start gap-[20px]'>
                    <div className='w-[80%] h-[50px] bg-[#42656cae] rounded-lg flex items-center
                    justify-center gap-[10px] py-[20px] cursor-pointer'onClick={googleLogin}>
                        <img src={google} alt="" className='w-[20px]' /> Registor With Google
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
                        placeholder='  Email' required onChange={(e) => setEmail(e.target.value)} 
                        value={email} />

                        <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px]
                        border-[#96969635] backdrop:blur-sm rounded-lg 
                        shadow-lg bg-transparent placeholder:[#ffffffc7] px-20px font-semibold'
                        placeholder='  Password' required onChange={(e) =>setPassword(e.target.value)} 
                        value={password} />
                        {!show && <FaRegEye className='w-[30px] h-[20px] cursor-pointer absolute
                         mt-[25px] right-[5%] bottom-[54%]' onClick={()=>setshow(prev => !prev)} />}
                        {show && <IoIosEye className='w-[50px] h-[30px] cursor-pointer 
                        absolute mt-[25px] right-[4%] bottom-[54%]' onClick={()=>setshow(prev => !prev)}  />}

                        <button className='w-[100%] h-[38px] bg-[#6060f5] rounded-lg flex
                        items-center justify-center mt-[17px] text-[20px] font-semibold '>Log in</button>

                        <p className='flex gap-[10px]'>Have no Account? <span className='
                        text-[blue] text-[17px] font-semibold cursor-pointer
                        ' onClick={()=>navigate("/signup")} > Create New Account</span></p>
                    </div>
                </form>
            </div>

        </div>
    )

}
export default Login
