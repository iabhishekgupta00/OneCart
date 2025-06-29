import React from 'react'
import logo from '../assets/log.png'


function Footer () {
    return (
        <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px]
        md:mb-[0px]'>
            <div className='w-[100%] md:h-[30vh] h-[15vh]
            md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center
            md:px-[50px] px-[5px]'>
                <div className='md:w-[30%] w-[35%] h-[100%]
                flex  justify-center
                flex-col gap-[5px]'>
                    <div className='flex items-start justify-start
                    gap-[5px] mt-[10px] md:mt-[40px] '>
                        <img src={logo} alt=""  className='md:w-[40px]
                        md:h-[40px] w-[30px] h-[30px]'/>
                        <p className='text-[19px] md:text-[20px]
                        text-black'>OneCart</p>
                        
                    </div>
                    <p className='text-[15px] text-[#1e2223]
                        hidden md:block'>OneCart Lorem ipsum 
                        dolor sit amet consectetur
                         adipisicing elit. 
                         Laboriosam, adipisci.</p>
                    <p className='text-[15px] text-[#1e2223]
                        flex md:hidden'>Fast easy reliable delivery 
                        Trusted Quality Poducts </p>

                  
                </div>
                  <div className='md:w-[25%] w-[30%] h-[100%]
                    flex items-center justify-center flex-col text-center'>
                        <div className='flex items-center justify-center
                        gap-[5px] mt-[10px] md:mt-[40px] '>
                            <p className='text-[19px] md:text-[20px]
                            text-[#1e2223] font-sans'>COMPANY</p>
                        </div>
                        <ul>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer hidden md:block'>
                                Home
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer'>
                                About Us
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer md:block hidden'>
                                Delivery
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer'>
                                Privacy Policy 
                            </li>
                        </ul>
                    </div>

                    <div className='md:w-[25%] w-[30%] h-[100%]
                    flex items-center justify-center flex-col
                    text-center'>
                        <div className='flex items-center justify-center
                        gap-[5px] mt-[10px] md:mt-[40px] '>
                            <p className='text-[19px] md:text-[20px]
                            text-[#1e2223] font-sans'>For Support</p>
                        </div>
                        <ul>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer hidden md:block'>
                                +91 9319842040`
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer'>
                                contact@onecart.com
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer md:block hidden'>
                                +123-355-32423
                            </li>
                            <li className='text-[15px] text-[#1e2223] cursor-pointer'>
                                admin123@onecart.com 
                            </li>
                        </ul>
                    </div>


            </div>

            <div className='w-[100%] h-[1%] bg-slate-400'></div>
            <div className='w-[100%] h-[5vh] bg-[#dbfcfcec]
            flex items-center justify-center'>
                Copyright @2025onecart
                All Rights are Reserved
            </div>

        </div>
    )
}

export default Footer